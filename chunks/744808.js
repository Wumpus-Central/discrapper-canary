"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(43990),
    l = n(17928),
    u = n(770178),
    c = n(363195),
    d = n(746002),
    _ = n(855915),
    h = n(940622),
    f = n(875741),
    p = n(929697);
function E(e) {
    let { skuId: t, layer: n, data: r, fadeIn: s, containerWidth: o, containerHeight: l } = e,
        u = r?.src ?? (0, d.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == u) return null;
    let c = a()(p.S_, {
        [p.Wm]: "front" === n.order,
        [p.aX]: "back" === n.order,
        [p.Mn]: "top" === n.anchor,
        [p.sQ]: "bottom" === n.anchor,
        [p.gX]: "center" === n.anchor,
        [p.no]: !0 === n.responsive,
        [p.qG]: !0 === s,
    });
    switch (n.type) {
        case "staple":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: a()(p.zu, c) }),
                    (0, i.jsx)("img", { src: u, alt: "", "aria-hidden": !0, className: a()(c, p.im) }),
                ],
            });
        case "rail":
            return (0, i.jsx)("div", { role: "img", style: { backgroundImage: `url(${u})` }, className: a()(c, p.H$) });
        case "border":
            return (0, i.jsx)("div", {
                role: "img",
                "aria-hidden": !0,
                className: a()(c, p.PQ),
                children: Array.from(
                    {
                        length: ((e) => {
                            let { data: t, containerWidth: n, containerHeight: i } = e;
                            if (null == t || 0 === t.naturalWidth || null == n || null == i) return 5;
                            let r = n * (t.naturalHeight / t.naturalWidth);
                            return r <= 0 ? 5 : Math.ceil(i / r) + 1;
                        })({ data: r, containerWidth: o, containerHeight: l }),
                    },
                    (e, t) => (0, i.jsx)("img", { src: u, alt: "", "aria-hidden": !0 }, t),
                ),
            });
        default:
            return n.type, null;
    }
}
function m(e) {
    let {
            skuId: t,
            label: n,
            layers: s,
            layerData: o,
            fadeIn: l,
            themeClass: c,
            profileFrameClassName: d,
            profileFrameStyle: _,
            className: h,
        } = e,
        f = r.useRef(null),
        [m, g] = r.useState(null),
        [A, I] = r.useState(null),
        T = r.useCallback((e) => {
            g(Math.round(e.contentRect.width)), I(Math.round(e.contentRect.height));
        }, []);
    return (
        (0, u.g)(f, T, [], {
            fireOnMount: !0,
            enabled: s.some((e) => {
                let { type: t } = e;
                return "border" === t;
            }),
        }),
        (0, i.jsx)("div", {
            className: a()(p.uF, c, d, h),
            style: _,
            "aria-label": n,
            role: "img",
            children: (0, i.jsx)("div", {
                ref: f,
                className: p.hH,
                children: s.map((e) =>
                    (0, i.jsx)(
                        E,
                        { skuId: t, layer: e, data: o[e.id], fadeIn: l, containerWidth: m, containerHeight: A },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
function g(e) {
    let { frame: t, className: n, filterLayer: s, fadeIn: a = !0 } = e,
        u = (0, l.bG)([c.A], () => c.A.theme),
        d = (0, h.eo)(),
        p = (0, f.A)(t.skuId),
        { profileFrameStyle: E, profileFrameClassName: g } = d?.css ?? p,
        A = d?.layers ?? t.layers,
        I = null == s ? A : A.filter(s),
        T = I.map((e) => {
            let { id: t } = e;
            return t;
        }).join("\0"),
        S = r.useMemo(() => I, [A, T]),
        { layerData: y, loaded: C } = (0, _.A)({ skuId: t.skuId, layers: null != d ? void 0 : S }),
        N = d?.layerData ?? y,
        v = null != d || C;
    return 0 !== S.length && v
        ? (0, i.jsx)(o.N, {
              theme: u,
              children: (e) =>
                  (0, i.jsx)(m, {
                      skuId: t.skuId,
                      label: t.label,
                      layers: S,
                      layerData: N,
                      fadeIn: a,
                      themeClass: e,
                      profileFrameClassName: g,
                      profileFrameStyle: E,
                      className: n,
                  }),
          })
        : null;
}
