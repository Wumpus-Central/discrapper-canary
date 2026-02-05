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
    _ = i(338234),
    A = i(655724),
    g = i(82149),
    h = i(734057),
    f = i(287809),
    p = i(977997),
    S = i(90644),
    I = i(61330),
    x = i(153331),
    v = i(33852),
    C = i(834425),
    E = i(284525),
    y = i(730430),
    T = i(443493),
    N = i(462226),
    b = i(329151),
    j = i(738080),
    L = i(648246),
    P = i(305637),
    O = i(652215),
    R = i(620452);
let D = (0, c.A)((e) => {
    let {
            activity: t,
            embeddedActivity: i,
            user: a,
            applicationStream: r,
            className: c,
            guildId: D,
            channelId: U,
            source: M,
            buttonVariant: w,
            type: V,
            onAction: G,
        } = e,
        k = (0, o.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        F = V === x.O.STREAM_PREVIEW || null != r,
        H = (0, S.A)(t),
        W = H || F ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL,
        B = t?.type === O.$pd.HANG_STATUS,
        z = (0, o.bG)([p.A, h.A], () => (B ? h.A.getChannel(p.A.getVoiceStateForUser(a.id)?.channelId) : null)),
        Y = (0, o.bG)([h.A], () => (null != U ? h.A.getChannel(U) : null), [U]),
        { enableUserHoverActivities: K } = (0, _.fC)({ guildId: D ?? Y?.guild_id, location: "UserActivityActions" }),
        J = W === m.A.Direction.VERTICAL;
    return (0, n.jsx)(m.A, {
        grow: 0,
        align: m.A.Align.STRETCH,
        direction: W,
        wrap: J ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
        className: l()(c, R.jx, J ? R.Vd : R.xM),
        children: (() => {
            if ((0, I.A)(t))
                return (0, n.jsx)(v.A, { platform: u.A.get(O.fg2.XBOX), variant: w, onAction: G, icon: d.YWd });
            if (t?.platform === O.yTV.PS4 || t?.platform === O.yTV.PS5)
                return (0, n.jsx)(v.A, { variant: w, platform: u.A.get(O.fg2.PLAYSTATION), onAction: G, icon: d.Xj });
            if (H) {
                let e = (0, n.jsx)(j.A, { activity: t, user: a, guildId: D, channelId: U, source: M, onAction: G }),
                    i = (0, n.jsx)(b.A, { activity: t, user: a, source: M, onAction: G });
                return (0, n.jsxs)(d.ButtonGroup, { size: "sm", fullWidth: !0, children: [i, e] });
            }
            if ((0, g.Cy)(t)) {
                let e = (0, g.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(T.A, { guildId: e.guildId, channelId: e.channelId, variant: w, onAction: G });
            }
            return F
                ? (0, n.jsx)(P.A, { isCurrentUser: k.id === a.id, applicationStream: r, onAction: G })
                : B && null != z
                  ? (0, n.jsx)(y.A, { userId: a.id, variant: w, hangStatusChannel: z, onAction: G })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(L.A, { activity: t, variant: w, onAction: G }),
                            (0, n.jsx)(E.A, { activity: t, embeddedActivity: i, user: a, variant: w, onAction: G }),
                            (0, n.jsx)(N.A, { activity: t, user: a, variant: w, onAction: G }),
                            null != Y && K ? (0, n.jsx)(A.B, { userId: a.id, channel: Y, onAction: G }) : null,
                            (0, n.jsx)(C.A, { user: a, activity: t, variant: w, onAction: G }),
                        ],
                    });
        })(),
    });
});
