B.d(g, { Z: () => n });
var C = B(200651),
    Q = B(120356),
    w = B.n(Q),
    D = B(442837),
    f = B(481060),
    E = B(550271),
    v = B(494620),
    I = B(63063),
    P = B(434404),
    r = B(999382),
    e = B(981631),
    o = B(817239),
    t = B(388032),
    d = B(602268);
let n = function (A) {
    let { className: g, guildId: B, tag: Q, badge: n, primaryColor: M, secondaryColor: s, isDisabled: L = !1 } = A,
        X = (0, D.e7)([r.Z], () => r.Z.getProps().originalProfile),
        c = null != X && X.tag !== Q;
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(f.vwX, {
                className: d.sectionTitle,
                children: t.NW.string(o.Z['tN+8pK'])
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
                                badge: n,
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
                        className: d.tagTooltip,
                        children: (0, C.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: t.NW.string(o.Z.UbC8y8)
                        })
                    })
                ]
            }),
            c &&
                (0, C.jsx)(v.Z, {
                    className: d.tagChangeInfoBox,
                    children: (0, C.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: t.NW.format(o.Z['4ZKDXl'], { articleUrl: I.Z.getArticleURL(e.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
