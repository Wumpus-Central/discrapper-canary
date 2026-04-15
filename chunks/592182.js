n.d(t, { A: () => k });
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
    m = n(159426),
    A = n(25528),
    g = n(655724),
    _ = n(82149),
    p = n(734057),
    f = n(287809),
    E = n(874546),
    C = n(90644),
    x = n(61330),
    S = n(709309),
    I = n(153331),
    T = n(33852),
    v = n(834425),
    N = n(284525),
    y = n(443493),
    b = n(462226),
    j = n(913948),
    R = n(329151),
    M = n(738080),
    L = n(648246),
    O = n(305637),
    D = n(652215),
    P = n(540807);
let k = (0, d.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: l,
            applicationStream: s,
            className: d,
            guildId: k,
            channelId: w,
            source: U,
            buttonVariant: G,
            type: F,
            onAction: H,
        } = e,
        B = (0, o.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        V = F === I.O.STREAM_PREVIEW || null != s,
        W = (0, C.A)(t),
        K = W || V ? h.A.Direction.HORIZONTAL : h.A.Direction.VERTICAL,
        z = (0, o.bG)([p.A], () => (null != w ? p.A.getChannel(w) : null), [w]),
        { enableRequestToStream: Y } = m.m.useExperiment(
            { guildId: k ?? z?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        J = null != z && Y && (0, A.F9)(t),
        q = (0, S.A)("voice_channel_activity_actions", t?.application_id),
        $ = K === h.A.Direction.VERTICAL;
    return (0, i.jsx)(h.A, {
        grow: 0,
        align: h.A.Align.STRETCH,
        direction: K,
        wrap: $ ? h.A.Wrap.WRAP : h.A.Wrap.NO_WRAP,
        className: a()(d, P.jx, $ ? P.Vd : P.xM),
        children: (() => {
            if (!(0, E.Ay)(t)) {
                if ((0, x.A)(t))
                    return (0, i.jsx)(T.A, { platform: u.A.get(D.fg2.XBOX), variant: G, onAction: H, icon: c.YWd });
                if (t?.platform === D.yTV.PS4 || t?.platform === D.yTV.PS5)
                    return (0, i.jsx)(T.A, {
                        variant: G,
                        platform: u.A.get(D.fg2.PLAYSTATION),
                        onAction: H,
                        icon: c.Xj,
                    });
            }
            if (q.length > 0) return (0, i.jsx)(j.A, { distributorCTAConfigs: q, buttonVariant: "overlay-primary" });
            if (W) {
                let e = (0, i.jsx)(M.A, { activity: t, user: l, guildId: k, channelId: w, source: U, onAction: H }),
                    n = (0, i.jsx)(R.A, { activity: t, user: l, source: U, onAction: H });
                return (0, i.jsxs)(c.ButtonGroup, { size: "sm", fullWidth: !0, children: [n, e] });
            }
            if ((0, _.Cy)(t)) {
                let e = (0, _.UW)(t);
                return null == e
                    ? null
                    : (0, i.jsx)(y.A, { guildId: e.guildId, channelId: e.channelId, variant: G, onAction: H });
            }
            return V
                ? (0, i.jsx)(O.A, { isCurrentUser: B.id === l.id, applicationStream: s, onAction: H })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          J && (0, i.jsx)(g.B, { userId: l.id, channel: z, onAction: H }),
                          (0, i.jsx)(L.A, { activity: t, variant: J ? "secondary" : G, onAction: H }),
                          (0, i.jsx)(N.A, {
                              activity: t,
                              embeddedActivity: n,
                              user: l,
                              variant: J ? "secondary" : G,
                              onAction: H,
                          }),
                          (0, i.jsx)(b.A, { activity: t, user: l, variant: J ? "secondary" : G, onAction: H }),
                          (0, i.jsx)(v.A, { user: l, activity: t, variant: J ? "secondary" : G, onAction: H }),
                      ],
                  });
        })(),
    });
});
