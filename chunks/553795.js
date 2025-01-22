var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(457330),
    u = r(726542),
    c = r(368111),
    d = r(601964);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = new Set([r(981631).ABu.CONTACTS]),
    h = !0,
    _ = [],
    m = [],
    g = {},
    E = new Set(),
    v = {},
    y = {},
    b = (e) => {
        (_ = e.filter((e) => !p.has(e.type) && u.Z.isSupported(e.type))), (m = e.filter((e) => p.has(e.type))), (h = !1);
    };
function I(e) {
    b(e.connectedAccounts.map((e) => new c.Z(e)));
}
function T(e) {
    e.local && null != e.accounts
        ? b(
              e.accounts.map(
                  (e) =>
                      new c.Z({
                          ...e,
                          integrations: e.integrations.map((e) => ({
                              ...e,
                              guild: new d.ZP(e.guild)
                          }))
                      })
              )
          )
        : l.Z.fetch();
}
function S(e) {
    g[e.integrationId] = e.joining;
}
function A(e) {
    y[e.integrationId] = void 0 !== e.error ? e.error : '';
}
function C(e) {
    let { platformType: n, id: r, revoked: i, accessToken: a } = e,
        o = _.find((e) => e.id === r && e.type === n);
    if (null == o) return !1;
    null != i && (o.revoked = i), null != a && (o.accessToken = a);
}
function N(e) {
    let { code: n, state: r, openid_params: i, provider: a } = e;
    l.Z.callback(a, {
        code: n,
        state: r,
        openid_params: i
    });
}
class R extends (i = o.ZP.Store) {
    isJoining(e) {
        return g[e] || !1;
    }
    joinErrorMessage(e) {
        return y[e];
    }
    isFetching() {
        return h;
    }
    getAccounts() {
        return _;
    }
    getLocalAccounts() {
        return m;
    }
    getAccount(e, n) {
        return _.find((r) => (null == e || r.id === e) && r.type === n);
    }
    getLocalAccount(e) {
        return m.find((n) => n.type === e);
    }
    isSuggestedAccountType(e) {
        return v[e] || !1;
    }
    addPendingAuthorizedState(e) {
        E.add(e);
    }
    deletePendingAuthorizedState(e) {
        E.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return E.has(e);
    }
}
f(R, 'displayName', 'ConnectedAccountsStore'),
    (n.Z = new R(s.Z, {
        CONNECTION_OPEN: I,
        USER_CONNECTIONS_UPDATE: T,
        USER_CONNECTIONS_INTEGRATION_JOINING: S,
        USER_CONNECTION_UPDATE: C,
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: A,
        USER_CONNECTIONS_CALLBACK: N
    }));
