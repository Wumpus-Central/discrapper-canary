A.d(t, {
    Z: function () {
        return g;
    }
}),
    A(47120);
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(813197),
    s = A(388032),
    d = A(566848);
let c = 'custom-image',
    u = r.forwardRef(function (e, t) {
        let { selectedImageName: A, onChange: r, disabled: a = !1, name: o, alt: s, data: c } = e,
            u = o === A,
            g = (0, l.useRadioItem)({
                isSelected: u,
                label: s
            }),
            h = a
                ? void 0
                : () => {
                      r(c, o);
                  };
        return (0, n.jsx)(l.Clickable, {
            ref: t,
            className: i()(d.radioOption, {
                [d.selected]: u,
                [d.disabled]: a
            }),
            onClick: h,
            'aria-disabled': a,
            ...g,
            children: (0, n.jsx)('img', {
                src: c,
                alt: s,
                className: d.radioOptionImage
            })
        });
    });
function g(e) {
    let { presetImages: t, image: A, imageName: a, savedImageName: g, onChange: h, uploadButtonLabel: p = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: m = s.intl.string(s.t['0Q0UJi']), disabled: f = !1 } = e,
        v = a === c,
        [C, q] = r.useState(v ? A : null),
        [x, b] = r.useState(null),
        U = r.useRef(null),
        V = r.useRef(null);
    r.useEffect(() => {
        g !== c && (q(null), b(null));
    }, [g]);
    let j = null != x ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: x }) : s.intl.string(s.t.SNPvSk),
        I = (0, l.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: f
        }),
        N = () => {
            var e;
            return null === (e = U.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        },
        T = () => {
            a === c && h(t[0].data, t[0].name), q(null), b(null);
        };
    return (
        r.useEffect(() => {
            if (v && null != x) {
                var e, t;
                null === (t = V.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus();
            }
        }, [v, x]),
        (0, n.jsxs)('div', {
            className: d.imageSelectionContainer,
            children: [
                (0, n.jsx)(l.FocusRing, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: i()(d.uploadButton, {
                            [d.disabled]: f,
                            [d.hidden]: null != C
                        }),
                        'aria-disabled': f,
                        children: [
                            (0, n.jsx)(l.ImagePlusIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: p
                            }),
                            (0, n.jsx)(o.ZP, {
                                ref: U,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (b(t.name), q(e), h(e, c));
                                },
                                'aria-label': p
                            })
                        ]
                    })
                }),
                null != C &&
                    (0, n.jsxs)('div', {
                        className: d.customImageActionContainer,
                        children: [
                            (0, n.jsx)(l.Tooltip, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(l.Clickable, {
                                        ...e,
                                        className: d.customImageAction,
                                        onClick: N,
                                        'aria-label': s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: x }),
                                        children: (0, n.jsx)(l.PencilIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: d.editIcon
                                        })
                                    })
                            }),
                            (0, n.jsx)(l.Tooltip, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(l.Clickable, {
                                        ...e,
                                        className: d.customImageAction,
                                        onClick: T,
                                        'aria-label': s.intl.formatToPlainString(s.t.Z43V9f, { filename: x }),
                                        children: (0, n.jsx)(l.TrashIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.deleteIcon
                                        })
                                    })
                            })
                        ]
                    }),
                (0, n.jsxs)('div', {
                    'aria-label': m,
                    ...I,
                    className: d.radioGroup,
                    children: [
                        null != C &&
                            (0, n.jsx)(u, {
                                ref: V,
                                selectedImageName: a,
                                onChange: h,
                                disabled: f,
                                name: c,
                                alt: j,
                                data: C
                            }),
                        t.map((e) =>
                            (0, n.jsx)(
                                u,
                                {
                                    selectedImageName: a,
                                    onChange: h,
                                    disabled: f,
                                    ...e
                                },
                                e.name
                            )
                        )
                    ]
                })
            ]
        })
    );
}
