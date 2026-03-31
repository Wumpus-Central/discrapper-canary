i.d(e, { A: () => b });
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
    m = i(159426),
    h = i(25528),
    p = i(655724),
    g = i(82149),
    f = i(734057),
    T = i(287809),
    S = i(977997),
    E = i(874546),
    C = i(90644),
    v = i(61330),
    _ = i(153331),
    I = i(33852),
    y = i(834425),
    x = i(284525),
    N = i(730430),
    j = i(443493),
    D = i(462226),
    O = i(329151),
    P = i(738080),
    U = i(648246),
    L = i(305637),
    R = i(652215),
    M = i(540807);
let b = (0, u.A)((t) => {
    let {
            activity: e,
            embeddedActivity: i,
            user: l,
            applicationStream: s,
            className: u,
            guildId: b,
            channelId: V,
            source: G,
            buttonVariant: H,
            type: w,
            onAction: F,
        } = t,
        B = (0, o.bG)([T.default], () => {
            let t = T.default.getCurrentUser();
            return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t;
        }),
        W = w === _.O.STREAM_PREVIEW || null != s,
        k = (0, C.A)(e),
        Y = k || W ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL,
        z = e?.type === R.$pd.HANG_STATUS,
        $ = (0, o.bG)([S.A, f.A], () => (z ? f.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null)),
        J = (0, o.bG)([f.A], () => (null != V ? f.A.getChannel(V) : null), [V]),
        { enableRequestToStream: K } = m.m.useExperiment(
            { guildId: b ?? J?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        Z = null != J && K && (0, h.F9)(e),
        q = Y === A.A.Direction.VERTICAL;
    return (0, n.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: Y,
        wrap: q ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, q ? M.Vd : M.xM),
        children: (() => {
            if (!(0, E.A)(e)) {
                if ((0, v.A)(e))
                    return (0, n.jsx)(I.A, { platform: c.A.get(R.fg2.XBOX), variant: H, onAction: F, icon: d.YWd });
                if (e?.platform === R.yTV.PS4 || e?.platform === R.yTV.PS5)
                    return (0, n.jsx)(I.A, {
                        variant: H,
                        platform: c.A.get(R.fg2.PLAYSTATION),
                        onAction: F,
                        icon: d.Xj,
                    });
            }
            if (k) {
                let t = (0, n.jsx)(P.A, { activity: e, user: l, guildId: b, channelId: V, source: G, onAction: F }),
                    i = (0, n.jsx)(O.A, { activity: e, user: l, source: G, onAction: F });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, t] });
            }
            if ((0, g.Cy)(e)) {
                let t = (0, g.UW)(e);
                return null == t
                    ? null
                    : (0, n.jsx)(j.A, { guildId: t.guildId, channelId: t.channelId, variant: H, onAction: F });
            }
            return W
                ? (0, n.jsx)(L.A, { isCurrentUser: B.id === l.id, applicationStream: s, onAction: F })
                : z && null != $
                  ? (0, n.jsx)(N.A, { userId: l.id, variant: H, hangStatusChannel: $, onAction: F })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            Z && (0, n.jsx)(p.B, { userId: l.id, channel: J, onAction: F }),
                            (0, n.jsx)(U.A, { activity: e, variant: Z ? "secondary" : H, onAction: F }),
                            (0, n.jsx)(x.A, {
                                activity: e,
                                embeddedActivity: i,
                                user: l,
                                variant: Z ? "secondary" : H,
                                onAction: F,
                            }),
                            (0, n.jsx)(D.A, { activity: e, user: l, variant: Z ? "secondary" : H, onAction: F }),
                            (0, n.jsx)(y.A, { user: l, activity: e, variant: Z ? "secondary" : H, onAction: F }),
                        ],
                    });
        })(),
    });
});
