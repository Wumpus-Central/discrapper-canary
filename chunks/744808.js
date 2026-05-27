"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(17928),
    u = n(363195),
    c = n(746002),
    d = n(219220),
    _ = n(940622),
    h = n(282389),
    f = n(325409);
function p(e) {
    let { skuId: t, layer: n, data: r } = e,
        s = r?.src ?? (0, c.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == s) return null;
    let o = a()(f.S_, {
        [f.Wm]: "front" === n.order,
        [f.aX]: "back" === n.order,
        [f.Mn]: "top" === n.anchor,
        [f.sQ]: "bottom" === n.anchor,
        [f.gX]: "center" === n.anchor,
        [f.no]: !0 === n.responsive,
    });
    return "staple" === n.type
        ? (0, i.jsx)("img", { src: s, alt: "", "aria-hidden": !0, className: a()(o, f.im) })
        : "rail" === n.type
          ? (0, i.jsx)("div", { role: "img", style: { backgroundImage: `url(${s})` }, className: a()(o, f.H$) })
          : "border" === n.type
            ? (0, i.jsx)("div", {
                  role: "img",
                  "aria-hidden": !0,
                  className: a()(o, f.PQ),
                  children: Array.from({ length: 5 }, (e, t) =>
                      (0, i.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }, t),
                  ),
              })
            : null;
}
function E(e) {
    let { frame: t, className: n, filterLayer: s } = e,
        c = (0, l.bG)([u.A], () => u.A.theme),
        E = (0, h.A)(t.skuId),
        m = (0, _.eo)(),
        g = m?.layers ?? t.layers,
        A = null == s ? g : g.filter(s),
        I = A.map((e) => {
            let { id: t } = e;
            return t;
        }).join("\0"),
        T = r.useMemo(() => A, [g, I]),
        { layerData: S } = (0, d.A)({ skuId: t.skuId, layers: null != m ? void 0 : T }),
        y = m?.layerData ?? S;
    return 0 === T.length
        ? null
        : (0, i.jsx)(o.N, {
              theme: c,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: a()(f.uF, e, E, n),
                      "aria-label": t.label,
                      role: "img",
                      children: (0, i.jsx)("div", {
                          className: f.hH,
                          children: T.map((e) => (0, i.jsx)(p, { skuId: t.skuId, layer: e, data: y[e.id] }, e.id)),
                      }),
                  }),
          });
}
