n.d(t, { Z: () => x }), n(47120), n(301563), n(866573), n(642549), n(787622);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(772848),
    o = n(481060),
    c = n(53281),
    d = n(281598),
    u = n(451593),
    m = n(694539),
    g = n(146181);
let p = "Make sure you're only uploading text files!",
    h = (e) => {
        var t, n, i;
        let { effect: s, onClick: l } = e,
            { deleteConfig: c } = (0, u.E)();
        return (0, r.jsxs)(o.P3F, {
            className: g.previewCard,
            onClick: () => {
                l(s);
            },
            children: [
                (0, r.jsx)('div', {
                    className: g.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null === (i = s.config) || void 0 === i ? void 0 : null === (n = i.effects) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.base64, ')') }
                }),
                (0, r.jsxs)('div', {
                    className: a()(g.previewCardFooter, g.row),
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
    f = () => ({
        id: (0, l.Z)(),
        name: 'New Profile Effect',
        config: { effects: [] }
    });
function x() {
    let { profileEffects: e, upsertConfig: t } = (0, u.E)(),
        [n, s] = i.useState(),
        l = i.useRef(null),
        x = i.useCallback(
            (e, n) => {
                if (!e.type.startsWith('text/')) return (0, d.Eo)(p);
                let [r, i] = n.split(',');
                if (!r.includes('text/plain')) return (0, d.Eo)(p);
                t(JSON.parse(atob(i))), (0, d.XA)('Profile Effect (maybe??) imported!');
            },
            [t]
        ),
        N = i.useCallback(
            (e) => {
                var t;
                if ((null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null) {
                    (0, d.Eo)('Error uploading file. Try again!');
                    return;
                }
                (0, d.Kr)(e.currentTarget.files, x, d.Eo);
            },
            [x]
        );
    return (0, r.jsxs)('div', {
        className: g.root,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.col,
                            children: [
                                (0, r.jsx)('div', {
                                    className: g.section,
                                    children: (0, r.jsx)(o.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: 'Profile Effects'
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: g.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(
                                            h,
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
                            className: a()(g.row, g.end, g.section),
                            children: [
                                (0, r.jsxs)('div', {
                                    className: g.uploadButton,
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, r.jsx)(c.Z, {
                                            ref: l,
                                            onChange: N,
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: () => {
                                        t(f());
                                    },
                                    children: 'Create New Effect'
                                })
                            ]
                        })
                    ]
                }),
            null != n &&
                (0, r.jsx)(m.Z, {
                    effect: n,
                    back: () => {
                        s(void 0);
                    }
                })
        ]
    });
}
