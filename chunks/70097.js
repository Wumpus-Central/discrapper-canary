n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(374470),
    s = n(442837),
    o = n(607070),
    l = n(217702);
function u(e) {
    e.removeAttribute('src'),
        Array.from(e.children).forEach((e) => {
            (0, a.k)(e, HTMLSourceElement) && (e.removeAttribute('src'), e.removeAttribute('type')), (0, a.k)(e, HTMLImageElement) && e.removeAttribute('src');
        });
    try {
        e.load();
    } catch (e) {}
}
let c = (e) => {
        let { externalRef: t, autoPlay: n, playOnHover: a, responsive: c, mediaLayoutType: d, ...f } = e,
            _ = !(0, s.e7)([o.Z], () => o.Z.useReducedMotion) && !a && n,
            p = r.useRef(null);
        function h() {
            var e;
            a && (null == p || null === (e = p.current) || void 0 === e || e.play());
        }
        function m() {
            var e;
            a && (null == p || null === (e = p.current) || void 0 === e || e.pause());
        }
        function g() {
            return d === l.hV.MOSAIC
                ? {
                      width: '100%',
                      height: '100%',
                      maxHeight: 'inherit',
                      objectFit: 'contain'
                  }
                : c
                  ? E()
                  : {};
        }
        function E() {
            return {
                maxWidth: f.width,
                maxHeight: f.height,
                width: '100%',
                height: '100%'
            };
        }
        return (
            r.useLayoutEffect(
                () => () => {
                    let { current: e } = p;
                    null != e && u(e);
                },
                []
            ),
            r.useLayoutEffect(
                () => (
                    'function' == typeof t ? (t(null), t(p.current)) : null != t && (t.current = p.current),
                    () => {
                        'function' == typeof t ? t(null) : null != t && (t.current = null);
                    }
                ),
                [t, p]
            ),
            (0, i.jsx)('video', {
                ref: p,
                autoPlay: _,
                onMouseEnter: h,
                onMouseLeave: m,
                onFocus: h,
                onBlur: m,
                style: g(),
                ...f
            })
        );
    },
    d = r.forwardRef((e, t) =>
        (0, i.jsx)(c, {
            ...e,
            externalRef: t
        })
    );
