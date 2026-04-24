n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(43990),
    o = n(17928),
    c = n(363195),
    d = n(746002),
    u = n(219220),
    _ = n(282389),
    m = n(325409);
function p(e) {
    let { skuId: t, layer: n, data: i } = e,
        a = i?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == a) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${a})` };
        return (0, r.jsx)("div", {
            role: "img",
            className: l()(m.S_, m.PQ, { [m.Wm]: "front" === n.order, [m.aX]: "back" === n.order }),
            style: e,
        });
    }
    return (0, r.jsx)("div", {
        className: l()(m.S_, {
            [m.im]: "staple" === n.type,
            [m.H$]: "rail" === n.type,
            [m.Wm]: "front" === n.order,
            [m.aX]: "back" === n.order,
            [m.Mn]: "top" === n.anchor,
            [m.sQ]: "bottom" === n.anchor,
            [m.gX]: "center" === n.anchor,
            [m.no]: !0 === n.responsive,
        }),
        children: (0, r.jsx)("img", { src: a, alt: "", "aria-hidden": !0 }),
    });
}
function h(e) {
    let { frame: t, layout: n } = e,
        a = (0, o.bG)([c.A], () => c.A.theme),
        d = (0, _.A)(t.skuId),
        h = i.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: f } = (0, u.A)({ skuId: t.skuId, layers: h });
    return 0 === h.length
        ? null
        : (0, r.jsx)(s.N, {
              theme: a,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: l()(m.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: h.map((e) => (0, r.jsx)(p, { skuId: t.skuId, layer: e, data: f[e.id] }, e.id)),
                  }),
          });
}
