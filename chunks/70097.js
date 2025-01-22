var i = r(200651),
    a = r(192379),
    o = r(513431),
    s = r(442837),
    l = r(607070),
    u = r(217702);
function c(e) {
    e.removeAttribute('src'),
        Array.from(e.children).forEach((e) => {
            (0, o.k)(e, HTMLSourceElement) && (e.removeAttribute('src'), e.removeAttribute('type')), (0, o.k)(e, HTMLImageElement) && e.removeAttribute('src');
        });
    try {
        e.load();
    } catch (e) {}
}
let d = (e) => {
    let { externalRef: n, autoPlay: r, playOnHover: o, responsive: d, mediaLayoutType: f, ...p } = e,
        h = !(0, s.e7)([l.Z], () => l.Z.useReducedMotion) && !o && r,
        _ = a.useRef(null);
    function m() {
        var e;
        o && (null == _ || null === (e = _.current) || void 0 === e || e.play());
    }
    function g() {
        var e;
        o && (null == _ || null === (e = _.current) || void 0 === e || e.pause());
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
            maxWidth: p.width,
            maxHeight: p.height,
            width: '100%',
            height: '100%'
        };
    }
    return (
        a.useLayoutEffect(
            () => () => {
                let { current: e } = _;
                null != e && c(e);
            },
            []
        ),
        a.useLayoutEffect(
            () => (
                'function' == typeof n ? (n(null), n(_.current)) : null != n && (n.current = _.current),
                () => {
                    'function' == typeof n ? n(null) : null != n && (n.current = null);
                }
            ),
            [n, _]
        ),
        (0, i.jsx)('video', {
            ref: _,
            autoPlay: h,
            onMouseEnter: m,
            onMouseLeave: g,
            onFocus: m,
            onBlur: g,
            style: E(),
            ...p
        })
    );
};
n.Z = a.forwardRef((e, n) =>
    (0, i.jsx)(d, {
        ...e,
        externalRef: n
    })
);
