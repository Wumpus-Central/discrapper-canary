n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(866442),
    s = n(481060),
    c = n(686546),
    u = n(629998);
let d = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];
function p(e) {
    return (0, a.Rf)(
        d[
            (function (e) {
                let t = 5381,
                    n = 0;
                for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
                return t >>> 0;
            })(e) % d.length
        ]
    );
}
function h(e) {
    var t;
    let { title: n, className: l, icon: a } = e,
        [d, h] = i.useState(p(n));
    return (
        i.useEffect(() => {
            h(p(n));
        }, [n]),
        (0, r.jsxs)('div', {
            className: o()(u.wrapper, l),
            children: [
                (0, r.jsx)(c.ZP, {
                    mask: c.ZP.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == a || 0 === a.length
                            ? (0, r.jsx)('div', {
                                  className: u.icon,
                                  style: { backgroundColor: d },
                                  children: null != (t = n[0]) ? t : '?'
                              })
                            : (0, r.jsx)('img', {
                                  alt: '',
                                  src: a,
                                  className: u.icon
                              })
                }),
                (0, r.jsx)(s.Odl, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.badge
                })
            ]
        })
    );
}
