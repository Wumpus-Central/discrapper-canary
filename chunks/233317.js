var i = a(855986),
    s = a(73153),
    m = a(166403),
    E = a(470147),
    n = a(88001),
    r = a(652215);
let _ = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function M() {
    _.membersData.isUpdating = !0;
}
function R(e) {
    let { subscriptionId: t } = e;
    ((0, E.mm)(t).catch(r.FXj), (_.membersData.isUpdating = !1));
}
function U() {
    _.membersData.isUpdating = !1;
}
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(m.A);
    }
    static displayName = "PremiumGroupStore";
    getMembers() {
        return _.membersData.data;
    }
    isFetchingMembers() {
        return _.membersData.isFetching;
    }
    isUpdatingMembers() {
        return _.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== _.membersData.data;
    }
    getMembership() {
        return _.membershipData.data;
    }
    isFetchingMembership() {
        return _.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== _.membershipData.data;
    }
    getNumUsedSeats() {
        return null == _.membersData.data ? 0 : _.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        return null == _.membersData.data
            ? 5
            : Math.max(0, 5 - (_.membersData.data.members.length + _.membersData.data.invitedUsers.length));
    }
    getNumTotalSeats() {
        return 5;
    }
}
let c = new h(s.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !_.membersData.isFetching && ((0, E.mm)(t).catch(r.FXj), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        _.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        ((_.membersData.data = t), (_.membersData.isFetching = !1));
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        _.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !_.membershipData.isFetching && ((0, E.JV)().catch(r.FXj), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        _.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        ((_.membershipData.data = t), (_.membershipData.isFetching = !1), (_.membershipData.hasFetched = !0));
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        ((_.membershipData.isFetching = !1), (_.membershipData.hasFetched = !0));
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        ((_.membershipData.isFetching = !1), (_.membershipData.hasFetched = !0));
    },
    PREMIUM_GROUP_INVITE_USERS_START: M,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: R,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: U,
    PREMIUM_GROUP_REMOVE_MEMBER_START: M,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: U,
    PREMIUM_GROUP_REMOVE_INVITE_START: M,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: a } = e;
        if (t === n.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return ((0, E.mm)(a).catch(r.FXj), (_.membersData.isUpdating = !1), !0);
        U();
    },
    LOGOUT: function () {
        _ = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
a.d(t, {}, { A: c });
