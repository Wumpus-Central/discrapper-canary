"use strict";
n.d(t, { R: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(508382),
    u = n(365912),
    d = n(502939),
    c = n(834730),
    _ = n(623646),
    h = n(310855);
function f() {
    return (0, i.jsxs)("svg", {
        width: "16",
        height: "10",
        viewBox: "0 0 16 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: h.Rq,
        children: [
            (0, i.jsx)("path", {
                className: h.vb,
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
                    className: h.vb,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_tooltip_caret)",
                children: (0, i.jsx)("path", {
                    className: h.UL,
                    d: "M9.93457 6.84546C8.93433 8.06766 7.06567 8.06766 6.06543 6.84546L0.0546875 -0.500244L15.9453 -0.500244L9.93457 6.84546Z",
                }),
            }),
        ],
    });
}
var E = n(112317),
    p = n(736736);
let m = (e, t, n) => {
    let i = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-i, Math.min(i, e));
};
function g(e) {
    let { caretConfig: t } = e,
        { position: n, align: r, customOffset: s } = t,
        { isRichTooltip: o, richTooltipPadding: l } = (0, E.w6)(),
        u = "lg" === l;
    if (null == n) return null;
    let d =
            "custom" === r && null != s
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${m(s, o, u)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${m(s, o, u)}px` : "0px",
                  }
                : void 0,
        c = a()(p.caret, p[`caret--${n}`], p[`caret--${r}`]);
    return (0, i.jsx)("div", { className: c, style: d, children: (0, i.jsx)(f, {}) });
}
var A = n(348275);
let I = ["left", "center", "right"],
    T = ["top", "center", "bottom"];
function S(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: s,
            targetElement: f,
            anchorRef: p,
            id: m,
            content: S,
            position: N = "top",
            align: C = "center",
            spacing: y = 11,
            caretConfig: v,
            layerContext: R,
            animationStyle: O,
            positionKey: b,
        } = e,
        { isRichTooltip: L } = (0, E.w6)(),
        D = (0, d.D)("Tooltip"),
        [P, w] = r.useState(f?.ownerDocument);
    r.useLayoutEffect(() => {
        var e, t;
        w(((e = p?.current), (t = s.current), e?.ownerDocument ?? f?.ownerDocument ?? t?.ownerDocument));
    }, [p, f, s]);
    let M = r.useMemo(() => (("left" === N || "right" === N ? T : I).includes(C) ? C : "center"), [N, C]);
    if (!n) return null;
    let x = (e) => {
        let { position: t, nudge: n } = e,
            r = t ?? N,
            s = v?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = v?.customOffset ?? n ?? 0,
            u = { position: v?.position ?? (0, A.l8)(r), align: s, customOffset: "custom" === s ? l : void 0 },
            d = (0, i.jsxs)("div", {
                id: m,
                className: a()(h.YL, { [h.mj]: L }),
                role: "tooltip",
                "data-position": r,
                "data-mana-component": "tooltip",
                children: [
                    (0, i.jsx)(g, { caretConfig: u }),
                    (0, i.jsx)("div", {
                        className: h.rv,
                        children:
                            "string" == typeof S ? (0, i.jsx)(c.E, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return O ? (0, i.jsx)(o.animated.div, { style: O, children: d }) : d;
    };
    if (D) {
        let e = (0, l.Pv)(N, C),
            t = f ?? s.current;
        return (0, i.jsx)(l.Ow, {
            className: h.BM,
            open: n,
            spacing: y,
            placement: e,
            reference: t,
            ownerDocument: P,
            autoUpdate: null != b,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    i = -(n?.x ?? 0);
                return x({ position: (0, l.$Y)(t), nudge: i });
            },
            children: () => null,
        });
    }
    let U = (0, i.jsx)(_.Q, {
        targetRef: p ?? s,
        position: N,
        align: M,
        spacing: y,
        positionKey: b,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: x,
    });
    return null != R ? (0, i.jsx)(u.Wd, { layerContext: R, children: U }) : U;
}
