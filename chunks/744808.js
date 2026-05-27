t.d(r, { A: () => A });
var a = t(627968),
    s = t(64700),
    l = t(503698),
    i = t.n(l),
    n = t(43990),
    o = t(17928),
    u = t(363195),
    d = t(746002),
    c = t(219220),
    m = t(940622),
    h = t(282389),
    p = t(325409);
function f(e) {
    let { skuId: r, layer: t, data: s } = e,
        l = s?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id });
    if (null == l) return null;
    let n = i()(p.S_, {
        [p.Wm]: "front" === t.order,
        [p.aX]: "back" === t.order,
        [p.Mn]: "top" === t.anchor,
        [p.sQ]: "bottom" === t.anchor,
        [p.gX]: "center" === t.anchor,
        [p.no]: !0 === t.responsive,
    });
    return "staple" === t.type
        ? (0, a.jsx)("img", { src: l, alt: "", "aria-hidden": !0, className: i()(n, p.im) })
        : "rail" === t.type
          ? (0, a.jsx)("div", { role: "img", style: { backgroundImage: `url(${l})` }, className: i()(n, p.H$) })
          : "border" === t.type
            ? (0, a.jsx)("div", {
                  role: "img",
                  "aria-hidden": !0,
                  className: i()(n, p.PQ),
                  children: Array.from({ length: 5 }, (e, r) =>
                      (0, a.jsx)("img", { src: l, alt: "", "aria-hidden": !0 }, r),
                  ),
              })
            : null;
}
function A(e) {
    let { frame: r, className: t, filterLayer: l } = e,
        d = (0, o.bG)([u.A], () => u.A.theme),
        A = (0, h.A)(r.skuId),
        b = (0, m.eo)(),
        g = b?.layers ?? r.layers,
        y = null == l ? g : g.filter(l),
        k = y
            .map((e) => {
                let { id: r } = e;
                return r;
            })
            .join("\0"),
        j = s.useMemo(() => y, [g, k]),
        { layerData: v } = (0, c.A)({ skuId: r.skuId, layers: null != b ? void 0 : j }),
        x = b?.layerData ?? v;
    return 0 === j.length
        ? null
        : (0, a.jsx)(n.N, {
              theme: d,
              children: (e) =>
                  (0, a.jsx)("div", {
                      className: i()(p.uF, e, A, t),
                      "aria-label": r.label,
                      role: "img",
                      children: (0, a.jsx)("div", {
                          className: p.hH,
                          children: j.map((e) => (0, a.jsx)(f, { skuId: r.skuId, layer: e, data: x[e.id] }, e.id)),
                      }),
                  }),
          });
}
