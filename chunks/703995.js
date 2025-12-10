n.d(t, { Z: () => A }), n(388685);
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
let f = new Map(),
    p = !1,
    _ = !1;
function m() {
    (f = new Map()), (p = !1), (_ = !1);
}
function h() {
    _ = !0;
}
function g(e) {
    let { invites: t } = e;
    for (let e of ((_ = !1), (p = !0), t))
        f.set(e.id, {
            state: y(e),
            invite: e,
            errorStatus: null,
        });
}
function E() {
    _ = !1;
}
function b(e) {
    let { inviteId: t } = e;
    f.set(t, {
        state: c.bZ.FETCHING,
        invite: null,
        errorStatus: null,
    });
}
function y(e) {
    return null != e.removed_at ? c.bZ.REMOVED : null != e.accepted_at ? c.bZ.ACCEPTED : c.bZ.PENDING;
}
function O(e) {
    let { inviteId: t, invite: n } = e;
    f.set(t, {
        state: y(n),
        invite: n,
        errorStatus: null,
    });
}
function v(e) {
    let { inviteId: t, status: n } = e,
        r = 404 === n ? c.bZ.NOT_FOUND : c.bZ.ERROR;
    f.set(t, {
        state: r,
        invite: null,
        errorStatus: n,
    });
}
function S(e) {
    let { message: t } = e;
    return T(t);
}
function I(e) {
    let { messages: t } = e;
    return t.map((e) => T(e)).some(Boolean);
}
function T(e) {
    if (e.type !== i.u.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) return !1;
    let n = f.get(t);
    return (
        (null == n || n.state === c.bZ.UNKNOWN) &&
        (f.set(t, {
            state: c.bZ.FETCHING,
            invite: null,
            errorStatus: null,
        }),
        o.Z.wait(() => (0, l.hH)(t).catch(u.VqG)),
        !0)
    );
}
class C extends (r = a.ZP.Store) {
    getInvite(e) {
        var t;
        return null != (t = f.get(e)) ? t : null;
    }
    getInviteState(e) {
        var t, n;
        return null != (n = null == (t = f.get(e)) ? void 0 : t.state) ? n : c.bZ.UNKNOWN;
    }
    shouldFetch(e) {
        let t = f.get(e);
        return null == t || t.state === c.bZ.UNKNOWN;
    }
    isFetching(e) {
        var t;
        return (null == (t = f.get(e)) ? void 0 : t.state) === c.bZ.FETCHING;
    }
    hasFetchedAllInvites() {
        return p;
    }
    isFetchingAllInvites() {
        return _;
    }
}
d(C, "displayName", "PremiumGroupInviteStore");
let A = new C(o.Z, {
    PREMIUM_GROUP_INVITES_FETCH_START: h,
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: g,
    PREMIUM_GROUP_INVITES_FETCH_FAIL: E,
    PREMIUM_GROUP_INVITE_FETCH_START: b,
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: O,
    PREMIUM_GROUP_INVITE_FETCH_FAIL: v,
    MESSAGE_CREATE: S,
    LOCAL_MESSAGES_LOADED: I,
    LOAD_MESSAGES_SUCCESS: I,
    LOAD_MESSAGES_AROUND_SUCCESS: I,
    LOGOUT: m,
});
