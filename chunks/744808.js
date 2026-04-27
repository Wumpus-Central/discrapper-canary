"use strict";
r.d(t, { A: () => m });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(43990),
    o = r(17928),
    c = r(363195),
    u = r(746002),
    d = r(219220),
    _ = r(282389),
    p = r(325409);
function f(e) {
    let { skuId: t, layer: r, data: a } = e,
        s = a?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: r.id }),
        o = i.useMemo(() => ({ [p.Wm]: "front" === r.order, [p.aX]: "back" === r.order }), [r.order]);
    if (null == s) return null;
    switch (r.type) {
        case "staple":
            return (0, n.jsx)("img", {
                src: s,
                alt: "",
                "aria-hidden": !0,
                className: l()(p.S_, o, p.im, { [p.Mn]: "top" === r.anchor, [p.sQ]: "bottom" === r.anchor }),
            });
        case "rail":
            return (0, n.jsx)("div", {
                className: l()(p.S_, o, p.H$, {
                    [p.Mn]: "top" === r.anchor,
                    [p.sQ]: "bottom" === r.anchor,
                    [p.gX]: "center" === r.anchor,
                    [p.no]: !0 === r.responsive,
                }),
                children: (0, n.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }),
            });
        case "border":
            let c = { "--custom-profile-frame-layer-src": `url(${s})` };
            return (0, n.jsx)("div", { role: "img", className: l()(p.S_, o, p.PQ), style: c });
        default:
            return null;
    }
}
function m(e) {
    let { frame: t, layout: r } = e,
        a = (0, o.bG)([c.A], () => c.A.theme),
        u = (0, _.A)(t.skuId),
        m = i.useMemo(
            () =>
                "MODAL_V2" === r
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === r
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [r, t.layers],
        ),
        { layerData: h } = (0, d.A)({ skuId: t.skuId, layers: m });
    return 0 === m.length
        ? null
        : (0, n.jsx)(s.N, {
              theme: a,
              children: (e) =>
                  (0, n.jsx)("div", {
                      className: l()(p.uF, e, u),
                      "aria-label": t.label,
                      role: "img",
                      children: (0, n.jsx)("div", {
                          className: p.hH,
                          children: m.map((e) => (0, n.jsx)(f, { skuId: t.skuId, layer: e, data: h[e.id] }, e.id)),
                      }),
                  }),
          });
}
