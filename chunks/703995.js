n.d(t, { Z: () => L }), n(388685);
var r,
    i = n(275726),
    a = n(442837),
    o = n(570140),
    s = n(709054),
    l = n(80721),
    c = n(282793),
    u = n(981631);
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
function f(e) {
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
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = new Map(),
    m = !1,
    g = !1;
function E() {
    (h = new Map()), (m = !1), (g = !1);
}
function b() {
    g = !0;
}
function y(e) {
    let { invites: t } = e;
    for (let e of ((g = !1), (m = !0), t))
        h.set(e.id, {
            state: S(e),
            invite: e,
            errorStatus: null,
        });
}
function O() {
    g = !1;
}
function v(e) {
    let { subscriptionGroupMemberId: t } = e;
    h.set(t, {
        state: c.bZ.FETCHING,
        invite: null,
        errorStatus: null,
    });
}
function S(e) {
    return null != e.removed_at ? c.bZ.REMOVED : null != e.accepted_at ? c.bZ.ACCEPTED : c.bZ.PENDING;
}
function I(e) {
    let { subscriptionGroupMemberId: t, invite: n } = e;
    h.set(t, {
        state: S(n),
        invite: n,
        errorStatus: null,
    });
}
function T(e) {
    let { subscriptionGroupMemberId: t, status: n } = e,
        r = 404 === n ? c.bZ.NOT_FOUND : c.bZ.ERROR;
    h.set(t, {
        state: r,
        invite: null,
        errorStatus: n,
    });
}
function C(e) {
    let { subscriptionGroupMemberId: t } = e,
        n = h.get(t);
    if ((null == n ? void 0 : n.invite) == null) return !1;
    h.set(t, {
        state: c.bZ.ACCEPTED,
        invite: _(f({}, n.invite), { accepted_at: new Date().toISOString() }),
        errorStatus: null,
    });
}
function A(e) {
    let { subscriptionGroupMemberId: t } = e,
        n = h.get(t);
    if ((null == n ? void 0 : n.invite) == null) return !1;
    h.set(t, {
        state: c.bZ.PENDING,
        invite: _(f({}, n.invite), { accepted_at: null }),
        errorStatus: null,
    });
}
function N(e) {
    let { subscriptionGroupMemberId: t } = e;
    if (null == t) return !1;
    let n = h.get(t);
    if ((null == n ? void 0 : n.invite) == null) return !1;
    h.set(t, {
        state: c.bZ.REMOVED,
        invite: _(f({}, n.invite), { removed_at: new Date().toISOString() }),
        errorStatus: null,
    });
}
function P(e) {
    let { subscriptionGroupMemberId: t, errorCode: n } = e;
    if (null == t) return !1;
    let r = h.get(t);
    return (
        (null == r ? void 0 : r.invite) != null &&
        (n === c.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
            ? (h.set(t, {
                  state: c.bZ.ACCEPTED,
                  invite: _(f({}, r.invite), { accepted_at: new Date().toISOString() }),
                  errorStatus: null,
              }),
              !0)
            : void h.set(t, {
                  state: c.bZ.PENDING,
                  invite: _(f({}, r.invite), { removed_at: null }),
                  errorStatus: null,
              }))
    );
}
function w(e) {
    let { message: t } = e;
    return D(t);
}
function R(e) {
    let { messages: t } = e;
    return t.map((e) => D(e)).some(Boolean);
}
function D(e) {
    if (e.type !== i.u.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) return !1;
    let n = h.get(t);
    return (
        (null == n || n.state === c.bZ.UNKNOWN) &&
        (h.set(t, {
            state: c.bZ.FETCHING,
            invite: null,
            errorStatus: null,
        }),
        o.Z.wait(() => (0, l.hH)(t).catch(u.VqG)),
        !0)
    );
}
class x extends (r = a.ZP.Store) {
    getInvite(e) {
        var t;
        return null != (t = h.get(e)) ? t : null;
    }
    getInviteByUserId(e) {
        var t;
        return null !=
            (t = Array.from(h.values()).find((t) => {
                var n;
                return (null == (n = t.invite) ? void 0 : n.user_id) === e;
            }))
            ? t
            : null;
    }
    getInviteState(e) {
        var t, n;
        return null != (n = null == (t = h.get(e)) ? void 0 : t.state) ? n : c.bZ.UNKNOWN;
    }
    shouldFetch(e) {
        let t = h.get(e);
        return null == t || t.state === c.bZ.UNKNOWN;
    }
    isFetching(e) {
        var t;
        return (null == (t = h.get(e)) ? void 0 : t.state) === c.bZ.FETCHING;
    }
    hasFetchedAllInvites() {
        return m;
    }
    isFetchingAllInvites() {
        return g;
    }
}
d(x, "displayName", "PremiumGroupInviteStore");
let L = new x(o.Z, {
    PREMIUM_GROUP_INVITES_FETCH_START: b,
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: y,
    PREMIUM_GROUP_INVITES_FETCH_FAIL: O,
    PREMIUM_GROUP_INVITE_FETCH_START: v,
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: I,
    PREMIUM_GROUP_INVITE_FETCH_FAIL: T,
    PREMIUM_GROUP_ACCEPT_INVITE_START: C,
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: A,
    PREMIUM_GROUP_REMOVE_INVITE_START: N,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: P,
    MESSAGE_CREATE: w,
    LOCAL_MESSAGES_LOADED: R,
    LOAD_MESSAGES_SUCCESS: R,
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOGOUT: E,
});
