r.d(e, {
    Z: () => O,
    _: () => f
}),
    r(415506),
    r(539854),
    r(388685);
var n = r(200651),
    i = r(192379),
    l = r(481060),
    a = r(53281),
    o = r(813197),
    s = r(426642),
    c = r(869783);
function u(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                (n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
async function d(t) {
    try {
        let e = await new Promise((e, r) => {
                if (null != t) {
                    let n = new FileReader();
                    (n.onload = (t) => {
                        var n;
                        'string' == typeof (null == (n = t.target) ? void 0 : n.result) ? e(t.target.result) : r(Error('Failed to read file'));
                    }),
                        n.readAsDataURL(t);
                }
            }),
            r = new Image();
        return (
            (r.src = e),
            await r.decode(),
            {
                image: r,
                dataURI: e
            }
        );
    } catch (t) {
        throw s.d.WRONG_TYPE;
    }
}
async function f(t, e) {
    let r = [];
    for (let n = 0; n < t.length; n++) {
        let i = t[n];
        try {
            let { image: t, dataURI: n } = await d(i),
                l = i.type === c.m.MP4 ? await e(n, i) : await e(n, i, t);
            null != l &&
                r.push({
                    type: l,
                    filename: i.name
                });
        } catch (t) {
            r.push({
                type: t,
                filename: i.name
            });
        }
    }
    r.length > 0 && g(r);
}
let g = (t) => {
        (0, l.ZDy)(async () => {
            let { default: e } = await r.e('68720').then(r.bind(r, 70846));
            return (r) => (0, n.jsx)(e, u({ errors: t }, r));
        });
    },
    O = (t) => {
        let { onChange: e, multiple: s = !0, disabled: c, className: d, tabIndex: g = -1, 'aria-label': O, filters: _, setLoading: h } = t,
            p = i.createRef(),
            E = i.useRef(null),
            [y, I] = i.useState(!1);
        i.useEffect(() => {
            y && w();
        }, [y]);
        let w = () => {
                null !== E.current && ((0, l.Mr3)(E.current), (E.current = null));
            },
            b = async (t) => {
                null == h || h(!0), await f(t, e), I(!0), null == h || h(!1);
            },
            m = async (t) => {
                var e, i, a;
                if ((t.stopPropagation(), t.preventDefault(), (null == (e = t.currentTarget) ? void 0 : e.files) == null || (null == (a = t.currentTarget) || null == (i = a.files) ? void 0 : i.length) === 0)) return;
                let o = t.currentTarget.files;
                E.current = await (0, l.ZDy)(async () => {
                    let { default: t } = await r.e('16169').then(r.bind(r, 935333));
                    return (e) => (0, n.jsx)(t, u({ processFiles: () => b(o) }, e));
                });
            };
        return (0, n.jsx)(a.Z, {
            onChange: m,
            filters: null != _ ? _ : (0, o.Zj)(),
            multiple: s,
            disabled: c,
            className: d,
            tabIndex: g,
            'aria-label': O,
            ref: p
        });
    };
