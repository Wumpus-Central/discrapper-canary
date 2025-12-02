n.d(e, { n: () => c });
var i = n(54381),
    l = n(473749),
    s = n(481060),
    r = n(594421),
    u = n(5900),
    a = n(773275),
    o = n(981631);
let c = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: n, disconnect: c } = (0, a.xf)(),
        d = [u.Ij.CONNECTED, u.Ij.INITIALIZING].includes(t),
        E = (0, l.useCallback)(
            () =>
                d
                    ? (e(u.Ij.DISCONNECTED), (0, r.j)(o.rMx.NITRO_WARP_TOGGLED, { is_connecting: !1 }), c())
                    : ((0, r.j)(o.rMx.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(u.Ij.INITIALIZING),
                      n()
                          .then((t) => {
                              t || e(u.Ij.DISCONNECTED);
                          })
                          .catch(() => {
                              e(u.Ij.DISCONNECTED);
                          })),
            [d, c, n, e],
        );
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.rsf, {
            onChange: E,
            checked: d,
        }),
    });
};
