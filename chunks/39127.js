r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(392711);
var s = r(500923),
    l = r.n(s),
    u = r(963838),
    c = r(353368),
    d = r(114250);
let f = async (e) => {
    var n;
    let { animationType: r, animationId: i, url: a, shouldResize: s } = e,
        l = null !== (n = u.Jw[r]) && void 0 !== n ? n : u.Jw[c.q.BASIC],
        d = JSON.parse(JSON.stringify(null != i && i < l.length ? l[i] : (0, o.sample)(l)));
    return (d.assets[0].p = s ? await (0, u.lv)(a) : a), d;
};
function p(e) {
    let { containerDimensions: n, effect: r, onComplete: o } = e,
        s = a.useRef(null);
    return (
        a.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != s.current) {
                        let n = await f(r);
                        (e = l().loadAnimation({
                            container: s.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: n,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            r.animationType === c.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == o ? void 0 : o(r.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [o, r]),
        (0, i.jsx)('div', {
            className: d.effect,
            style: {
                height: n.height,
                width: n.width
            },
            ref: s
        })
    );
}
