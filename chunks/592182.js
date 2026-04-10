n.d(t, { A: () => K });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(284009),
    r = n.n(s),
    o = n(311907),
    c = n(397927),
    d = n(707606),
    u = n(573648),
    h = n(235986),
    m = n(352306),
    A = n(829203),
    g = n(267102),
    p = n(159426),
    _ = n(25528),
    f = n(655724),
    E = n(82149),
    C = n(657331),
    x = n(734057),
    S = n(287809),
    I = n(977997),
    T = n(874546),
    v = n(90644),
    N = n(61330),
    y = n(709309),
    b = n(153331),
    j = n(33852),
    R = n(834425),
    M = n(284525),
    L = n(730430),
    O = n(443493),
    D = n(462226),
    P = n(913948),
    U = n(329151),
    k = n(738080),
    w = n(648246),
    G = n(305637),
    F = n(652215),
    H = n(346640),
    B = n(985018),
    V = n(540807);
let W = (e) => {
        let { user: t, buttonVariant: n, activity: l, onAction: a } = e,
            s = (0, g.aL)();
        return (0, i.jsx)(
            R.A,
            {
                user: t,
                variant: n,
                activity: l,
                onAction: () => {
                    m.s.getConfig({ location: "rich_presence" }).enabled &&
                        (s.dispatch(F.jej.POPOUT_CLOSE),
                        (0, C.closeUserProfileModal)(),
                        (0, A.A)({ source: "rich_presence" }),
                        a?.());
                },
            },
            "custom-activity-button",
        );
    },
    K = (0, d.A)((e) => {
        let {
                activity: t,
                embeddedActivity: n,
                user: l,
                applicationStream: s,
                className: d,
                guildId: m,
                channelId: A,
                source: g,
                buttonVariant: C,
                type: K,
                onAction: z,
            } = e,
            Y = (0, o.bG)([S.default], () => {
                let e = S.default.getCurrentUser();
                return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
            }),
            J = K === b.O.STREAM_PREVIEW || null != s,
            q = (0, v.A)(t),
            $ = q || J ? h.A.Direction.HORIZONTAL : h.A.Direction.VERTICAL,
            Z = t?.type === F.$pd.HANG_STATUS,
            X = (0, o.bG)([I.A, x.A], () => (Z ? x.A.getChannel(I.A.getVoiceStateForUser(l.id)?.channelId) : null)),
            Q = (0, o.bG)([x.A], () => (null != A ? x.A.getChannel(A) : null), [A]),
            { enableRequestToStream: ee } = p.m.useExperiment(
                { guildId: m ?? Q?.guild_id, location: "UserActivityActions" },
                { autoTrackExposure: !1 },
            ),
            et = null != Q && ee && (0, _.F9)(t),
            en = (0, y.A)("voice_channel_activity_actions", t?.application_id);
        if (t?.application_id === H.L8)
            return (
                (t = { ...t, buttons: [B.intl.string(B.t.E4kW5O)] }),
                (0, i.jsx)(W, { user: l, buttonVariant: C, activity: t, onAction: z })
            );
        let ei = $ === h.A.Direction.VERTICAL;
        return (0, i.jsx)(h.A, {
            grow: 0,
            align: h.A.Align.STRETCH,
            direction: $,
            wrap: ei ? h.A.Wrap.WRAP : h.A.Wrap.NO_WRAP,
            className: a()(d, V.jx, ei ? V.Vd : V.xM),
            children: (() => {
                if (!(0, T.Ay)(t)) {
                    if ((0, N.A)(t))
                        return (0, i.jsx)(j.A, { platform: u.A.get(F.fg2.XBOX), variant: C, onAction: z, icon: c.YWd });
                    if (t?.platform === F.yTV.PS4 || t?.platform === F.yTV.PS5)
                        return (0, i.jsx)(j.A, {
                            variant: C,
                            platform: u.A.get(F.fg2.PLAYSTATION),
                            onAction: z,
                            icon: c.Xj,
                        });
                }
                if (en.length > 0)
                    return (0, i.jsx)(P.A, { distributorCTAConfigs: en, buttonVariant: "overlay-primary" });
                if (q) {
                    let e = (0, i.jsx)(k.A, { activity: t, user: l, guildId: m, channelId: A, source: g, onAction: z }),
                        n = (0, i.jsx)(U.A, { activity: t, user: l, source: g, onAction: z });
                    return (0, i.jsxs)(c.ButtonGroup, { size: "sm", fullWidth: !0, children: [n, e] });
                }
                if ((0, E.Cy)(t)) {
                    let e = (0, E.UW)(t);
                    return null == e
                        ? null
                        : (0, i.jsx)(O.A, { guildId: e.guildId, channelId: e.channelId, variant: C, onAction: z });
                }
                return J
                    ? (0, i.jsx)(G.A, { isCurrentUser: Y.id === l.id, applicationStream: s, onAction: z })
                    : Z && null != X
                      ? (0, i.jsx)(L.A, { userId: l.id, variant: C, hangStatusChannel: X, onAction: z })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                et && (0, i.jsx)(f.B, { userId: l.id, channel: Q, onAction: z }),
                                (0, i.jsx)(w.A, { activity: t, variant: et ? "secondary" : C, onAction: z }),
                                (0, i.jsx)(M.A, {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: l,
                                    variant: et ? "secondary" : C,
                                    onAction: z,
                                }),
                                (0, i.jsx)(D.A, { activity: t, user: l, variant: et ? "secondary" : C, onAction: z }),
                                (0, i.jsx)(R.A, { user: l, activity: t, variant: et ? "secondary" : C, onAction: z }),
                            ],
                        });
            })(),
        });
    });
