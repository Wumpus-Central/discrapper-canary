n.d(t, { Z: () => d }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(796075),
    o = n(695469),
    s = n(481060);
let c = null != (r = window.ResizeObserver) ? r : a.d,
    u = () => {
        let e = l.useRef(null),
            [t, n] = l.useState(0),
            r = l.useMemo(
                () =>
                    new c((e) => {
                        let [t] = e;
                        return n(t.contentRect.height);
                    }),
                []
            );
        return (
            l.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
            {
                ref: e,
                height: t
            }
        );
    };
function d(e) {
    let { show: t, children: n, top: r = 0, bottom: l = 0 } = e,
        { ref: a, height: c } = u(),
        d = (0, s.q_F)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? c : 0,
                paddingBottom: t ? ''.concat(l, 'px') : '0px',
                marginTop: t ? ''.concat(r, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        h = (0, s.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, i.jsx)(o.animated.div, {
        style: {
            overflow: 'hidden',
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop
        },
        children: (0, i.jsx)(o.animated.div, {
            style: { opacity: h.opacity },
            ref: a,
            children: n
        })
    });
}
