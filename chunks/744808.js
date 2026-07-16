"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(43990),
    o = n(17928),
    d = n(770178),
    c = n(363195),
    u = n(746002),
    _ = n(855915),
    E = n(940622),
    A = n(875741),
    h = n(325409);
function I(e) {
    let { skuId: t, layer: n, data: r, fadeIn: a, containerWidth: l, containerHeight: o } = e,
        d = r?.src ?? (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == d) return null;
    let c = s()(h.S_, {
        [h.Wm]: "front" === n.order,
        [h.aX]: "back" === n.order,
        [h.Mn]: "top" === n.anchor,
        [h.sQ]: "bottom" === n.anchor,
        [h.gX]: "center" === n.anchor,
        [h.no]: !0 === n.responsive,
        [h.qG]: !0 === a,
    });
    switch (n.type) {
        case "staple":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: s()(h.zu, c) }),
                    (0, i.jsx)("img", { src: d, alt: "", "aria-hidden": !0, className: s()(c, h.im) }),
                ],
            });
        case "rail":
            return (0, i.jsx)("div", { role: "img", style: { backgroundImage: `url(${d})` }, className: s()(c, h.H$) });
        case "border":
            return (0, i.jsx)("div", {
                role: "img",
                "aria-hidden": !0,
                className: s()(c, h.PQ),
                children: Array.from(
                    {
                        length: (function (e) {
                            let { data: t, containerWidth: n, containerHeight: i } = e;
                            if (null == t || 0 === t.naturalWidth || null == n || null == i) return 5;
                            let r = n * (t.naturalHeight / t.naturalWidth);
                            return r <= 0 ? 5 : Math.ceil(i / r) + 1;
                        })({ data: r, containerWidth: l, containerHeight: o }),
                    },
                    (e, t) => (0, i.jsx)("img", { src: d, alt: "", "aria-hidden": !0 }, t),
                ),
            });
        default:
            return n.type, null;
    }
}
function f(e) {
    let {
            skuId: t,
            label: n,
            layers: a,
            layerData: l,
            fadeIn: o,
            themeClass: c,
            profileFrameClassName: u,
            profileFrameStyle: _,
            className: E,
        } = e,
        A = r.useRef(null),
        [f, p] = r.useState(null),
        [T, m] = r.useState(null),
        g = r.useCallback((e) => {
            p(Math.round(e.contentRect.width)), m(Math.round(e.contentRect.height));
        }, []);
    return (
        (0, d.g)(A, g, [], {
            fireOnMount: !0,
            enabled: a.some((e) => {
                let { type: t } = e;
                return "border" === t;
            }),
        }),
        (0, i.jsx)("div", {
            className: s()(h.uF, c, u, E),
            style: _,
            "aria-label": n,
            role: "img",
            children: (0, i.jsx)("div", {
                ref: A,
                className: h.hH,
                children: a.map((e) =>
                    (0, i.jsx)(
                        I,
                        { skuId: t, layer: e, data: l[e.id], fadeIn: o, containerWidth: f, containerHeight: T },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
function p(e) {
    let { frame: t, className: n, filterLayer: a, fadeIn: s = !0 } = e,
        d = (0, o.bG)([c.A], () => c.A.theme),
        u = (0, E.eo)(),
        h = (0, A.i)(t),
        { profileFrameStyle: I, profileFrameClassName: p } = u?.css ?? h,
        T = u?.layers ?? t.layers,
        m = null == a ? T : T.filter(a),
        g = m
            .map((e) => {
                let { id: t } = e;
                return t;
            })
            .join("\0"),
        S = r.useMemo(() => m, [T, g]),
        { layerData: N, loaded: C } = (0, _.A)({ skuId: t.skuId, layers: null != u ? void 0 : S }),
        R = u?.layerData ?? N,
        O = null != u || C;
    return 0 !== S.length && O
        ? (0, i.jsx)(l.N, {
              theme: d,
              children: (e) =>
                  (0, i.jsx)(f, {
                      skuId: t.skuId,
                      label: t.label,
                      layers: S,
                      layerData: R,
                      fadeIn: s,
                      themeClass: e,
                      profileFrameClassName: p,
                      profileFrameStyle: I,
                      className: n,
                  }),
          })
        : null;
}
