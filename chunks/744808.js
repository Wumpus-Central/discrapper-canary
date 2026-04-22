n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(43990),
    o = n(311907),
    c = n(544028),
    u = n(746002),
    d = n(219220),
    m = n(325409);
function f(e) {
    let { skuId: t, layer: n, data: i } = e,
        r = i?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == r) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${r})` };
        return (0, l.jsx)("div", {
            role: "img",
            className: a()(m.S_, m.PQ, { [m.Wm]: "front" === n.order, [m.aX]: "back" === n.order }),
            style: e,
        });
    }
    return (0, l.jsx)("div", {
        className: a()(m.S_, {
            [m.im]: "staple" === n.type,
            [m.H$]: "rail" === n.type,
            [m.Wm]: "front" === n.order,
            [m.aX]: "back" === n.order,
            [m.Mn]: "top" === n.anchor,
            [m.sQ]: "bottom" === n.anchor,
            [m.gX]: "center" === n.anchor,
            [m.no]: !0 === n.responsive,
        }),
        children: (0, l.jsx)("img", { src: r, alt: "", "aria-hidden": !0 }),
    });
}
function x(e) {
    let { frame: t, layout: n } = e,
        r = (0, o.bG)([c.A], () => c.A.theme),
        u = i.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: x } = (0, d.A)({ skuId: t.skuId, layers: u });
    return 0 === u.length
        ? null
        : (0, l.jsx)(s.N, {
              theme: r,
              children: (e) =>
                  (0, l.jsx)("div", {
                      className: a()(m.hH, e),
                      "aria-label": t.label,
                      role: "img",
                      children: u.map((e) => (0, l.jsx)(f, { skuId: t.skuId, layer: e, data: x[e.id] }, e.id)),
                  }),
          });
}
