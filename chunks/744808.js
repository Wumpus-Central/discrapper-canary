n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(43990),
    o = n(311907),
    c = n(544028),
    u = n(746002),
    d = n(219220),
    m = n(282389),
    f = n(325409);
function x(e) {
    let { skuId: t, layer: n, data: r } = e,
        i = r?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == i) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${i})` };
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
        children: (0, l.jsx)("img", { src: i, alt: "", "aria-hidden": !0 }),
    });
}
function A(e) {
    let { frame: t, layout: n } = e,
        i = (0, o.bG)([c.A], () => c.A.theme),
        u = (0, m.A)(t.skuId),
        A = r.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: g } = (0, d.A)({ skuId: t.skuId, layers: A });
    return 0 === A.length
        ? null
        : (0, l.jsx)(s.N, {
              theme: i,
              children: (e) =>
                  (0, l.jsx)("div", {
                      className: a()(f.hH, e, u),
                      "aria-label": t.label,
                      role: "img",
                      children: A.map((e) => (0, l.jsx)(x, { skuId: t.skuId, layer: e, data: g[e.id] }, e.id)),
                  }),
          });
}
