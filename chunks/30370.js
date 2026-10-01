n.d(t, { A: () => m });
var i = n(17928),
    r = n(73153),
    a = n(573648),
    s = n(888363),
    l = n(306677),
    o = n(315069);
class d extends o.A {
    id;
    type;
    name;
    revoked;
    integrations;
    visibility;
    friendSync;
    verified;
    showActivity;
    twoWayLink;
    accessToken;
    metadata;
    metadataVisibility;
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.name = e.name),
            (this.revoked = e.revoked || !1),
            (this.integrations = e.integrations || []),
            (this.visibility = e.visibility || 0),
            (this.friendSync = e.friend_sync || !1),
            (this.showActivity = e.show_activity || !1),
            (this.verified = e.verified || !1),
            (this.accessToken = e.access_token || null),
            (this.twoWayLink = e.two_way_link || !1),
            (this.metadata = e.metadata || null),
            (this.metadataVisibility = e.metadata_visibility || 0));
    }
    toString() {
        return this.name;
    }
}
var c = n(149790);
let u = new Set([n(652215).fg2.CONTACTS]),
    _ = !0,
    E = [],
    A = [],
    h = {},
    I = new Set(),
    f = {},
    p = {};
function T(e) {
    ((E = e.filter((e) => !u.has(e.type) && a.A.isSupported(e.type))), (A = e.filter((e) => u.has(e.type))), (_ = !1));
}
class g extends i.Ay.Store {
    static displayName = "ConnectedAccountsStore";
    isJoining(e) {
        return h[e] || !1;
    }
    joinErrorMessage(e) {
        return p[e];
    }
    isFetching() {
        return _;
    }
    getAccounts() {
        return E;
    }
    getLocalAccounts() {
        return A;
    }
    getAccount(e, t) {
        return E.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return A.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return f[e] || !1;
    }
    addPendingAuthorizedState(e) {
        I.add(e);
    }
    deletePendingAuthorizedState(e) {
        I.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return I.has(e);
    }
}
let m = new g(r.h, {
    CONNECTION_OPEN: function (e) {
        T(e.connectedAccounts.map((e) => new d(e)));
    },
    USER_CONNECTIONS_UPDATE: function (e) {
        e.local && null != e.accounts
            ? T(
                  e.accounts.map(
                      (e) =>
                          new d({
                              ...e,
                              integrations: e.integrations.map((e) => ({
                                  ...e,
                                  guild: (0, c.yF)({ ...e.guild, features: [] }),
                              })),
                          }),
                  ),
              )
            : (0, s.q)();
    },
    USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
        h[e.integrationId] = e.joining;
    },
    USER_CONNECTION_UPDATE: function (e) {
        let { platformType: t, id: n, revoked: i, accessToken: r, showActivity: a } = e,
            s = E.find((e) => e.id === n && e.type === t);
        if (null == s) return !1;
        (null != i && (s.revoked = i), null != r && (s.accessToken = r), null != a && (s.showActivity = a));
    },
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
        p[e.integrationId] = void 0 !== e.error ? e.error : "";
    },
    USER_CONNECTIONS_CALLBACK: function (e) {
        let { code: t, state: n, openid_params: i, provider: r } = e;
        (0, l.Q)(r, { code: t, state: n, openid_params: i });
    },
});
