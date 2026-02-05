n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(58149),
    o = n(688810),
    s = n(362490),
    c = n(627363),
    u = n(587895),
    d = n(769015),
    m = n(954571),
    h = n(184952),
    p = n(652215),
    x = n(985018);
function A(e) {
    let { connection: t, guildId: n, location: A } = e,
        g = (0, a.bG)([u.A], () => (null != t.application_id ? u.A.getApplication(t.application_id) : null), [
            t.application_id,
        ]),
        { analyticsLocations: f } = (0, o.Ay)(A);
    i.useEffect(() => {
        null != g ||
            null == t.application_id ||
            u.A.isFetchingApplication(t.application_id) ||
            u.A.didFetchingApplicationFail(t.application_id) ||
            (0, c.TA)(t.application_id).catch(() => {});
    }, [g, t.application_id]);
    let C = g?.name ?? x.intl.string(x.t.cgPbaZ),
        { hasAlreadyLinked: j, canStartAuthorization: v, startAuthorization: y, fetched: _ } = (0, s.RD)(g),
        N = (0, l.jsx)(d.A, { game: g, size: d.M.MEDIUM }),
        w = i.useCallback(() => {
            m.default.track(p.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(n),
                connection_type: "application",
                application_id: t.application_id ?? void 0,
                location: A,
            }),
                y({ analyticsLocations: f });
        }, [y, n, t.application_id, A, f]);
    return (0, l.jsx)(h.A, {
        displayName: C,
        description: t.description,
        icon: N,
        isLoading: !_,
        isConnected: j,
        canConnect: v,
        onConnect: w,
    });
}
