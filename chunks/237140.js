"use strict";
n.d(t, { R: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(508382),
    d = n(365912),
    c = n(502939),
    u = n(834730),
    _ = n(623646),
    E = n(74567);
function A() {
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
var h = n(112317),
    I = n(916320);
let f = (e, t, n) => {
    let i = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-i, Math.min(i, e));
};
function p(e) {
    let { caretConfig: t } = e,
        { position: n, align: r, customOffset: a } = t,
        { isRichTooltip: l, richTooltipPadding: o } = (0, h.w6)(),
        d = "lg" === o;
    if (null == n) return null;
    let c =
            "custom" === r && null != a
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${f(a, l, d)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${f(a, l, d)}px` : "0px",
                  }
                : void 0,
        u = s()(I.caret, I[`caret--${n}`], I[`caret--${r}`]);
    return (0, i.jsx)("div", { className: u, style: c, children: (0, i.jsx)(A, {}) });
}
var T = n(348275);
let m = ["left", "center", "right"],
    g = ["top", "center", "bottom"];
function S(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: A,
            anchorRef: I,
            id: f,
            content: S,
            position: N = "top",
            align: C = "center",
            spacing: R = 11,
            caretConfig: O,
            layerContext: L,
            animationStyle: D,
            positionKey: y,
        } = e,
        { isRichTooltip: v } = (0, h.w6)(),
        b = (0, c.D)("Tooltip"),
        [M, P] = r.useState(A?.ownerDocument);
    r.useLayoutEffect(() => {
        var e, t;
        P(((e = I?.current), (t = a.current), e?.ownerDocument ?? A?.ownerDocument ?? t?.ownerDocument));
    }, [I, A, a]);
    let U = r.useMemo(() => (("left" === N || "right" === N ? g : m).includes(C) ? C : "center"), [N, C]);
    if (!n) return null;
    let w = (e) => {
        let { position: t, nudge: n } = e,
            r = t ?? N,
            a = O?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            o = O?.customOffset ?? n ?? 0,
            d = { position: O?.position ?? (0, T.l8)(r), align: a, customOffset: "custom" === a ? o : void 0 },
            c = (0, i.jsxs)("div", {
                id: f,
                className: s()(E.YL, { [E.mj]: v }),
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
        return D ? (0, i.jsx)(l.animated.div, { style: D, children: c }) : c;
    };
    if (b) {
        let e = (0, o.Pv)(N, C),
            t = A ?? a.current;
        return (0, i.jsx)(o.Ow, {
            className: E.BM,
            open: n,
            spacing: R,
            placement: e,
            reference: t,
            ownerDocument: M,
            autoUpdate: null != y,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    i = -(n?.x ?? 0);
                return w({ position: (0, o.$Y)(t), nudge: i });
            },
            children: () => null,
        });
    }
    let G = (0, i.jsx)(_.Q, {
        targetRef: I ?? a,
        position: N,
        align: U,
        spacing: R,
        positionKey: y,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: w,
    });
    return null != L ? (0, i.jsx)(d.Wd, { layerContext: L, children: G }) : G;
}
