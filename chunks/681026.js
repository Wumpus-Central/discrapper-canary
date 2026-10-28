c.d(e, { E: () => h });
var t = c(477900),
    a = c(582128),
    r = c(503698),
    i = c.n(r),
    n = c(819169),
    o = c(939249),
    l = c(834730),
    m = c(933832),
    u = c(147925),
    d = c(936820);
function h(s) {
    let { className: e, iconUrl: c, icon: r, header: h, completed: k, onClick: p } = s,
        [x, N] = a.useState(!1),
        j = (0, n.A)(k);
    return (
        a.useEffect(() => {
            null != j && k !== j && (N(!0), setTimeout(() => N(!1), 1e3));
        }, [k, j]),
        (0, t.jsxs)(o.D, {
            className: i()(e, d.Nr, { [d.so]: k }),
            onClick: p,
            children: [
                r ?? (0, t.jsx)("img", { className: d.Kk, src: c, alt: "" }),
                (0, t.jsx)(l.E, {
                    color: "text-strong",
                    className: i()(d.t$, d.MY),
                    variant: "text-sm/normal",
                    children: h,
                }),
                k
                    ? (0, t.jsx)(m.CheckmarkLargeIcon, {
                          size: "md",
                          color: "currentColor",
                          className: i()(d.AI, { [d.i0]: x }),
                      })
                    : (0, t.jsx)(u.A, { className: d.UE, direction: u.A.Directions.RIGHT }),
            ],
        })
    );
}
