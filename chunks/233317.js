"use strict";
n.d(t, { A: () => N });
var r = n(311907),
    i = n(73153),
    s = n(166403),
    a = n(677185),
    o = n(88001),
    l = n(652215);
let u = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function c() {
    u.membersData.isFetching = !0;
}
function d(e) {
    let { members: t } = e;
    (u.membersData.data = t), (u.membersData.isFetching = !1);
}
function _() {
    u.membersData.isFetching = !1;
}
function f() {
    u.membershipData.isFetching = !0;
}
function p(e) {
    let { membership: t } = e;
    (u.membershipData.data = t), (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function h() {
    (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function m() {
    (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
}
function E() {
    return !u.membershipData.isFetching && (i.h.wait(() => (0, a.JV)().catch(l.FXj)), !0);
}
function g() {
    u.membersData.isUpdating = !0;
}
function A(e) {
    let { subscriptionId: t } = e;
    i.h.wait(() => (0, a.mm)(t).catch(l.FXj)), (u.membersData.isUpdating = !1);
}
function I(e) {
    let { errorCode: t, subscriptionId: n } = e;
    if (t === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
        return i.h.wait(() => (0, a.mm)(n).catch(l.FXj)), (u.membersData.isUpdating = !1), !0;
    T();
}
function T() {
    u.membersData.isUpdating = !1;
}
function S(e) {
    let { subscriptionId: t } = e;
    return !u.membersData.isFetching && (i.h.wait(() => (0, a.mm)(t).catch(l.FXj)), !0);
}
function y() {
    u = {
        membersData: { data: null, isFetching: !1, isUpdating: !1 },
        membershipData: { data: null, isFetching: !1, hasFetched: !1 },
    };
}
class v extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "PremiumGroupStore";
    getMembers() {
        return u.membersData.data;
    }
    isFetchingMembers() {
        return u.membersData.isFetching;
    }
    isUpdatingMembers() {
        return u.membersData.isUpdating;
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
        return null !== u.membershipData.data;
    }
    getNumUsedSeats() {
        return null == u.membersData.data ? 0 : u.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == u.membersData.data) return o.LM;
        let e = u.membersData.data.members.length + u.membersData.data.invitedUsers.length;
        return Math.max(0, o.LM - e);
    }
    getNumTotalSeats() {
        return o.LM;
    }
}
let N = new v(i.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: S,
    PREMIUM_GROUP_MEMBERS_FETCH_START: c,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: d,
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: _,
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: E,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: f,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: p,
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: h,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: m,
    PREMIUM_GROUP_INVITE_USERS_START: g,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: A,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: T,
    PREMIUM_GROUP_REMOVE_MEMBER_START: g,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: A,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: T,
    PREMIUM_GROUP_REMOVE_INVITE_START: g,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: A,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: I,
    LOGOUT: y,
});
