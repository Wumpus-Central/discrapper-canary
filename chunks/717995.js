"use strict";
n.d(t, { R: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(508382),
    u = n(365912),
    c = n(502939),
    d = n(834730),
    _ = n(623646),
    f = n(129837),
    p = n(112317),
    h = n(348275),
    E = n(310855);
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
            spacing: v = 11,
            caretConfig: C,
            layerContext: O,
            animationStyle: R,
            positionKey: b,
        } = e,
        { isRichTooltip: D } = (0, p.w6)(),
        L = (0, c.D)("Tooltip"),
        [w, M] = i.useState(A?.ownerDocument);
    i.useLayoutEffect(() => {
        var e, t;
        M(((e = I?.current), (t = s.current), e?.ownerDocument ?? A?.ownerDocument ?? t?.ownerDocument));
    }, [I, A, s]);
    let P = i.useMemo(() => (("left" === y || "right" === y ? g : m).includes(N) ? N : "center"), [y, N]);
    if (!n) return null;
    let x = (e) => {
        let { position: t, nudge: n } = e,
            i = t ?? y,
            s = C?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = C?.customOffset ?? n ?? 0,
            u = { position: C?.position ?? (0, h.l8)(i), align: s, customOffset: "custom" === s ? l : void 0 },
            c = (0, r.jsxs)("div", {
                id: T,
                className: a()(E.YL, { [E.mj]: D }),
                role: "tooltip",
                "data-position": i,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(f.z, { caretConfig: u }),
                    (0, r.jsx)("div", {
                        className: E.rv,
                        children:
                            "string" == typeof S ? (0, r.jsx)(d.E, { variant: "text-sm/medium", children: S }) : S,
                    }),
                ],
            });
        return R ? (0, r.jsx)(o.animated.div, { style: R, children: c }) : c;
    };
    if (L) {
        let e = (0, l.Pv)(y, N),
            t = A ?? s.current;
        return (0, r.jsx)(l.Ow, {
            className: E.BM,
            open: n,
            spacing: v,
            placement: e,
            reference: t,
            ownerDocument: w,
            autoUpdate: null != b,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    r = -(n?.x ?? 0);
                return x({ position: (0, l.$Y)(t), nudge: r });
            },
            children: () => null,
        });
    }
    let k = (0, r.jsx)(_.Q, {
        targetRef: I ?? s,
        position: y,
        align: P,
        spacing: v,
        positionKey: b,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: x,
    });
    return null != O ? (0, r.jsx)(u.Wd, { layerContext: O, children: k }) : k;
}
