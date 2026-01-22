n.d(t, {
    A: () => m,
});
var a = n(627968),
    l = n(311907),
    i = n(435371),
    r = n(397927),
    s = n(461213),
    o = n(427262),
    c = n(818348),
    d = n(985018),
    u = n(979926);

function m() {
    var e;
    let t = (0, l.bG)([s.A], () => s.A.getStatus()),
        n = null != (e = (0, o.MU)(t)) ? e : "",
        m = t === c.cl.INVISIBLE || t === c.cl.OFFLINE;
    return (0, a.jsxs)("div", {
        className: u.k,
        children: [
            (0, a.jsxs)(r.AC4, {
                tag: "div",
                children: [d.intl.string(d.t.AHoLf4), ":"],
            }),
            n,
            n.length > 0 &&
                m &&
                (0, a.jsx)(i.m_, {
                    text: d.intl.string(d.t.L99HQm),
                    children: (0, a.jsx)(r.EpV, {
                        size: "xs",
                        color: r.LU0.colors.STATUS_WARNING,
                        "aria-label": d.intl.string(d.t.L99HQm),
                    }),
                }),
        ],
    });
}
