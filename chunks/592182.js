i.d(t, { A: () => b });
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
    h = i(159426),
    m = i(25528),
    p = i(655724),
    g = i(82149),
    f = i(734057),
    T = i(287809),
    S = i(977997),
    E = i(90644),
    C = i(61330),
    v = i(153331),
    _ = i(33852),
    y = i(834425),
    x = i(284525),
    I = i(730430),
    N = i(443493),
    j = i(462226),
    D = i(329151),
    O = i(738080),
    P = i(648246),
    L = i(305637),
    U = i(652215),
    M = i(620452);
let b = (0, u.A)((e) => {
    let {
            activity: t,
            embeddedActivity: i,
            user: l,
            applicationStream: s,
            className: u,
            guildId: b,
            channelId: R,
            source: G,
            buttonVariant: V,
            type: H,
            onAction: w,
        } = e,
        F = (0, o.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        B = H === v.O.STREAM_PREVIEW || null != s,
        W = (0, E.A)(t),
        k = W || B ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL,
        Y = t?.type === U.$pd.HANG_STATUS,
        $ = (0, o.bG)([S.A, f.A], () => (Y ? f.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null)),
        z = (0, o.bG)([f.A], () => (null != R ? f.A.getChannel(R) : null), [R]),
        { enableRequestToStream: J } = h.m.useExperiment(
            { guildId: b ?? z?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        K = null != z && J && (0, m.F9)(t),
        Z = k === A.A.Direction.VERTICAL;
    return (0, n.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: k,
        wrap: Z ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, Z ? M.Vd : M.xM),
        children: (() => {
            if ((0, C.A)(t))
                return (0, n.jsx)(_.A, { platform: c.A.get(U.fg2.XBOX), variant: V, onAction: w, icon: d.YWd });
            if (t?.platform === U.yTV.PS4 || t?.platform === U.yTV.PS5)
                return (0, n.jsx)(_.A, { variant: V, platform: c.A.get(U.fg2.PLAYSTATION), onAction: w, icon: d.Xj });
            if (W) {
                let e = (0, n.jsx)(O.A, { activity: t, user: l, guildId: b, channelId: R, source: G, onAction: w }),
                    i = (0, n.jsx)(D.A, { activity: t, user: l, source: G, onAction: w });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, e] });
            }
            if ((0, g.Cy)(t)) {
                let e = (0, g.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(N.A, { guildId: e.guildId, channelId: e.channelId, variant: V, onAction: w });
            }
            return B
                ? (0, n.jsx)(L.A, { isCurrentUser: F.id === l.id, applicationStream: s, onAction: w })
                : Y && null != $
                  ? (0, n.jsx)(I.A, { userId: l.id, variant: V, hangStatusChannel: $, onAction: w })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            K && (0, n.jsx)(p.B, { userId: l.id, channel: z, onAction: w }),
                            (0, n.jsx)(P.A, { activity: t, variant: K ? "secondary" : V, onAction: w }),
                            (0, n.jsx)(x.A, {
                                activity: t,
                                embeddedActivity: i,
                                user: l,
                                variant: K ? "secondary" : V,
                                onAction: w,
                            }),
                            (0, n.jsx)(j.A, { activity: t, user: l, variant: K ? "secondary" : V, onAction: w }),
                            (0, n.jsx)(y.A, { user: l, activity: t, variant: K ? "secondary" : V, onAction: w }),
                        ],
                    });
        })(),
    });
});
