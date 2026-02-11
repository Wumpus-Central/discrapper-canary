n.d(e, { A: () => D });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    d = n(397927),
    u = n(707606),
    c = n(573648),
    A = n(235986),
    m = n(338234),
    p = n(25528),
    h = n(655724),
    g = n(82149),
    f = n(734057),
    C = n(287809),
    S = n(977997),
    E = n(90644),
    T = n(61330),
    v = n(153331),
    y = n(33852),
    x = n(834425),
    N = n(284525),
    _ = n(730430),
    I = n(443493),
    j = n(462226),
    P = n(329151),
    U = n(738080),
    R = n(648246),
    L = n(305637),
    b = n(652215),
    O = n(37206);
let D = (0, u.A)((t) => {
    let {
            activity: e,
            embeddedActivity: n,
            user: l,
            applicationStream: a,
            className: u,
            guildId: D,
            channelId: M,
            source: H,
            buttonVariant: G,
            type: F,
            onAction: V,
        } = t,
        w = (0, o.bG)([C.default], () => {
            let t = C.default.getCurrentUser();
            return s()(null != t, "UserActivityActions: currentUser cannot be undefined"), t;
        }),
        W = F === v.O.STREAM_PREVIEW || null != a,
        k = (0, E.A)(e),
        B = k || W ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL,
        Y = e?.type === b.$pd.HANG_STATUS,
        z = (0, o.bG)([S.A, f.A], () => (Y ? f.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null)),
        J = (0, o.bG)([f.A], () => (null != M ? f.A.getChannel(M) : null), [M]),
        { enableUserHoverActivities: $ } = (0, m.fC)({ guildId: D ?? J?.guild_id, location: "UserActivityActions" }),
        q = B === A.A.Direction.VERTICAL;
    return (0, i.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: B,
        wrap: q ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, O.jx, q ? O.Vd : O.xM),
        children: (() => {
            if ((0, T.A)(e))
                return (0, i.jsx)(y.A, { platform: c.A.get(b.fg2.XBOX), variant: G, onAction: V, icon: d.YWd });
            if (e?.platform === b.yTV.PS4 || e?.platform === b.yTV.PS5)
                return (0, i.jsx)(y.A, { variant: G, platform: c.A.get(b.fg2.PLAYSTATION), onAction: V, icon: d.Xj });
            if (k) {
                let t = (0, i.jsx)(U.A, { activity: e, user: l, guildId: D, channelId: M, source: H, onAction: V }),
                    n = (0, i.jsx)(P.A, { activity: e, user: l, source: H, onAction: V });
                return (0, i.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [n, t] });
            }
            if ((0, g.Cy)(e)) {
                let t = (0, g.UW)(e);
                return null == t
                    ? null
                    : (0, i.jsx)(I.A, { guildId: t.guildId, channelId: t.channelId, variant: G, onAction: V });
            }
            return W
                ? (0, i.jsx)(L.A, { isCurrentUser: w.id === l.id, applicationStream: a, onAction: V })
                : Y && null != z
                  ? (0, i.jsx)(_.A, { userId: l.id, variant: G, hangStatusChannel: z, onAction: V })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(R.A, { activity: e, variant: G, onAction: V }),
                            (0, i.jsx)(N.A, { activity: e, embeddedActivity: n, user: l, variant: G, onAction: V }),
                            (0, i.jsx)(j.A, { activity: e, user: l, variant: G, onAction: V }),
                            null != J && $ && (0, p.F9)(e)
                                ? (0, i.jsx)(h.B, { userId: l.id, channel: J, onAction: V })
                                : null,
                            (0, i.jsx)(x.A, { user: l, activity: e, variant: G, onAction: V }),
                        ],
                    });
        })(),
    });
});
