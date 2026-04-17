n.d(t, { A: () => _ });
var i = n(311907),
    s = n(73153),
    l = n(166403),
    r = n(677185),
    a = n(88001),
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
    s.h.wait(() => (0, r.mm)(t).catch(o.FXj)), (d.membersData.isUpdating = !1);
}
function m() {
    d.membersData.isUpdating = !1;
}
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A);
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
        if (null == d.membersData.data) return a.LM;
        let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
        return Math.max(0, a.LM - e);
    }
    getNumTotalSeats() {
        return a.LM;
    }
}
let _ = new g(s.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !d.membersData.isFetching && (s.h.wait(() => (0, r.mm)(t).catch(o.FXj)), !0);
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
        return !d.membershipData.isFetching && (s.h.wait(() => (0, r.JV)().catch(o.FXj)), !0);
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
    PREMIUM_GROUP_INVITE_USERS_FAILURE: m,
    PREMIUM_GROUP_REMOVE_MEMBER_START: c,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: m,
    PREMIUM_GROUP_REMOVE_INVITE_START: c,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === a.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return s.h.wait(() => (0, r.mm)(n).catch(o.FXj)), (d.membersData.isUpdating = !1), !0;
        m();
    },
    LOGOUT: function () {
        d = {
            membersData: { data: null, isFetching: !1, isUpdating: !1 },
            membershipData: { data: null, isFetching: !1, hasFetched: !1 },
        };
    },
});
