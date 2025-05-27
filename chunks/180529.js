n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(714673),
    a = n(849146),
    o = n(481060);
let s = () => {
    let e = i.useRef(null),
        [t, n] = i.useState(0),
        r = i.useMemo(
            () =>
                new a.Z((e) => {
                    let [t] = e;
                    return n(t.contentRect.height);
                }),
            []
        );
    return (
        i.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
        {
            ref: e,
            height: t
        }
    );
};
function c(e) {
    let { show: t, children: n, top: i = 0, bottom: a = 0 } = e,
        { ref: c, height: u } = s(),
        d = (0, o.q_F)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? u : 0,
                paddingBottom: t ? ''.concat(a, 'px') : '0px',
                marginTop: t ? ''.concat(i, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        g = (0, o.q_F)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, r.jsx)(l.animated.div, {
        style: {
            overflow: 'hidden',
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop
        },
        children: (0, r.jsx)(l.animated.div, {
            style: { opacity: g.opacity },
            ref: c,
            children: n
        })
    });
}
