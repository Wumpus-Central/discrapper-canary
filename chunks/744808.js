a.d(t, { A: () => f });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(43990),
    o = a(17928),
    c = a(363195),
    d = a(746002),
    u = a(219220),
    h = a(282389),
    p = a(325409);
function m(e) {
    let { skuId: t, layer: a, data: n } = e,
        l = n?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: a.id });
    if (null == l) return null;
    if ("border" === a.type) {
        let e = { "--custom-profile-frame-layer-src": `url(${l})` };
        return (0, r.jsx)("div", {
            role: "img",
            className: i()(p.S_, p.PQ, { [p.Wm]: "front" === a.order, [p.aX]: "back" === a.order }),
            style: e,
        });
    }
    return (0, r.jsx)("div", {
        className: i()(p.S_, {
            [p.im]: "staple" === a.type,
            [p.H$]: "rail" === a.type,
            [p.Wm]: "front" === a.order,
            [p.aX]: "back" === a.order,
            [p.Mn]: "top" === a.anchor,
            [p.sQ]: "bottom" === a.anchor,
            [p.gX]: "center" === a.anchor,
            [p.no]: !0 === a.responsive,
        }),
        children: (0, r.jsx)("img", { src: l, alt: "", "aria-hidden": !0 }),
    });
}
function f(e) {
    let { frame: t, layout: a } = e,
        l = (0, o.bG)([c.A], () => c.A.theme),
        d = (0, h.A)(t.skuId),
        f = n.useMemo(
            () =>
                "MODAL_V2" === a
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === a
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [a, t.layers],
        ),
        { layerData: b } = (0, u.A)({ skuId: t.skuId, layers: f });
    return 0 === f.length
        ? null
        : (0, r.jsx)(s.N, {
              theme: l,
              children: (e) =>
                  (0, r.jsx)("div", {
                      className: i()(p.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: f.map((e) => (0, r.jsx)(m, { skuId: t.skuId, layer: e, data: b[e.id] }, e.id)),
                  }),
          });
}
