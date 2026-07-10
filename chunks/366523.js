"use strict";
n.d(t, { A: () => _, e: () => E });
var i = n(627968),
    r = n(64700),
    a = n(310784),
    s = n.n(a),
    l = n(503698),
    o = n.n(l),
    d = n(654107),
    c = n(871123),
    u = n(130668);
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: l,
            backgroundImageClassName: c,
            foregroundImageClassName: _,
            shape: E,
            cssPosition: A = "relative",
        } = e,
        [h, I] = (0, d.rh)(t.toString(), "#000000"),
        f = r.useMemo(() => {
            let e = s()(h).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = I ?? s()(h).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [h, I]);
    return (0, i.jsxs)("div", {
        className: o()(u.Ui, "absolute" === A ? u.tz : u.oG, { [u.Ew]: "square" === E }, l),
        children: [
            (0, i.jsx)("div", {
                className: o()(u.GC, c),
                style: null != n ? { backgroundImage: `url(${n.toString()})` } : { backgroundImage: f },
            }),
            (0, i.jsx)("img", {
                src: t.toString(),
                alt: a,
                draggable: !1,
                className: o()(u.LC, { [u.Ew]: "square" === E }, _),
            }),
        ],
    });
}
function E(e) {
    let {
            sku: t,
            containerClassName: n,
            backgroundImageClassName: r,
            foregroundImageClassName: a,
            shape: s,
            cssPosition: l,
        } = e,
        o = (0, c.fq)(t),
        d = (0, c.xf)(t);
    return null == o
        ? null
        : (0, i.jsx)(_, {
              cardImage: o,
              cardBackgroundImage: d,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: r,
              foregroundImageClassName: a,
              shape: s,
              cssPosition: l,
          });
}
