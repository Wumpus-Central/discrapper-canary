n.d(t, { A: () => m });
var i = n(627968),
    s = n(311907),
    l = n(990078),
    a = n(140735),
    r = n(695366),
    o = n(827734),
    d = n(461213),
    c = n(427262),
    u = n(818348),
    p = n(985018),
    h = n(466573);
function m() {
    let e = (0, s.bG)([d.A], () => d.A.getStatus()),
        t = (0, c.MU)(e) ?? "",
        n = e === u.cl.INVISIBLE || e === u.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: h.k,
        children: [
            (0, i.jsxs)(a.A, { tag: "div", children: [p.intl.string(p.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(l.m, {
                    text: p.intl.string(p.t.L99HQm),
                    children: (0, i.jsx)(r.E, {
                        size: "xs",
                        color: o.A.colors.STATUS_WARNING,
                        "aria-label": p.intl.string(p.t.L99HQm),
                    }),
                }),
        ],
    });
}
