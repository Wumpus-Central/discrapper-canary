n.d(t, {
    A: () => v,
}),
    n(896048);
var r,
    i = n(448761),
    l = n(311907),
    a = n(73153),
    s = n(661191),
    o = n(677185),
    c = n(88001),
    u = n(652215);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new Map(),
    g = !1,
    _ = !1;

function h(e) {
    return null != e.removed_at ? c.xI.REMOVED : null != e.accepted_at ? c.xI.ACCEPTED : c.xI.PENDING;
}

function b(e) {
    let { messages: t } = e;
    return t.map((e) => A(e)).some(Boolean);
}

function A(e) {
    if (e.type !== i.l.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) return !1;
    let n = f.get(t);
    return (
        (null == n || n.state === c.xI.UNKNOWN) &&
        (f.set(t, {
            state: c.xI.FETCHING,
            invite: null,
            errorStatus: null,
        }),
        a.h.wait(() => (0, o.el)(t).catch(u.FXj)),
        !0)
    );
}
class y extends (r = l.Ay.Store) {
    getInvite(e) {
        var t;
        return null != (t = f.get(e)) ? t : null;
    }
    getInviteByUserId(e) {
        var t;
        return null !=
            (t = Array.from(f.values()).find((t) => {
                var n;
                return (null == (n = t.invite) ? void 0 : n.user_id) === e;
            }))
            ? t
            : null;
    }
    getInviteState(e) {
        var t, n;
        return null != (t = null == (n = f.get(e)) ? void 0 : n.state) ? t : c.xI.UNKNOWN;
    }
    shouldFetch(e) {
        let t = f.get(e);
        return null == t || t.state === c.xI.UNKNOWN;
    }
    isFetching(e) {
        var t;
        return (null == (t = f.get(e)) ? void 0 : t.state) === c.xI.FETCHING;
    }
    hasFetchedAllInvites() {
        return g;
    }
    isFetchingAllInvites() {
        return _;
    }
}
d(y, "displayName", "PremiumGroupInviteStore");
let v = new y(a.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function () {
        _ = !0;
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function (e) {
        let { invites: t } = e;
        for (let e of ((_ = !1), (g = !0), t))
            f.set(e.id, {
                state: h(e),
                invite: e,
                errorStatus: null,
            });
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function () {
        _ = !1;
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        f.set(t, {
            state: c.xI.FETCHING,
            invite: null,
            errorStatus: null,
        });
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t, invite: n } = e;
        f.set(t, {
            state: h(n),
            invite: n,
            errorStatus: null,
        });
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function (e) {
        let { subscriptionGroupMemberId: t, status: n } = e,
            r = 404 === n ? c.xI.NOT_FOUND : c.xI.ERROR;
        f.set(t, {
            state: r,
            invite: null,
            errorStatus: n,
        });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = f.get(t);
        if ((null == n ? void 0 : n.invite) == null) return !1;
        let r = new Date().toISOString();
        f.set(t, {
            state: c.xI.ACCEPTED,
            invite: m(p({}, n.invite), {
                accepted_at: r,
            }),
            errorStatus: null,
        });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = f.get(t);
        if ((null == n ? void 0 : n.invite) == null) return !1;
        let r = n.invite.subscription,
            i = new Date().toISOString();
        for (let [e, n] of f) {
            var l;
            e !== t &&
                (null == (l = n.invite) ? void 0 : l.subscription) === r &&
                f.set(e, {
                    state: c.xI.REMOVED,
                    invite: m(p({}, n.invite), {
                        removed_at: i,
                    }),
                    errorStatus: null,
                });
        }
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = f.get(t);
        if ((null == n ? void 0 : n.invite) == null) return !1;
        f.set(t, {
            state: c.xI.PENDING,
            invite: m(p({}, n.invite), {
                accepted_at: null,
            }),
            errorStatus: null,
        });
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        if (null == t) return !1;
        let n = f.get(t);
        if ((null == n ? void 0 : n.invite) == null) return !1;
        let r = new Date().toISOString();
        f.set(t, {
            state: c.xI.REMOVED,
            invite: m(p({}, n.invite), {
                removed_at: r,
            }),
            errorStatus: null,
        });
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function (e) {
        let { subscriptionId: t } = e,
            n = new Date().toISOString();
        for (let [e, i] of f) {
            var r;
            (null == (r = i.invite) ? void 0 : r.subscription) === t &&
                f.set(e, {
                    state: c.xI.REMOVED,
                    invite: m(p({}, i.invite), {
                        removed_at: n,
                    }),
                    errorStatus: null,
                });
        }
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { subscriptionGroupMemberId: t, errorCode: n } = e;
        if (null == t) return !1;
        let r = f.get(t);
        return (
            (null == r ? void 0 : r.invite) != null &&
            (n === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                ? (f.set(t, {
                      state: c.xI.ACCEPTED,
                      invite: m(p({}, r.invite), {
                          accepted_at: new Date().toISOString(),
                      }),
                      errorStatus: null,
                  }),
                  !0)
                : void f.set(t, {
                      state: c.xI.PENDING,
                      invite: m(p({}, r.invite), {
                          removed_at: null,
                      }),
                      errorStatus: null,
                  }))
        );
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return A(t);
    },
    LOCAL_MESSAGES_LOADED: b,
    LOAD_MESSAGES_SUCCESS: b,
    LOAD_MESSAGES_AROUND_SUCCESS: b,
    LOGOUT: function () {
        (f = new Map()), (g = !1), (_ = !1);
    },
});
