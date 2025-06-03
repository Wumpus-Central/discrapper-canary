r.d(t, { Z: () => h }), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    A = r(813197),
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
let f = 'custom-image',
    g = i.forwardRef(function (e, t) {
        let { selectedImageName: r, onChange: i, disabled: a = !1, name: A, alt: s, data: f } = e,
            g = A === r,
            h = (0, o.xUy)({
                isSelected: g,
                label: s
            }),
            p = a
                ? void 0
                : () => {
                      i(f, A);
                  };
        return (0, n.jsx)(
            o.P3F,
            u(
                d(
                    {
                        ref: t,
                        className: l()(c.radioOption, {
                            [c.selected]: g,
                            [c.disabled]: a
                        }),
                        onClick: p,
                        'aria-disabled': a
                    },
                    h
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
function h(e) {
    let { presetImages: t, image: r, imageName: a, savedImageName: h, onChange: p, uploadButtonLabel: m = s.intl.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.intl.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = a === f,
        [x, q] = i.useState(C ? r : null),
        [j, O] = i.useState(null),
        P = i.useRef(null),
        y = i.useRef(null);
    i.useEffect(() => {
        h !== f && (q(null), O(null));
    }, [h]);
    let U = null != j ? s.intl.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.intl.string(s.t.SNPvSk),
        V = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        { ref: N } = V,
        I = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(V, ['ref']),
        T = () => {
            var e;
            return null == (e = P.current) ? void 0 : e.activateUploadDialogue();
        },
        F = () => {
            a === f && p(t[0].data, t[0].name), q(null), O(null);
        };
    return (
        i.useEffect(() => {
            if (C && null != j) {
                var e, t;
                null == (t = y.current) || null == (e = t.ref) || e.focus();
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
                            [c.hidden]: null != x
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
                                children: m
                            }),
                            (0, n.jsx)(A.ZP, {
                                ref: P,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (O(t.name), q(e), p(e, f));
                                },
                                'aria-label': m
                            })
                        ]
                    })
                }),
                null != x &&
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
                                ref: N
                            },
                            I
                        ),
                        {
                            className: c.radioGroup,
                            children: [
                                null != x &&
                                    (0, n.jsx)(g, {
                                        ref: y,
                                        selectedImageName: a,
                                        onChange: p,
                                        disabled: v,
                                        name: f,
                                        alt: U,
                                        data: x
                                    }),
                                t.map((e) =>
                                    (0, n.jsx)(
                                        g,
                                        d(
                                            {
                                                selectedImageName: a,
                                                onChange: p,
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
