n.d(t, { n: () => l });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(5900),
    s = n(953865);
let l = () => {
    let { connectionStatus: e, setConnectionStatus: t, connect: n, disconnect: l } = (0, s.xf)(),
        c = [o.Ij.CONNECTED, o.Ij.INITIALIZING].includes(e),
        u = (0, i.useCallback)(
            () =>
                c
                    ? (t(o.Ij.DISCONNECTED), l())
                    : (t(o.Ij.INITIALIZING),
                      n()
                          .then((e) => {
                              e || t(o.Ij.DISCONNECTED);
                          })
                          .catch(() => {
                              t(o.Ij.DISCONNECTED);
                          })),
            [c, l, n, t],
        );
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(a.rsf, {
            onChange: u,
            checked: c,
        }),
    });
};
