n.d(t, { A: () => u });
var i = n(627968),
    s = n(503698),
    a = n.n(s),
    l = n(397927),
    r = n(102815),
    o = n(598998),
    c = n(985018),
    d = n(950268);
function u(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.A)();
    return (0, i.jsxs)("div", {
        className: d.uW,
        children: [
            (0, i.jsx)(l.Heading, { variant: "display-sm", className: d.R_, children: c.intl.string(c.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: d.Ui,
                children: n.map((e, n) => {
                    if (null == e) return;
                    let s = 0 === n && !0 === e.featured;
                    return (0, i.jsx)(
                        "div",
                        {
                            id: e.id,
                            className: a()({ [d.Nq]: s }),
                            style: { scrollMarginTop: 30 },
                            children: (0, i.jsx)(r.S, { ...e, glowing: t === e.id, featured: s }),
                        },
                        e.id,
                    );
                }),
            }),
        ],
    });
}
