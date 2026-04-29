r.d(t, { A: () => b });
var s = r(627968),
    l = r(64700),
    a = r(503698),
    i = r.n(a),
    n = r(43990),
    o = r(17928),
    u = r(363195),
    c = r(746002),
    m = r(219220),
    d = r(282389),
    h = r(325409);
function p(e) {
    let { skuId: t, layer: r, data: l } = e,
        a = l?.src ?? (0, c.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: r.id });
    if (null == a) return null;
    let n = i()(h.S_, {
        [h.Wm]: "front" === r.order,
        [h.aX]: "back" === r.order,
        [h.Mn]: "top" === r.anchor,
        [h.sQ]: "bottom" === r.anchor,
        [h.gX]: "center" === r.anchor,
        [h.no]: !0 === r.responsive,
    });
    return "staple" === r.type
        ? (0, s.jsx)("img", { src: a, alt: "", "aria-hidden": !0, className: i()(n, h.im) })
        : "rail" === r.type
          ? (0, s.jsx)("div", { role: "img", style: { backgroundImage: `url(${a})` }, className: i()(n, h.H$) })
          : "border" === r.type
            ? (0, s.jsx)("div", { role: "img", style: { backgroundImage: `url(${a})` }, className: i()(n, h.PQ) })
            : null;
}
function b(e) {
    let { frame: t, layout: r } = e,
        a = (0, o.bG)([u.A], () => u.A.theme),
        c = (0, d.A)(t.skuId),
        b = l.useMemo(
            () =>
                "MODAL_V2" === r
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === r
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [r, t.layers],
        ),
        { layerData: f } = (0, m.A)({ skuId: t.skuId, layers: b });
    return 0 === b.length
        ? null
        : (0, s.jsx)(n.N, {
              theme: a,
              children: (e) =>
                  (0, s.jsx)("div", {
                      className: i()(h.uF, e, c),
                      "aria-label": t.label,
                      role: "img",
                      children: (0, s.jsx)("div", {
                          className: h.hH,
                          children: b.map((e) => (0, s.jsx)(p, { skuId: t.skuId, layer: e, data: f[e.id] }, e.id)),
                      }),
                  }),
          });
}
