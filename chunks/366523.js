n.d(t, { A: () => m, e: () => p });
var a = n(627968),
    r = n(64700),
    l = n(310784),
    i = n.n(l),
    s = n(503698),
    o = n.n(s),
    u = n(654107),
    c = n(871123),
    d = n(705452);
function m(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: l,
            containerClassName: s,
            backgroundImageClassName: c,
            foregroundImageClassName: m,
            shape: p,
        } = e,
        [_, f] = (0, u.rh)(t.toString(), "#000000"),
        g = r.useMemo(() => {
            let e = i()(_).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = f ?? i()(_).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [_, f]);
    return (0, a.jsxs)("div", {
        className: o()(d.Ui, { [d.Ew]: "square" === p }, s),
        children: [
            (0, a.jsx)("div", {
                className: o()(d.GC, c),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: g },
            }),
            (0, a.jsx)("img", {
                src: t.toString(),
                alt: l,
                draggable: !1,
                className: o()(d.LC, { [d.Ew]: "square" === p }, m),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: r, foregroundImageClassName: l, shape: i } = e,
        s = (0, c.fq)(t),
        o = (0, c.xf)(t);
    return null == s
        ? null
        : (0, a.jsx)(m, {
              cardImage: s,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: r,
              foregroundImageClassName: l,
              shape: i,
          });
}
