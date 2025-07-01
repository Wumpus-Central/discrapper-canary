(A.d(t, { Z: () => p }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(481060),
    o = A(813197),
    s = A(388032),
    c = A(887670);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, n);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let f = 'custom-image',
    g = r.forwardRef(function (e, t) {
        let { selectedImageName: A, onChange: r, disabled: a = !1, name: o, alt: s, data: f } = e,
            g = o === A,
            p = (0, i.xUy)({
                isSelected: g,
                label: s
            }),
            h = a
                ? void 0
                : () => {
                      r(f, o);
                  };
        return (0, n.jsx)(
            i.P3F,
            u(
                d(
                    {
                        ref: t,
                        className: l()(c.radioOption, {
                            [c.selected]: g,
                            [c.disabled]: a
                        }),
                        onClick: h,
                        'aria-disabled': a
                    },
                    p
                ),
                {
                    children: (0, n.jsx)('img', {
                        src: f,
                        alt: s,
                        className: c.radioOptionImage
                    })
                }
            )
        );
    });
function p(e) {
    let { presetImages: t, image: A, imageName: a, savedImageName: p, onChange: h, uploadButtonLabel: m = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.intl.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = a === f,
        [q, x] = r.useState(C ? A : null),
        [j, U] = r.useState(null),
        O = r.useRef(null),
        V = r.useRef(null);
    r.useEffect(() => {
        p !== f && (x(null), U(null));
    }, [p]);
    let P = null != j ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.intl.string(s.t.SNPvSk),
        y = (0, i.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        { ref: N } = y,
        I = (function (e, t) {
            if (null == e) return {};
            var A,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((A = a[n]), !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]));
            }
            return r;
        })(y, ['ref']),
        F = () => {
            var e;
            return null == (e = O.current) ? void 0 : e.activateUploadDialogue();
        },
        T = () => {
            (a === f && h(t[0].data, t[0].name), x(null), U(null));
        };
    return (
        r.useEffect(() => {
            if (C && null != j) {
                var e, t;
                null == (t = V.current) || null == (e = t.ref) || e.focus();
            }
        }, [C, j]),
        (0, n.jsxs)('div', {
            className: c.imageSelectionContainer,
            children: [
                (0, n.jsx)(i.tEY, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: l()(c.uploadButton, {
                            [c.disabled]: v,
                            [c.hidden]: null != q
                        }),
                        'aria-disabled': v,
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
                                children: m
                            }),
                            (0, n.jsx)(o.ZP, {
                                ref: O,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (U(t.name), x(e), h(e, f));
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
                            (0, n.jsx)(i.ua7, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        i.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: F,
                                            'aria-label': s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, n.jsx)(i.vdY, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: c.editIcon
                                            })
                                        })
                                    )
                            }),
                            (0, n.jsx)(i.ua7, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        i.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: T,
                                            'aria-label': s.intl.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, n.jsx)(i.XHJ, {
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
                    u(
                        d(
                            {
                                'aria-label': b,
                                ref: N
                            },
                            I
                        ),
                        {
                            className: c.radioGroup,
                            children: [
                                null != q &&
                                    (0, n.jsx)(g, {
                                        ref: V,
                                        selectedImageName: a,
                                        onChange: h,
                                        disabled: v,
                                        name: f,
                                        alt: P,
                                        data: q
                                    }),
                                t.map((e) =>
                                    (0, n.jsx)(
                                        g,
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
                        }
                    )
                )
            ]
        })
    );
}
