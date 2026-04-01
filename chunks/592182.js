i.d(t, { A: () => W });
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(284009),
    r = i.n(s),
    o = i(311907),
    c = i(397927),
    d = i(707606),
    u = i(573648),
    m = i(235986),
    _ = i(352306),
    p = i(829203),
    h = i(267102),
    A = i(159426),
    g = i(25528),
    f = i(655724),
    v = i(82149),
    S = i(657331),
    I = i(734057),
    T = i(287809),
    C = i(977997),
    E = i(874546),
    y = i(90644),
    x = i(61330),
    N = i(153331),
    b = i(33852),
    L = i(834425),
    P = i(284525),
    j = i(730430),
    D = i(443493),
    O = i(462226),
    U = i(329151),
    R = i(738080),
    M = i(648246),
    w = i(305637),
    V = i(652215),
    G = i(346640),
    H = i(985018),
    F = i(540807);
let k = (e) => {
        let { user: t, buttonVariant: i, activity: a, onAction: l } = e,
            s = (0, h.aL)();
        return (0, n.jsx)(
            L.A,
            {
                user: t,
                variant: i,
                activity: a,
                onAction: () => {
                    _.s.getConfig({ location: "rich_presence" }).enabled &&
                        (s.dispatch(V.jej.POPOUT_CLOSE),
                        (0, S.closeUserProfileModal)(),
                        (0, p.A)({ source: "rich_presence" }),
                        l?.());
                },
            },
            "custom-activity-button",
        );
    },
    W = (0, d.A)((e) => {
        let {
                activity: t,
                embeddedActivity: i,
                user: a,
                applicationStream: s,
                className: d,
                guildId: _,
                channelId: p,
                source: h,
                buttonVariant: S,
                type: W,
                onAction: B,
            } = e,
            Y = (0, o.bG)([T.default], () => {
                let e = T.default.getCurrentUser();
                return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
            }),
            z = W === N.O.STREAM_PREVIEW || null != s,
            $ = (0, y.A)(t),
            J = $ || z ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL,
            K = t?.type === V.$pd.HANG_STATUS,
            q = (0, o.bG)([C.A, I.A], () => (K ? I.A.getChannel(C.A.getVoiceStateForUser(a.id)?.channelId) : null)),
            X = (0, o.bG)([I.A], () => (null != p ? I.A.getChannel(p) : null), [p]),
            { enableRequestToStream: Z } = A.m.useExperiment(
                { guildId: _ ?? X?.guild_id, location: "UserActivityActions" },
                { autoTrackExposure: !1 },
            ),
            Q = null != X && Z && (0, g.F9)(t);
        if (t?.application_id === G.L8)
            return (
                (t = { ...t, buttons: [H.intl.string(H.t.E4kW5O)] }),
                (0, n.jsx)(k, { user: a, buttonVariant: S, activity: t, onAction: B })
            );
        let ee = J === m.A.Direction.VERTICAL;
        return (0, n.jsx)(m.A, {
            grow: 0,
            align: m.A.Align.STRETCH,
            direction: J,
            wrap: ee ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
            className: l()(d, F.jx, ee ? F.Vd : F.xM),
            children: (() => {
                if (!(0, E.A)(t)) {
                    if ((0, x.A)(t))
                        return (0, n.jsx)(b.A, { platform: u.A.get(V.fg2.XBOX), variant: S, onAction: B, icon: c.YWd });
                    if (t?.platform === V.yTV.PS4 || t?.platform === V.yTV.PS5)
                        return (0, n.jsx)(b.A, {
                            variant: S,
                            platform: u.A.get(V.fg2.PLAYSTATION),
                            onAction: B,
                            icon: c.Xj,
                        });
                }
                if ($) {
                    let e = (0, n.jsx)(R.A, { activity: t, user: a, guildId: _, channelId: p, source: h, onAction: B }),
                        i = (0, n.jsx)(U.A, { activity: t, user: a, source: h, onAction: B });
                    return (0, n.jsxs)(c.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, e] });
                }
                if ((0, v.Cy)(t)) {
                    let e = (0, v.UW)(t);
                    return null == e
                        ? null
                        : (0, n.jsx)(D.A, { guildId: e.guildId, channelId: e.channelId, variant: S, onAction: B });
                }
                return z
                    ? (0, n.jsx)(w.A, { isCurrentUser: Y.id === a.id, applicationStream: s, onAction: B })
                    : K && null != q
                      ? (0, n.jsx)(j.A, { userId: a.id, variant: S, hangStatusChannel: q, onAction: B })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                Q && (0, n.jsx)(f.B, { userId: a.id, channel: X, onAction: B }),
                                (0, n.jsx)(M.A, { activity: t, variant: Q ? "secondary" : S, onAction: B }),
                                (0, n.jsx)(P.A, {
                                    activity: t,
                                    embeddedActivity: i,
                                    user: a,
                                    variant: Q ? "secondary" : S,
                                    onAction: B,
                                }),
                                (0, n.jsx)(O.A, { activity: t, user: a, variant: Q ? "secondary" : S, onAction: B }),
                                (0, n.jsx)(L.A, { user: a, activity: t, variant: Q ? "secondary" : S, onAction: B }),
                            ],
                        });
            })(),
        });
    });
