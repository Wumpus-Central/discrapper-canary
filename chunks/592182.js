n.d(t, {
    A: () => C,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    c = n(397927),
    u = n(707606),
    d = n(573648),
    p = n(235986),
    f = n(82149),
    m = n(734057),
    g = n(287809),
    y = n(977997),
    _ = n(90644),
    b = n(61330),
    A = n(153331),
    h = n(33852),
    v = n(834425),
    O = n(284525),
    j = n(730430),
    S = n(443493),
    I = n(462226),
    x = n(329151),
    E = n(738080),
    P = n(648246),
    T = n(305637),
    N = n(652215),
    w = n(620452);
let C = (0, u.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: a,
            className: u,
            guildId: C,
            channelId: D,
            source: L,
            buttonVariant: k,
            type: G,
            onAction: R,
        } = e,
        M = (0, o.bG)([g.default], () => {
            let e = g.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        V = G === A.O.STREAM_PREVIEW || null != a,
        U = (0, _.A)(t),
        W = U || V ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL,
        F = (null == t ? void 0 : t.type) === N.$pd.HANG_STATUS,
        K = (0, o.bG)([y.A, m.A], () => {
            var e;
            return F ? m.A.getChannel(null == (e = y.A.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        z = W === p.A.Direction.VERTICAL;
    return (0, r.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: W,
        wrap: z ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: l()(u, w.jx, z ? w.Vd : w.xM),
        children: (() => {
            if ((0, b.A)(t))
                return (0, r.jsx)(h.A, {
                    platform: d.A.get(N.fg2.XBOX),
                    variant: k,
                    onAction: R,
                    icon: c.YWd,
                });
            if ((null == t ? void 0 : t.platform) === N.yTV.PS4 || (null == t ? void 0 : t.platform) === N.yTV.PS5)
                return (0, r.jsx)(h.A, {
                    variant: k,
                    platform: d.A.get(N.fg2.PLAYSTATION),
                    onAction: R,
                    icon: c.Xj,
                });
            if (U) {
                let e = (0, r.jsx)(E.A, {
                        activity: t,
                        user: i,
                        guildId: C,
                        channelId: D,
                        source: L,
                        onAction: R,
                    }),
                    n = (0, r.jsx)(x.A, {
                        activity: t,
                        user: i,
                        source: L,
                        onAction: R,
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e],
                });
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(S.A, {
                          guildId: e.guildId,
                          channelId: e.channelId,
                          variant: k,
                          onAction: R,
                      });
            }
            return V
                ? (0, r.jsx)(T.A, {
                      isCurrentUser: M.id === i.id,
                      applicationStream: a,
                      onAction: R,
                  })
                : F && null != K
                  ? (0, r.jsx)(j.A, {
                        userId: i.id,
                        variant: k,
                        hangStatusChannel: K,
                        onAction: R,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(P.A, {
                                activity: t,
                                variant: k,
                                onAction: R,
                            }),
                            (0, r.jsx)(O.A, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: k,
                                onAction: R,
                            }),
                            (0, r.jsx)(I.A, {
                                activity: t,
                                user: i,
                                variant: k,
                                onAction: R,
                            }),
                            (0, r.jsx)(v.A, {
                                user: i,
                                activity: t,
                                variant: k,
                                onAction: R,
                            }),
                        ],
                    });
        })(),
    });
});
