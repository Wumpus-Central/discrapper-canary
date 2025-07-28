n.d(t, { Z: () => b });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(510918),
    d = n(494620),
    u = n(63063),
    m = n(434404),
    g = n(999382),
    p = n(981631),
    h = n(195196),
    f = n(388032),
    x = n(602268);
let b = function (e) {
    let { className: t, guildId: n, tag: i, badge: b, primaryColor: j, secondaryColor: v, isDisabled: _ = !1 } = e,
        O = (0, a.e7)([g.Z], () => g.Z.getProps().originalProfile),
        y = null != O && O.tag !== i;
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(o.vwX, {
                className: x.sectionTitle,
                children: f.intl.string(h.default['tN+8pK'])
            }),
            (0, r.jsxs)('div', {
                className: x.tagContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: x.tagInputContainer,
                        children: (0, r.jsx)(s.Is, {
                            className: x.tagInputWrapper,
                            inputClassName: l()(x.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, r.jsx)(c.v, {
                                badge: b,
                                width: 40,
                                height: 40,
                                primaryTintColor: j,
                                secondaryTintColor: v
                            }),
                            disabled: _,
                            value: null != i ? i : '',
                            onChange: function (e) {
                                m.Z.updateGuildProfile(n, { tag: e });
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: x.tagTooltip,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: f.intl.string(h.default.CrHXHh)
                        })
                    })
                ]
            }),
            y &&
                (0, r.jsx)(d.Z, {
                    className: x.tagChangeInfoBox,
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        children: f.intl.format(h.default['4ZKDXl'], { articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
