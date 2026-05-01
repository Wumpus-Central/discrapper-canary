"use strict";
n.d(t, { A: () => _, e: () => f });
var i = n(627968),
    r = n(64700),
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
            cssPosition: h = "relative",
        } = e,
        [p, E] = (0, u.rh)(t.toString(), "#000000"),
        m = r.useMemo(() => {
            let e = a()(p).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = E ?? a()(p).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [p, E]);
    return (0, i.jsxs)("div", {
        className: l()(d.Ui, "absolute" === h ? d.tz : d.oG, { [d.Ew]: "square" === f }, o),
        children: [
            (0, i.jsx)("div", {
                className: l()(d.GC, c),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: m },
            }),
            (0, i.jsx)("img", {
                src: t.toString(),
                alt: s,
                draggable: !1,
                className: l()(d.LC, { [d.Ew]: "square" === f }, _),
            }),
        ],
    });
}
function f(e) {
    let {
            sku: t,
            containerClassName: n,
            backgroundImageClassName: r,
            foregroundImageClassName: s,
            shape: a,
            cssPosition: o,
        } = e,
        l = (0, c.fq)(t),
        u = (0, c.xf)(t);
    return null == l
        ? null
        : (0, i.jsx)(_, {
              cardImage: l,
              cardBackgroundImage: u,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: r,
              foregroundImageClassName: s,
              shape: a,
              cssPosition: o,
          });
}
