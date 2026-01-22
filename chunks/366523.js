n.d(t, {
    A: () => p,
    e: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    c = n(654107),
    u = n(871123),
    d = n(492075);
let f = "#000000";
function p(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: o,
            backgroundImageClassName: u,
            foregroundImageClassName: p,
            shape: _,
        } = e,
        [h, m] = (0, c.rh)(t.toString(), f),
        g = i.useMemo(() => {
            let e = s()(h).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = null != m ? m : s()(h).saturate(1.2).alpha(0.9).hex();
            return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")");
        }, [h, m]);
    return (0, r.jsxs)("div", {
        className: l()(d.Ui, { [d.Ew]: "square" === _ }, o),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.GC, u),
                style: null != n ? { backgroundImage: "url(".concat(n.toString(), ")") } : { backgroundImage: g },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: l()(d.LC, { [d.Ew]: "square" === _ }, p),
            }),
        ],
    });
}
function _(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: a, shape: s } = e,
        o = (0, u.fq)(t),
        l = (0, u.xf)(t);
    return null == o
        ? null
        : (0, r.jsx)(p, {
              cardImage: o,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: s,
          });
}
