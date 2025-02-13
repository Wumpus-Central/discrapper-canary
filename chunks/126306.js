n.d(t, { l: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(846519),
    l = n(186325),
    u = n(236352);
let c = 200;
var d = (function (e) {
    return (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE'), e;
})(d || {});
let f = Object.freeze({
        1: u.translate,
        2: u.scale,
        3: u.fade
    }),
    _ = Object.freeze({
        top: u.animatorTop,
        bottom: u.animatorBottom,
        left: u.animatorLeft,
        right: u.animatorRight,
        center: u.animatorCenter,
        window_center: u.animatorCenter
    });
function p(e) {
    let { position: t, type: n, children: a } = e,
        { reducedMotion: d } = r.useContext(l.S),
        p = d.enabled ? 3 : n,
        [h, m] = r.useState(null != t),
        [g] = r.useState(() => new o.V7()),
        [E, v] = r.useState(!0),
        y = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            var e;
            null === (e = y.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    v(!1);
                }),
                setTimeout(() => {
                    v(!1);
                }, c);
        }, []),
        r.useEffect(() => () => g.stop(), [g]),
        r.useEffect(() => {
            null != t && g.start(10, () => m(!0));
        }, [t, g]),
        (0, i.jsx)('div', {
            'data-popout-animating': E,
            className: s()(null != t ? _[t] : null, {
                [f[p]]: null != t,
                [u.didRender]: h
            }),
            children: a
        })
    );
}
p.Types = d;
