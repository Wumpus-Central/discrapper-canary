n.d(t, { A: () => m });
var a = n(627968),
    s = n(311907),
    i = n(435371),
    l = n(397927),
    r = n(461213),
    o = n(427262),
    d = n(818348),
    c = n(985018),
    u = n(979926);
function m() {
    let e = (0, s.bG)([r.A], () => r.A.getStatus()),
        t = (0, o.MU)(e) ?? "",
        n = e === d.cl.INVISIBLE || e === d.cl.OFFLINE;
    return (0, a.jsxs)("div", {
        className: u.k,
        children: [
            (0, a.jsxs)(l.AC4, { tag: "div", children: [c.intl.string(c.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, a.jsx)(i.m_, {
                    text: c.intl.string(c.t.L99HQm),
                    children: (0, a.jsx)(l.EpV, {
                        size: "xs",
                        color: l.LU0.colors.STATUS_WARNING,
                        "aria-label": c.intl.string(c.t.L99HQm),
                    }),
                }),
        ],
    });
}
