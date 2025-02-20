n.d(t, { Z: () => h }), n(47120), n(301563), n(866573), n(642549), n(787622);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(772848),
    o = n(481060),
    c = n(53281),
    d = n(451593),
    u = n(694539),
    m = n(250105);
let g = (e) => {
        var t, n, i;
        let { effect: s, onClick: l } = e,
            { deleteConfig: c } = (0, d.E)();
        return (0, r.jsxs)(o.P3F, {
            className: m.previewCard,
            onClick: () => {
                l(s);
            },
            children: [
                (0, r.jsx)('div', {
                    className: m.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null === (i = s.config) || void 0 === i ? void 0 : null === (n = i.effects) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.base64, ')') }
                }),
                (0, r.jsxs)('div', {
                    className: a()(m.previewCardFooter, m.row),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            children: s.name
                        }),
                        (0, r.jsx)(o.zxk, {
                            color: o.Ttl.RED,
                            look: o.iLD.LINK,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), c(s.id);
                            },
                            children: 'Delete'
                        })
                    ]
                })
            ]
        });
    },
    p = () => ({
        id: (0, l.Z)(),
        name: 'New Profile Effect',
        config: { effects: [] }
    });
function h() {
    let { profileEffects: e, upsertConfig: t } = (0, d.E)(),
        [n, s] = i.useState(),
        l = i.useRef(null),
        h = (e) => {
            (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
        };
    return (0, r.jsxs)('div', {
        className: m.root,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: m.col,
                            children: [
                                (0, r.jsx)('div', {
                                    className: m.section,
                                    children: (0, r.jsx)(o.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: 'Profile Effects'
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: m.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(
                                            g,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    s(e);
                                                }
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: a()(m.row, m.end, m.section),
                            children: [
                                (0, r.jsxs)('div', {
                                    className: m.uploadButton,
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, r.jsx)(c.Z, {
                                            ref: l,
                                            onChange: (e) => {
                                                let n = e.currentTarget.files;
                                                if (null == n) return;
                                                let r = n[0],
                                                    i = new FileReader();
                                                (i.onload = (e) => {
                                                    if (null == e.target || 'string' != typeof e.target.result) return h('Something went wrong, try again!');
                                                    let [n, r] = e.target.result.split(',');
                                                    if (!n.includes('text/plain')) return h("Make sure you're only uploading text files!");
                                                    t(JSON.parse(atob(r))), (0, o.showToast)((0, o.createToast)('Profile Effect (maybe??) imported!', o.ToastType.SUCCESS));
                                                }),
                                                    i.readAsDataURL(r);
                                            },
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: () => {
                                        t(p());
                                    },
                                    children: 'Create New Effect'
                                })
                            ]
                        })
                    ]
                }),
            null != n &&
                (0, r.jsx)(u.Z, {
                    effect: n,
                    back: () => {
                        s(void 0);
                    }
                })
        ]
    });
}
