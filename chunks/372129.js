r.d(e, {
    ZP: () => p,
    _j: () => d,
    po: () => f
}),
    r(415506),
    r(539854),
    r(388685);
var n = r(255367),
    i = r(73800),
    l = r(481060),
    o = r(53281),
    a = r(813197),
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
async function f(t) {
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
async function d(t, e) {
    let r = [];
    for (let n = 0; n < t.length; n++) {
        let i = t[n];
        try {
            let { image: t, dataURI: n } = await f(i),
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
    r.length > 0 && h(r);
}
let h = (t) => {
        (0, l.ZDy)(async () => {
            let { default: e } = await r.e('68720').then(r.bind(r, 70846));
            return (r) => (0, n.jsx)(e, u({ errors: t }, r));
        });
    },
    p = (t) => {
        let { onChange: e, multiple: s = !0, disabled: c, className: f, tabIndex: h = -1, 'aria-label': p, filters: g, setLoading: y, title: O } = t,
            w = i.useRef(null),
            b = i.useRef(null),
            [j, m] = i.useState(!1);
        i.useEffect(() => {
            j && v();
        }, [j]);
        let v = () => {
                null !== b.current && ((0, l.Mr3)(b.current), (b.current = null));
            },
            P = async (t) => {
                null == y || y(!0), await d(t, e), m(!0), null == y || y(!1);
            },
            _ = async (t) => {
                var e, i, o;
                if ((t.stopPropagation(), t.preventDefault(), (null == (e = t.currentTarget) ? void 0 : e.files) == null || (null == (o = t.currentTarget) || null == (i = o.files) ? void 0 : i.length) === 0)) return;
                let a = t.currentTarget.files;
                b.current = await (0, l.ZDy)(async () => {
                    let { default: t } = await r.e('16169').then(r.bind(r, 935333));
                    return (e) => (0, n.jsx)(t, u({ processFiles: () => P(a) }, e));
                });
            };
        return (0, n.jsx)(o.Z, {
            onChange: _,
            filters: null != g ? g : (0, a.Zj)(),
            multiple: s,
            disabled: c,
            className: f,
            tabIndex: h,
            'aria-label': p,
            ref: w,
            title: O
        });
    };
