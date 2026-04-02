i.d(e, { A: () => Y });
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
    p = i(235986),
    m = i(352306),
    A = i(829203),
    h = i(267102),
    g = i(159426),
    f = i(25528),
    S = i(655724),
    T = i(82149),
    E = i(657331),
    C = i(734057),
    v = i(287809),
    y = i(977997),
    _ = i(874546),
    I = i(90644),
    N = i(61330),
    x = i(709309),
    j = i(153331),
    P = i(33852),
    L = i(834425),
    O = i(284525),
    U = i(730430),
    R = i(443493),
    D = i(462226),
    b = i(913948),
    M = i(329151),
    G = i(738080),
    V = i(648246),
    H = i(305637),
    w = i(652215),
    F = i(346640),
    B = i(985018),
    W = i(540807);
let k = (t) => {
        let { user: e, buttonVariant: i, activity: l, onAction: r } = t,
            s = (0, h.aL)();
        return (0, n.jsx)(
            L.A,
            {
                user: e,
                variant: i,
                activity: l,
                onAction: () => {
                    m.s.getConfig({ location: "rich_presence" }).enabled &&
                        (s.dispatch(w.jej.POPOUT_CLOSE),
                        (0, E.closeUserProfileModal)(),
                        (0, A.A)({ source: "rich_presence" }),
                        r?.());
                },
            },
            "custom-activity-button",
        );
    },
    Y = (0, u.A)((t) => {
        let {
                activity: e,
                embeddedActivity: i,
                user: l,
                applicationStream: s,
                className: u,
                guildId: m,
                channelId: A,
                source: h,
                buttonVariant: E,
                type: Y,
                onAction: $,
            } = t,
            z = (0, o.bG)([v.default], () => {
                let t = v.default.getCurrentUser();
                return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t;
            }),
            J = Y === j.O.STREAM_PREVIEW || null != s,
            K = (0, I.A)(e),
            Z = K || J ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL,
            q = e?.type === w.$pd.HANG_STATUS,
            X = (0, o.bG)([y.A, C.A], () => (q ? C.A.getChannel(y.A.getVoiceStateForUser(l.id)?.channelId) : null)),
            Q = (0, o.bG)([C.A], () => (null != A ? C.A.getChannel(A) : null), [A]),
            { enableRequestToStream: tt } = g.m.useExperiment(
                { guildId: m ?? Q?.guild_id, location: "UserActivityActions" },
                { autoTrackExposure: !1 },
            ),
            te = null != Q && tt && (0, f.F9)(e),
            ti = (0, x.A)("voice_channel_activity_actions", e?.application_id);
        if (e?.application_id === F.L8)
            return (
                (e = { ...e, buttons: [B.intl.string(B.t.E4kW5O)] }),
                (0, n.jsx)(k, { user: l, buttonVariant: E, activity: e, onAction: $ })
            );
        let tn = Z === p.A.Direction.VERTICAL;
        return (0, n.jsx)(p.A, {
            grow: 0,
            align: p.A.Align.STRETCH,
            direction: Z,
            wrap: tn ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
            className: r()(u, W.jx, tn ? W.Vd : W.xM),
            children: (() => {
                if (!(0, _.A)(e)) {
                    if ((0, N.A)(e))
                        return (0, n.jsx)(P.A, { platform: c.A.get(w.fg2.XBOX), variant: E, onAction: $, icon: d.YWd });
                    if (e?.platform === w.yTV.PS4 || e?.platform === w.yTV.PS5)
                        return (0, n.jsx)(P.A, {
                            variant: E,
                            platform: c.A.get(w.fg2.PLAYSTATION),
                            onAction: $,
                            icon: d.Xj,
                        });
                }
                if (ti.length > 0)
                    return (0, n.jsx)(b.A, { distributorCTAConfigs: ti, buttonVariant: "overlay-primary" });
                if (K) {
                    let t = (0, n.jsx)(G.A, { activity: e, user: l, guildId: m, channelId: A, source: h, onAction: $ }),
                        i = (0, n.jsx)(M.A, { activity: e, user: l, source: h, onAction: $ });
                    return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, t] });
                }
                if ((0, T.Cy)(e)) {
                    let t = (0, T.UW)(e);
                    return null == t
                        ? null
                        : (0, n.jsx)(R.A, { guildId: t.guildId, channelId: t.channelId, variant: E, onAction: $ });
                }
                return J
                    ? (0, n.jsx)(H.A, { isCurrentUser: z.id === l.id, applicationStream: s, onAction: $ })
                    : q && null != X
                      ? (0, n.jsx)(U.A, { userId: l.id, variant: E, hangStatusChannel: X, onAction: $ })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                te && (0, n.jsx)(S.B, { userId: l.id, channel: Q, onAction: $ }),
                                (0, n.jsx)(V.A, { activity: e, variant: te ? "secondary" : E, onAction: $ }),
                                (0, n.jsx)(O.A, {
                                    activity: e,
                                    embeddedActivity: i,
                                    user: l,
                                    variant: te ? "secondary" : E,
                                    onAction: $,
                                }),
                                (0, n.jsx)(D.A, { activity: e, user: l, variant: te ? "secondary" : E, onAction: $ }),
                                (0, n.jsx)(L.A, { user: l, activity: e, variant: te ? "secondary" : E, onAction: $ }),
                            ],
                        });
            })(),
        });
    });
