n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    o = n(192379),
    a = n(642128),
    r = n(849146),
    s = n(481060);
let l = () => {
    let e = o.useRef(null),
        [t, n] = o.useState(0),
        i = o.useMemo(
            () =>
                new r.Z((e) => {
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
function u(e) {
    let { show: t, children: n, top: o = 0, bottom: r = 0 } = e,
        { ref: u, height: g } = l(),
        d = (0, s.q_F)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? g : 0,
                paddingBottom: t ? ''.concat(r, 'px') : '0px',
                marginTop: t ? ''.concat(o, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        c = (0, s.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, i.jsx)(a.animated.div, {
        style: {
            overflow: 'hidden',
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop
        },
        children: (0, i.jsx)(a.animated.div, {
            style: { opacity: c.opacity },
            ref: u,
            children: n
        })
    });
}
