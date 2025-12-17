n.d(e, { n: () => E }), n(415506), n(49124);
var i = n(54381),
    l = n(473749),
    s = n(481060),
    u = n(594421),
    r = n(626135),
    a = n(960048),
    o = n(323183),
    S = n(5900),
    T = n(773275),
    c = n(981631);
let E = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: n, disconnect: E } = (0, T.xf)(),
        d = [S.Ij.CONNECTED, S.Ij.INITIALIZING].includes(t),
        g = (0, l.useCallback)(
            () =>
                d
                    ? (e(S.Ij.DISCONNECTED), (0, u.j)(c.rMx.NITRO_WARP_TOGGLED, { is_connecting: !1 }), E())
                    : ((0, u.j)(c.rMx.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(S.Ij.INITIALIZING),
                      n()
                          .then((t) => {
                              t || e(S.Ij.DISCONNECTED);
                          })
                          .catch((t) => {
                              a.Z.captureException(t, { tags: { source: o.D.PRIVATE_BROWSING_PERK_CONNECT } }),
                                  r.default.track(c.rMx.PREMIUM_FEATURE_ERROR, {
                                      error_message: t instanceof Error ? t.message : JSON.stringify(t),
                                      error_source: o.D.PRIVATE_BROWSING_PERK_CONNECT,
                                  }),
                                  e(S.Ij.DISCONNECTED);
                          })),
            [d, E, n, e],
        );
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.rsf, {
            onChange: g,
            checked: d,
        }),
    });
};
