n.d(t, { Z: () => C }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(457330),
    o = n(726542),
    l = n(368111),
    u = n(601964);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Set([n(981631).ABu.CONTACTS]),
    f = !0,
    _ = [],
    p = [],
    h = {},
    m = new Set(),
    g = {},
    E = {},
    v = (e) => {
        (_ = e.filter((e) => !d.has(e.type) && o.Z.isSupported(e.type))), (p = e.filter((e) => d.has(e.type))), (f = !1);
    };
function y(e) {
    v(e.connectedAccounts.map((e) => new l.Z(e)));
}
function I(e) {
    e.local && null != e.accounts
        ? v(
              e.accounts.map(
                  (e) =>
                      new l.Z({
                          ...e,
                          integrations: e.integrations.map((e) => ({
                              ...e,
                              guild: new u.ZP(e.guild)
                          }))
                      })
              )
          )
        : s.Z.fetch();
}
function T(e) {
    h[e.integrationId] = e.joining;
}
function b(e) {
    E[e.integrationId] = void 0 !== e.error ? e.error : '';
}
function S(e) {
    let { platformType: t, id: n, revoked: i, accessToken: r } = e,
        a = _.find((e) => e.id === n && e.type === t);
    if (null == a) return !1;
    null != i && (a.revoked = i), null != r && (a.accessToken = r);
}
function A(e) {
    let { code: t, state: n, openid_params: i, provider: r } = e;
    s.Z.callback(r, {
        code: t,
        state: n,
        openid_params: i
    });
}
class N extends (i = r.ZP.Store) {
    isJoining(e) {
        return h[e] || !1;
    }
    joinErrorMessage(e) {
        return E[e];
    }
    isFetching() {
        return f;
    }
    getAccounts() {
        return _;
    }
    getLocalAccounts() {
        return p;
    }
    getAccount(e, t) {
        return _.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return p.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return g[e] || !1;
    }
    addPendingAuthorizedState(e) {
        m.add(e);
    }
    deletePendingAuthorizedState(e) {
        m.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return m.has(e);
    }
}
c(N, 'displayName', 'ConnectedAccountsStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: y,
    USER_CONNECTIONS_UPDATE: I,
    USER_CONNECTIONS_INTEGRATION_JOINING: T,
    USER_CONNECTION_UPDATE: S,
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: b,
    USER_CONNECTIONS_CALLBACK: A
});
