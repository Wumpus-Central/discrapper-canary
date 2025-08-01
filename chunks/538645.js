(n.d(t, { Z: () => _ }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(281598),
    m = n(25251),
    p = n(373071),
    g = n(782691),
    h = n(662583);
let f = "Make sure you're only uploading text files!",
    b = (e) => {
        var t, n, r;
        let { effect: s, onClick: l } = e,
            { deleteConfig: o } = (0, p.n6)();
        return (0, i.jsxs)(c.P3F, {
            className: h.previewCard,
            onClick: () => {
                l(s);
            },
            children: [
                (0, i.jsx)('div', {
                    className: h.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null == (r = s.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64, ')') }
                }),
                (0, i.jsxs)('div', {
                    className: a()(h.previewCardFooter, h.row),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/bold',
                            children: s.name
                        }),
                        (0, i.jsx)(c.zxk, {
                            variant: 'critical-secondary',
                            text: 'Delete',
                            onClick: (e) => {
                                (e.preventDefault(), e.stopPropagation(), o(s.id));
                            }
                        })
                    ]
                })
            ]
        });
    },
    x = () => ({
        id: (0, l.Z)(),
        name: 'New Profile Effect',
        config: { effects: [] }
    });
function _() {
    let { profileEffects: e, upsertConfig: t } = (0, p.n6)(),
        [n, s] = r.useState(),
        _ = r.useRef(null),
        j = (0, o.Wu)([m.Z], () => m.Z.profileEffects),
        [C, O] = r.useState(''),
        E = r.useMemo(
            () =>
                '' === C
                    ? j
                    : j.filter((e) => {
                          let t = C.toLowerCase();
                          return e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t);
                      }),
            [C, j]
        ),
        v = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith('text/')) return (0, u.Eo)(f);
                let [i, r] = n.split(',');
                if (!i.includes('text/plain')) return (0, u.Eo)(f);
                let s = JSON.parse(atob(r));
                ((s.id = (0, l.Z)()), t(s), (0, u.XA)('Profile Effect (maybe??) imported!'));
            },
            [t]
        ),
        S = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null) return void (0, u.Eo)('Error uploading file. Try again!');
                (0, u.Kr)(e.currentTarget.files, v, u.Eo);
            },
            [v]
        );
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
                                    children: (0, i.jsx)(c.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: 'Custom Profile Effects'
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: h.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, i.jsx)(
                                            b,
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
                            className: a()(h.row, h.end, h.section),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: h.uploadButton,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, i.jsx)(d.Z, {
                                            ref: _,
                                            onChange: S,
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Create New Effect',
                                    onClick: () => {
                                        t(x());
                                    }
                                })
                            ]
                        }),
                        (0, i.jsx)('hr', {}),
                        (0, i.jsxs)('div', {
                            className: h.section,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: 'All Effects'
                                }),
                                (0, i.jsx)('input', {
                                    value: C,
                                    onChange: (e) => {
                                        O(e.target.value);
                                    }
                                }),
                                (0, i.jsx)('div', {
                                    className: h.pfxGrid,
                                    children: E.map((e) =>
                                        (0, i.jsx)(
                                            c.P3F,
                                            {
                                                className: h.pfxListItem,
                                                style: { backgroundImage: 'url('.concat(e.config.thumbnailPreviewSrc, ')') },
                                                onClick: () => {
                                                    s({
                                                        id: e.id,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: { effects: e.config.effects }
                                                    });
                                                },
                                                children: (0, i.jsx)('div', {
                                                    className: h.pfxListItemFooter,
                                                    children: (0, i.jsx)(c.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'always-white',
                                                        children: e.config.title
                                                    })
                                                })
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        })
                    ]
                }),
            null != n && (0, i.jsx)(g.Z, { effect: n })
        ]
    });
}
