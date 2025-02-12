n.d(t, { Z: () => x }), n(47120), n(642549);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(772848),
    o = n(481060),
    c = n(53281),
    d = n(451593),
    u = n(694539),
    h = n(336600);
let m = (e) => {
        var t, n, s;
        let { effect: l, onClick: a } = e,
            { deleteConfig: c } = (0, d.E)();
        return (0, i.jsxs)(o.P3F, {
            className: h.previewCard,
            onClick: () => {
                a(l);
            },
            children: [
                (0, i.jsx)('div', {
                    className: h.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null === (s = l.config) || void 0 === s ? void 0 : null === (n = s.effects) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.base64, ')') }
                }),
                (0, i.jsxs)('div', {
                    className: r()(h.previewCardFooter, h.row),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            children: l.name
                        }),
                        (0, i.jsx)(o.zxk, {
                            color: o.Ttl.RED,
                            look: o.iLD.LINK,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), c(l.id);
                            },
                            children: 'Delete'
                        })
                    ]
                })
            ]
        });
    },
    g = () => ({
        id: (0, a.Z)(),
        name: 'New Profile Effect',
        config: { effects: [] }
    });
function x() {
    let { profileEffects: e, upsertConfig: t } = (0, d.E)(),
        [n, l] = s.useState(),
        a = s.useRef(null),
        x = (e) => {
            (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
        };
    return (0, i.jsxs)('div', {
        className: h.root,
        children: [
            null == n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.col,
                            children: [
                                (0, i.jsx)('div', {
                                    className: h.section,
                                    children: (0, i.jsx)(o.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: 'Profile Effects'
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: h.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, i.jsx)(
                                            m,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    l(e);
                                                }
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: r()(h.row, h.end, h.section),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: h.uploadButton,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, i.jsx)(c.Z, {
                                            ref: a,
                                            onChange: (e) => {
                                                let n = e.currentTarget.files;
                                                if (null == n) return;
                                                let i = n[0],
                                                    s = new FileReader();
                                                (s.onload = (e) => {
                                                    if (null == e.target || 'string' != typeof e.target.result) return x('Something went wrong, try again!');
                                                    let [n, i] = e.target.result.split(',');
                                                    if (!n.includes('text/plain')) return x("Make sure you're only uploading text files!");
                                                    t(JSON.parse(atob(i))), (0, o.showToast)((0, o.createToast)('Profile Effect (maybe??) imported!', o.ToastType.SUCCESS));
                                                }),
                                                    s.readAsDataURL(i);
                                            },
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.zxk, {
                                    onClick: () => {
                                        t(g());
                                    },
                                    children: 'Create New Effect'
                                })
                            ]
                        })
                    ]
                }),
            null != n &&
                (0, i.jsx)(u.Z, {
                    effect: n,
                    back: () => {
                        l(void 0);
                    }
                })
        ]
    });
}
