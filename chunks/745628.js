n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(18100),
    o = n(308083),
    c = n(388032),
    d = n(240938);
t.Z = (e) => {
    var t, n, r;
    let { guildId: u, handleUpdate: m, progress: h, errors: g } = e,
        { wildcardDescriptors: x, description: p } = h,
        f = (e, t) => {
            let n = [...x];
            (n[t] = e), m({ wildcardDescriptors: n });
        };
    return (0, i.jsxs)('div', {
        className: d.slideContent,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: c.intl.string(c.t.pdVsBA)
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: c.intl.string(c.t.E1L1o6)
            }),
            (null == g ? void 0 : g.description) != null &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: d.errorText,
                    children: g.description
                }),
            (0, i.jsxs)('div', {
                className: d.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.mainPanelContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.maxWidthContainer,
                                children: (0, i.jsx)(s.TextArea, {
                                    className: d.input,
                                    maxLength: o.Us,
                                    onChange: (e) => m({ description: e }),
                                    value: null != p ? p : '',
                                    rows: 5,
                                    autoFocus: !0,
                                    autosize: !0,
                                    placeholder: c.intl.string(c.t['/pfXKi'])
                                })
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                className: d.optionalTag,
                                children: c.intl.string(c.t['vWEL6+'])
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: d.title,
                                children: c.intl.string(c.t['2g9zfX'])
                            }),
                            (null == g ? void 0 : g.wildcardDescriptors) != null &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'status-danger',
                                    className: d.errorText,
                                    children: g.wildcardDescriptors
                                }),
                            (0, i.jsxs)('div', {
                                className: d.wildcardRow,
                                children: [
                                    (0, i.jsx)(s.TextInput, {
                                        inputClassName: l()(d.input, d.wildcardInput),
                                        value: null !== (t = x[0]) && void 0 !== t ? t : '',
                                        onChange: (e) => f(e, 0),
                                        maxLength: o.TY,
                                        placeholder: o.LK['0']
                                    }),
                                    (0, i.jsx)(s.TextInput, {
                                        inputClassName: l()(d.input, d.wildcardInput),
                                        value: null !== (n = x[1]) && void 0 !== n ? n : '',
                                        onChange: (e) => f(e, 1),
                                        maxLength: o.TY,
                                        placeholder: o.LK['1']
                                    }),
                                    (0, i.jsx)(s.TextInput, {
                                        inputClassName: l()(d.input, d.wildcardInput),
                                        value: null !== (r = x[2]) && void 0 !== r ? r : '',
                                        onChange: (e) => f(e, 2),
                                        maxLength: o.TY,
                                        placeholder: o.LK['2']
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: d.fixedWidthSidebar,
                        children: (0, i.jsx)(a.Z, {
                            guildId: u,
                            progress: h,
                            maskTraits: !0
                        })
                    })
                ]
            })
        ]
    });
};
