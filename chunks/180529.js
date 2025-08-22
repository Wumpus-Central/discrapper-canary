n.d(t, { Z: () => d }), n(388685);
var i,
    r = n(951288),
    o = n(647438),
    a = n(796075),
    s = n(202841),
    l = n(481060);
let u = null != (i = window.ResizeObserver) ? i : a.d;
function d(e) {
    let { show: t, children: n, top: i = 0, bottom: a = 0 } = e,
        { ref: d, height: g } = (() => {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                i = o.useMemo(
                    () =>
                        new u((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                o.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                {
                    ref: e,
                    height: t,
                }
            );
        })(),
        c = (0, l.q_F)({
            from: {
                height: 0,
                paddingBottom: "0px",
                marginTop: "0px",
            },
            to: {
                height: t ? g : 0,
                paddingBottom: t ? "".concat(a, "px") : "0px",
                marginTop: t ? "".concat(i, "px") : "0px",
            },
            config: {
                tension: 170,
                friction: 26,
            },
        }),
        m = (0, l.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
        });
    return (0, r.jsx)(s.animated.div, {
        style: {
            overflow: "hidden",
            height: c.height,
            paddingBottom: c.paddingBottom,
            marginTop: c.marginTop,
        },
        children: (0, r.jsx)(s.animated.div, {
            style: { opacity: m.opacity },
            ref: d,
            children: n,
        }),
    });
}
