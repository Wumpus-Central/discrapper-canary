"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(311907),
    u = n(939496),
    c = n(544028),
    d = n(746002),
    _ = n(219220),
    f = n(996988),
    p = n(352017);
function h(e) {
    let { skuId: t, layer: n, data: i } = e,
        s = i?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: a()(p.S_, {
                  [p.im]: "staple" === n.type,
                  [p.H$]: "rail" === n.type,
                  [p.Wm]: "front" === n.order,
                  [p.aX]: "back" === n.order,
                  [p.Mn]: "top" === n.anchor,
                  [p.sQ]: "bottom" === n.anchor,
                  [p.kb]: "left" === n.anchor,
                  [p.no]: !0 === n.responsive,
              }),
              children: (0, r.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }),
          });
}
function m(e) {
    let { frame: t } = e,
        n = (0, l.bG)([c.A], () => c.A.theme),
        { themeType: s } = (0, u.E)(),
        d = i.useMemo(
            () =>
                s === f.d.MODAL_V2
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : s === f.d.SIDEBAR
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [s, t.layers],
        ),
        { layerData: m, loaded: E } = (0, _.A)({ skuId: t.skuId, layers: d });
    return E
        ? (0, r.jsx)(o.N, {
              theme: n,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: a()(p.hH, e),
                      "aria-label": t.label,
                      role: "img",
                      children: d.map((e) => (0, r.jsx)(h, { skuId: t.skuId, layer: e, data: m[e.id] }, e.id)),
                  }),
          })
        : null;
}
