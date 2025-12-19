n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(54381),
    s = n(473749),
    a = n(796075),
    l = n(620792),
    o = n(481060);
let c = null != (r = window.ResizeObserver) ? r : a.d;
function u(e) {
    let { show: t, children: n, top: r = 0, bottom: a = 0 } = e,
        { ref: u, height: d } = (() => {
            let e = s.useRef(null),
                [t, n] = s.useState(0),
                r = s.useMemo(
                    () =>
                        new c((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                s.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
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
                paddingBottom: t ? "".concat(a, "px") : "0px",
                marginTop: t ? "".concat(r, "px") : "0px",
            },
            config: {
                tension: 170,
                friction: 26,
            },
        }),
        f = (0, o.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
        });
    return (0, i.jsx)(l.animated.div, {
        style: {
            overflow: "hidden",
            height: h.height,
            paddingBottom: h.paddingBottom,
            marginTop: h.marginTop,
        },
        children: (0, i.jsx)(l.animated.div, {
            style: { opacity: f.opacity },
            ref: u,
            children: n,
        }),
    });
}
