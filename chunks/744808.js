"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(17928),
    u = n(363195),
    c = n(746002),
    d = n(855915),
    _ = n(940622),
    h = n(875741),
    f = n(325409);
function p(e) {
    let { skuId: t, layer: n, data: r, fadeIn: s } = e,
        o = r?.src ?? (0, c.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == o) return null;
    let l = a()(f.S_, {
        [f.Wm]: "front" === n.order,
        [f.aX]: "back" === n.order,
        [f.Mn]: "top" === n.anchor,
        [f.sQ]: "bottom" === n.anchor,
        [f.gX]: "center" === n.anchor,
        [f.no]: !0 === n.responsive,
        [f.qG]: !0 === s,
    });
    switch (n.type) {
        case "staple":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: a()(f.zu, l) }),
                    (0, i.jsx)("img", { src: o, alt: "", "aria-hidden": !0, className: a()(l, f.im) }),
                ],
            });
        case "rail":
            return (0, i.jsx)("div", { role: "img", style: { backgroundImage: `url(${o})` }, className: a()(l, f.H$) });
        case "border":
            return (0, i.jsx)("div", {
                role: "img",
                "aria-hidden": !0,
                className: a()(l, f.PQ),
                children: Array.from({ length: 5 }, (e, t) =>
                    (0, i.jsx)("img", { src: o, alt: "", "aria-hidden": !0 }, t),
                ),
            });
        default:
            return n.type, null;
    }
}
function E(e) {
    let { frame: t, className: n, filterLayer: s, fadeIn: c = !0 } = e,
        E = (0, l.bG)([u.A], () => u.A.theme),
        m = (0, _.eo)(),
        g = (0, h.A)(t.skuId),
        { profileFrameStyle: A, profileFrameClassName: I } = m?.css ?? g,
        T = m?.layers ?? t.layers,
        S = null == s ? T : T.filter(s),
        y = S.map((e) => {
            let { id: t } = e;
            return t;
        }).join("\0"),
        C = r.useMemo(() => S, [T, y]),
        { layerData: N, loaded: v } = (0, d.A)({ skuId: t.skuId, layers: null != m ? void 0 : C }),
        R = m?.layerData ?? N,
        O = null != m || v;
    return 0 !== C.length && O
        ? (0, i.jsx)(o.N, {
              theme: E,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: a()(f.uF, e, I, n),
                      style: A,
                      "aria-label": t.label,
                      role: "img",
                      children: (0, i.jsx)("div", {
                          className: f.hH,
                          children: C.map((e) =>
                              (0, i.jsx)(p, { skuId: t.skuId, layer: e, data: R[e.id], fadeIn: c }, e.id),
                          ),
                      }),
                  }),
          })
        : null;
}
