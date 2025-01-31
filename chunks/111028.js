n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(680357);
let u = 500;
function c(e) {
    let { children: t, 'aria-label': n, className: a, position: c, ...d } = e,
        f = r.useRef(null),
        _ = null != n ? n : 'string' == typeof t && t;
    return (0, i.jsx)(o.ua7, {
        ...d,
        position: null != c ? c : 'top',
        delay: u,
        text: t,
        'aria-label': _,
        children: (n) => {
            let { onMouseEnter: r, onMouseLeave: o } = n;
            return (0, i.jsx)('div', {
                className: s()(a, l.overflow),
                ref: f,
                'aria-hidden': e['aria-hidden'],
                onMouseEnter: () => {
                    let { current: e } = f;
                    null != e && e.offsetWidth < e.scrollWidth && (null == r || r());
                },
                onMouseLeave: o,
                children: t
            });
        }
    });
}
