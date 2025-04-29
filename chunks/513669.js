r.d(t, { Z: () => p }), r(388685);
var n = r(255367),
    A = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
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
            p = (0, o.xUy)({
                isSelected: f,
                label: s
            }),
            m = a
                ? void 0
                : () => {
                      A(g, i);
                  };
        return (0, n.jsx)(
            o.P3F,
            u(
                d(
                    {
                        ref: t,
                        className: l()(c.radioOption, {
                            [c.selected]: f,
                            [c.disabled]: a
                        }),
                        onClick: m,
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
    let { presetImages: t, image: r, imageName: a, savedImageName: p, onChange: m, uploadButtonLabel: h = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.intl.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = a === g,
        [q, x] = A.useState(C ? r : null),
        [j, O] = A.useState(null),
        U = A.useRef(null),
        P = A.useRef(null);
    A.useEffect(() => {
        p !== g && (x(null), O(null));
    }, [p]);
    let V = null != j ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.intl.string(s.t.SNPvSk),
        N = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        { ref: y } = N,
        I = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                A = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        A = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (A[r] = e[r]);
                    return A;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (A[r] = e[r]);
            }
            return A;
        })(N, ['ref']),
        T = () => {
            var e;
            return null == (e = U.current) ? void 0 : e.activateUploadDialogue();
        },
        F = () => {
            a === g && m(t[0].data, t[0].name), x(null), O(null);
        };
    return (
        A.useEffect(() => {
            if (C && null != j) {
                var e, t;
                null == (t = P.current) || null == (e = t.ref) || e.focus();
            }
        }, [C, j]),
        (0, n.jsxs)('div', {
            className: c.imageSelectionContainer,
            children: [
                (0, n.jsx)(o.tEY, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: l()(c.uploadButton, {
                            [c.disabled]: v,
                            [c.hidden]: null != q
                        }),
                        'aria-disabled': v,
                        children: [
                            (0, n.jsx)(o.FmF, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: h
                            }),
                            (0, n.jsx)(i.ZP, {
                                ref: U,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (O(t.name), x(e), m(e, g));
                                },
                                'aria-label': h
                            })
                        ]
                    })
                }),
                null != q &&
                    (0, n.jsxs)('div', {
                        className: c.customImageActionContainer,
                        children: [
                            (0, n.jsx)(o.ua7, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        o.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: T,
                                            'aria-label': s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, n.jsx)(o.vdY, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: c.editIcon
                                            })
                                        })
                                    )
                            }),
                            (0, n.jsx)(o.ua7, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        o.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: F,
                                            'aria-label': s.intl.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, n.jsx)(o.XHJ, {
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
                                ref: y
                            },
                            I
                        ),
                        {
                            className: c.radioGroup,
                            children: [
                                null != q &&
                                    (0, n.jsx)(f, {
                                        ref: P,
                                        selectedImageName: a,
                                        onChange: m,
                                        disabled: v,
                                        name: g,
                                        alt: V,
                                        data: q
                                    }),
                                t.map((e) =>
                                    (0, n.jsx)(
                                        f,
                                        d(
                                            {
                                                selectedImageName: a,
                                                onChange: m,
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
