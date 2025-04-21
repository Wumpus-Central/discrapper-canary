B.d(g, { Z: () => o });
var C = B(200651),
    Q = B(120356),
    w = B.n(Q),
    D = B(442837),
    f = B(481060),
    E = B(550271),
    v = B(494620),
    I = B(63063),
    P = B(434404),
    e = B(999382),
    t = B(981631),
    r = B(817239),
    n = B(388032),
    d = B(602268);
let o = function (A) {
    let { className: g, guildId: B, tag: Q, badge: o, primaryColor: s, secondaryColor: M, isDisabled: L = !1 } = A,
        X = (0, D.e7)([e.Z], () => e.Z.getProps().originalProfile),
        c = null != X && X.tag !== Q;
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(f.vwX, {
                className: d.sectionTitle,
                children: n.intl.string(r.default['tN+8pK'])
            }),
            (0, C.jsxs)('div', {
                className: d.tagContainer,
                children: [
                    (0, C.jsx)('div', {
                        className: d.tagInputContainer,
                        children: (0, C.jsx)(f.oil, {
                            className: d.tagInputWrapper,
                            inputClassName: w()(d.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, C.jsx)(E.A, {
                                badge: o,
                                width: 40,
                                height: 40,
                                primaryTintColor: s,
                                secondaryTintColor: M
                            }),
                            disabled: L,
                            value: null != Q ? Q : '',
                            onChange: function (A) {
                                P.Z.updateGuildProfile(B, { tag: A });
                            }
                        })
                    }),
                    (0, C.jsx)('div', {
                        className: d.tagTooltip,
                        children: (0, C.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.intl.string(r.default.UbC8y8)
                        })
                    })
                ]
            }),
            c &&
                (0, C.jsx)(v.Z, {
                    className: d.tagChangeInfoBox,
                    children: (0, C.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: n.intl.format(r.default['4ZKDXl'], { articleUrl: I.Z.getArticleURL(t.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
