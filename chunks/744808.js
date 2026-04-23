n.d(t, { A: () => g });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(43990),
    o = n(17928),
    c = n(363195),
    u = n(746002),
    d = n(219220),
    m = n(282389),
    f = n(325409);
function x(e) {
    let { skuId: t, layer: n, data: i } = e,
        r = i?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == r) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${r})` };
        return (0, l.jsx)("div", {
            role: "img",
            className: a()(f.S_, f.PQ, { [f.Wm]: "front" === n.order, [f.aX]: "back" === n.order }),
            style: e,
        });
    }
    return (0, l.jsx)("div", {
        className: a()(f.S_, {
            [f.im]: "staple" === n.type,
            [f.H$]: "rail" === n.type,
            [f.Wm]: "front" === n.order,
            [f.aX]: "back" === n.order,
            [f.Mn]: "top" === n.anchor,
            [f.sQ]: "bottom" === n.anchor,
            [f.gX]: "center" === n.anchor,
            [f.no]: !0 === n.responsive,
        }),
        children: (0, l.jsx)("img", { src: r, alt: "", "aria-hidden": !0 }),
    });
}
function g(e) {
    let { frame: t, layout: n } = e,
        r = (0, o.bG)([c.A], () => c.A.theme),
        u = (0, m.A)(t.skuId),
        g = i.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: A } = (0, d.A)({ skuId: t.skuId, layers: g });
    return 0 === g.length
        ? null
        : (0, l.jsx)(s.N, {
              theme: r,
              children: (e) =>
                  (0, l.jsx)("div", {
                      className: a()(f.hH, e, u),
                      "aria-label": t.label,
                      role: "img",
                      children: g.map((e) => (0, l.jsx)(x, { skuId: t.skuId, layer: e, data: A[e.id] }, e.id)),
                  }),
          });
}
