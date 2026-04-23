"use strict";
n.d(t, { A: () => p });
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
    u.membersData.isUpdating = !0;
}
function d(e) {
    let { subscriptionId: t } = e;
    i.h.wait(() => (0, a.mm)(t).catch(l.FXj)), (u.membersData.isUpdating = !1);
}
function _() {
    u.membersData.isUpdating = !1;
}
class f extends r.Ay.Store {
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
let p = new f(i.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !u.membersData.isFetching && (i.h.wait(() => (0, a.mm)(t).catch(l.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        u.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        (u.membersData.data = t), (u.membersData.isFetching = !1);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        u.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !u.membershipData.isFetching && (i.h.wait(() => (0, a.JV)().catch(l.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        u.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        (u.membershipData.data = t), (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_INVITE_USERS_START: c,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: d,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: _,
    PREMIUM_GROUP_REMOVE_MEMBER_START: c,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: d,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: _,
    PREMIUM_GROUP_REMOVE_INVITE_START: c,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: d,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return i.h.wait(() => (0, a.mm)(n).catch(l.FXj)), (u.membersData.isUpdating = !1), !0;
        _();
    },
    LOGOUT: function () {
        u = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
