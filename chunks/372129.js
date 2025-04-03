n.d(t, {
    Z: () => p,
    _: () => m
}),
    n(411104),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(53281),
    l = n(813197),
    o = n(426642),
    c = n(869783);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
async function u(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let r = new FileReader();
                    (r.onload = (e) => {
                        var r;
                        'string' == typeof (null == (r = e.target) ? void 0 : r.result) ? t(e.target.result) : n(Error('Failed to read file'));
                    }),
                        r.readAsDataURL(e);
                }
            }),
            n = new Image();
        return (
            (n.src = t),
            await n.decode(),
            {
                image: n,
                dataURI: t
            }
        );
    } catch (e) {
        throw o.d.WRONG_TYPE;
    }
}
async function m(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        try {
            let { image: e, dataURI: r } = await u(i),
                s = i.type === c.m.MP4 ? await t(r, i) : await t(r, i, e);
            null != s &&
                n.push({
                    type: s,
                    filename: i.name
                });
        } catch (e) {
            n.push({
                type: e,
                filename: i.name
            });
        }
    }
    n.length > 0 && g(n);
}
let g = (e) => {
        (0, s.ZDy)(async () => {
            let { default: t } = await n.e('68720').then(n.bind(n, 70846));
            return (n) => (0, r.jsx)(t, d({ errors: e }, n));
        });
    },
    p = (e) => {
        let { onChange: t, multiple: o = !0, disabled: c, className: u, tabIndex: g = -1, 'aria-label': p, filters: h, setLoading: f } = e,
            b = i.createRef(),
            x = i.useRef(null),
            [j, N] = i.useState(!1);
        i.useEffect(() => {
            j && _();
        }, [j]);
        let _ = () => {
                null !== x.current && ((0, s.Mr3)(x.current), (x.current = null));
            },
            v = async (e) => {
                null == f || f(!0), await m(e, t), N(!0), null == f || f(!1);
            },
            C = async (e) => {
                var t, i, a;
                if ((e.stopPropagation(), e.preventDefault(), (null == (t = e.currentTarget) ? void 0 : t.files) == null || (null == (a = e.currentTarget) || null == (i = a.files) ? void 0 : i.length) === 0)) return;
                let l = e.currentTarget.files;
                x.current = await (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('16169').then(n.bind(n, 935333));
                    return (t) => (0, r.jsx)(e, d({ processFiles: () => v(l) }, t));
                });
            };
        return (0, r.jsx)(a.Z, {
            onChange: C,
            filters: null != h ? h : (0, l.Zj)(),
            multiple: o,
            disabled: c,
            className: u,
            tabIndex: g,
            'aria-label': p,
            ref: b
        });
    };
