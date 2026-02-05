n.d(t, { A: () => A });
var i = n(311907),
    s = n(73153),
    r = n(166403),
    a = n(677185),
    l = n(88001),
    o = n(652215);
let c = {
    membersData: { data: null, isFetching: !1, isUpdating: !1 },
    membershipData: { data: null, isFetching: !1, hasFetched: !1 },
};
function d() {
    c.membersData.isUpdating = !0;
}
function u(e) {
    let { subscriptionId: t } = e;
    s.h.wait(() => (0, a.mm)(t).catch(o.FXj)), (c.membersData.isUpdating = !1);
}
function _() {
    c.membersData.isUpdating = !1;
}
class m extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "PremiumGroupStore";
    getMembers() {
        return c.membersData.data;
    }
    isFetchingMembers() {
        return c.membersData.isFetching;
    }
    isUpdatingMembers() {
        return c.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== c.membersData.data;
    }
    getMembership() {
        return c.membershipData.data;
    }
    isFetchingMembership() {
        return c.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== c.membershipData.data;
    }
    getNumUsedSeats() {
        return null == c.membersData.data ? 0 : c.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == c.membersData.data) return l.LM;
        let e = c.membersData.data.members.length + c.membersData.data.invitedUsers.length;
        return Math.max(0, l.LM - e);
    }
    getNumTotalSeats() {
        return l.LM;
    }
}
let A = new m(s.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !c.membersData.isFetching && (s.h.wait(() => (0, a.mm)(t).catch(o.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        c.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        (c.membersData.data = t), (c.membersData.isFetching = !1);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        c.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !c.membershipData.isFetching && (s.h.wait(() => (0, a.JV)().catch(o.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        c.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        (c.membershipData.data = t), (c.membershipData.isFetching = !1), (c.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        (c.membershipData.isFetching = !1), (c.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        (c.membershipData.isFetching = !1), (c.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_INVITE_USERS_START: d,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: u,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: _,
    PREMIUM_GROUP_REMOVE_MEMBER_START: d,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: _,
    PREMIUM_GROUP_REMOVE_INVITE_START: d,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === l.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return s.h.wait(() => (0, a.mm)(n).catch(o.FXj)), (c.membersData.isUpdating = !1), !0;
        _();
    },
    LOGOUT: function () {
        c = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
