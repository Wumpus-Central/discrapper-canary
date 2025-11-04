n.d(t, { N: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(689628),
    l = n(793030),
    c = n(481060),
    u = n(337363),
    d = n(725027),
    f = n(464281),
    _ = n(495511);
let p = 11,
    h = ["left", "center", "right"],
    m = ["top", "center", "bottom"];
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
            spacing: v = p,
            caretConfig: I,
            layerContext: T,
            animationStyle: S,
            positionKey: A,
        } = e,
        C = i.useRef(null),
        { isRichTooltip: N } = (0, d.nr)(),
        R = i.useMemo(() => (("left" === y || "right" === y ? m : h).includes(O) ? O : "center"), [y, O]);
    if (!n) return null;
    let P = (0, r.jsx)(c.jRF, {
        targetRef: null != g ? g : a,
        position: y,
        align: R,
        spacing: v,
        positionKey: A,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: (e) => {
            var t, n, i, a;
            let { position: l, nudge: d } = e,
                p = null != l ? l : y,
                h = null != (t = null == I ? void 0 : I.align) ? t : null != d && 0 !== d ? "custom" : "center",
                m = null != (i = null != (n = null == I ? void 0 : I.customOffset) ? n : d) ? i : 0,
                g = {
                    position: null != (a = null == I ? void 0 : I.position) ? a : (0, f.Av)(p),
                    align: h,
                    customOffset: "custom" === h ? m : void 0,
                },
                O = (0, r.jsxs)("div", {
                    ref: C,
                    id: E,
                    className: o()(_.tooltip, { [_.richTooltip]: N }),
                    role: "tooltip",
                    "data-position": p,
                    "data-mana-component": "tooltip",
                    children: [
                        (0, r.jsx)(u._, { caretConfig: g }),
                        (0, r.jsx)("div", {
                            className: _.tooltipContent,
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
            return S
                ? (0, r.jsx)(s.animated.div, {
                      style: S,
                      children: O,
                  })
                : O;
        },
    });
    return null != T
        ? (0, r.jsx)(l.mh4, {
              layerContext: T,
              children: P,
          })
        : P;
}
