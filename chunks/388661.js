B.d(g, { Z: () => d });
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
    r = B(981631),
    t = B(69590),
    n = B(388032),
    o = B(271529);
let d = function (A) {
    let { className: g, guildId: B, tag: Q, badge: d, primaryColor: M, secondaryColor: s, isDisabled: L = !1 } = A,
        X = (0, D.e7)([e.Z], () => e.Z.getProps().originalProfile),
        c = null != X && X.tag !== Q;
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(f.vwX, {
                className: o.sectionTitle,
                children: n.NW.string(t.Z['tN+8pK'])
            }),
            (0, C.jsxs)('div', {
                className: o.tagContainer,
                children: [
                    (0, C.jsx)('div', {
                        className: o.tagInputContainer,
                        children: (0, C.jsx)(f.oil, {
                            className: o.tagInputWrapper,
                            inputClassName: w()(o.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, C.jsx)(E.A, {
                                badge: d,
                                width: 40,
                                height: 40,
                                primaryTintColor: M,
                                secondaryTintColor: s
                            }),
                            disabled: L,
                            value: null != Q ? Q : '',
                            onChange: function (A) {
                                P.Z.updateGuildProfile(B, { tag: A });
                            }
                        })
                    }),
                    (0, C.jsx)('div', {
                        className: o.tagTooltip,
                        children: (0, C.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: n.NW.string(t.Z.UbC8y8)
                        })
                    })
                ]
            }),
            c &&
                (0, C.jsx)(v.Z, {
                    className: o.tagChangeInfoBox,
                    children: (0, C.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: n.NW.format(t.Z['4ZKDXl'], { articleUrl: I.Z.getArticleURL(r.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
