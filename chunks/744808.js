"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(43990),
    c = n(17928),
    o = n(363195),
    d = n(746002),
    u = n(219220),
    m = n(282389),
    f = n(325409);
function h(e) {
    let { skuId: t, layer: n, data: i } = e,
        l = i?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == l) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${l})` };
        return (0, a.jsx)("div", {
            role: "img",
            className: r()(f.S_, f.PQ, { [f.Wm]: "front" === n.order, [f.aX]: "back" === n.order }),
            style: e,
        });
    }
    return (0, a.jsx)("div", {
        className: r()(f.S_, {
            [f.im]: "staple" === n.type,
            [f.H$]: "rail" === n.type,
            [f.Wm]: "front" === n.order,
            [f.aX]: "back" === n.order,
            [f.Mn]: "top" === n.anchor,
            [f.sQ]: "bottom" === n.anchor,
            [f.gX]: "center" === n.anchor,
            [f.no]: !0 === n.responsive,
        }),
        children: (0, a.jsx)("img", { src: l, alt: "", "aria-hidden": !0 }),
    });
}
function _(e) {
    let { frame: t, layout: n } = e,
        l = (0, c.bG)([o.A], () => o.A.theme),
        d = (0, m.A)(t.skuId),
        _ = i.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: p } = (0, u.A)({ skuId: t.skuId, layers: _ });
    return 0 === _.length
        ? null
        : (0, a.jsx)(s.N, {
              theme: l,
              children: (e) =>
                  (0, a.jsx)("div", {
                      className: r()(f.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: _.map((e) => (0, a.jsx)(h, { skuId: t.skuId, layer: e, data: p[e.id] }, e.id)),
                  }),
          });
}
