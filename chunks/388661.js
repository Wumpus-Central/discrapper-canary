t.d(r, { Z: () => g });
var n = t(255367),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    l = t(481060),
    o = t(510918),
    d = t(494620),
    c = t(63063),
    u = t(434404),
    f = t(999382),
    m = t(981631),
    p = t(195196),
    h = t(388032),
    x = t(602268);
let g = function (e) {
    let { className: r, guildId: t, tag: a, badge: g, primaryColor: y, secondaryColor: j, isDisabled: v = !1 } = e,
        b = (0, s.e7)([f.Z], () => f.Z.getProps().originalProfile),
        C = null != b && b.tag !== a;
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(l.vwX, {
                className: x.sectionTitle,
                children: h.intl.string(p.default['tN+8pK'])
            }),
            (0, n.jsxs)('div', {
                className: x.tagContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: x.tagInputContainer,
                        children: (0, n.jsx)(l.oil, {
                            className: x.tagInputWrapper,
                            inputClassName: i()(x.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, n.jsx)(o.v, {
                                badge: g,
                                width: 40,
                                height: 40,
                                primaryTintColor: y,
                                secondaryTintColor: j
                            }),
                            disabled: v,
                            value: null != a ? a : '',
                            onChange: function (e) {
                                u.Z.updateGuildProfile(t, { tag: e });
                            }
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: x.tagTooltip,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: h.intl.string(p.default.CrHXHh)
                        })
                    })
                ]
            }),
            C &&
                (0, n.jsx)(d.Z, {
                    className: x.tagChangeInfoBox,
                    children: (0, n.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        children: h.intl.format(p.default['4ZKDXl'], { articleUrl: c.Z.getArticleURL(m.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
