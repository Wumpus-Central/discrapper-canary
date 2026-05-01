t.d(r, { A: () => b });
var s = t(627968),
    l = t(64700),
    a = t(503698),
    n = t.n(a),
    i = t(43990),
    u = t(17928),
    o = t(363195),
    c = t(746002),
    d = t(219220),
    m = t(282389),
    p = t(325409);
function h(e) {
    let { skuId: r, layer: t, data: l } = e,
        a = l?.src ?? (0, c.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id });
    if (null == a) return null;
    let i = n()(p.S_, {
        [p.Wm]: "front" === t.order,
        [p.aX]: "back" === t.order,
        [p.Mn]: "top" === t.anchor,
        [p.sQ]: "bottom" === t.anchor,
        [p.gX]: "center" === t.anchor,
        [p.no]: !0 === t.responsive,
    });
    return "staple" === t.type
        ? (0, s.jsx)("img", { src: a, alt: "", "aria-hidden": !0, className: n()(i, p.im) })
        : "rail" === t.type
          ? (0, s.jsx)("div", { role: "img", style: { backgroundImage: `url(${a})` }, className: n()(i, p.H$) })
          : "border" === t.type
            ? (0, s.jsx)("div", { role: "img", style: { backgroundImage: `url(${a})` }, className: n()(i, p.PQ) })
            : null;
}
function b(e) {
    let { frame: r, filterLayer: t } = e,
        a = (0, u.bG)([o.A], () => o.A.theme),
        c = (0, m.A)(r.skuId),
        b = null == t ? r.layers : r.layers.filter(t),
        f = b
            .map((e) => {
                let { id: r } = e;
                return r;
            })
            .join("\0"),
        g = l.useMemo(() => b, [r.layers, f]),
        { layerData: A } = (0, d.A)({ skuId: r.skuId, layers: g });
    return 0 === g.length
        ? null
        : (0, s.jsx)(i.N, {
              theme: a,
              children: (e) =>
                  (0, s.jsx)("div", {
                      className: n()(p.uF, e, c),
                      "aria-label": r.label,
                      role: "img",
                      children: (0, s.jsx)("div", {
                          className: p.hH,
                          children: g.map((e) => (0, s.jsx)(h, { skuId: r.skuId, layer: e, data: A[e.id] }, e.id)),
                      }),
                  }),
          });
}
