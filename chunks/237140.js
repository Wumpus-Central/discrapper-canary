"use strict";
n.d(t, { R: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(508382),
    d = n(83379),
    _ = n(502939),
    u = n(834730),
    c = n(623646),
    E = n(310855);
function h() {
    return (0, i.jsxs)("svg", {
        width: "16",
        height: "10",
        viewBox: "0 0 16 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: E.Rq,
        children: [
            (0, i.jsx)("path", {
                className: E.vb,
                d: "M10.3426 7.0715C9.14163 8.57272 6.85837 8.57272 5.65739 7.0715L0 -0.000244141L16 -0.000244141L10.3426 7.0715Z",
            }),
            (0, i.jsx)("mask", {
                id: "mask0_tooltip_caret",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-1",
                width: "16",
                height: "10",
                children: (0, i.jsx)("path", {
                    d: "M10.3426 7.0715C9.14163 8.57272 6.85837 8.57272 5.65739 7.0715L0 -0.000244141L16 -0.000244141L10.3426 7.0715Z",
                    className: E.vb,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_tooltip_caret)",
                children: (0, i.jsx)("path", {
                    className: E.UL,
                    d: "M9.93457 6.84546C8.93433 8.06766 7.06567 8.06766 6.06543 6.84546L0.0546875 -0.500244L15.9453 -0.500244L9.93457 6.84546Z",
                }),
            }),
        ],
    });
}
var m = n(112317),
    f = n(736736);
let g = (e, t, n) => {
    let i = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-i, Math.min(i, e));
};
function p(e) {
    let { caretConfig: t } = e,
        { position: n, align: r, customOffset: s } = t,
        { isRichTooltip: o, richTooltipPadding: l } = (0, m.w6)(),
        d = "lg" === l;
    if (null == n) return null;
    let _ =
            "custom" === r && null != s
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${g(s, o, d)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${g(s, o, d)}px` : "0px",
                  }
                : void 0,
        u = a()(f.caret, f[`caret--${n}`], f[`caret--${r}`]);
    return (0, i.jsx)("div", { className: u, style: _, children: (0, i.jsx)(h, {}) });
}
var A = n(348275);
let I = ["left", "center", "right"],
    T = ["top", "center", "bottom"];
function S(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: s,
            targetElement: h,
            anchorRef: f,
            id: g,
            content: S,
            position: N = "top",
            align: C = "center",
            spacing: R = 11,
            caretConfig: O,
            layerContext: y,
            animationStyle: v,
            positionKey: D,
        } = e,
        { isRichTooltip: L } = (0, m.w6)(),
        b = (0, _.D)("Tooltip"),
        [w, P] = r.useState(h?.ownerDocument);
    r.useLayoutEffect(() => {
        var e, t;
        P(((e = f?.current), (t = s.current), e?.ownerDocument ?? h?.ownerDocument ?? t?.ownerDocument));
    }, [f, h, s]);
    let k = r.useMemo(() => (("left" === N || "right" === N ? T : I).includes(C) ? C : "center"), [N, C]);
    if (!n) return null;
    let M = (e) => {
        let { position: t, nudge: n } = e,
            r = t ?? N,
            s = O?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = O?.customOffset ?? n ?? 0,
            d = { position: O?.position ?? (0, A.l8)(r), align: s, customOffset: "custom" === s ? l : void 0 },
            _ = (0, i.jsxs)("div", {
                id: g,
                className: a()(E.YL, { [E.mj]: L }),
                role: "tooltip",
                "data-position": r,
                "data-mana-component": "tooltip",
                children: [
                    (0, i.jsx)(p, { caretConfig: d }),
                    (0, i.jsx)("div", {
                        className: E.rv,
                        children:
                            "string" == typeof S ? (0, i.jsx)(u.E, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return v ? (0, i.jsx)(o.animated.div, { style: v, children: _ }) : _;
    };
    if (b) {
        let e = (0, l.Pv)(N, C),
            t = h ?? s.current;
        return (0, i.jsx)(l.Ow, {
            className: E.BM,
            open: n,
            spacing: R,
            placement: e,
            reference: t,
            ownerDocument: w,
            autoUpdate: null != D,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    i = -(n?.x ?? 0);
                return M({ position: (0, l.$Y)(t), nudge: i });
            },
            children: () => null,
        });
    }
    let U = (0, i.jsx)(c.Q, {
        targetRef: f ?? s,
        position: N,
        align: k,
        spacing: R,
        positionKey: D,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: M,
    });
    return null != y ? (0, i.jsx)(d.Wd, { layerContext: y, children: U }) : U;
}
