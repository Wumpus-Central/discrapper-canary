"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(311907),
    u = n(544028),
    c = n(746002),
    d = n(219220),
    _ = n(352017);
function f(e) {
    let { skuId: t, layer: n, data: i } = e,
        s = i?.src ?? (0, c.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: a()(_.S_, {
                  [_.im]: "staple" === n.type,
                  [_.H$]: "rail" === n.type,
                  [_.Wm]: "front" === n.order,
                  [_.aX]: "back" === n.order,
                  [_.Mn]: "top" === n.anchor,
                  [_.sQ]: "bottom" === n.anchor,
                  [_.no]: !0 === n.responsive,
              }),
              children: (0, r.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }),
          });
}
function p(e) {
    let { frame: t, layout: n } = e,
        s = (0, l.bG)([u.A], () => u.A.theme),
        c = i.useMemo(
            () =>
                "MODAL_V2" === n
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === n
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        ),
        { layerData: p } = (0, d.A)({ skuId: t.skuId, layers: c });
    return 0 === c.length
        ? null
        : (0, r.jsx)(o.N, {
              theme: s,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: a()(_.hH, e),
                      "aria-label": t.label,
                      role: "img",
                      children: c.map((e) => (0, r.jsx)(f, { skuId: t.skuId, layer: e, data: p[e.id] }, e.id)),
                  }),
          });
}
