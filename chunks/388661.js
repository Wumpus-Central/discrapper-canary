t.d(n, { Z: () => g });
var r = t(255367),
    i = t(120356),
    a = t.n(i),
    l = t(442837),
    s = t(481060),
    d = t(510918),
    o = t(494620),
    c = t(63063),
    u = t(434404),
    m = t(999382),
    f = t(981631),
    h = t(912518),
    x = t(388032),
    p = t(602268);
let g = function (e) {
    let { className: n, guildId: t, tag: i, badge: g, primaryColor: b, secondaryColor: y, isDisabled: j = !1 } = e,
        v = (0, l.e7)([m.Z], () => m.Z.getProps().originalProfile),
        C = null != v && v.tag !== i;
    return (0, r.jsxs)('div', {
        className: n,
        children: [
            (0, r.jsx)(s.vwX, {
                className: p.sectionTitle,
                children: x.intl.string(h.default['tN+8pK'])
            }),
            (0, r.jsxs)('div', {
                className: p.tagContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: p.tagInputContainer,
                        children: (0, r.jsx)(s.oil, {
                            className: p.tagInputWrapper,
                            inputClassName: a()(p.tagInput, 'heading-sm/semibold'),
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
                                u.Z.updateGuildProfile(t, { tag: e });
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: p.tagTooltip,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: x.intl.string(h.default.CrHXHh)
                        })
                    })
                ]
            }),
            C &&
                (0, r.jsx)(o.Z, {
                    className: p.tagChangeInfoBox,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        children: x.intl.format(h.default['4ZKDXl'], { articleUrl: c.Z.getArticleURL(f.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
