n.d(t, { N: () => g });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(793030),
    c = n(481060),
    u = n(337363),
    d = n(725027),
    f = n(464281),
    p = n(847310);
let _ = 11,
    m = ["left", "center", "right"],
    h = ["top", "center", "bottom"];
function g(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            anchorRef: g,
            id: E,
            content: b,
            position: y = "top",
            align: O = "center",
            spacing: v = _,
            caretConfig: S,
            layerContext: I,
            animationStyle: T,
            positionKey: C,
        } = e,
        A = i.useRef(null),
        { isRichTooltip: N } = (0, d.nr)(),
        P = i.useMemo(() => (("left" === y || "right" === y ? h : m).includes(O) ? O : "center"), [y, O]);
    if (!n) return null;
    let R = (0, r.jsx)(c.jRF, {
        targetRef: null != g ? g : a,
        position: y,
        align: P,
        spacing: v,
        positionKey: C,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: (e) => {
            var t, n, i, a;
            let { position: l, nudge: d } = e,
                _ = null != l ? l : y,
                m = null != (t = null == S ? void 0 : S.align) ? t : null != d && 0 !== d ? "custom" : "center",
                h = null != (i = null != (n = null == S ? void 0 : S.customOffset) ? n : d) ? i : 0,
                g = {
                    position: null != (a = null == S ? void 0 : S.position) ? a : (0, f.Av)(_),
                    align: m,
                    customOffset: "custom" === m ? h : void 0,
                },
                O = (0, r.jsxs)("div", {
                    ref: A,
                    id: E,
                    className: o()(p.tooltip, { [p.richTooltip]: N }),
                    role: "tooltip",
                    "data-position": _,
                    "data-mana-component": "tooltip",
                    children: [
                        (0, r.jsx)(u._, { caretConfig: g }),
                        (0, r.jsx)("div", {
                            className: p.tooltipContent,
                            children:
                                "string" == typeof b
                                    ? (0, r.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          children: b,
                                      })
                                    : b,
                        }),
                    ],
                });
            return T
                ? (0, r.jsx)(s.animated.div, {
                      style: T,
                      children: O,
                  })
                : O;
        },
    });
    return null != I
        ? (0, r.jsx)(l.mh4, {
              layerContext: I,
              children: R,
          })
        : R;
}
