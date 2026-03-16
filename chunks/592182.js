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
    A = i(235986),
    m = i(338234),
    p = i(159426),
    h = i(25528),
    g = i(655724),
    f = i(82149),
    T = i(734057),
    S = i(287809),
    E = i(977997),
    C = i(90644),
    v = i(61330),
    _ = i(153331),
    x = i(33852),
    y = i(834425),
    I = i(284525),
    N = i(730430),
    j = i(443493),
    D = i(462226),
    P = i(329151),
    O = i(738080),
    U = i(648246),
    L = i(305637),
    b = i(652215),
    M = i(620452);
let R = (0, u.A)((t) => {
    let {
            activity: e,
            embeddedActivity: i,
            user: l,
            applicationStream: s,
            className: u,
            guildId: R,
            channelId: G,
            source: V,
            buttonVariant: w,
            type: H,
            onAction: F,
        } = t,
        W = (0, o.bG)([S.default], () => {
            let t = S.default.getCurrentUser();
            return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t;
        }),
        B = H === _.O.STREAM_PREVIEW || null != s,
        k = (0, C.A)(e),
        Y = k || B ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL,
        z = e?.type === b.$pd.HANG_STATUS,
        $ = (0, o.bG)([E.A, T.A], () => (z ? T.A.getChannel(E.A.getVoiceStateForUser(l.id)?.channelId) : null)),
        J = (0, o.bG)([T.A], () => (null != G ? T.A.getChannel(G) : null), [G]),
        { enableUserHoverActivities: K } = (0, m.fC)({ guildId: R ?? J?.guild_id, location: "UserActivityActions" }),
        { enableRequestToStream: Z } = p.m.useExperiment(
            { guildId: R ?? J?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        q = null != J && K && Z && (0, h.F9)(e),
        X = Y === A.A.Direction.VERTICAL;
    return (0, n.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: Y,
        wrap: X ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, X ? M.Vd : M.xM),
        children: (() => {
            if ((0, v.A)(e))
                return (0, n.jsx)(x.A, { platform: c.A.get(b.fg2.XBOX), variant: w, onAction: F, icon: d.YWd });
            if (e?.platform === b.yTV.PS4 || e?.platform === b.yTV.PS5)
                return (0, n.jsx)(x.A, { variant: w, platform: c.A.get(b.fg2.PLAYSTATION), onAction: F, icon: d.Xj });
            if (k) {
                let t = (0, n.jsx)(O.A, { activity: e, user: l, guildId: R, channelId: G, source: V, onAction: F }),
                    i = (0, n.jsx)(P.A, { activity: e, user: l, source: V, onAction: F });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, t] });
            }
            if ((0, f.Cy)(e)) {
                let t = (0, f.UW)(e);
                return null == t
                    ? null
                    : (0, n.jsx)(j.A, { guildId: t.guildId, channelId: t.channelId, variant: w, onAction: F });
            }
            return B
                ? (0, n.jsx)(L.A, { isCurrentUser: W.id === l.id, applicationStream: s, onAction: F })
                : z && null != $
                  ? (0, n.jsx)(N.A, { userId: l.id, variant: w, hangStatusChannel: $, onAction: F })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            q && (0, n.jsx)(g.B, { userId: l.id, channel: J, onAction: F }),
                            (0, n.jsx)(U.A, { activity: e, variant: q ? "secondary" : w, onAction: F }),
                            (0, n.jsx)(I.A, {
                                activity: e,
                                embeddedActivity: i,
                                user: l,
                                variant: q ? "secondary" : w,
                                onAction: F,
                            }),
                            (0, n.jsx)(D.A, { activity: e, user: l, variant: q ? "secondary" : w, onAction: F }),
                            (0, n.jsx)(y.A, { user: l, activity: e, variant: q ? "secondary" : w, onAction: F }),
                        ],
                    });
        })(),
    });
});
