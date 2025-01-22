r.d(n, {
    O: function () {
        return d;
    },
    W: function () {
        return f;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(134432),
    l = r(747757),
    u = r(242493);
let c = 3000;
function d() {
    (0, s.po)(''.concat(u, '?query=true'));
}
function f(e) {
    let { onPlayed: n, played: r } = e,
        [i, s] = o.useState(r),
        d = o.useRef(0);
    if (
        (o.useEffect(
            () => (
                clearTimeout(d.current),
                (d.current = setTimeout(() => {
                    n();
                }, c)),
                () => {
                    clearTimeout(d.current), n();
                }
            ),
            [n]
        ),
        o.useEffect(() => {
            s((e) => !e);
        }, [r]),
        r)
    )
        return null;
    let f = ''.concat(u, '?query=').concat(i);
    return (0, a.jsx)('div', {
        className: l.demoEffectOverlay,
        children: (0, a.jsx)('img', {
            alt: '',
            className: l.demoEffectImg,
            src: f
        })
    });
}
