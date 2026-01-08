n.d(t, { N: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(877164),
    l = n(762328),
    c = n(793030),
    u = n(682973),
    d = n(481060),
    f = n(337363),
    p = n(725027),
    _ = n(464281),
    m = n(847310);
let h = 11,
    g = ["left", "center", "right"],
    E = ["top", "center", "bottom"];
function b(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: b,
            anchorRef: y,
            id: O,
            content: v,
            position: S = "top",
            align: I = "center",
            spacing: T = h,
            caretConfig: C,
            layerContext: A,
            animationStyle: N,
            positionKey: P,
        } = e,
        { isRichTooltip: R } = (0, p.nr)(),
        w = (0, u.E)("Tooltip"),
        D = i.useMemo(() => (("left" === S || "right" === S ? E : g).includes(I) ? I : "center"), [S, I]);
    if (!n) return null;
    let x = (e) => {
        var t, n, i, a;
        let { position: l, nudge: c } = e,
            u = null != l ? l : S,
            p = null != (t = null == C ? void 0 : C.align) ? t : null != c && 0 !== c ? "custom" : "center",
            h = null != (i = null != (n = null == C ? void 0 : C.customOffset) ? n : c) ? i : 0,
            g = {
                position: null != (a = null == C ? void 0 : C.position) ? a : (0, _.Av)(u),
                align: p,
                customOffset: "custom" === p ? h : void 0,
            },
            E = (0, r.jsxs)("div", {
                id: O,
                className: o()(m.tooltip, { [m.richTooltip]: R }),
                role: "tooltip",
                "data-position": u,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(f._, { caretConfig: g }),
                    (0, r.jsx)("div", {
                        className: m.tooltipContent,
                        children:
                            "string" == typeof v
                                ? (0, r.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      children: v,
                                  })
                                : v,
                    }),
                ],
            });
        return N
            ? (0, r.jsx)(s.animated.div, {
                  style: N,
                  children: E,
              })
            : E;
    };
    if (w) {
        let e = (0, l.a_)(S, I);
        return (0, r.jsx)(l.pS, {
            open: n,
            spacing: T,
            placement: e,
            reference: b,
            renderLayer: (e) => {
                let { placement: t } = e;
                return x({
                    position: (0, l.C)(t),
                    nudge: 0,
                });
            },
            children: () => null,
        });
    }
    let L = (0, r.jsx)(d.jRF, {
        targetRef: null != y ? y : a,
        position: S,
        align: D,
        spacing: T,
        positionKey: P,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: x,
    });
    return null != A
        ? (0, r.jsx)(c.mh4, {
              layerContext: A,
              children: L,
          })
        : L;
}
