r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(680357);
let c = 500;
function d(e) {
    let { children: n, 'aria-label': r, className: o, position: d, ...f } = e,
        p = a.useRef(null),
        h = null != r ? r : 'string' == typeof n && n;
    return (0, i.jsx)(l.Tooltip, {
        ...f,
        position: null != d ? d : 'top',
        delay: c,
        text: n,
        'aria-label': h,
        children: (r) => {
            let { onMouseEnter: a, onMouseLeave: l } = r;
            return (0, i.jsx)('div', {
                className: s()(o, u.overflow),
                ref: p,
                'aria-hidden': e['aria-hidden'],
                onMouseEnter: () => {
                    let { current: e } = p;
                    null != e && e.offsetWidth < e.scrollWidth && (null == a || a());
                },
                onMouseLeave: l,
                children: n
            });
        }
    });
}
