n.d(t, {
    O: () => u,
    W: () => c
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(134432),
    s = n(747757),
    o = n(242493);
let l = 3000;
function u() {
    (0, a.po)(''.concat(o, '?query=true'));
}
function c(e) {
    let { onPlayed: t, played: n } = e,
        [a, u] = r.useState(n),
        c = r.useRef(0);
    if (
        (r.useEffect(
            () => (
                clearTimeout(c.current),
                (c.current = setTimeout(() => {
                    t();
                }, l)),
                () => {
                    clearTimeout(c.current), t();
                }
            ),
            [t]
        ),
        r.useEffect(() => {
            u((e) => !e);
        }, [n]),
        n)
    )
        return null;
    let d = ''.concat(o, '?query=').concat(a);
    return (0, i.jsx)('div', {
        className: s.demoEffectOverlay,
        children: (0, i.jsx)('img', {
            alt: '',
            className: s.demoEffectImg,
            src: d
        })
    });
}
