"use strict";
n.d(t, { R: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(508382),
    d = n(834730),
    c = n(310700);
function u() {
    return (0, i.jsxs)("svg", {
        width: "16",
        height: "10",
        viewBox: "0 0 16 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: c.Rq,
        children: [
            (0, i.jsx)("path", {
                className: c.vb,
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
                    className: c.vb,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_tooltip_caret)",
                children: (0, i.jsx)("path", {
                    className: c.UL,
                    d: "M9.93457 6.84546C8.93433 8.06766 7.06567 8.06766 6.06543 6.84546L0.0546875 -0.500244L15.9453 -0.500244L9.93457 6.84546Z",
                }),
            }),
        ],
    });
}
var _ = n(747556),
    E = n(993673);
let A = (e, t, n) => {
    let i = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-i, Math.min(i, e));
};
function h(e) {
    let { caretConfig: t } = e,
        { position: n, align: r, customOffset: a } = t,
        { isRichTooltip: l, richTooltipPadding: o } = (0, _.w6)(),
        d = "lg" === o;
    if (null == n) return null;
    let c =
            "custom" === r && null != a
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${A(a, l, d)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${A(a, l, d)}px` : "0px",
                  }
                : void 0,
        h = s()(E.caret, E[`caret--${n}`], E[`caret--${r}`]);
    return (0, i.jsx)("div", { className: h, style: c, children: (0, i.jsx)(u, {}) });
}
var I = n(710778);
function f(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: u,
            anchorRef: E,
            id: A,
            content: f,
            position: p = "top",
            align: T = "center",
            spacing: m = 11,
            caretConfig: g,
            animationStyle: S,
            positionKey: N,
        } = e,
        { isRichTooltip: C } = (0, _.w6)(),
        [R, O] = r.useState(u?.ownerDocument);
    if (
        (r.useLayoutEffect(() => {
            var e, t;
            O(((e = E?.current), (t = a.current), e?.ownerDocument ?? u?.ownerDocument ?? t?.ownerDocument));
        }, [E, u, a]),
        !n)
    )
        return null;
    let L = (0, o.Pv)(p, T),
        D = u ?? a.current;
    return (0, i.jsx)(o.Ow, {
        className: c.BM,
        open: n,
        spacing: m,
        placement: L,
        reference: D,
        ownerDocument: R,
        autoUpdate: null != N,
        renderLayer: (e) => {
            let { placement: t, shift: n } = e,
                r = -(n?.x ?? 0);
            return ((e) => {
                let { position: t, nudge: n } = e,
                    r = t ?? p,
                    a = g?.align ?? (null != n && 0 !== n ? "custom" : "center"),
                    o = g?.customOffset ?? n ?? 0,
                    u = { position: g?.position ?? (0, I.l8)(r), align: a, customOffset: "custom" === a ? o : void 0 },
                    _ = (0, i.jsxs)("div", {
                        id: A,
                        className: s()(c.YL, { [c.mj]: C }),
                        role: "tooltip",
                        "data-position": r,
                        "data-mana-component": "tooltip",
                        children: [
                            (0, i.jsx)(h, { caretConfig: u }),
                            (0, i.jsx)("div", {
                                className: c.rv,
                                children:
                                    "string" == typeof f
                                        ? (0, i.jsx)(d.E, { variant: "text-sm/medium", children: f })
                                        : f,
                            }),
                        ],
                    });
                return S ? (0, i.jsx)(l.animated.div, { style: S, children: _ }) : _;
            })({ position: (0, o.$Y)(t), nudge: r });
        },
        children: () => null,
    });
}
