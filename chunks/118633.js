t.d(n, { A: () => g });
var l = t(627968),
    i = t(64700),
    a = t(311907),
    r = t(58149),
    o = t(688810),
    s = t(362490),
    c = t(627363),
    u = t(587895),
    d = t(769015),
    m = t(954571),
    h = t(184952),
    p = t(652215),
    A = t(985018);
function g(e) {
    let { connection: n, guildId: t, location: g } = e,
        x = (0, a.bG)([u.A], () => (null != n.application_id ? u.A.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        { analyticsLocations: f } = (0, o.Ay)(g);
    i.useEffect(() => {
        null != x ||
            null == n.application_id ||
            u.A.isFetchingApplication(n.application_id) ||
            u.A.didFetchingApplicationFail(n.application_id) ||
            (0, c.TA)(n.application_id).catch(() => {});
    }, [x, n.application_id]);
    let C = x?.name ?? A.intl.string(A.t.cgPbaZ),
        { hasAlreadyLinked: j, canStartAuthorization: v, startAuthorization: y, fetched: _ } = (0, s.RD)(x),
        N = (0, l.jsx)(d.A, { game: x, size: d.M.MEDIUM }),
        E = i.useCallback(() => {
            m.default.track(p.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(t),
                connection_type: "application",
                application_id: n.application_id ?? void 0,
                location: g,
            }),
                y({ analyticsLocations: f });
        }, [y, t, n.application_id, g, f]);
    return (0, l.jsx)(h.A, {
        displayName: C,
        description: n.description,
        icon: N,
        isLoading: !_,
        isConnected: j,
        canConnect: v,
        onConnect: E,
    });
}
