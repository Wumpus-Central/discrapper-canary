n.d(t, {
    Z: () => h,
    _: () => u
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(53281),
    a = n(813197),
    o = n(426642),
    c = n(869783);
async function d(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let i = new FileReader();
                    (i.onload = (e) => {
                        var i;
                        'string' == typeof (null === (i = e.target) || void 0 === i ? void 0 : i.result) ? t(e.target.result) : n(Error('Failed to read file'));
                    }),
                        i.readAsDataURL(e);
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
    } catch {
        throw o.d.WRONG_TYPE;
    }
}
async function u(e, t) {
    let n = [];
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        try {
            let { image: e, dataURI: i } = await d(r),
                l = r.type === c.m.MP4 ? await t(i, r) : await t(i, r, e);
            null != l &&
                n.push({
                    type: l,
                    filename: r.name
                });
        } catch (e) {
            n.push({
                type: e,
                filename: r.name
            });
        }
    }
    n.length > 0 && m(n);
}
let m = (e) => {
        (0, l.ZDy)(async () => {
            let { default: t } = await n.e('68720').then(n.bind(n, 70846));
            return (n) =>
                (0, i.jsx)(t, {
                    errors: e,
                    ...n
                });
        });
    },
    h = (e) => {
        let { onChange: t, multiple: o = !0, disabled: c, className: d, tabIndex: m = -1, 'aria-label': h, filters: g, setLoading: x } = e,
            p = r.createRef(),
            _ = r.useRef(null),
            [C, f] = r.useState(!1);
        r.useEffect(() => {
            C && v();
        }, [C]);
        let v = () => {
                null !== _.current && ((0, l.Mr3)(_.current), (_.current = null));
            },
            N = async (e) => {
                null == x || x(!0), await u(e, t), f(!0), null == x || x(!1);
            },
            j = async (e) => {
                var t, r, s;
                if ((e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (s = e.currentTarget) || void 0 === s ? void 0 : null === (r = s.files) || void 0 === r ? void 0 : r.length) === 0)) return;
                let a = e.currentTarget.files;
                _.current = await (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('16169').then(n.bind(n, 935333));
                    return (t) =>
                        (0, i.jsx)(e, {
                            processFiles: () => N(a),
                            ...t
                        });
                });
            };
        return (0, i.jsx)(s.Z, {
            onChange: j,
            filters: null != g ? g : (0, a.Zj)(),
            multiple: o,
            disabled: c,
            className: d,
            tabIndex: m,
            'aria-label': h,
            ref: p
        });
    };
