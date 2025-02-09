n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n(500923),
    o = n.n(s),
    l = n(963838),
    u = n(353368),
    c = n(808288);
let d = async (e) => {
    var t;
    let { animationType: n, animationId: i, url: r, shouldResize: s } = e,
        o = null !== (t = l.Jw[n]) && void 0 !== t ? t : l.Jw[u.q.BASIC],
        c = JSON.parse(JSON.stringify(null != i && i < o.length ? o[i] : (0, a.sample)(o)));
    return (c.assets[0].p = s ? await (0, l.lv)(r) : r), c;
};
function f(e) {
    let { containerDimensions: t, effect: n, onComplete: a } = e,
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            let e;
            return (
                (async function () {
                    if (null != s.current) {
                        let t = await d(n);
                        (e = o().loadAnimation({
                            container: s.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            n.animationType === u.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == a ? void 0 : a(n.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [a, n]),
        (0, i.jsx)('div', {
            className: c.effect,
            style: {
                height: t.height,
                width: t.width
            },
            ref: s
        })
    );
}
