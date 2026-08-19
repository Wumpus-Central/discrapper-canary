"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(166403),
    s = n(751877),
    l = n(88001),
    o = n(652215);
let d = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function c() {
    d.membersData.isUpdating = !0;
}
function u(e) {
    let { subscriptionId: t } = e;
    r.h.wait(() => (0, s.mm)(t).catch(o.FXj)), (d.membersData.isUpdating = !1);
}
function _() {
    d.membersData.isUpdating = !1;
}
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
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
        if (null == d.membersData.data) return l.LM;
        let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
        return Math.max(0, l.LM - e);
    }
    getNumTotalSeats() {
        return l.LM;
    }
}
let A = new E(r.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !d.membersData.isFetching && (r.h.wait(() => (0, s.mm)(t).catch(o.FXj)), !0);
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
        return !d.membershipData.isFetching && (r.h.wait(() => (0, s.JV)().catch(o.FXj)), !0);
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
    PREMIUM_GROUP_INVITE_USERS_START: c,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: u,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: _,
    PREMIUM_GROUP_REMOVE_MEMBER_START: c,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: _,
    PREMIUM_GROUP_REMOVE_INVITE_START: c,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === l.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return r.h.wait(() => (0, s.mm)(n).catch(o.FXj)), (d.membersData.isUpdating = !1), !0;
        _();
    },
    LOGOUT: function () {
        d = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
