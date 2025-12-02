n.d(e, { n: () => c });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    s = n(594421),
    u = n(5900),
    a = n(773275),
    o = n(981631);
let c = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: n, disconnect: c } = (0, a.xf)(),
        d = [u.Ij.CONNECTED, u.Ij.INITIALIZING].includes(t),
        E = (0, r.useCallback)(
            () =>
                d
                    ? (e(u.Ij.DISCONNECTED), (0, s.j)(o.rMx.NITRO_WARP_TOGGLED, { is_connecting: !1 }), c())
                    : ((0, s.j)(o.rMx.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
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
        children: (0, i.jsx)(l.rsf, {
            onChange: E,
            checked: d,
        }),
    });
};
