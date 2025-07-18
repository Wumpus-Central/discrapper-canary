(n.d(t, { Z: () => g }), n(388685));
var i,
    r = n(255367),
    o = n(73800),
    a = n(796075),
    s = n(626415),
    l = n(481060);
let u = null != (i = window.ResizeObserver) ? i : a.d,
    d = () => {
        let e = o.useRef(null),
            [t, n] = o.useState(0),
            i = o.useMemo(
                () =>
                    new u((e) => {
                        let [t] = e;
                        return n(t.contentRect.height);
                    }),
                []
            );
        return (
            o.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
            {
                ref: e,
                height: t
            }
        );
    };
function g(e) {
    let { show: t, children: n, top: i = 0, bottom: o = 0 } = e,
        { ref: a, height: u } = d(),
        g = (0, l.q_F)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? u : 0,
                paddingBottom: t ? ''.concat(o, 'px') : '0px',
                marginTop: t ? ''.concat(i, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        c = (0, l.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, r.jsx)(s.animated.div, {
        style: {
            overflow: 'hidden',
            height: g.height,
            paddingBottom: g.paddingBottom,
            marginTop: g.marginTop
        },
        children: (0, r.jsx)(s.animated.div, {
            style: { opacity: c.opacity },
            ref: a,
            children: n
        })
    });
}
