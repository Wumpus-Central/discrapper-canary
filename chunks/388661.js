t.d(r, { Z: () => y });
var n = t(255367),
    i = t(120356),
    a = t.n(i),
    s = t(442837),
    l = t(755721),
    o = t(481060),
    c = t(510918),
    d = t(494620),
    u = t(63063),
    m = t(434404),
    p = t(999382),
    h = t(981631),
    f = t(195196),
    g = t(388032),
    x = t(602268);
let y = function (e) {
    let { className: r, guildId: t, tag: i, badge: y, primaryColor: j, secondaryColor: v, isDisabled: C = !1 } = e,
        b = (0, s.e7)([p.Z], () => p.Z.getProps().originalProfile),
        N = null != b && b.tag !== i;
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(o.vwX, {
                className: x.sectionTitle,
                children: g.intl.string(f.default['tN+8pK'])
            }),
            (0, n.jsxs)('div', {
                className: x.tagContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: x.tagInputContainer,
                        children: (0, n.jsx)(l.Is, {
                            className: x.tagInputWrapper,
                            inputClassName: a()(x.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, n.jsx)(c.v, {
                                badge: y,
                                width: 40,
                                height: 40,
                                primaryTintColor: j,
                                secondaryTintColor: v
                            }),
                            disabled: C,
                            value: null != i ? i : '',
                            onChange: function (e) {
                                m.Z.updateGuildProfile(t, { tag: e });
                            }
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: x.tagTooltip,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: g.intl.string(f.default.CrHXHh)
                        })
                    })
                ]
            }),
            N &&
                (0, n.jsx)(d.Z, {
                    className: x.tagChangeInfoBox,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        children: g.intl.format(f.default['4ZKDXl'], { articleUrl: u.Z.getArticleURL(h.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
