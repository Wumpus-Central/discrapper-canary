n.d(e, { n: () => T }), n(415506), n(49124);
var i = n(54381),
    l = n(473749),
    s = n(481060),
    u = n(594421),
    r = n(626135),
    a = n(960048),
    o = n(323183),
    c = n(5900),
    d = n(773275),
    S = n(981631);
let T = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: n, disconnect: T } = (0, d.xf)(),
        E = [c.Ij.CONNECTED, c.Ij.INITIALIZING].includes(t),
        g = (0, l.useCallback)(
            () =>
                E
                    ? (e(c.Ij.DISCONNECTED), (0, u.j)(S.rMx.NITRO_WARP_TOGGLED, { is_connecting: !1 }), T())
                    : ((0, u.j)(S.rMx.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(c.Ij.INITIALIZING),
                      n()
                          .then((t) => {
                              t || e(c.Ij.DISCONNECTED);
                          })
                          .catch((t) => {
                              a.Z.captureException(t, { tags: { source: o.D.PRIVATE_BROWSING_PERK_CONNECT } }),
                                  r.default.track(S.rMx.PREMIUM_FEATURE_ERROR, {
                                      error_message: t instanceof Error ? t.message : JSON.stringify(t),
                                      error_source: o.D.PRIVATE_BROWSING_PERK_CONNECT,
                                  }),
                                  e(c.Ij.DISCONNECTED);
                          })),
            [E, T, n, e],
        );
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.rsf, {
            onChange: g,
            checked: E,
        }),
    });
};
