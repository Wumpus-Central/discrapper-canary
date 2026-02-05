i.d(t, { A: () => D });
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    r = i(284009),
    s = i.n(r),
    o = i(311907),
    d = i(397927),
    c = i(707606),
    u = i(573648),
    m = i(235986),
    A = i(338234),
    _ = i(25528),
    g = i(655724),
    h = i(82149),
    p = i(734057),
    f = i(287809),
    S = i(977997),
    I = i(90644),
    x = i(61330),
    v = i(153331),
    C = i(33852),
    E = i(834425),
    y = i(284525),
    T = i(730430),
    N = i(443493),
    b = i(462226),
    j = i(329151),
    L = i(738080),
    P = i(648246),
    R = i(305637),
    O = i(652215),
    U = i(620452);
let D = (0, c.A)((e) => {
    let {
            activity: t,
            embeddedActivity: i,
            user: a,
            applicationStream: r,
            className: c,
            guildId: D,
            channelId: w,
            source: M,
            buttonVariant: V,
            type: G,
            onAction: k,
        } = e,
        F = (0, o.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        H = G === v.O.STREAM_PREVIEW || null != r,
        W = (0, I.A)(t),
        B = W || H ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL,
        z = t?.type === O.$pd.HANG_STATUS,
        Y = (0, o.bG)([S.A, p.A], () => (z ? p.A.getChannel(S.A.getVoiceStateForUser(a.id)?.channelId) : null)),
        K = (0, o.bG)([p.A], () => (null != w ? p.A.getChannel(w) : null), [w]),
        { enableUserHoverActivities: J } = (0, A.fC)({ guildId: D ?? K?.guild_id, location: "UserActivityActions" }),
        Z = B === m.A.Direction.VERTICAL;
    return (0, n.jsx)(m.A, {
        grow: 0,
        align: m.A.Align.STRETCH,
        direction: B,
        wrap: Z ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
        className: l()(c, U.jx, Z ? U.Vd : U.xM),
        children: (() => {
            if ((0, x.A)(t))
                return (0, n.jsx)(C.A, { platform: u.A.get(O.fg2.XBOX), variant: V, onAction: k, icon: d.YWd });
            if (t?.platform === O.yTV.PS4 || t?.platform === O.yTV.PS5)
                return (0, n.jsx)(C.A, { variant: V, platform: u.A.get(O.fg2.PLAYSTATION), onAction: k, icon: d.Xj });
            if (W) {
                let e = (0, n.jsx)(L.A, { activity: t, user: a, guildId: D, channelId: w, source: M, onAction: k }),
                    i = (0, n.jsx)(j.A, { activity: t, user: a, source: M, onAction: k });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, e] });
            }
            if ((0, h.Cy)(t)) {
                let e = (0, h.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(N.A, { guildId: e.guildId, channelId: e.channelId, variant: V, onAction: k });
            }
            return H
                ? (0, n.jsx)(R.A, { isCurrentUser: F.id === a.id, applicationStream: r, onAction: k })
                : z && null != Y
                  ? (0, n.jsx)(T.A, { userId: a.id, variant: V, hangStatusChannel: Y, onAction: k })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(P.A, { activity: t, variant: V, onAction: k }),
                            (0, n.jsx)(y.A, { activity: t, embeddedActivity: i, user: a, variant: V, onAction: k }),
                            (0, n.jsx)(b.A, { activity: t, user: a, variant: V, onAction: k }),
                            null != K && J && (0, _.F9)(t)
                                ? (0, n.jsx)(g.B, { userId: a.id, channel: K, onAction: k })
                                : null,
                            (0, n.jsx)(E.A, { user: a, activity: t, variant: V, onAction: k }),
                        ],
                    });
        })(),
    });
});
