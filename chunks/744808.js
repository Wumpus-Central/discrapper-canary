l.d(a, { A: () => y });
var t = l(477900),
    r = l(582128),
    s = l(503698),
    n = l.n(s),
    i = l(17928),
    u = l(43990),
    d = l(770178),
    c = l(363195),
    o = l(746002),
    h = l(855915),
    m = l(940622),
    f = l(875741),
    g = l(459872);
function p(e) {
    let { skuId: a, layer: l, data: r, fadeIn: s, containerWidth: i, containerHeight: u } = e,
        d = r?.src ?? (0, o.getCollectiblesItemAssetUrl)({ skuId: a, assetFormat: "static", assetId: l.id });
    if (null == d) return null;
    let c = n()(g.S_, {
        [g.Wm]: "front" === l.order,
        [g.aX]: "back" === l.order,
        [g.Mn]: "top" === l.anchor,
        [g.sQ]: "bottom" === l.anchor,
        [g.gX]: "center" === l.anchor,
        [g.no]: !0 === l.responsive,
        [g.qG]: !0 === s,
    });
    switch (l.type) {
        case "staple":
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)("div", { className: n()(g.zu, c) }),
                    (0, t.jsx)("img", { src: d, alt: "", "aria-hidden": !0, className: n()(c, g.im) }),
                ],
            });
        case "rail":
            return (0, t.jsx)("div", { role: "img", style: { backgroundImage: `url(${d})` }, className: n()(c, g.H$) });
        case "border":
            return (0, t.jsx)("div", {
                role: "img",
                "aria-hidden": !0,
                className: n()(c, g.PQ),
                children: Array.from(
                    {
                        length: (function (e) {
                            let { data: a, containerWidth: l, containerHeight: t } = e;
                            if (null == a || 0 === a.naturalWidth || null == l || null == t) return 5;
                            let r = l * (a.naturalHeight / a.naturalWidth);
                            return r <= 0 ? 5 : Math.ceil(t / r) + 1;
                        })({ data: r, containerWidth: i, containerHeight: u }),
                    },
                    (e, a) => (0, t.jsx)("img", { src: d, alt: "", "aria-hidden": !0 }, a),
                ),
            });
        default:
            return (l.type, null);
    }
}
function b(e) {
    let {
            skuId: a,
            label: l,
            layers: s,
            layerData: i,
            fadeIn: u,
            themeClass: c,
            profileFrameClassName: o,
            profileFrameStyle: h,
            className: m,
            isPreview: f,
        } = e,
        b = r.useRef(null),
        [y, j] = r.useState(null),
        [k, x] = r.useState(null),
        I = r.useCallback((e) => {
            (j(Math.round(e.contentRect.width)), x(Math.round(e.contentRect.height)));
        }, []);
    return (
        (0, d.g)(b, I, [], {
            fireOnMount: !0,
            enabled: s.some((e) => {
                let { type: a } = e;
                return "border" === a;
            }),
        }),
        (0, t.jsx)("div", {
            className: n()(g.uF, c, o, m, { [g.VH]: f }),
            style: h,
            "aria-label": l,
            role: "img",
            children: (0, t.jsx)("div", {
                ref: b,
                className: g.hH,
                children: s.map((e) =>
                    (0, t.jsx)(
                        p,
                        { skuId: a, layer: e, data: i[e.id], fadeIn: u, containerWidth: y, containerHeight: k },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
function y(e) {
    let { frame: a, className: l, filterLayer: s, fadeIn: n = !0, isPreview: d } = e,
        o = (0, i.bG)([c.A], () => c.A.theme),
        g = (0, m.eo)(),
        p = (0, f.i)(a),
        { profileFrameStyle: y, profileFrameClassName: j } = g?.css ?? p,
        k = g?.layers ?? a.layers,
        x = null == s ? k : k.filter(s),
        I = x
            .map((e) => {
                let { id: a } = e;
                return a;
            })
            .join("\0"),
        v = r.useMemo(() => x, [I]),
        { layerData: N, settled: A } = (0, h.A)({ skuId: a.skuId, layers: null != g ? void 0 : v }),
        C = g?.layerData ?? N,
        M = null != g || A;
    return 0 !== v.length && M
        ? (0, t.jsx)(u.N, {
              theme: o,
              children: (e) =>
                  (0, t.jsx)(b, {
                      skuId: a.skuId,
                      label: a.label,
                      layers: v,
                      layerData: C,
                      fadeIn: n,
                      themeClass: e,
                      profileFrameClassName: j,
                      profileFrameStyle: y,
                      className: l,
                      isPreview: d,
                  }),
          })
        : null;
}
