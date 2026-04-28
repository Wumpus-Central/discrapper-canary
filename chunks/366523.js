r.d(e, { A: () => m, e: () => o });
var s = r(627968),
    n = r(64700),
    t = r(310784),
    l = r.n(t),
    u = r(503698),
    g = r.n(u),
    c = r(654107),
    i = r(871123),
    d = r(705452);
function m(a) {
    let {
            cardImage: e,
            cardBackgroundImage: r,
            altText: t,
            containerClassName: u,
            backgroundImageClassName: i,
            foregroundImageClassName: m,
            shape: o,
        } = a,
        [h, p] = (0, c.rh)(e.toString(), "#000000"),
        k = n.useMemo(() => {
            let a = l()(h).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                e = p ?? l()(h).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${a}, ${e})`;
        }, [h, p]);
    return (0, s.jsxs)("div", {
        className: g()(d.Ui, { [d.Ew]: "square" === o }, u),
        children: [
            (0, s.jsx)("div", {
                className: g()(d.GC, i),
                style: null != r ? { backgroundImage: `url(${r.toString()})` } : { backgroundImage: k },
            }),
            (0, s.jsx)("img", {
                src: e.toString(),
                alt: t,
                draggable: !1,
                className: g()(d.LC, { [d.Ew]: "square" === o }, m),
            }),
        ],
    });
}
function o(a) {
    let { sku: e, containerClassName: r, backgroundImageClassName: n, foregroundImageClassName: t, shape: l } = a,
        u = (0, i.fq)(e),
        g = (0, i.xf)(e);
    return null == u
        ? null
        : (0, s.jsx)(m, {
              cardImage: u,
              cardBackgroundImage: g,
              altText: e.name,
              containerClassName: r,
              backgroundImageClassName: n,
              foregroundImageClassName: t,
              shape: l,
          });
}
