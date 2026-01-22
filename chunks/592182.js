n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(707606),
    d = n(573648),
    f = n(235986),
    p = n(82149),
    _ = n(734057),
    h = n(287809),
    m = n(977997),
    g = n(90644),
    E = n(61330),
    b = n(153331),
    y = n(33852),
    O = n(834425),
    A = n(284525),
    v = n(730430),
    S = n(443493),
    I = n(462226),
    T = n(329151),
    C = n(738080),
    N = n(648246),
    R = n(305637),
    w = n(652215),
    P = n(620452);
let D = (0, u.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: s,
            className: u,
            guildId: D,
            channelId: x,
            source: L,
            buttonVariant: j,
            type: M,
            onAction: k,
        } = e,
        U = (0, l.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        G = M === b.O.STREAM_PREVIEW || null != s,
        V = (0, g.A)(t),
        F = V || G ? f.A.Direction.HORIZONTAL : f.A.Direction.VERTICAL,
        B = (null == t ? void 0 : t.type) === w.$pd.HANG_STATUS,
        H = (0, l.bG)([m.A, _.A], () => {
            var e;
            return B ? _.A.getChannel(null == (e = m.A.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        Y = () => {
            if ((0, E.A)(t))
                return (0, r.jsx)(y.A, {
                    platform: d.A.get(w.fg2.XBOX),
                    variant: j,
                    onAction: k,
                    icon: c.YWd,
                });
            if ((null == t ? void 0 : t.platform) === w.yTV.PS4 || (null == t ? void 0 : t.platform) === w.yTV.PS5)
                return (0, r.jsx)(y.A, {
                    variant: j,
                    platform: d.A.get(w.fg2.PLAYSTATION),
                    onAction: k,
                    icon: c.Xj,
                });
            if (V) {
                let e = (0, r.jsx)(C.A, {
                        activity: t,
                        user: i,
                        guildId: D,
                        channelId: x,
                        source: L,
                        onAction: k,
                    }),
                    n = (0, r.jsx)(T.A, {
                        activity: t,
                        user: i,
                        source: L,
                        onAction: k,
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e],
                });
            }
            if ((0, p.Cy)(t)) {
                let e = (0, p.UW)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(S.A, {
                          guildId: e.guildId,
                          channelId: e.channelId,
                          variant: j,
                          onAction: k,
                      });
            }
            return G
                ? (0, r.jsx)(R.A, {
                      isCurrentUser: U.id === i.id,
                      applicationStream: s,
                      onAction: k,
                  })
                : B && null != H
                  ? (0, r.jsx)(v.A, {
                        userId: i.id,
                        variant: j,
                        hangStatusChannel: H,
                        onAction: k,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N.A, {
                                activity: t,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(A.A, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(I.A, {
                                activity: t,
                                user: i,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(O.A, {
                                user: i,
                                activity: t,
                                variant: j,
                                onAction: k,
                            }),
                        ],
                    });
        },
        W = F === f.A.Direction.VERTICAL;
    return (0, r.jsx)(f.A, {
        grow: 0,
        align: f.A.Align.STRETCH,
        direction: F,
        wrap: W ? f.A.Wrap.WRAP : f.A.Wrap.NO_WRAP,
        className: a()(u, P.jx, W ? P.Vd : P.xM),
        children: Y(),
    });
});
