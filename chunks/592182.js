n.d(t, {
    A: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(284009),
    o = n.n(a),
    s = n(311907),
    c = n(397927),
    u = n(707606),
    d = n(573648),
    f = n(235986),
    p = n(338234),
    m = n(655724),
    g = n(82149),
    y = n(734057),
    b = n(287809),
    h = n(977997),
    A = n(90644),
    _ = n(61330),
    v = n(153331),
    O = n(33852),
    S = n(834425),
    j = n(284525),
    I = n(730430),
    x = n(443493),
    E = n(462226),
    P = n(329151),
    C = n(738080),
    T = n(648246),
    N = n(305637),
    w = n(652215),
    L = n(620452);
let D = (0, u.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: a,
            className: u,
            guildId: D,
            channelId: R,
            source: k,
            buttonVariant: U,
            type: M,
            onAction: V,
        } = e,
        G = (0, s.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        F = M === v.O.STREAM_PREVIEW || null != a,
        H = (0, A.A)(t),
        W = H || F ? f.A.Direction.HORIZONTAL : f.A.Direction.VERTICAL,
        B = (null == t ? void 0 : t.type) === w.$pd.HANG_STATUS,
        z = (0, s.bG)([h.A, y.A], () => {
            var e;
            return B ? y.A.getChannel(null == (e = h.A.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        K = (0, s.bG)([y.A], () => (null != R ? y.A.getChannel(R) : null), [R]),
        { enableUserHoverActivities: Y } = (0, p.fC)({
            guildId: null != D ? D : null == K ? void 0 : K.guild_id,
            location: "UserActivityActions",
        }),
        J = W === f.A.Direction.VERTICAL;
    return (0, r.jsx)(f.A, {
        grow: 0,
        align: f.A.Align.STRETCH,
        direction: W,
        wrap: J ? f.A.Wrap.WRAP : f.A.Wrap.NO_WRAP,
        className: l()(u, L.jx, J ? L.Vd : L.xM),
        children: (() => {
            if ((0, _.A)(t))
                return (0, r.jsx)(O.A, {
                    platform: d.A.get(w.fg2.XBOX),
                    variant: U,
                    onAction: V,
                    icon: c.YWd,
                });
            if ((null == t ? void 0 : t.platform) === w.yTV.PS4 || (null == t ? void 0 : t.platform) === w.yTV.PS5)
                return (0, r.jsx)(O.A, {
                    variant: U,
                    platform: d.A.get(w.fg2.PLAYSTATION),
                    onAction: V,
                    icon: c.Xj,
                });
            if (H) {
                let e = (0, r.jsx)(C.A, {
                        activity: t,
                        user: i,
                        guildId: D,
                        channelId: R,
                        source: k,
                        onAction: V,
                    }),
                    n = (0, r.jsx)(P.A, {
                        activity: t,
                        user: i,
                        source: k,
                        onAction: V,
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e],
                });
            }
            if ((0, g.Cy)(t)) {
                let e = (0, g.UW)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(x.A, {
                          guildId: e.guildId,
                          channelId: e.channelId,
                          variant: U,
                          onAction: V,
                      });
            }
            return F
                ? (0, r.jsx)(N.A, {
                      isCurrentUser: G.id === i.id,
                      applicationStream: a,
                      onAction: V,
                  })
                : B && null != z
                  ? (0, r.jsx)(I.A, {
                        userId: i.id,
                        variant: U,
                        hangStatusChannel: z,
                        onAction: V,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(T.A, {
                                activity: t,
                                variant: U,
                                onAction: V,
                            }),
                            (0, r.jsx)(j.A, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: U,
                                onAction: V,
                            }),
                            (0, r.jsx)(E.A, {
                                activity: t,
                                user: i,
                                variant: U,
                                onAction: V,
                            }),
                            null != K && Y
                                ? (0, r.jsx)(m.B, {
                                      userId: i.id,
                                      channel: K,
                                      onAction: V,
                                  })
                                : null,
                            (0, r.jsx)(S.A, {
                                user: i,
                                activity: t,
                                variant: U,
                                onAction: V,
                            }),
                        ],
                    });
        })(),
    });
});
