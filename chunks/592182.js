n.d(t, { A: () => V });
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
    I = n(874546),
    T = n(90644),
    v = n(61330),
    N = n(709309),
    y = n(153331),
    b = n(33852),
    j = n(834425),
    R = n(284525),
    M = n(443493),
    L = n(462226),
    O = n(913948),
    D = n(329151),
    P = n(738080),
    k = n(648246),
    w = n(305637),
    U = n(652215),
    G = n(346640),
    F = n(985018),
    H = n(540807);
let B = (e) => {
        let { user: t, buttonVariant: n, activity: l, onAction: a } = e,
            s = (0, g.aL)();
        return (0, i.jsx)(
            j.A,
            {
                user: t,
                variant: n,
                activity: l,
                onAction: () => {
                    m.s.getConfig({ location: "rich_presence" }).enabled &&
                        (s.dispatch(U.jej.POPOUT_CLOSE),
                        (0, C.closeUserProfileModal)(),
                        (0, A.A)({ source: "rich_presence" }),
                        a?.());
                },
            },
            "custom-activity-button",
        );
    },
    V = (0, d.A)((e) => {
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
                type: V,
                onAction: W,
            } = e,
            K = (0, o.bG)([S.default], () => {
                let e = S.default.getCurrentUser();
                return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
            }),
            z = V === y.O.STREAM_PREVIEW || null != s,
            Y = (0, T.A)(t),
            J = Y || z ? h.A.Direction.HORIZONTAL : h.A.Direction.VERTICAL,
            q = (0, o.bG)([x.A], () => (null != A ? x.A.getChannel(A) : null), [A]),
            { enableRequestToStream: $ } = p.m.useExperiment(
                { guildId: m ?? q?.guild_id, location: "UserActivityActions" },
                { autoTrackExposure: !1 },
            ),
            Z = null != q && $ && (0, _.F9)(t),
            X = (0, N.A)("voice_channel_activity_actions", t?.application_id);
        if (t?.application_id === G.L8)
            return (
                (t = { ...t, buttons: [F.intl.string(F.t.E4kW5O)] }),
                (0, i.jsx)(B, { user: l, buttonVariant: C, activity: t, onAction: W })
            );
        let Q = J === h.A.Direction.VERTICAL;
        return (0, i.jsx)(h.A, {
            grow: 0,
            align: h.A.Align.STRETCH,
            direction: J,
            wrap: Q ? h.A.Wrap.WRAP : h.A.Wrap.NO_WRAP,
            className: a()(d, H.jx, Q ? H.Vd : H.xM),
            children: (() => {
                if (!(0, I.Ay)(t)) {
                    if ((0, v.A)(t))
                        return (0, i.jsx)(b.A, { platform: u.A.get(U.fg2.XBOX), variant: C, onAction: W, icon: c.YWd });
                    if (t?.platform === U.yTV.PS4 || t?.platform === U.yTV.PS5)
                        return (0, i.jsx)(b.A, {
                            variant: C,
                            platform: u.A.get(U.fg2.PLAYSTATION),
                            onAction: W,
                            icon: c.Xj,
                        });
                }
                if (X.length > 0)
                    return (0, i.jsx)(O.A, { distributorCTAConfigs: X, buttonVariant: "overlay-primary" });
                if (Y) {
                    let e = (0, i.jsx)(P.A, { activity: t, user: l, guildId: m, channelId: A, source: g, onAction: W }),
                        n = (0, i.jsx)(D.A, { activity: t, user: l, source: g, onAction: W });
                    return (0, i.jsxs)(c.ButtonGroup, { size: "sm", fullWidth: !0, children: [n, e] });
                }
                if ((0, E.Cy)(t)) {
                    let e = (0, E.UW)(t);
                    return null == e
                        ? null
                        : (0, i.jsx)(M.A, { guildId: e.guildId, channelId: e.channelId, variant: C, onAction: W });
                }
                return z
                    ? (0, i.jsx)(w.A, { isCurrentUser: K.id === l.id, applicationStream: s, onAction: W })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              Z && (0, i.jsx)(f.B, { userId: l.id, channel: q, onAction: W }),
                              (0, i.jsx)(k.A, { activity: t, variant: Z ? "secondary" : C, onAction: W }),
                              (0, i.jsx)(R.A, {
                                  activity: t,
                                  embeddedActivity: n,
                                  user: l,
                                  variant: Z ? "secondary" : C,
                                  onAction: W,
                              }),
                              (0, i.jsx)(L.A, { activity: t, user: l, variant: Z ? "secondary" : C, onAction: W }),
                              (0, i.jsx)(j.A, { user: l, activity: t, variant: Z ? "secondary" : C, onAction: W }),
                          ],
                      });
            })(),
        });
    });
