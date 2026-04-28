"use strict";
n.d(t, { A: () => _, e: () => p });
var r = n(627968),
    a = n(64700),
    i = n(310784),
    l = n.n(i),
    s = n(503698),
    o = n.n(s),
    c = n(654107),
    d = n(871123),
    u = n(705452);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: i,
            containerClassName: s,
            backgroundImageClassName: d,
            foregroundImageClassName: _,
            shape: p,
        } = e,
        [f, m] = (0, c.rh)(t.toString(), "#000000"),
        h = a.useMemo(() => {
            let e = l()(f).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = m ?? l()(f).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [f, m]);
    return (0, r.jsxs)("div", {
        className: o()(u.Ui, { [u.Ew]: "square" === p }, s),
        children: [
            (0, r.jsx)("div", {
                className: o()(u.GC, d),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: h },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: i,
                draggable: !1,
                className: o()(u.LC, { [u.Ew]: "square" === p }, _),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: a, foregroundImageClassName: i, shape: l } = e,
        s = (0, d.fq)(t),
        o = (0, d.xf)(t);
    return null == s
        ? null
        : (0, r.jsx)(_, {
              cardImage: s,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: a,
              foregroundImageClassName: i,
              shape: l,
          });
}
