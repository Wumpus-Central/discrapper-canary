n.d(t, {
    _: function () {
        return u;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(53281),
    s = n(813197),
    o = n(426642),
    c = n(869783);
async function d(e) {
    try {
        var t;
        let n = await ((t = e),
            new Promise((e, n) => {
                if (null != t) {
                    let i = new FileReader();
                    (i.onload = (t) => {
                        var i;
                        'string' == typeof (null === (i = t.target) || void 0 === i ? void 0 : i.result) ? e(t.target.result) : n(Error('Failed to read file'));
                    }),
                        i.readAsDataURL(t);
                }
            })),
            i = new Image();
        return (
            (i.src = n),
            await i.decode(),
            {
                image: i,
                dataURI: n
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
    (0, l.openModalLazy)(async () => {
        let { default: t } = await n.e('68720').then(n.bind(n, 70846));
        return (n) =>
            (0, i.jsx)(t, {
                errors: e,
                ...n
            });
    });
};
t.Z = (e) => {
    let { onChange: t, multiple: o = !0, disabled: c, className: d, tabIndex: m = -1, 'aria-label': h, filters: g, setLoading: x } = e,
        p = r.createRef(),
        f = r.useRef(null),
        [C, v] = r.useState(!1);
    r.useEffect(() => {
        C && _();
    }, [C]);
    let _ = () => {
            null !== f.current && ((0, l.closeModal)(f.current), (f.current = null));
        },
        I = async (e) => {
            null == x || x(!0), await u(e, t), v(!0), null == x || x(!1);
        },
        N = async (e) => {
            var t, r, a;
            if ((e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (r = a.files) || void 0 === r ? void 0 : r.length) === 0)) return;
            let s = e.currentTarget.files;
            f.current = await (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e('16169').then(n.bind(n, 935333));
                return (t) =>
                    (0, i.jsx)(e, {
                        processFiles: () => I(s),
                        ...t
                    });
            });
        };
    return (0, i.jsx)(a.Z, {
        onChange: N,
        filters: null != g ? g : (0, s.Zj)(),
        multiple: o,
        disabled: c,
        className: d,
        tabIndex: m,
        'aria-label': h,
        ref: p
    });
};
