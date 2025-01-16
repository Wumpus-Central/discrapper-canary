r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(392711);
var o = r(500923),
    l = r.n(o),
    u = r(963838),
    c = r(353368),
    d = r(114250);
let f = async (e) => {
    var n;
    let { animationType: r, animationId: i, url: a, shouldResize: o } = e,
        l = null !== (n = u.Jw[r]) && void 0 !== n ? n : u.Jw[c.q.BASIC],
        d = JSON.parse(JSON.stringify(null != i && i < l.length ? l[i] : (0, s.sample)(l)));
    return (d.assets[0].p = o ? await (0, u.lv)(a) : a), d;
};
function _(e) {
    let { containerDimensions: n, effect: r, onComplete: s } = e,
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != o.current) {
                        let n = await f(r);
                        (e = l().loadAnimation({
                            container: o.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: n,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            r.animationType === c.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == s ? void 0 : s(r.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [s, r]),
        (0, i.jsx)('div', {
            className: d.effect,
            style: {
                height: n.height,
                width: n.width
            },
            ref: o
        })
    );
}
