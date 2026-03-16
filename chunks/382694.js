n.d(t, { A: () => u });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(102815),
    o = n(189024),
    d = n(985018),
    c = n(950268);
function u(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.A)();
    return (0, i.jsxs)("div", {
        className: c.uW,
        children: [
            (0, i.jsx)(r.Heading, { variant: "display-sm", className: c.R_, children: d.intl.string(d.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: c.Ui,
                children: n.map((e, n) => {
                    if (null == e) return;
                    let s = 0 === n && !0 === e.featured;
                    return (0, i.jsx)(
                        a.S,
                        { ...e, glowing: t === e.id, featured: s, containerClassName: l()(c.Nr, { [c.Nq]: s }) },
                        e.id,
                    );
                }),
            }),
        ],
    });
}
