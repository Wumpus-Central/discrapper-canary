t.d(e, { Z: () => g }), t(47120);
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(481060),
    o = t(813197),
    s = t(388032),
    d = t(173196);
let c = 'custom-image',
    u = a.forwardRef(function (A, e) {
        let { selectedImageName: t, onChange: a, disabled: l = !1, name: o, alt: s, data: c } = A,
            u = o === t,
            g = (0, i.xUy)({
                isSelected: u,
                label: s
            }),
            m = l
                ? void 0
                : () => {
                      a(c, o);
                  };
        return (0, n.jsx)(i.P3F, {
            ref: e,
            className: r()(d.radioOption, {
                [d.selected]: u,
                [d.disabled]: l
            }),
            onClick: m,
            'aria-disabled': l,
            ...g,
            children: (0, n.jsx)('img', {
                src: c,
                alt: s,
                className: d.radioOptionImage
            })
        });
    });
function g(A) {
    let { presetImages: e, image: t, imageName: l, savedImageName: g, onChange: m, uploadButtonLabel: h = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: f = s.intl.string(s.t['0Q0UJi']), disabled: C = !1 } = A,
        p = l === c,
        [q, v] = a.useState(p ? t : null),
        [x, U] = a.useState(null),
        b = a.useRef(null),
        V = a.useRef(null);
    a.useEffect(() => {
        g !== c && (v(null), U(null));
    }, [g]);
    let j = null != x ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: x }) : s.intl.string(s.t.SNPvSk),
        N = (0, i.arW)({
            orientation: 'horizontal',
            isDisabled: C
        }),
        I = () => {
            var A;
            return null === (A = b.current) || void 0 === A ? void 0 : A.activateUploadDialogue();
        },
        T = () => {
            l === c && m(e[0].data, e[0].name), v(null), U(null);
        };
    return (
        a.useEffect(() => {
            if (p && null != x) {
                var A, e;
                null === (e = V.current) || void 0 === e || null === (A = e.ref) || void 0 === A || A.focus();
            }
        }, [p, x]),
        (0, n.jsxs)('div', {
            className: d.imageSelectionContainer,
            children: [
                (0, n.jsx)(i.tEY, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: r()(d.uploadButton, {
                            [d.disabled]: C,
                            [d.hidden]: null != q
                        }),
                        'aria-disabled': C,
                        children: [
                            (0, n.jsx)(i.FmF, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: h
                            }),
                            (0, n.jsx)(o.ZP, {
                                ref: b,
                                tabIndex: 0,
                                onChange: (A, e) => {
                                    null != e && (U(e.name), v(A), m(A, c));
                                },
                                'aria-label': h
                            })
                        ]
                    })
                }),
                null != q &&
                    (0, n.jsxs)('div', {
                        className: d.customImageActionContainer,
                        children: [
                            (0, n.jsx)(i.ua7, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (A) =>
                                    (0, n.jsx)(i.P3F, {
                                        ...A,
                                        className: d.customImageAction,
                                        onClick: I,
                                        'aria-label': s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: x }),
                                        children: (0, n.jsx)(i.vdY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: d.editIcon
                                        })
                                    })
                            }),
                            (0, n.jsx)(i.ua7, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (A) =>
                                    (0, n.jsx)(i.P3F, {
                                        ...A,
                                        className: d.customImageAction,
                                        onClick: T,
                                        'aria-label': s.intl.formatToPlainString(s.t.Z43V9f, { filename: x }),
                                        children: (0, n.jsx)(i.XHJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.deleteIcon
                                        })
                                    })
                            })
                        ]
                    }),
                (0, n.jsxs)('div', {
                    'aria-label': f,
                    ...N,
                    className: d.radioGroup,
                    children: [
                        null != q &&
                            (0, n.jsx)(u, {
                                ref: V,
                                selectedImageName: l,
                                onChange: m,
                                disabled: C,
                                name: c,
                                alt: j,
                                data: q
                            }),
                        e.map((A) =>
                            (0, n.jsx)(
                                u,
                                {
                                    selectedImageName: l,
                                    onChange: m,
                                    disabled: C,
                                    ...A
                                },
                                A.name
                            )
                        )
                    ]
                })
            ]
        })
    );
}
