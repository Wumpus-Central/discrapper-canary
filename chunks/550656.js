n.d(t, { N: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(302901),
    c = n(539907),
    u = n(481060),
    d = n(337363),
    f = n(725027),
    _ = n(464281),
    p = n(495511);
let h = 11,
    m = ["left", "center", "right"],
    g = ["top", "center", "bottom"];
function E(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            id: E,
            content: b,
            position: y = "top",
            align: O = "center",
            spacing: v = h,
            caretConfig: I,
            layerContext: T,
            animationStyle: S,
            positionKey: A,
            onMouseEnter: C,
            onMouseLeave: N,
        } = e,
        R = i.useRef(null),
        { isRichTooltip: P } = (0, f.nr)(),
        w = i.useMemo(() => (("left" === y || "right" === y ? g : m).includes(O) ? O : "center"), [y, O]);
    if (!n) return null;
    let D = (0, r.jsx)(c.j, {
        targetRef: a,
        position: y,
        align: w,
        spacing: v,
        positionKey: A,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: (e) => {
            var t, n, i, a;
            let { position: l, nudge: c } = e,
                f = null != l ? l : y,
                h = null != (t = null == I ? void 0 : I.align) ? t : null != c && 0 !== c ? "custom" : "center",
                m = null != (i = null != (n = null == I ? void 0 : I.customOffset) ? n : c) ? i : 0,
                g = {
                    position: null != (a = null == I ? void 0 : I.position) ? a : (0, _.Av)(f),
                    align: h,
                    customOffset: "custom" === h ? m : void 0,
                },
                O = (0, r.jsxs)("div", {
                    ref: R,
                    id: E,
                    className: o()(p.tooltip, { [p.richTooltip]: P }),
                    role: "tooltip",
                    onMouseEnter: C,
                    onMouseLeave: N,
                    "data-position": f,
                    children: [
                        (0, r.jsx)(d._, { caretConfig: g }),
                        (0, r.jsx)("div", {
                            className: p.tooltipContent,
                            children:
                                "string" == typeof b
                                    ? (0, r.jsx)(u.Text, {
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
        ? (0, r.jsx)(l.mh, {
              layerContext: T,
              children: D,
          })
        : D;
}
