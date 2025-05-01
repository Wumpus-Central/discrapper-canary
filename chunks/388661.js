v.d(g, { Z: () => M });
var B = v(200651),
    t = v(120356),
    e = v.n(t),
    f = v(442837),
    r = v(481060),
    C = v(510918),
    h = v(494620),
    n = v(63063),
    w = v(434404),
    Q = v(999382),
    D = v(981631),
    o = v(817239),
    s = v(388032),
    i = v(602268);
let M = function (A) {
    let { className: g, guildId: v, tag: t, badge: M, primaryColor: a, secondaryColor: l, isDisabled: E = !1 } = A,
        c = (0, f.e7)([Q.Z], () => Q.Z.getProps().originalProfile),
        P = null != c && c.tag !== t;
    return (0, B.jsxs)('div', {
        className: g,
        children: [
            (0, B.jsx)(r.vwX, {
                className: i.sectionTitle,
                children: s.intl.string(o.default['tN+8pK'])
            }),
            (0, B.jsxs)('div', {
                className: i.tagContainer,
                children: [
                    (0, B.jsx)('div', {
                        className: i.tagInputContainer,
                        children: (0, B.jsx)(r.oil, {
                            className: i.tagInputWrapper,
                            inputClassName: e()(i.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, B.jsx)(C.v, {
                                badge: M,
                                width: 40,
                                height: 40,
                                primaryTintColor: a,
                                secondaryTintColor: l
                            }),
                            disabled: E,
                            value: null != t ? t : '',
                            onChange: function (A) {
                                w.Z.updateGuildProfile(v, { tag: A });
                            }
                        })
                    }),
                    (0, B.jsx)('div', {
                        className: i.tagTooltip,
                        children: (0, B.jsx)(r.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: s.intl.string(o.default.CrHXHh)
                        })
                    })
                ]
            }),
            P &&
                (0, B.jsx)(h.Z, {
                    className: i.tagChangeInfoBox,
                    children: (0, B.jsx)(r.Text, {
                        variant: 'text-xs/medium',
                        children: s.intl.format(o.default['4ZKDXl'], { articleUrl: n.Z.getArticleURL(D.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
