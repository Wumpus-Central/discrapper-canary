n.d(t, { Z: () => C });
var r,
    i = n(442837),
    a = n(570140),
    o = n(78839),
    s = n(80721),
    l = n(282793),
    c = n(981631);
function u(e, t, n) {
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
let d = {
    membersData: {
        data: null,
        isFetching: !1,
        isUpdating: !1,
    },
    membershipData: {
        data: null,
        isFetching: !1,
        hasFetched: !1,
    },
};
function f() {
    d.membersData.isFetching = !0;
}
function p(e) {
    let { members: t } = e;
    (d.membersData.data = t), (d.membersData.isFetching = !1);
}
function _() {
    d.membersData.isFetching = !1;
}
function m() {
    d.membershipData.isFetching = !0;
}
function h(e) {
    let { membership: t } = e;
    (d.membershipData.data = t), (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}
function g() {
    (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}
function E() {
    (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}
function b() {
    return (
        !d.membershipData.isFetching && !d.membershipData.hasFetched && (a.Z.wait(() => (0, s.WH)().catch(c.VqG)), !0)
    );
}
function y() {
    d.membersData.isUpdating = !0;
}
function O(e) {
    let { subscriptionId: t } = e;
    a.Z.wait(() => (0, s.i1)(t).catch(c.VqG)), (d.membersData.isUpdating = !1);
}
function v() {
    d.membersData.isUpdating = !1;
}
function S(e) {
    let { subscriptionId: t } = e;
    return !d.membersData.isFetching && (a.Z.wait(() => (0, s.i1)(t).catch(c.VqG)), !0);
}
function I() {
    d = {
        membersData: {
            data: null,
            isFetching: !1,
            isUpdating: !1,
        },
        membershipData: {
            data: null,
            isFetching: !1,
            hasFetched: !1,
        },
    };
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getMembers() {
        return d.membersData.data;
    }
    isFetchingMembers() {
        return d.membersData.isFetching;
    }
    isUpdatingMembers() {
        return d.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== d.membersData.data;
    }
    getMembership() {
        return d.membershipData.data;
    }
    isFetchingMembership() {
        return d.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== d.membershipData.data;
    }
    getPremiumGroupSubscriptionId() {
        var e, t, n;
        let r = null == (e = o.Z.getPremiumGroupSubscription()) ? void 0 : e.id;
        return null != r ? r : null != (n = null == (t = d.membershipData.data) ? void 0 : t.subscriptionId) ? n : null;
    }
    getPremiumGroupSubscriptionStatus() {
        var e, t, n;
        let r = null == (e = o.Z.getPremiumGroupSubscription()) ? void 0 : e.status;
        return null != r
            ? r
            : null != (n = null == (t = d.membershipData.data) ? void 0 : t.subscriptionStatus)
              ? n
              : null;
    }
    getPremiumGroupCurrentPeriodEnd() {
        var e, t;
        let n = null == (e = o.Z.getPremiumGroupSubscription()) ? void 0 : e.currentPeriodEnd;
        if (null != n) return n;
        let r = null == (t = d.membershipData.data) ? void 0 : t.currentPeriodEnd;
        return null != r && "" !== r ? new Date(r) : null;
    }
    getNumUsedSeats() {
        return null == d.membersData.data ? 0 : d.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == d.membersData.data) return l.v$;
        let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
        return Math.max(0, l.v$ - e);
    }
    getNumTotalSeats() {
        return l.v$;
    }
}
u(T, "displayName", "PremiumGroupStore");
let C = new T(a.Z, {
    PREMIUM_GROUP_MEMBERS_REQUEST: S,
    PREMIUM_GROUP_MEMBERS_FETCH_START: f,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: p,
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: _,
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: b,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: m,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: h,
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: g,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: E,
    PREMIUM_GROUP_INVITE_USERS_START: y,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: O,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: v,
    PREMIUM_GROUP_REMOVE_MEMBER_START: y,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: O,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: v,
    PREMIUM_GROUP_REMOVE_INVITE_START: y,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: O,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: v,
    LOGOUT: I,
});
