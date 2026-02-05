"use strict";
n.d(t, { R: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(508382),
    u = n(158954),
    c = n(502939),
    d = n(397927),
    _ = n(129837),
    f = n(112317),
    p = n(348275),
    h = n(894524);
function m(e, t, n) {
    return e?.ownerDocument ?? t?.ownerDocument ?? n?.ownerDocument;
}
let g = 11,
    E = ["left", "center", "right"],
    A = ["top", "center", "bottom"];
function I(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: I,
            anchorRef: T,
            id: y,
            content: S,
            position: v = "top",
            align: C = "center",
            spacing: b = g,
            caretConfig: N,
            layerContext: R,
            animationStyle: O,
            positionKey: D,
        } = e,
        { isRichTooltip: L } = (0, f.w6)(),
        w = (0, c.D)("Tooltip"),
        [x, P] = i.useState(I?.ownerDocument);
    i.useLayoutEffect(() => {
        P(m(T?.current, I, a.current));
    }, [T, I, a]);
    let M = i.useMemo(() => (("left" === v || "right" === v ? A : E).includes(C) ? C : "center"), [v, C]);
    if (!n) return null;
    let k = (e) => {
        let { position: t, nudge: n } = e,
            i = t ?? v,
            a = N?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = N?.customOffset ?? n ?? 0,
            u = { position: N?.position ?? (0, p.l8)(i), align: a, customOffset: "custom" === a ? l : void 0 },
            c = (0, r.jsxs)("div", {
                id: y,
                className: s()(h.YL, { [h.mj]: L }),
                role: "tooltip",
                "data-position": i,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(_.z, { caretConfig: u }),
                    (0, r.jsx)("div", {
                        className: h.rv,
                        children:
                            "string" == typeof S ? (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return O ? (0, r.jsx)(o.animated.div, { style: O, children: c }) : c;
    };
    if (w) {
        let e = (0, l.Pv)(v, C),
            t = I ?? a.current;
        return (0, r.jsx)(l.Ow, {
            className: h.BM,
            open: n,
            spacing: b,
            placement: e,
            reference: t,
            ownerDocument: x,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    r = -(n?.x ?? 0);
                return k({ position: (0, l.$Y)(t), nudge: r });
            },
            children: () => null,
        });
    }
    let U = (0, r.jsx)(d.QCO, {
        targetRef: T ?? a,
        position: v,
        align: M,
        spacing: b,
        positionKey: D,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: k,
    });
    return null != R ? (0, r.jsx)(u.Wdr, { layerContext: R, children: U }) : U;
}
