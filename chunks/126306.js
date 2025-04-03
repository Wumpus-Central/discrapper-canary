n.d(t, { l: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(846519),
    l = n(186325),
    c = n(954332);
let u = 200;
var d = (function (e) {
    return (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE'), e;
})(d || {});
let f = Object.freeze({
        1: c.translate,
        2: c.scale,
        3: c.fade
    }),
    _ = Object.freeze({
        top: c.animatorTop,
        bottom: c.animatorBottom,
        left: c.animatorLeft,
        right: c.animatorRight,
        center: c.animatorCenter,
        window_center: c.animatorCenter
    });
function p(e) {
    let { position: t, type: n, children: o } = e,
        { reducedMotion: d } = i.useContext(l.S),
        p = d.enabled ? 3 : n,
        [h, m] = i.useState(null != t),
        [g] = i.useState(() => new s.V7()),
        [E, b] = i.useState(!0),
        y = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            null == (e = y.current) ||
                e.addEventListener('transitionend', () => {
                    b(!1);
                }),
                setTimeout(() => {
                    b(!1);
                }, u);
        }, []),
        i.useEffect(() => () => g.stop(), [g]),
        i.useEffect(() => {
            null != t && g.start(10, () => m(!0));
        }, [t, g]),
        (0, r.jsx)('div', {
            'data-popout-animating': E,
            className: a()(null != t ? _[t] : null, {
                [f[p]]: null != t,
                [c.didRender]: h
            }),
            children: o
        })
    );
}
p.Types = d;
