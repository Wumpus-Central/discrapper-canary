n.d(t, { Z: () => b }), n(388685), n(35282), n(853839), n(570086), n(479048);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(772848),
    o = n(481060),
    c = n(53281),
    d = n(281598),
    u = n(373071),
    m = n(782691),
    g = n(662583);
let p = "Make sure you're only uploading text files!",
    h = (e) => {
        var t, n, r;
        let { effect: s, onClick: a } = e,
            { deleteConfig: c } = (0, u.n6)();
        return (0, i.jsxs)(o.P3F, {
            className: g.previewCard,
            onClick: () => {
                a(s);
            },
            children: [
                (0, i.jsx)('div', {
                    className: g.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null == (r = s.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64, ')') }
                }),
                (0, i.jsxs)('div', {
                    className: l()(g.previewCardFooter, g.row),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            children: s.name
                        }),
                        (0, i.jsx)(o.zxk, {
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
        id: (0, a.Z)(),
        name: 'New Profile Effect',
        config: { effects: [] }
    });
function b() {
    let { profileEffects: e, upsertConfig: t } = (0, u.n6)(),
        [n, s] = r.useState(),
        b = r.useRef(null),
        _ = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith('text/')) return (0, d.Eo)(p);
                let [i, r] = n.split(',');
                if (!i.includes('text/plain')) return (0, d.Eo)(p);
                let s = JSON.parse(atob(r));
                (s.id = (0, a.Z)()), t(s), (0, d.XA)('Profile Effect (maybe??) imported!');
            },
            [t]
        ),
        x = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null) return void (0, d.Eo)('Error uploading file. Try again!');
                (0, d.Kr)(e.currentTarget.files, _, d.Eo);
            },
            [_]
        );
    return (0, i.jsxs)('div', {
        className: g.root,
        children: [
            null == n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.col,
                            children: [
                                (0, i.jsx)('div', {
                                    className: g.section,
                                    children: (0, i.jsx)(o.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: 'Profile Effects'
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: g.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, i.jsx)(
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
                        (0, i.jsxs)('div', {
                            className: l()(g.row, g.end, g.section),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: g.uploadButton,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, i.jsx)(c.Z, {
                                            ref: b,
                                            onChange: x,
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.zxk, {
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
                (0, i.jsx)(m.Z, {
                    effect: n,
                    back: () => {
                        s(void 0);
                    }
                })
        ]
    });
}
