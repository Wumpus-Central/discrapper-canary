"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(43990),
    o = n(17928),
    c = n(363195),
    d = n(746002),
    u = n(219220),
    _ = n(282389),
    p = n(325409);
function f(e) {
    let { skuId: t, layer: n, data: r } = e,
        l = r?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == l) return null;
    if ("border" === n.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${l})` };
        return (0, i.jsx)("div", {
            role: "img",
            className: a()(p.S_, p.PQ, { [p.Wm]: "front" === n.order, [p.aX]: "back" === n.order }),
            style: e,
        });
    }
    return (0, i.jsx)("div", {
        className: a()(p.S_, {
            [p.im]: "staple" === n.type,
            [p.H$]: "rail" === n.type,
            [p.Wm]: "front" === n.order,
            [p.aX]: "back" === n.order,
            [p.Mn]: "top" === n.anchor,
            [p.sQ]: "bottom" === n.anchor,
            [p.gX]: "center" === n.anchor,
            [p.no]: !0 === n.responsive,
        }),
        children: (0, i.jsx)("img", { src: l, alt: "", "aria-hidden": !0 }),
    });
}
function m(e) {
    let { frame: t, layout: n } = e,
        l = (0, o.bG)([c.A], () => c.A.theme),
        d = (0, _.A)(t.skuId),
        m = r.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: g } = (0, u.A)({ skuId: t.skuId, layers: m });
    return 0 === m.length
        ? null
        : (0, i.jsx)(s.N, {
              theme: l,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: a()(p.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: m.map((e) => (0, i.jsx)(f, { skuId: t.skuId, layer: e, data: g[e.id] }, e.id)),
                  }),
          });
}
