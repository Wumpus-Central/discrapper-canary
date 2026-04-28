"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(43990),
    o = n(17928),
    c = n(363195),
    d = n(746002),
    u = n(219220),
    _ = n(282389),
    p = n(325409);
function f(e) {
    let { skuId: t, layer: n, data: i } = e,
        s = i?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id }),
        o = a.useMemo(() => ({ [p.Wm]: "front" === n.order, [p.aX]: "back" === n.order }), [n.order]);
    if (null == s) return null;
    switch (n.type) {
        case "staple":
            return (0, r.jsx)("img", {
                src: s,
                alt: "",
                "aria-hidden": !0,
                className: l()(p.S_, o, p.im, { [p.Mn]: "top" === n.anchor, [p.sQ]: "bottom" === n.anchor }),
            });
        case "rail":
            return (0, r.jsx)("div", {
                className: l()(p.S_, o, p.H$, {
                    [p.Mn]: "top" === n.anchor,
                    [p.sQ]: "bottom" === n.anchor,
                    [p.gX]: "center" === n.anchor,
                    [p.no]: !0 === n.responsive,
                }),
                children: (0, r.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }),
            });
        case "border":
            let c = { "--custom-profile-frame-layer-src": `url(${s})` };
            return (0, r.jsx)("div", { role: "img", className: l()(p.S_, o, p.PQ), style: c });
        default:
            return null;
    }
}
function m(e) {
    let { frame: t, layout: n } = e,
        i = (0, o.bG)([c.A], () => c.A.theme),
        d = (0, _.A)(t.skuId),
        m = a.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: h } = (0, u.A)({ skuId: t.skuId, layers: m });
    return 0 === m.length
        ? null
        : (0, r.jsx)(s.N, {
              theme: i,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: l()(p.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: (0, r.jsx)("div", {
                          className: p.hH,
                          children: m.map((e) => (0, r.jsx)(f, { skuId: t.skuId, layer: e, data: h[e.id] }, e.id)),
                      }),
                  }),
          });
}
