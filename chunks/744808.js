l.d(a, { A: () => y });
var t = l(627968),
    r = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(43990),
    u = l(17928),
    d = l(770178),
    c = l(363195),
    o = l(746002),
    h = l(855915),
    m = l(940622),
    f = l(875741),
    g = l(325409);
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
            return l.type, null;
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
        } = e,
        f = r.useRef(null),
        [b, y] = r.useState(null),
        [j, k] = r.useState(null),
        x = r.useCallback((e) => {
            y(Math.round(e.contentRect.width)), k(Math.round(e.contentRect.height));
        }, []);
    return (
        (0, d.g)(f, x, [], {
            fireOnMount: !0,
            enabled: s.some((e) => {
                let { type: a } = e;
                return "border" === a;
            }),
        }),
        (0, t.jsx)("div", {
            className: n()(g.uF, c, o, m),
            style: h,
            "aria-label": l,
            role: "img",
            children: (0, t.jsx)("div", {
                ref: f,
                className: g.hH,
                children: s.map((e) =>
                    (0, t.jsx)(
                        p,
                        { skuId: a, layer: e, data: i[e.id], fadeIn: u, containerWidth: b, containerHeight: j },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
function y(e) {
    let { frame: a, className: l, filterLayer: s, fadeIn: n = !0 } = e,
        d = (0, u.bG)([c.A], () => c.A.theme),
        o = (0, m.eo)(),
        g = (0, f.i)(a),
        { profileFrameStyle: p, profileFrameClassName: y } = o?.css ?? g,
        j = o?.layers ?? a.layers,
        k = null == s ? j : j.filter(s),
        x = k
            .map((e) => {
                let { id: a } = e;
                return a;
            })
            .join("\0"),
        I = r.useMemo(() => k, [j, x]),
        { layerData: N, loaded: v } = (0, h.A)({ skuId: a.skuId, layers: null != o ? void 0 : I }),
        A = o?.layerData ?? N,
        C = null != o || v;
    return 0 !== I.length && C
        ? (0, t.jsx)(i.N, {
              theme: d,
              children: (e) =>
                  (0, t.jsx)(b, {
                      skuId: a.skuId,
                      label: a.label,
                      layers: I,
                      layerData: A,
                      fadeIn: n,
                      themeClass: e,
                      profileFrameClassName: y,
                      profileFrameStyle: p,
                      className: l,
                  }),
          })
        : null;
}
