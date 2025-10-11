n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    s = n(796075),
    a = n(599273),
    o = n(481060);
let c = null != (r = window.ResizeObserver) ? r : s.d;
function u(e) {
    let { show: t, children: n, top: r = 0, bottom: s = 0 } = e,
        { ref: u, height: d } = (() => {
            let e = l.useRef(null),
                [t, n] = l.useState(0),
                r = l.useMemo(
                    () =>
                        new c((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                l.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
                {
                    ref: e,
                    height: t,
                }
            );
        })(),
        h = (0, o.q_F)({
            from: {
                height: 0,
                paddingBottom: "0px",
                marginTop: "0px",
            },
            to: {
                height: t ? d : 0,
                paddingBottom: t ? "".concat(s, "px") : "0px",
                marginTop: t ? "".concat(r, "px") : "0px",
            },
            config: {
                tension: 170,
                friction: 26,
            },
        }),
        g = (0, o.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
        });
    return (0, i.jsx)(a.animated.div, {
        style: {
            overflow: "hidden",
            height: h.height,
            paddingBottom: h.paddingBottom,
            marginTop: h.marginTop,
        },
        children: (0, i.jsx)(a.animated.div, {
            style: { opacity: g.opacity },
            ref: u,
            children: n,
        }),
    });
}
