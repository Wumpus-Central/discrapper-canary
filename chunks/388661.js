B.d(g, { Z: () => t });
var C = B(200651),
    Q = B(120356),
    w = B.n(Q),
    D = B(442837),
    f = B(481060),
    E = B(550271),
    v = B(494620),
    I = B(434404),
    P = B(999382),
    r = B(817239),
    e = B(388032),
    o = B(602268);
let t = function (A) {
    let { className: g, guildId: B, tag: Q, badge: t, primaryColor: d, secondaryColor: n, isDisabled: M = !1 } = A,
        L = (0, D.e7)([P.Z], () => P.Z.getProps().originalProfile),
        s = null != L && L.tag !== Q;
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(f.vwX, {
                className: o.sectionTitle,
                children: e.NW.string(r.Z['tN+8pK'])
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
                                badge: t,
                                width: 40,
                                height: 40,
                                primaryTintColor: d,
                                secondaryTintColor: n
                            }),
                            disabled: M,
                            value: null != Q ? Q : '',
                            onChange: function (A) {
                                I.Z.updateGuildProfile(B, { tag: A });
                            }
                        })
                    }),
                    (0, C.jsx)('div', {
                        className: o.tagTooltip,
                        children: (0, C.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: e.NW.string(r.Z.UbC8y8)
                        })
                    })
                ]
            }),
            s &&
                (0, C.jsx)(v.Z, {
                    className: o.tagChangeInfoBox,
                    children: (0, C.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: e.NW.format(r.Z['4ZKDXl'], { articleUrl: '/' })
                    })
                })
        ]
    });
};
