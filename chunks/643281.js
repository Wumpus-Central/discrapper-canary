n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(570140),
    o = n(78839);
function s(e, t, n) {
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
let l = {
    premiumGroupMembers: null,
    isFetchingMembers: !1,
    premiumGroupMembership: null,
    isFetchingMembership: !1,
    _hasFetchedMembership: !1,
};
function c() {
    l.isFetchingMembers = !0;
}
function u(e) {
    let { members: t } = e;
    (l.premiumGroupMembers = t), (l.isFetchingMembers = !1);
}
function d() {
    l.isFetchingMembers = !1;
}
function f() {
    l.isFetchingMembership = !0;
}
function p(e) {
    let { membership: t } = e;
    (l.premiumGroupMembership = t), (l.isFetchingMembership = !1), (l._hasFetchedMembership = !0);
}
function _() {
    (l.isFetchingMembership = !1), (l._hasFetchedMembership = !0);
}
function m() {
    (l.isFetchingMembership = !1), (l._hasFetchedMembership = !0);
}
function h() {
    l = {
        premiumGroupMembers: null,
        isFetchingMembers: !1,
        premiumGroupMembership: null,
        isFetchingMembership: !1,
        _hasFetchedMembership: !1,
    };
}
class g extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getMembers() {
        return l.premiumGroupMembers;
    }
    isFetchingMembers() {
        return l.isFetchingMembers;
    }
    hasFetchedMembers() {
        return null !== l.premiumGroupMembers;
    }
    getMembership() {
        return l.premiumGroupMembership;
    }
    isFetchingMembership() {
        return l.isFetchingMembership;
    }
    hasFetchedMembership() {
        return l._hasFetchedMembership;
    }
    getSubscriptionId() {
        var e, t, n;
        let r = null == (e = o.Z.getPremiumGroupSubscription()) ? void 0 : e.id;
        return null != r
            ? r
            : null != (n = null == (t = l.premiumGroupMembership) ? void 0 : t.subscriptionId)
              ? n
              : null;
    }
}
s(g, "displayName", "PremiumGroupStore");
let E = new g(a.Z, {
    PREMIUM_GROUP_MEMBERS_FETCH: c,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: u,
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: d,
    PREMIUM_GROUP_MEMBERSHIP_FETCH: f,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: p,
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: _,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: m,
    LOGOUT: h,
});
