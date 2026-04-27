"use strict";
r.d(t, { A: () => _, e: () => p });
var n = r(627968),
    i = r(64700),
    a = r(310784),
    l = r.n(a),
    s = r(503698),
    o = r.n(s),
    c = r(654107),
    u = r(871123),
    d = r(705452);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: r,
            altText: a,
            containerClassName: s,
            backgroundImageClassName: u,
            foregroundImageClassName: _,
            shape: p,
        } = e,
        [f, m] = (0, c.rh)(t.toString(), "#000000"),
        h = i.useMemo(() => {
            let e = l()(f).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = m ?? l()(f).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [f, m]);
    return (0, n.jsxs)("div", {
        className: o()(d.Ui, { [d.Ew]: "square" === p }, s),
        children: [
            (0, n.jsx)("div", {
                className: o()(d.GC, u),
                style: null != r ? { backgroundImage: `url(${r.toString()})` } : { backgroundImage: h },
            }),
            (0, n.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: o()(d.LC, { [d.Ew]: "square" === p }, _),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: r, backgroundImageClassName: i, foregroundImageClassName: a, shape: l } = e,
        s = (0, u.fq)(t),
        o = (0, u.xf)(t);
    return null == s
        ? null
        : (0, n.jsx)(_, {
              cardImage: s,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: r,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: l,
          });
}
