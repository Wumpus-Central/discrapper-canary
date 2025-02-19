r.d(t, { Z: () => p }), r(47120);
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(481060),
    i = r(813197),
    s = r(388032),
    c = r(304447);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            A = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (A = A.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            A.forEach(function (t) {
                var A;
                (A = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: A,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = A);
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
                      var A = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, A);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let f = 'custom-image',
    g = n.forwardRef(function (e, t) {
        let { selectedImageName: r, onChange: n, disabled: o = !1, name: i, alt: s, data: f } = e,
            g = i === r,
            p = (0, l.xUy)({
                isSelected: g,
                label: s
            }),
            m = o
                ? void 0
                : () => {
                      n(f, i);
                  };
        return (0, A.jsx)(
            l.P3F,
            u(
                d(
                    {
                        ref: t,
                        className: a()(c.radioOption, {
                            [c.selected]: g,
                            [c.disabled]: o
                        }),
                        onClick: m,
                        'aria-disabled': o
                    },
                    p
                ),
                {
                    children: (0, A.jsx)('img', {
                        src: f,
                        alt: s,
                        className: c.radioOptionImage
                    })
                }
            )
        );
    });
function p(e) {
    let { presetImages: t, image: r, imageName: o, savedImageName: p, onChange: m, uploadButtonLabel: h = s.NW.string(s.t['MsUY/f']), radioGroupAriaLabel: b = s.NW.string(s.t['0Q0UJi']), disabled: v = !1 } = e,
        C = o === f,
        [q, x] = n.useState(C ? r : null),
        [j, N] = n.useState(null),
        O = n.useRef(null),
        U = n.useRef(null);
    n.useEffect(() => {
        p !== f && (x(null), N(null));
    }, [p]);
    let P = null != j ? s.NW.formatToPlainString(s.t['Kw+5YW'], { filename: j }) : s.NW.string(s.t.SNPvSk),
        V = (0, l.arW)({
            orientation: 'horizontal',
            isDisabled: v
        }),
        y = () => {
            var e;
            return null === (e = O.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        },
        W = () => {
            o === f && m(t[0].data, t[0].name), x(null), N(null);
        };
    return (
        n.useEffect(() => {
            if (C && null != j) {
                var e, t;
                null === (t = U.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus();
            }
        }, [C, j]),
        (0, A.jsxs)('div', {
            className: c.imageSelectionContainer,
            children: [
                (0, A.jsx)(l.tEY, {
                    within: !0,
                    children: (0, A.jsxs)('div', {
                        className: a()(c.uploadButton, {
                            [c.disabled]: v,
                            [c.hidden]: null != q
                        }),
                        'aria-disabled': v,
                        children: [
                            (0, A.jsx)(l.FmF, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, A.jsx)(l.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: h
                            }),
                            (0, A.jsx)(i.ZP, {
                                ref: O,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (N(t.name), x(e), m(e, f));
                                },
                                'aria-label': h
                            })
                        ]
                    })
                }),
                null != q &&
                    (0, A.jsxs)('div', {
                        className: c.customImageActionContainer,
                        children: [
                            (0, A.jsx)(l.ua7, {
                                text: s.NW.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, A.jsx)(
                                        l.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: y,
                                            'aria-label': s.NW.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, A.jsx)(l.vdY, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: c.editIcon
                                            })
                                        })
                                    )
                            }),
                            (0, A.jsx)(l.ua7, {
                                text: s.NW.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, A.jsx)(
                                        l.P3F,
                                        u(d({}, e), {
                                            className: c.customImageAction,
                                            onClick: W,
                                            'aria-label': s.NW.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, A.jsx)(l.XHJ, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: c.deleteIcon
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                (0, A.jsxs)(
                    'div',
                    u(d({ 'aria-label': b }, V), {
                        className: c.radioGroup,
                        children: [
                            null != q &&
                                (0, A.jsx)(g, {
                                    ref: U,
                                    selectedImageName: o,
                                    onChange: m,
                                    disabled: v,
                                    name: f,
                                    alt: P,
                                    data: q
                                }),
                            t.map((e) =>
                                (0, A.jsx)(
                                    g,
                                    d(
                                        {
                                            selectedImageName: o,
                                            onChange: m,
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
