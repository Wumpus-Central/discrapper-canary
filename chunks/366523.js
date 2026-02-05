"use strict";
n.d(t, { A: () => f, e: () => p });
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    u = n(654107),
    c = n(871123),
    d = n(492075);
let _ = "#000000";
function f(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: o,
            backgroundImageClassName: c,
            foregroundImageClassName: f,
            shape: p,
        } = e,
        [h, m] = (0, u.rh)(t.toString(), _),
        g = i.useMemo(() => {
            let e = s()(h).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = m ?? s()(h).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [h, m]);
    return (0, r.jsxs)("div", {
        className: l()(d.Ui, { [d.Ew]: "square" === p }, o),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.GC, c),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: g },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: l()(d.LC, { [d.Ew]: "square" === p }, f),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: a, shape: s } = e,
        o = (0, c.fq)(t),
        l = (0, c.xf)(t);
    return null == o
        ? null
        : (0, r.jsx)(f, {
              cardImage: o,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: s,
          });
}
