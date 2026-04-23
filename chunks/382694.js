n.d(t, { A: () => _ });
var r = n(627968),
    a = n(503698),
    i = n.n(a),
    s = n(534514),
    l = n(744064),
    c = n(254748),
    o = n(189024),
    d = n(985018),
    u = n(672193);
function _(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.A)();
    return (0, r.jsx)(c.A, {
        sectionClassName: u.uW,
        heading: (0, r.jsx)(s.D, { variant: "display-sm", className: u.R_, children: d.intl.string(d.t.Aw5DRm) }),
        grid: (0, r.jsx)(r.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let a = 0 === n && !0 === e.featured;
                return (0, r.jsx)(
                    l.S,
                    { ...e, glowing: t === e.id, featured: a, containerClassName: i()(u.Nr, { [u.Nq]: a }) },
                    e.id,
                );
            }),
        }),
    });
}
