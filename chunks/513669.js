n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    A = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    i = n(813197),
    s = n(388032),
    c = n(887670);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 'custom-image',
    f = A.forwardRef(function (e, t) {
        let { selectedImageName: n, onChange: A, disabled: a = !1, name: i, alt: s, data: g } = e,
            f = i === n,
            p = (0, o.xUy)({
                isSelected: f,
                label: s
            }),
            m = a
                ? void 0
                : () => {
                      A(g, i);
                  };
        return (0, r.jsx)(
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
                    children: (0, r.jsx)('img', {
                        src: g,
                        alt: s,
                        className: c.radioOptionImage
                    })
                }
            )
        );
    });
function p(e) {
    let { presetImages: t, image: n, imageName: a, savedImageName: p, onChange: m, uploadButtonLabel: h = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.intl.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = a === g,
        [q, x] = A.useState(C ? n : null),
        [j, O] = A.useState(null),
        U = A.useRef(null),
        P = A.useRef(null);
    A.useEffect(() => {
        p !== g && (x(null), O(null));
    }, [p]);
    let V = null != j ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.intl.string(s.t.SNPvSk),
        y = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        { ref: N } = y,
        I = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                A = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        A = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (A[n] = e[n]);
                    return A;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (A[n] = e[n]);
            }
            return A;
        })(y, ['ref']),
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
        (0, r.jsxs)('div', {
            className: c.imageSelectionContainer,
            children: [
                (0, r.jsx)(o.tEY, {
                    within: !0,
                    children: (0, r.jsxs)('div', {
                        className: l()(c.uploadButton, {
                            [c.disabled]: v,
                            [c.hidden]: null != q
                        }),
                        'aria-disabled': v,
                        children: [
                            (0, r.jsx)(o.FmF, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: h
                            }),
                            (0, r.jsx)(i.ZP, {
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
                    (0, r.jsxs)('div', {
                        className: c.customImageActionContainer,
                        children: [
                            (0, r.jsx)(o.ua7, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: T,
                                            'aria-label': s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, r.jsx)(o.vdY, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: c.editIcon
                                            })
                                        })
                                    )
                            }),
                            (0, r.jsx)(o.ua7, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: F,
                                            'aria-label': s.intl.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, r.jsx)(o.XHJ, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: c.deleteIcon
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                (0, r.jsxs)(
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
                                    (0, r.jsx)(f, {
                                        ref: P,
                                        selectedImageName: a,
                                        onChange: m,
                                        disabled: v,
                                        name: g,
                                        alt: V,
                                        data: q
                                    }),
                                t.map((e) =>
                                    (0, r.jsx)(
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
