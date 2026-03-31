"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(311907),
    u = n(939496),
    c = n(544028),
    d = n(746002),
    _ = n(996988),
    f = n(868572);
function p(e) {
    let { skuId: t, layer: n } = e,
        i = (0, d.getCollectiblesItemAssetUrl)({
            skuId: t,
            assetFormat: d.CollectiblesItemAssetFormat.STATIC,
            assetId: n.id,
        });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a()(f.S_, {
                  [f.im]: "staple" === n.type,
                  [f.H$]: "rail" === n.type,
                  [f.Wm]: "front" === n.order,
                  [f.aX]: "back" === n.order,
                  [f.Mn]: "top" === n.anchor,
                  [f.sQ]: "bottom" === n.anchor,
                  [f.kb]: "left" === n.anchor,
                  [f.no]: !0 === n.responsive,
              }),
              children: (0, r.jsx)("img", { src: i, alt: "" }),
          });
}
function h(e) {
    let { frame: t } = e,
        n = (0, l.bG)([c.A], () => c.A.theme),
        { themeType: s } = (0, u.E)(),
        d = i.useMemo(
            () =>
                s === _.d.MODAL_V2
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : s === _.d.SIDEBAR
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [s, t.layers],
        );
    return 0 === d.length
        ? null
        : (0, r.jsx)(o.N, {
              theme: n,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: a()(f.hH, e),
                      "aria-label": t.label,
                      role: "img",
                      children: d.map((e) => (0, r.jsx)(p, { skuId: t.skuId, layer: e }, e.id)),
                  }),
          });
}
