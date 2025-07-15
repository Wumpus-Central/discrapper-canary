n.d(t, { Z: () => g });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    d = n(510918),
    o = n(494620),
    c = n(63063),
    u = n(434404),
    h = n(999382),
    f = n(981631),
    m = n(195196),
    p = n(388032),
    x = n(602268);
let g = function (e) {
    let { className: t, guildId: n, tag: i, badge: g, primaryColor: b, secondaryColor: y, isDisabled: j = !1 } = e,
        v = (0, s.e7)([h.Z], () => h.Z.getProps().originalProfile),
        C = null != v && v.tag !== i;
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(l.vwX, {
                className: x.sectionTitle,
                children: p.intl.string(m.default['tN+8pK'])
            }),
            (0, r.jsxs)('div', {
                className: x.tagContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: x.tagInputContainer,
                        children: (0, r.jsx)(l.oil, {
                            className: x.tagInputWrapper,
                            inputClassName: a()(x.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, r.jsx)(d.v, {
                                badge: g,
                                width: 40,
                                height: 40,
                                primaryTintColor: b,
                                secondaryTintColor: y
                            }),
                            disabled: j,
                            value: null != i ? i : '',
                            onChange: function (e) {
                                u.Z.updateGuildProfile(n, { tag: e });
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: x.tagTooltip,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: p.intl.string(m.default.CrHXHh)
                        })
                    })
                ]
            }),
            C &&
                (0, r.jsx)(o.Z, {
                    className: x.tagChangeInfoBox,
                    children: (0, r.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        children: p.intl.format(m.default['4ZKDXl'], { articleUrl: c.Z.getArticleURL(f.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
