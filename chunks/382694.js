n.d(t, { A: () => _ });
var a = n(627968),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    l = n(744064),
    c = n(254748),
    o = n(699255),
    d = n(985018),
    u = n(672193);
function _(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.A)();
    return (0, a.jsx)(c.A, {
        sectionClassName: u.uW,
        heading: (0, a.jsx)(s.D, { variant: "display-sm", className: u.R_, children: d.intl.string(d.t.Aw5DRm) }),
        grid: (0, a.jsx)(a.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, a.jsx)(
                    l.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: r()(u.Nr, { [u.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
