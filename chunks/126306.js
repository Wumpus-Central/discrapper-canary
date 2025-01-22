r.d(n, {
    l: function () {
        return m;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(846519),
    d = r(186325),
    f = r(549915);
let p = 200;
!(function (e) {
    (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE');
})(i || (i = {}));
let h = Object.freeze({
        1: f.translate,
        2: f.scale,
        3: f.fade
    }),
    _ = Object.freeze({
        top: f.animatorTop,
        bottom: f.animatorBottom,
        left: f.animatorLeft,
        right: f.animatorRight,
        center: f.animatorCenter,
        window_center: f.animatorCenter
    });
function m(e) {
    let { position: n, type: r, children: i } = e,
        { reducedMotion: a } = s.useContext(d.S),
        l = a.enabled ? 3 : r,
        [m, g] = s.useState(null != n),
        [E] = s.useState(() => new c.V7()),
        [v, y] = s.useState(!0),
        b = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            var e;
            null === (e = b.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    y(!1);
                }),
                setTimeout(() => {
                    y(!1);
                }, p);
        }, []),
        s.useEffect(() => () => E.stop(), [E]),
        s.useEffect(() => {
            null != n && E.start(10, () => g(!0));
        }, [n, E]),
        (0, o.jsx)('div', {
            'data-popout-animating': v,
            className: u()(null != n ? _[n] : null, {
                [h[l]]: null != n,
                [f.didRender]: m
            }),
            children: i
        })
    );
}
m.Types = i;
