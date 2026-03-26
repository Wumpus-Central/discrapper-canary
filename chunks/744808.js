"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939496),
    l = n(746002),
    u = n(996988),
    c = n(352017);
function d(e) {
    let { skuId: t, layer: n } = e,
        i = (0, l.getCollectiblesItemAssetUrl)({
            skuId: t,
            assetFormat: l.CollectiblesItemAssetFormat.STATIC,
            assetId: n.id,
        });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a()(c.S_, {
                  [c.im]: "staple" === n.type,
                  [c.H$]: "rail" === n.type,
                  [c.Wm]: "front" === n.order,
                  [c.aX]: "back" === n.order,
                  [c.Mn]: "top" === n.anchor,
                  [c.sQ]: "bottom" === n.anchor,
                  [c.kb]: "left" === n.anchor,
                  [c.no]: !0 === n.responsive,
              }),
              children: (0, r.jsx)("img", { src: i, alt: "" }),
          });
}
function _(e) {
    let { frame: t } = e,
        { themeType: n } = (0, o.E)(),
        s = i.useMemo(
            () =>
                n === u.d.MODAL_V2
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : n === u.d.SIDEBAR
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [n, t.layers],
        );
    return 0 === s.length
        ? null
        : (0, r.jsx)("div", {
              className: c.hH,
              "aria-label": t.label,
              role: "img",
              children: s.map((e) => (0, r.jsx)(d, { skuId: t.skuId, layer: e }, e.id)),
          });
}
