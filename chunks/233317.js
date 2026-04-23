"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(166403),
    a = n(751877),
    o = n(88001),
    l = n(652215);
let d = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function _() {
    d.membersData.isUpdating = !0;
}
function u(e) {
    let { subscriptionId: t } = e;
    r.h.wait(() => (0, a.mm)(t).catch(l.FXj)), (d.membersData.isUpdating = !1);
}
function c() {
    d.membersData.isUpdating = !1;
}
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "PremiumGroupStore";
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
    getNumUsedSeats() {
        return null == d.membersData.data ? 0 : d.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == d.membersData.data) return o.LM;
        let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
        return Math.max(0, o.LM - e);
    }
    getNumTotalSeats() {
        return o.LM;
    }
}
let h = new E(r.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !d.membersData.isFetching && (r.h.wait(() => (0, a.mm)(t).catch(l.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        d.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        (d.membersData.data = t), (d.membersData.isFetching = !1);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        d.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !d.membershipData.isFetching && (r.h.wait(() => (0, a.JV)().catch(l.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        d.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        (d.membershipData.data = t), (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_INVITE_USERS_START: _,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: u,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: c,
    PREMIUM_GROUP_REMOVE_MEMBER_START: _,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: c,
    PREMIUM_GROUP_REMOVE_INVITE_START: _,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return r.h.wait(() => (0, a.mm)(n).catch(l.FXj)), (d.membersData.isUpdating = !1), !0;
        c();
    },
    LOGOUT: function () {
        d = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
