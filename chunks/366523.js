"use strict";
n.d(t, { A: () => _, e: () => p });
var r = n(627968),
    i = n(64700),
    a = n(310784),
    l = n.n(a),
    s = n(503698),
    o = n.n(s),
    c = n(654107),
    u = n(871123),
    d = n(705452);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: s,
            backgroundImageClassName: u,
            foregroundImageClassName: _,
            shape: p,
        } = e,
        [f, h] = (0, c.rh)(t.toString(), "#000000"),
        m = i.useMemo(() => {
            let e = l()(f).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = h ?? l()(f).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [f, h]);
    return (0, r.jsxs)("div", {
        className: o()(d.Ui, { [d.Ew]: "square" === p }, s),
        children: [
            (0, r.jsx)("div", {
                className: o()(d.GC, u),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: m },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: o()(d.LC, { [d.Ew]: "square" === p }, _),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: a, shape: l } = e,
        s = (0, u.fq)(t),
        o = (0, u.xf)(t);
    return null == s
        ? null
        : (0, r.jsx)(_, {
              cardImage: s,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: l,
          });
}
