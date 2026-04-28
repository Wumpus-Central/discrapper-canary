a.d(t, { A: () => f });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(43990),
    o = a(17928),
    c = a(363195),
    d = a(746002),
    u = a(219220),
    h = a(282389),
    p = a(325409);
function m(e) {
    let { skuId: t, layer: a, data: r } = e,
        s = r?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: a.id }),
        o = l.useMemo(() => ({ [p.Wm]: "front" === a.order, [p.aX]: "back" === a.order }), [a.order]);
    if (null == s) return null;
    switch (a.type) {
        case "staple":
            return (0, n.jsx)("img", {
                src: s,
                alt: "",
                "aria-hidden": !0,
                className: i()(p.S_, o, p.im, { [p.Mn]: "top" === a.anchor, [p.sQ]: "bottom" === a.anchor }),
            });
        case "rail":
            return (0, n.jsx)("div", {
                className: i()(p.S_, o, p.H$, {
                    [p.Mn]: "top" === a.anchor,
                    [p.sQ]: "bottom" === a.anchor,
                    [p.gX]: "center" === a.anchor,
                    [p.no]: !0 === a.responsive,
                }),
                children: (0, n.jsx)("img", { src: s, alt: "", "aria-hidden": !0 }),
            });
        case "border":
            let c = { "--custom-profile-frame-layer-src": `url(${s})` };
            return (0, n.jsx)("div", { role: "img", className: i()(p.S_, o, p.PQ), style: c });
        default:
            return null;
    }
}
function f(e) {
    let { frame: t, layout: a } = e,
        r = (0, o.bG)([c.A], () => c.A.theme),
        d = (0, h.A)(t.skuId),
        f = l.useMemo(
            () =>
                "MODAL_V2" === a
                    ? t.layers.filter((e) => "bottom" !== e.anchor)
                    : "SIDEBAR" === a
                      ? t.layers.filter((e) => "staple" === e.type && "bottom" !== e.anchor)
                      : t.layers,
            [a, t.layers],
        ),
        { layerData: _ } = (0, u.A)({ skuId: t.skuId, layers: f });
    return 0 === f.length
        ? null
        : (0, n.jsx)(s.N, {
              theme: r,
              children: (e) =>
                  (0, n.jsx)("div", {
                      className: i()(p.uF, e, d),
                      "aria-label": t.label,
                      role: "img",
                      children: (0, n.jsx)("div", {
                          className: p.hH,
                          children: f.map((e) => (0, n.jsx)(m, { skuId: t.skuId, layer: e, data: _[e.id] }, e.id)),
                      }),
                  }),
          });
}
