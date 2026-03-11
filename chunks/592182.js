i.d(e, { A: () => R });
var n = i(627968);
i(64700);
var l = i(503698),
    r = i.n(l),
    s = i(284009),
    a = i.n(s),
    o = i(311907),
    d = i(397927),
    u = i(707606),
    c = i(573648),
    m = i(235986),
    A = i(338234),
    p = i(159426),
    h = i(25528),
    g = i(655724),
    f = i(82149),
    T = i(734057),
    v = i(287809),
    C = i(977997),
    S = i(90644),
    E = i(61330),
    x = i(153331),
    y = i(33852),
    _ = i(834425),
    I = i(284525),
    N = i(730430),
    j = i(443493),
    D = i(462226),
    P = i(329151),
    U = i(738080),
    L = i(648246),
    O = i(305637),
    b = i(652215),
    M = i(37206);
let R = (0, u.A)((t) => {
    let {
            activity: e,
            embeddedActivity: i,
            user: l,
            applicationStream: s,
            className: u,
            guildId: R,
            channelId: G,
            source: w,
            buttonVariant: V,
            type: H,
            onAction: F,
        } = t,
        W = (0, o.bG)([v.default], () => {
            let t = v.default.getCurrentUser();
            return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t;
        }),
        B = H === x.O.STREAM_PREVIEW || null != s,
        k = (0, S.A)(e),
        Y = k || B ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL,
        z = e?.type === b.$pd.HANG_STATUS,
        $ = (0, o.bG)([C.A, T.A], () => (z ? T.A.getChannel(C.A.getVoiceStateForUser(l.id)?.channelId) : null)),
        J = (0, o.bG)([T.A], () => (null != G ? T.A.getChannel(G) : null), [G]),
        { enableUserHoverActivities: K } = (0, A.fC)({ guildId: R ?? J?.guild_id, location: "UserActivityActions" }),
        { enableRequestToStream: Z } = p.m.useExperiment(
            { guildId: R ?? J?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        q = null != J && K && Z && (0, h.F9)(e),
        X = Y === m.A.Direction.VERTICAL;
    return (0, n.jsx)(m.A, {
        grow: 0,
        align: m.A.Align.STRETCH,
        direction: Y,
        wrap: X ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, X ? M.Vd : M.xM),
        children: (() => {
            if ((0, E.A)(e))
                return (0, n.jsx)(y.A, { platform: c.A.get(b.fg2.XBOX), variant: V, onAction: F, icon: d.YWd });
            if (e?.platform === b.yTV.PS4 || e?.platform === b.yTV.PS5)
                return (0, n.jsx)(y.A, { variant: V, platform: c.A.get(b.fg2.PLAYSTATION), onAction: F, icon: d.Xj });
            if (k) {
                let t = (0, n.jsx)(U.A, { activity: e, user: l, guildId: R, channelId: G, source: w, onAction: F }),
                    i = (0, n.jsx)(P.A, { activity: e, user: l, source: w, onAction: F });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, t] });
            }
            if ((0, f.Cy)(e)) {
                let t = (0, f.UW)(e);
                return null == t
                    ? null
                    : (0, n.jsx)(j.A, { guildId: t.guildId, channelId: t.channelId, variant: V, onAction: F });
            }
            return B
                ? (0, n.jsx)(O.A, { isCurrentUser: W.id === l.id, applicationStream: s, onAction: F })
                : z && null != $
                  ? (0, n.jsx)(N.A, { userId: l.id, variant: V, hangStatusChannel: $, onAction: F })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            q && (0, n.jsx)(g.B, { userId: l.id, channel: J, onAction: F }),
                            (0, n.jsx)(L.A, { activity: e, variant: q ? "secondary" : V, onAction: F }),
                            (0, n.jsx)(I.A, {
                                activity: e,
                                embeddedActivity: i,
                                user: l,
                                variant: q ? "secondary" : V,
                                onAction: F,
                            }),
                            (0, n.jsx)(D.A, { activity: e, user: l, variant: q ? "secondary" : V, onAction: F }),
                            (0, n.jsx)(_.A, { user: l, activity: e, variant: q ? "secondary" : V, onAction: F }),
                        ],
                    });
        })(),
    });
});
