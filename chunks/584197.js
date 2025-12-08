n.d(e, { n: () => E }), n(415506), n(49124);
var i = n(54381),
    l = n(473749),
    s = n(481060),
    r = n(594421),
    u = n(626135),
    a = n(960048),
    o = n(323183),
    c = n(5900),
    d = n(773275),
    T = n(981631);
let E = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: n, disconnect: E } = (0, d.xf)(),
        S = [c.Ij.CONNECTED, c.Ij.INITIALIZING].includes(t),
        I = (0, l.useCallback)(
            () =>
                S
                    ? (e(c.Ij.DISCONNECTED), (0, r.j)(T.rMx.NITRO_WARP_TOGGLED, { is_connecting: !1 }), E())
                    : ((0, r.j)(T.rMx.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(c.Ij.INITIALIZING),
                      n()
                          .then((t) => {
                              t || e(c.Ij.DISCONNECTED);
                          })
                          .catch((t) => {
                              a.Z.captureException(t, { tags: { source: o.D.PRIVATE_BROWSING_PERK_CONNECT } }),
                                  u.default.track(T.rMx.PREMIUM_FEATURE_ERROR, {
                                      error_message: t instanceof Error ? t.message : JSON.stringify(t),
                                      error_source: o.D.PRIVATE_BROWSING_PERK_CONNECT,
                                  }),
                                  e(c.Ij.DISCONNECTED);
                          })),
            [S, E, n, e],
        );
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.rsf, {
            onChange: I,
            checked: S,
        }),
    });
};
