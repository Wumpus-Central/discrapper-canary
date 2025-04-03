r.d(t, { Z: () => p }), r(47120);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(481060),
    i = r(813197),
    s = r(388032),
    c = r(887670);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let g = 'custom-image',
    f = A.forwardRef(function (e, t) {
        let { selectedImageName: r, onChange: A, disabled: a = !1, name: i, alt: s, data: g } = e,
            f = i === r,
            p = (0, l.xUy)({
                isSelected: f,
                label: s
            }),
            h = a
                ? void 0
                : () => {
                      A(g, i);
                  };
        return (0, n.jsx)(
            l.P3F,
            u(
                d(
                    {
                        ref: t,
                        className: o()(c.radioOption, {
                            [c.selected]: f,
                            [c.disabled]: a
                        }),
                        onClick: h,
                        'aria-disabled': a
                    },
                    p
                ),
                {
                    children: (0, n.jsx)('img', {
                        src: g,
                        alt: s,
                        className: c.radioOptionImage
                    })
                }
            )
        );
    });
function p(e) {
    let { presetImages: t, image: r, imageName: a, savedImageName: p, onChange: h, uploadButtonLabel: m = s.NW.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.NW.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = a === g,
        [q, x] = A.useState(C ? r : null),
        [j, N] = A.useState(null),
        O = A.useRef(null),
        U = A.useRef(null);
    A.useEffect(() => {
        p !== g && (x(null), N(null));
    }, [p]);
    let P = null != j ? s.NW.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.NW.string(s.t.SNPvSk),
        y = (0, l.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        V = () => {
            var e;
            return null == (e = O.current) ? void 0 : e.activateUploadDialogue();
        },
        W = () => {
            a === g && h(t[0].data, t[0].name), x(null), N(null);
        };
    return (
        A.useEffect(() => {
            if (C && null != j) {
                var e, t;
                null == (t = U.current) || null == (e = t.ref) || e.focus();
            }
        }, [C, j]),
        (0, n.jsxs)('div', {
            className: c.imageSelectionContainer,
            children: [
                (0, n.jsx)(l.tEY, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: o()(c.uploadButton, {
                            [c.disabled]: v,
                            [c.hidden]: null != q
                        }),
                        'aria-disabled': v,
                        children: [
                            (0, n.jsx)(l.FmF, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: m
                            }),
                            (0, n.jsx)(i.ZP, {
                                ref: O,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (N(t.name), x(e), h(e, g));
                                },
                                'aria-label': m
                            })
                        ]
                    })
                }),
                null != q &&
                    (0, n.jsxs)('div', {
                        className: c.customImageActionContainer,
                        children: [
                            (0, n.jsx)(l.ua7, {
                                text: s.NW.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        l.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: V,
                                            'aria-label': s.NW.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, n.jsx)(l.vdY, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: c.editIcon
                                            })
                                        })
                                    )
                            }),
                            (0, n.jsx)(l.ua7, {
                                text: s.NW.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        l.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: W,
                                            'aria-label': s.NW.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, n.jsx)(l.XHJ, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: c.deleteIcon
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                (0, n.jsxs)(
                    'div',
                    u(d({ 'aria-label': b }, y), {
                        className: c.radioGroup,
                        children: [
                            null != q &&
                                (0, n.jsx)(f, {
                                    ref: U,
                                    selectedImageName: a,
                                    onChange: h,
                                    disabled: v,
                                    name: g,
                                    alt: P,
                                    data: q
                                }),
                            t.map((e) =>
                                (0, n.jsx)(
                                    f,
                                    d(
                                        {
                                            selectedImageName: a,
                                            onChange: h,
                                            disabled: v
                                        },
                                        e
                                    ),
                                    e.name
                                )
                            )
                        ]
                    })
                )
            ]
        })
    );
}
