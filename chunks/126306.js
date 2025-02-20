n.d(t, { l: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(846519),
    l = n(186325),
    c = n(630501);
let u = 200;
var d = (function (e) {
    return (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE'), e;
})(d || {});
let f = Object.freeze({
        1: c.translate,
        2: c.scale,
        3: c.fade
    }),
    p = Object.freeze({
        top: c.animatorTop,
        bottom: c.animatorBottom,
        left: c.animatorLeft,
        right: c.animatorRight,
        center: c.animatorCenter,
        window_center: c.animatorCenter
    });
function _(e) {
    let { position: t, type: n, children: o } = e,
        { reducedMotion: d } = i.useContext(l.S),
        _ = d.enabled ? 3 : n,
        [h, m] = i.useState(null != t),
        [g] = i.useState(() => new s.V7()),
        [E, v] = i.useState(!0),
        b = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            null === (e = b.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    v(!1);
                }),
                setTimeout(() => {
                    v(!1);
                }, u);
        }, []),
        i.useEffect(() => () => g.stop(), [g]),
        i.useEffect(() => {
            null != t && g.start(10, () => m(!0));
        }, [t, g]),
        (0, r.jsx)('div', {
            'data-popout-animating': E,
            className: a()(null != t ? p[t] : null, {
                [f[_]]: null != t,
                [c.didRender]: h
            }),
            children: o
        })
    );
}
_.Types = d;
