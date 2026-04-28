t.d(r, { A: () => f });
var s = t(627968),
    a = t(64700),
    l = t(503698),
    n = t.n(l),
    i = t(43990),
    o = t(17928),
    c = t(363195),
    u = t(746002),
    d = t(219220),
    m = t(282389),
    h = t(325409);
function p(e) {
    let { skuId: r, layer: t, data: l } = e,
        i = l?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id }),
        o = a.useMemo(() => ({ [h.Wm]: "front" === t.order, [h.aX]: "back" === t.order }), [t.order]);
    if (null == i) return null;
    switch (t.type) {
        case "staple":
            return (0, s.jsx)("img", {
                src: i,
                alt: "",
                "aria-hidden": !0,
                className: n()(h.S_, o, h.im, { [h.Mn]: "top" === t.anchor, [h.sQ]: "bottom" === t.anchor }),
            });
        case "rail":
            return (0, s.jsx)("div", {
                className: n()(h.S_, o, h.H$, {
                    [h.Mn]: "top" === t.anchor,
                    [h.sQ]: "bottom" === t.anchor,
                    [h.gX]: "center" === t.anchor,
                    [h.no]: !0 === t.responsive,
                }),
                children: (0, s.jsx)("img", { src: i, alt: "", "aria-hidden": !0 }),
            });
        case "border":
            let c = { "--custom-profile-frame-layer-src": `url(${i})` };
            return (0, s.jsx)("div", { role: "img", className: n()(h.S_, o, h.PQ), style: c });
        default:
            return null;
    }
}
function f(e) {
    let { frame: r, layout: t } = e,
        l = (0, o.bG)([c.A], () => c.A.theme),
        u = (0, m.A)(r.skuId),
        f = a.useMemo(
            () =>
                "MODAL_V2" === t
                    ? r.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === t
                      ? r.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : r.layers,
            [t, r.layers],
        ),
        { layerData: b } = (0, d.A)({ skuId: r.skuId, layers: f });
    return 0 === f.length
        ? null
        : (0, s.jsx)(i.N, {
              theme: l,
              children: (e) =>
                  (0, s.jsx)("div", {
                      className: n()(h.uF, e, u),
                      "aria-label": r.label,
                      role: "img",
                      children: (0, s.jsx)("div", {
                          className: h.hH,
                          children: f.map((e) => (0, s.jsx)(p, { skuId: r.skuId, layer: e, data: b[e.id] }, e.id)),
                      }),
                  }),
          });
}
