"use strict";
n.d(t, { R: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(442215),
    l = n(508382),
    u = n(158954),
    c = n(502939),
    d = n(397927),
    _ = n(129837),
    f = n(112317),
    p = n(348275),
    h = n(69042);
function m(e, t, n) {
    return e?.ownerDocument ?? t?.ownerDocument ?? n?.ownerDocument;
}
let E = 11,
    g = ["left", "center", "right"],
    A = ["top", "center", "bottom"];
function I(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: s,
            targetElement: I,
            anchorRef: T,
            id: S,
            content: y,
            position: v = "top",
            align: N = "center",
            spacing: C = E,
            caretConfig: b,
            layerContext: R,
            animationStyle: O,
            positionKey: D,
        } = e,
        { isRichTooltip: L } = (0, f.w6)(),
        w = (0, c.D)("Tooltip"),
        [x, M] = i.useState(I?.ownerDocument);
    i.useLayoutEffect(() => {
        M(m(T?.current, I, s.current));
    }, [T, I, s]);
    let P = i.useMemo(() => (("left" === v || "right" === v ? A : g).includes(N) ? N : "center"), [v, N]);
    if (!n) return null;
    let k = (e) => {
        let { position: t, nudge: n } = e,
            i = t ?? v,
            s = b?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = b?.customOffset ?? n ?? 0,
            u = { position: b?.position ?? (0, p.l8)(i), align: s, customOffset: "custom" === s ? l : void 0 },
            c = (0, r.jsxs)("div", {
                id: S,
                className: a()(h.YL, { [h.mj]: L }),
                role: "tooltip",
                "data-position": i,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(_.z, { caretConfig: u }),
                    (0, r.jsx)("div", {
                        className: h.rv,
                        children:
                            "string" == typeof y ? (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: y }) : y,
                    }),
                ],
            });
        return O ? (0, r.jsx)(o.animated.div, { style: O, children: c }) : c;
    };
    if (w) {
        let e = (0, l.Pv)(v, N),
            t = I ?? s.current;
        return (0, r.jsx)(l.Ow, {
            className: h.BM,
            open: n,
            spacing: C,
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
        targetRef: T ?? s,
        position: v,
        align: P,
        spacing: C,
        positionKey: D,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: k,
    });
    return null != R ? (0, r.jsx)(u.Wdr, { layerContext: R, children: U }) : U;
}
