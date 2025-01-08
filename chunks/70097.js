var i = r(200651),
    a = r(192379),
    s = r(513431),
    o = r(442837),
    l = r(607070),
    u = r(217702);
function c(e) {
    e.removeAttribute('src'),
        Array.from(e.children).forEach((e) => {
            (0, s.k)(e, HTMLSourceElement) && (e.removeAttribute('src'), e.removeAttribute('type')), (0, s.k)(e, HTMLImageElement) && e.removeAttribute('src');
        });
    try {
        e.load();
    } catch (e) {}
}
let d = (e) => {
    let { externalRef: n, autoPlay: r, playOnHover: s, responsive: d, mediaLayoutType: f, ..._ } = e,
        h = !(0, o.e7)([l.Z], () => l.Z.useReducedMotion) && !s && r,
        p = a.useRef(null);
    function m() {
        var e;
        s && (null == p || null === (e = p.current) || void 0 === e || e.play());
    }
    function g() {
        var e;
        s && (null == p || null === (e = p.current) || void 0 === e || e.pause());
    }
    function E() {
        return f === u.hV.MOSAIC
            ? {
                  width: '100%',
                  height: '100%',
                  maxHeight: 'inherit',
                  objectFit: 'contain'
              }
            : d
              ? v()
              : {};
    }
    function v() {
        return {
            maxWidth: _.width,
            maxHeight: _.height,
            width: '100%',
            height: '100%'
        };
    }
    return (
        a.useLayoutEffect(
            () => () => {
                let { current: e } = p;
                null != e && c(e);
            },
            []
        ),
        a.useLayoutEffect(
            () => (
                'function' == typeof n ? (n(null), n(p.current)) : null != n && (n.current = p.current),
                () => {
                    'function' == typeof n ? n(null) : null != n && (n.current = null);
                }
            ),
            [n, p]
        ),
        (0, i.jsx)('video', {
            ref: p,
            autoPlay: h,
            onMouseEnter: m,
            onMouseLeave: g,
            onFocus: m,
            onBlur: g,
            style: E(),
            ..._
        })
    );
};
n.Z = a.forwardRef((e, n) =>
    (0, i.jsx)(d, {
        ...e,
        externalRef: n
    })
);
