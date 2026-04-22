"use strict";
n.d(t, { R: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(508382),
    u = n(365912),
    d = n(502939),
    c = n(834730),
    _ = n(623646),
    f = n(129837),
    E = n(112317),
    h = n(348275),
    p = n(74567);
let m = ["left", "center", "right"],
    g = ["top", "center", "bottom"];
function A(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: s,
            targetElement: A,
            anchorRef: I,
            id: T,
            content: S,
            position: y = "top",
            align: N = "center",
            spacing: O = 11,
            caretConfig: R,
            layerContext: v,
            animationStyle: C,
            positionKey: b,
        } = e,
        { isRichTooltip: D } = (0, E.w6)(),
        L = (0, d.D)("Tooltip"),
        [w, M] = i.useState(A?.ownerDocument);
    i.useLayoutEffect(() => {
        var e, t;
        M(((e = I?.current), (t = s.current), e?.ownerDocument ?? A?.ownerDocument ?? t?.ownerDocument));
    }, [I, A, s]);
    let P = i.useMemo(() => (("left" === y || "right" === y ? g : m).includes(N) ? N : "center"), [y, N]);
    if (!n) return null;
    let U = (e) => {
        let { position: t, nudge: n } = e,
            i = t ?? y,
            s = R?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = R?.customOffset ?? n ?? 0,
            u = { position: R?.position ?? (0, h.l8)(i), align: s, customOffset: "custom" === s ? l : void 0 },
            d = (0, r.jsxs)("div", {
                id: T,
                className: a()(p.YL, { [p.mj]: D }),
                role: "tooltip",
                "data-position": i,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(f.z, { caretConfig: u }),
                    (0, r.jsx)("div", {
                        className: p.rv,
                        children:
                            "string" == typeof S ? (0, r.jsx)(c.E, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return C ? (0, r.jsx)(o.animated.div, { style: C, children: d }) : d;
    };
    if (L) {
        let e = (0, l.Pv)(y, N),
            t = A ?? s.current;
        return (0, r.jsx)(l.Ow, {
            className: p.BM,
            open: n,
            spacing: O,
            placement: e,
            reference: t,
            ownerDocument: w,
            autoUpdate: null != b,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    r = -(n?.x ?? 0);
                return U({ position: (0, l.$Y)(t), nudge: r });
            },
            children: () => null,
        });
    }
    let k = (0, r.jsx)(_.Q, {
        targetRef: I ?? s,
        position: y,
        align: P,
        spacing: O,
        positionKey: b,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: U,
    });
    return null != v ? (0, r.jsx)(u.Wd, { layerContext: v, children: k }) : k;
}
