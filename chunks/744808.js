t.d(r, { A: () => f });
var s = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    n = t(43990),
    o = t(17928),
    u = t(363195),
    d = t(746002),
    c = t(219220),
    m = t(282389),
    h = t(325409);
function p(e) {
    let { skuId: r, layer: t, data: l } = e,
        a = l?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id });
    if (null == a) return null;
    let n = i()(h.S_, {
        [h.Wm]: "front" === t.order,
        [h.aX]: "back" === t.order,
        [h.Mn]: "top" === t.anchor,
        [h.sQ]: "bottom" === t.anchor,
        [h.gX]: "center" === t.anchor,
        [h.no]: !0 === t.responsive,
    });
    return "staple" === t.type
        ? (0, s.jsx)("img", { src: a, alt: "", "aria-hidden": !0, className: i()(n, h.im) })
        : "rail" === t.type
          ? (0, s.jsx)("div", { role: "img", style: { backgroundImage: `url(${a})` }, className: i()(n, h.H$) })
          : "border" === t.type
            ? (0, s.jsx)("div", {
                  role: "img",
                  "aria-hidden": !0,
                  className: i()(n, h.PQ),
                  children: Array.from({ length: 5 }, (e, r) =>
                      (0, s.jsx)("img", { src: a, alt: "", "aria-hidden": !0 }, r),
                  ),
              })
            : null;
}
function f(e) {
    let { frame: r, className: t, filterLayer: a } = e,
        d = (0, o.bG)([u.A], () => u.A.theme),
        f = (0, m.A)(r.skuId),
        A = null == a ? r.layers : r.layers.filter(a),
        b = A.map((e) => {
            let { id: r } = e;
            return r;
        }).join("\0"),
        g = l.useMemo(() => A, [r.layers, b]),
        { layerData: k } = (0, c.A)({ skuId: r.skuId, layers: g });
    return 0 === g.length
        ? null
        : (0, s.jsx)(n.N, {
              theme: d,
              children: (e) =>
                  (0, s.jsx)("div", {
                      className: i()(h.uF, e, f, t),
                      "aria-label": r.label,
                      role: "img",
                      children: (0, s.jsx)("div", {
                          className: h.hH,
                          children: g.map((e) => (0, s.jsx)(p, { skuId: r.skuId, layer: e, data: k[e.id] }, e.id)),
                      }),
                  }),
          });
}
