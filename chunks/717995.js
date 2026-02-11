"use strict";
n.d(t, { R: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(508382),
    u = n(158954),
    c = n(502939),
    d = n(397927),
    _ = n(129837),
    f = n(112317),
    h = n(348275),
    p = n(69042);
function g(e, t, n) {
    return e?.ownerDocument ?? t?.ownerDocument ?? n?.ownerDocument;
}
let E = 11,
    A = ["left", "center", "right"],
    I = ["top", "center", "bottom"];
function T(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: T,
            anchorRef: y,
            id: S,
            content: v,
            position: C = "top",
            align: b = "center",
            spacing: N = E,
            caretConfig: R,
            layerContext: O,
            animationStyle: D,
            positionKey: L,
        } = e,
        { isRichTooltip: w } = (0, f.w6)(),
        x = (0, c.D)("Tooltip"),
        [P, M] = i.useState(T?.ownerDocument);
    i.useLayoutEffect(() => {
        M(g(y?.current, T, a.current));
    }, [y, T, a]);
    let k = i.useMemo(() => (("left" === C || "right" === C ? I : A).includes(b) ? b : "center"), [C, b]);
    if (!n) return null;
    let U = (e) => {
        let { position: t, nudge: n } = e,
            i = t ?? C,
            a = R?.align ?? (null != n && 0 !== n ? "custom" : "center"),
            l = R?.customOffset ?? n ?? 0,
            u = { position: R?.position ?? (0, h.l8)(i), align: a, customOffset: "custom" === a ? l : void 0 },
            c = (0, r.jsxs)("div", {
                id: S,
                className: s()(p.YL, { [p.mj]: w }),
                role: "tooltip",
                "data-position": i,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(_.z, { caretConfig: u }),
                    (0, r.jsx)("div", {
                        className: p.rv,
                        children:
                            "string" == typeof v ? (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: v }) : v,
                    }),
                ],
            });
        return D ? (0, r.jsx)(o.animated.div, { style: D, children: c }) : c;
    };
    if (x) {
        let e = (0, l.Pv)(C, b),
            t = T ?? a.current;
        return (0, r.jsx)(l.Ow, {
            className: p.BM,
            open: n,
            spacing: N,
            placement: e,
            reference: t,
            ownerDocument: P,
            renderLayer: (e) => {
                let { placement: t, shift: n } = e,
                    r = -(n?.x ?? 0);
                return U({ position: (0, l.$Y)(t), nudge: r });
            },
            children: () => null,
        });
    }
    let G = (0, r.jsx)(d.QCO, {
        targetRef: y ?? a,
        position: C,
        align: k,
        spacing: N,
        positionKey: L,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: U,
    });
    return null != O ? (0, r.jsx)(u.Wdr, { layerContext: O, children: G }) : G;
}
