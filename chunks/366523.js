"use strict";
n.d(t, { A: () => _, e: () => f });
var r = n(627968),
    i = n(64700),
    s = n(310784),
    a = n.n(s),
    o = n(503698),
    l = n.n(o),
    u = n(654107),
    c = n(871123),
    d = n(705452);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: s,
            containerClassName: o,
            backgroundImageClassName: c,
            foregroundImageClassName: _,
            shape: f,
        } = e,
        [p, h] = (0, u.rh)(t.toString(), "#000000"),
        E = i.useMemo(() => {
            let e = a()(p).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = h ?? a()(p).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [p, h]);
    return (0, r.jsxs)("div", {
        className: l()(d.Ui, { [d.Ew]: "square" === f }, o),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.GC, c),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: E },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: s,
                draggable: !1,
                className: l()(d.LC, { [d.Ew]: "square" === f }, _),
            }),
        ],
    });
}
function f(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: s, shape: a } = e,
        o = (0, c.fq)(t),
        l = (0, c.xf)(t);
    return null == o
        ? null
        : (0, r.jsx)(_, {
              cardImage: o,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: s,
              shape: a,
          });
}
