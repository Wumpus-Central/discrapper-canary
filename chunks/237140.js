"use strict";
n.d(t, { R: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(508382),
    u = n(83379),
    c = n(502939),
    d = n(834730),
    _ = n(623646),
    f = n(310855);
function h() {
    return (0, i.jsxs)("svg", {
        width: "16",
        height: "10",
        viewBox: "0 0 16 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: f.Rq,
        children: [
            (0, i.jsx)("path", {
                className: f.vb,
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
                    className: f.vb,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_tooltip_caret)",
                children: (0, i.jsx)("path", {
                    className: f.UL,
                    d: "M9.93457 6.84546C8.93433 8.06766 7.06567 8.06766 6.06543 6.84546L0.0546875 -0.500244L15.9453 -0.500244L9.93457 6.84546Z",
                }),
            }),
        ],
    });
}
var p = n(112317),
    E = n(736736);
let m = (e, t, n) => {
    let i = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-i, Math.min(i, e));
};
function g(e) {
    let { caretConfig: t } = e,
        { position: n, align: r, customOffset: s } = t,
        { isRichTooltip: o, richTooltipPadding: l } = (0, p.w6)(),
        u = "lg" === l;
    if (null == n) return null;
    let c =
            "custom" === r && null != s
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${m(s, o, u)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${m(s, o, u)}px` : "0px",
                  }
                : void 0,
        d = a()(E.caret, E[`caret--${n}`], E[`caret--${r}`]);
    return (0, i.jsx)("div", { className: d, style: c, children: (0, i.jsx)(h, {}) });
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
            anchorRef: E,
            id: m,
            content: S,
            position: N = "top",
            align: y = "center",
            spacing: C = 11,
            caretConfig: v,
            layerContext: O,
            animationStyle: R,
            positionKey: b,
        } = e,
        { isRichTooltip: D } = (0, p.w6)(),
        L = (0, c.D)("Tooltip"),
        [w, M] = r.useState(h?.ownerDocument);
    r.useLayoutEffect(() => {
        var e, t;
        M(((e = E?.current), (t = s.current), e?.ownerDocument ?? h?.ownerDocument ?? t?.ownerDocument));
    }, [E, h, s]);
    let P = r.useMemo(() => (("left" === N || "right" === N ? T : I).includes(y) ? y : "center"), [N, y]);
    if (!n) return null;
    let x = (e) => {
        let { position: t, nudge: n } = e,
            r = t ?? N,
            s = v?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = v?.customOffset ?? n ?? 0,
            u = { position: v?.position ?? (0, A.l8)(r), align: s, customOffset: "custom" === s ? l : void 0 },
            c = (0, i.jsxs)("div", {
                id: m,
                className: a()(f.YL, { [f.mj]: D }),
                role: "tooltip",
                "data-position": r,
                "data-mana-component": "tooltip",
                children: [
                    (0, i.jsx)(g, { caretConfig: u }),
                    (0, i.jsx)("div", {
                        className: f.rv,
                        children:
                            "string" == typeof S ? (0, i.jsx)(d.E, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return R ? (0, i.jsx)(o.animated.div, { style: R, children: c }) : c;
    };
    if (L) {
        let e = (0, l.Pv)(N, y),
            t = h ?? s.current;
        return (0, i.jsx)(l.Ow, {
            className: f.BM,
            open: n,
            spacing: C,
            placement: e,
            reference: t,
            ownerDocument: w,
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
        targetRef: E ?? s,
        position: N,
        align: P,
        spacing: C,
        positionKey: b,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: x,
    });
    return null != O ? (0, i.jsx)(u.Wd, { layerContext: O, children: U }) : U;
}
