a.d(t, { A: () => c });
var i = a(17928),
    s = a(228366),
    m = a(166403),
    E = a(751877),
    n = a(88001),
    r = a(652215);
let M = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function _() {
    M.membersData.isUpdating = !0;
}
function R(e) {
    let { subscriptionId: t } = e;
    s.h.wait(() => (0, E.mm)(t).catch(r.FXj)), (M.membersData.isUpdating = !1);
}
function h() {
    M.membersData.isUpdating = !1;
}
class U extends i.Ay.Store {
    initialize() {
        this.waitFor(m.A);
    }
    static displayName = "PremiumGroupStore";
    getMembers() {
        return M.membersData.data;
    }
    isFetchingMembers() {
        return M.membersData.isFetching;
    }
    isUpdatingMembers() {
        return M.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== M.membersData.data;
    }
    getMembership() {
        return M.membershipData.data;
    }
    isFetchingMembership() {
        return M.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== M.membershipData.data;
    }
    getNumUsedSeats() {
        return null == M.membersData.data ? 0 : M.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == M.membersData.data) return n.LM;
        let e = M.membersData.data.members.length + M.membersData.data.invitedUsers.length;
        return Math.max(0, n.LM - e);
    }
    getNumTotalSeats() {
        return n.LM;
    }
}
let c = new U(s.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !M.membersData.isFetching && (s.h.wait(() => (0, E.mm)(t).catch(r.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        M.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        (M.membersData.data = t), (M.membersData.isFetching = !1);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        M.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !M.membershipData.isFetching && (s.h.wait(() => (0, E.JV)().catch(r.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        M.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        (M.membershipData.data = t), (M.membershipData.isFetching = !1), (M.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        (M.membershipData.isFetching = !1), (M.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        (M.membershipData.isFetching = !1), (M.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_INVITE_USERS_START: _,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: R,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: h,
    PREMIUM_GROUP_REMOVE_MEMBER_START: _,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: h,
    PREMIUM_GROUP_REMOVE_INVITE_START: _,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: a } = e;
        if (t === n.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return s.h.wait(() => (0, E.mm)(a).catch(r.FXj)), (M.membersData.isUpdating = !1), !0;
        h();
    },
    LOGOUT: function () {
        M = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
