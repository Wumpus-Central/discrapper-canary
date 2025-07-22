t.d(r, { Z: () => y });
var n = t(255367),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    l = t(755721),
    o = t(481060),
    d = t(510918),
    c = t(494620),
    u = t(63063),
    f = t(434404),
    m = t(999382),
    p = t(981631),
    h = t(195196),
    x = t(388032),
    g = t(602268);
let y = function (e) {
    let { className: r, guildId: t, tag: a, badge: y, primaryColor: j, secondaryColor: v, isDisabled: b = !1 } = e,
        C = (0, s.e7)([m.Z], () => m.Z.getProps().originalProfile),
        N = null != C && C.tag !== a;
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(o.vwX, {
                className: g.sectionTitle,
                children: x.intl.string(h.default['tN+8pK'])
            }),
            (0, n.jsxs)('div', {
                className: g.tagContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: g.tagInputContainer,
                        children: (0, n.jsx)(l.Is, {
                            className: g.tagInputWrapper,
                            inputClassName: i()(g.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, n.jsx)(d.v, {
                                badge: y,
                                width: 40,
                                height: 40,
                                primaryTintColor: j,
                                secondaryTintColor: v
                            }),
                            disabled: b,
                            value: null != a ? a : '',
                            onChange: function (e) {
                                f.Z.updateGuildProfile(t, { tag: e });
                            }
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: g.tagTooltip,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: x.intl.string(h.default.CrHXHh)
                        })
                    })
                ]
            }),
            N &&
                (0, n.jsx)(c.Z, {
                    className: g.tagChangeInfoBox,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        children: x.intl.format(h.default['4ZKDXl'], { articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
