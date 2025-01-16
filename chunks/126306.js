r.d(n, {
    l: function () {
        return m;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(846519),
    d = r(186325),
    f = r(549915);
let _ = 200;
!(function (e) {
    (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE');
})(i || (i = {}));
let h = Object.freeze({
        1: f.translate,
        2: f.scale,
        3: f.fade
    }),
    p = Object.freeze({
        top: f.animatorTop,
        bottom: f.animatorBottom,
        left: f.animatorLeft,
        right: f.animatorRight,
        center: f.animatorCenter,
        window_center: f.animatorCenter
    });
function m(e) {
    let { position: n, type: r, children: i } = e,
        { reducedMotion: a } = o.useContext(d.S),
        l = a.enabled ? 3 : r,
        [m, g] = o.useState(null != n),
        [E] = o.useState(() => new c.V7()),
        [v, I] = o.useState(!0),
        T = o.useRef(null);
    return (
        o.useLayoutEffect(() => {
            var e;
            null === (e = T.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    I(!1);
                }),
                setTimeout(() => {
                    I(!1);
                }, _);
        }, []),
        o.useEffect(() => () => E.stop(), [E]),
        o.useEffect(() => {
            null != n && E.start(10, () => g(!0));
        }, [n, E]),
        (0, s.jsx)('div', {
            'data-popout-animating': v,
            className: u()(null != n ? p[n] : null, {
                [h[l]]: null != n,
                [f.didRender]: m
            }),
            children: i
        })
    );
}
m.Types = i;
