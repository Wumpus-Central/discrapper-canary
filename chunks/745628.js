n.d(t, { Z: () => u }), n(266796), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(18100),
    o = n(308083),
    c = n(388032),
    d = n(617006);
let u = (e) => {
    var t, n, i;
    let { guildId: u, handleUpdate: m, progress: p, errors: g } = e,
        { wildcardDescriptors: h, description: f } = p,
        b = (e, t) => {
            let n = [...h];
            (n[t] = e), m({ wildcardDescriptors: n });
        };
    return (0, r.jsxs)('div', {
        className: d.slideContent,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: c.NW.string(c.t.pdVsBA)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: c.NW.string(c.t.E1L1o6)
            }),
            (null == g ? void 0 : g.description) != null &&
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: d.errorText,
                    children: g.description
                }),
            (0, r.jsxs)('div', {
                className: d.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: d.mainPanelContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.maxWidthContainer,
                                children: (0, r.jsx)(a.Kx8, {
                                    className: d.input,
                                    maxLength: o.Us,
                                    onChange: (e) => m({ description: e }),
                                    value: null != f ? f : '',
                                    rows: 5,
                                    autoFocus: !0,
                                    autosize: !0,
                                    placeholder: c.NW.string(c.t['/pfXKi'])
                                })
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                className: d.optionalTag,
                                children: c.NW.string(c.t['vWEL6+'])
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: d.title,
                                children: c.NW.string(c.t['2g9zfX'])
                            }),
                            (null == g ? void 0 : g.wildcardDescriptors) != null &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'status-danger',
                                    className: d.errorText,
                                    children: g.wildcardDescriptors
                                }),
                            (0, r.jsxs)('div', {
                                className: d.wildcardRow,
                                children: [
                                    (0, r.jsx)(a.oil, {
                                        inputClassName: s()(d.input, d.wildcardInput),
                                        value: null !== (t = h[0]) && void 0 !== t ? t : '',
                                        onChange: (e) => b(e, 0),
                                        maxLength: o.TY,
                                        placeholder: o.LK['0']
                                    }),
                                    (0, r.jsx)(a.oil, {
                                        inputClassName: s()(d.input, d.wildcardInput),
                                        value: null !== (n = h[1]) && void 0 !== n ? n : '',
                                        onChange: (e) => b(e, 1),
                                        maxLength: o.TY,
                                        placeholder: o.LK['1']
                                    }),
                                    (0, r.jsx)(a.oil, {
                                        inputClassName: s()(d.input, d.wildcardInput),
                                        value: null !== (i = h[2]) && void 0 !== i ? i : '',
                                        onChange: (e) => b(e, 2),
                                        maxLength: o.TY,
                                        placeholder: o.LK['2']
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: d.fixedWidthSidebar,
                        children: (0, r.jsx)(l.Z, {
                            guildId: u,
                            progress: p,
                            maskTraits: !0
                        })
                    })
                ]
            })
        ]
    });
};
