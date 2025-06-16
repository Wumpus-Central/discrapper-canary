n.d(t, { Z: () => f }), n(49124);
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n(500923),
    s = n.n(o),
    l = n(963838),
    c = n(353368),
    u = n(910410);
let d = async (e) => {
    var t;
    let { animationType: n, animationId: r, url: i, shouldResize: o } = e,
        s = null != (t = l.Jw[n]) ? t : l.Jw[c.q.BASIC],
        u = JSON.parse(JSON.stringify(null != r && r < s.length ? s[r] : (0, a.sample)(s)));
    return (u.assets[0].p = o ? await (0, l.lv)(i) : i), u;
};
function f(e) {
    let { containerDimensions: t, effect: n, onComplete: a } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != o.current) {
                        let t = await d(n);
                        (e = s().loadAnimation({
                            container: o.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            n.animationType === c.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == a ? void 0 : a(n.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [a, n]),
        (0, r.jsx)('div', {
            className: u.effect,
            style: {
                height: t.height,
                width: t.width
            },
            ref: o
        })
    );
}
