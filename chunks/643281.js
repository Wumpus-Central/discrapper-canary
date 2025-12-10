n.d(t, { Z: () => S });
var r,
    i = n(442837),
    a = n(570140),
    o = n(78839),
    s = n(80721),
    l = n(981631);
function c(e, t, n) {
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
let u = {
    membersData: {
        data: null,
        isFetching: !1,
    },
    membershipData: {
        data: null,
        isFetching: !1,
        hasFetched: !1,
    },
};
function d() {
    u.membersData.isFetching = !0;
}
function f(e) {
    let { members: t } = e;
    (u.membersData.data = t), (u.membersData.isFetching = !1);
}
function p() {
    u.membersData.isFetching = !1;
}
function _() {
    u.membershipData.isFetching = !0;
}
function m(e) {
    let { membership: t } = e;
    (u.membershipData.data = t), (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function h() {
    (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function g() {
    (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function E() {
    return (
        !u.membershipData.isFetching && !u.membershipData.hasFetched && (a.Z.wait(() => (0, s.WH)().catch(l.VqG)), !0)
    );
}
function b() {
    var e, t, n;
    let r = null == (e = o.Z.getPremiumGroupSubscription()) ? void 0 : e.id;
    return null != r ? r : null != (n = null == (t = u.membershipData.data) ? void 0 : t.subscriptionId) ? n : null;
}
function y(e) {
    let { subscriptionId: t } = e;
    return null != t && !u.membersData.isFetching && (a.Z.wait(() => (0, s.i1)(t).catch(l.VqG)), !0);
}
function O() {
    u = {
        membersData: {
            data: null,
            isFetching: !1,
        },
        membershipData: {
            data: null,
            isFetching: !1,
            hasFetched: !1,
        },
    };
}
class v extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getMembers() {
        return u.membersData.data;
    }
    isFetchingMembers() {
        return u.membersData.isFetching;
    }
    hasFetchedMembers() {
        return null !== u.membersData.data;
    }
    getMembership() {
        return u.membershipData.data;
    }
    isFetchingMembership() {
        return u.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return u.membershipData.hasFetched;
    }
    getPremiumGroupSubscriptionId() {
        return b();
    }
}
c(v, "displayName", "PremiumGroupStore");
let S = new v(a.Z, {
    PREMIUM_GROUP_MEMBERS_REQUEST: y,
    PREMIUM_GROUP_MEMBERS_FETCH_START: d,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: f,
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: p,
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: E,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: _,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: m,
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: h,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: g,
    LOGOUT: O,
});
