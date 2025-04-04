n.d(t, { Z: () => f }), n(26686);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n(500923),
    s = n.n(a),
    l = n(963838),
    c = n(353368),
    u = n(910410);
let d = async (e) => {
    var t;
    let { animationType: n, animationId: r, url: i, shouldResize: a } = e,
        s = null != (t = l.Jw[n]) ? t : l.Jw[c.q.BASIC],
        u = JSON.parse(JSON.stringify(null != r && r < s.length ? s[r] : (0, o.sample)(s)));
    return (u.assets[0].p = a ? await (0, l.lv)(i) : i), u;
};
function f(e) {
    let { containerDimensions: t, effect: n, onComplete: o } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != a.current) {
                        let t = await d(n);
                        (e = s().loadAnimation({
                            container: a.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            n.animationType === c.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == o ? void 0 : o(n.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [o, n]),
        (0, r.jsx)('div', {
            className: u.effect,
            style: {
                height: t.height,
                width: t.width
            },
            ref: a
        })
    );
}
