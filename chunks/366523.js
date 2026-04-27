"use strict";
r.d(t, { A: () => _, e: () => p });
var n = r(627968),
    i = r(64700),
    a = r(310784),
    s = r.n(a),
    l = r(503698),
    o = r.n(l),
    c = r(654107),
    d = r(871123),
    u = r(705452);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: r,
            altText: a,
            containerClassName: l,
            backgroundImageClassName: d,
            foregroundImageClassName: _,
            shape: p,
        } = e,
        [f, m] = (0, c.rh)(t.toString(), "#000000"),
        h = i.useMemo(() => {
            let e = s()(f).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = m ?? s()(f).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [f, m]);
    return (0, n.jsxs)("div", {
        className: o()(u.Ui, { [u.Ew]: "square" === p }, l),
        children: [
            (0, n.jsx)("div", {
                className: o()(u.GC, d),
                style: null != r ? { backgroundImage: `url(${r.toString()})` } : { backgroundImage: h },
            }),
            (0, n.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: o()(u.LC, { [u.Ew]: "square" === p }, _),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: r, backgroundImageClassName: i, foregroundImageClassName: a, shape: s } = e,
        l = (0, d.fq)(t),
        o = (0, d.xf)(t);
    return null == l
        ? null
        : (0, n.jsx)(_, {
              cardImage: l,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: r,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: s,
          });
}
