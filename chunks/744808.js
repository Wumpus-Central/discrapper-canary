s.d(a, { A: () => y });
var l = s(627968),
    r = s(64700),
    t = s(503698),
    i = s.n(t),
    n = s(43990),
    d = s(17928),
    c = s(363195),
    o = s(746002),
    u = s(855915),
    m = s(940622),
    h = s(875741),
    p = s(325409);
function g(e) {
    let { skuId: a, layer: s, data: r } = e,
        t = r?.src ?? (0, o.getCollectiblesItemAssetUrl)({ skuId: a, assetFormat: "static", assetId: s.id });
    if (null == t) return null;
    let n = i()(p.S_, {
        [p.Wm]: "front" === s.order,
        [p.aX]: "back" === s.order,
        [p.Mn]: "top" === s.anchor,
        [p.sQ]: "bottom" === s.anchor,
        [p.gX]: "center" === s.anchor,
        [p.no]: !0 === s.responsive,
    });
    return "staple" === s.type
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { className: i()(p.zu, n) }),
                  (0, l.jsx)("img", { src: t, alt: "", "aria-hidden": !0, className: i()(n, p.im) }),
              ],
          })
        : "rail" === s.type
          ? (0, l.jsx)("div", { role: "img", style: { backgroundImage: `url(${t})` }, className: i()(n, p.H$) })
          : "border" === s.type
            ? (0, l.jsx)("div", {
                  role: "img",
                  "aria-hidden": !0,
                  className: i()(n, p.PQ),
                  children: Array.from({ length: 5 }, (e, a) =>
                      (0, l.jsx)("img", { src: t, alt: "", "aria-hidden": !0 }, a),
                  ),
              })
            : null;
}
function y(e) {
    let { frame: a, className: s, filterLayer: t } = e,
        o = (0, d.bG)([c.A], () => c.A.theme),
        y = (0, m.eo)(),
        j = (0, h.A)(a.skuId),
        { profileFrameStyle: k, profileFrameClassName: b } = y?.css ?? j,
        x = y?.layers ?? a.layers,
        v = null == t ? x : x.filter(t),
        I = v
            .map((e) => {
                let { id: a } = e;
                return a;
            })
            .join("\0"),
        A = r.useMemo(() => v, [x, I]),
        { layerData: N, loaded: f } = (0, u.A)({ skuId: a.skuId, layers: null != y ? void 0 : A }),
        C = y?.layerData ?? N,
        F = null != y || f;
    return 0 !== A.length && F
        ? (0, l.jsx)(n.N, {
              theme: o,
              children: (e) =>
                  (0, l.jsx)("div", {
                      className: i()(p.uF, e, b, s),
                      style: k,
                      "aria-label": a.label,
                      role: "img",
                      children: (0, l.jsx)("div", {
                          className: p.hH,
                          children: A.map((e) => (0, l.jsx)(g, { skuId: a.skuId, layer: e, data: C[e.id] }, e.id)),
                      }),
                  }),
          })
        : null;
}
