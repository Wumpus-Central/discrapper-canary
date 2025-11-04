n.d(t, { N: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(358458),
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
            id: g,
            content: E,
            position: b = "top",
            align: y = "center",
            spacing: O = p,
            caretConfig: v,
            layerContext: I,
            animationStyle: T,
            positionKey: S,
        } = e,
        A = i.useRef(null),
        { isRichTooltip: C } = (0, d.nr)(),
        N = i.useMemo(() => (("left" === b || "right" === b ? m : h).includes(y) ? y : "center"), [b, y]);
    if (!n) return null;
    let R = (0, r.jsx)(c.jRF, {
        targetRef: a,
        position: b,
        align: N,
        spacing: O,
        positionKey: S,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: (e) => {
            var t, n, i, a;
            let { position: l, nudge: d } = e,
                p = null != l ? l : b,
                h = null != (t = null == v ? void 0 : v.align) ? t : null != d && 0 !== d ? "custom" : "center",
                m = null != (i = null != (n = null == v ? void 0 : v.customOffset) ? n : d) ? i : 0,
                y = {
                    position: null != (a = null == v ? void 0 : v.position) ? a : (0, f.Av)(p),
                    align: h,
                    customOffset: "custom" === h ? m : void 0,
                },
                O = (0, r.jsxs)("div", {
                    ref: A,
                    id: g,
                    className: o()(_.tooltip, { [_.richTooltip]: C }),
                    role: "tooltip",
                    "data-position": p,
                    "data-mana-component": "tooltip",
                    children: [
                        (0, r.jsx)(u._, { caretConfig: y }),
                        (0, r.jsx)("div", {
                            className: _.tooltipContent,
                            children:
                                "string" == typeof E
                                    ? (0, r.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          children: E,
                                      })
                                    : E,
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
