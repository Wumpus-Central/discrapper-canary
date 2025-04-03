n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    m = n(44315),
    g = n(654904),
    p = n(981631),
    h = n(388032),
    f = n(768402);
function b(e) {
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
function N(e, t) {
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
function x(e) {
    let { onChange: t, onClose: n, color: s, suggestedColors: x, disabled: _, label: E, colorPickerMiddle: j, colorPickerFooter: O, showEyeDropper: C } = e,
        S = i.useRef(null),
        v = (0, d.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        T = c.Z.colors.BACKGROUND_ACCENT.css,
        I = (0, g.DP)(s),
        y = (0, o.Rf)(s),
        A = y === v ? T : y,
        P = (0, m.Lq)(I ? p.Ilk.WHITE_500 : p.Ilk.PRIMARY_530),
        R = (0, u.Z)(j),
        D = (0, u.Z)(O),
        [Z, w] = i.useState((0, l.Z)());
    return (
        i.useEffect(() => {
            (R !== j || D !== O) && w((0, l.Z)());
        }, [O, j, D, R]),
        (0, r.jsx)(d.yRy, {
            positionKey: Z,
            renderPopout: (e) =>
                (0, r.jsx)(
                    d.Z$W,
                    N(b({}, e), {
                        value: s,
                        onChange: t,
                        suggestedColors: x,
                        middle: j,
                        footer: O,
                        showEyeDropper: C
                    })
                ),
            onRequestClose: n,
            children: (e) => {
                var { onClick: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['onClick']);
                return (0, r.jsxs)('div', {
                    ref: S,
                    className: a()(f.colorSwatch, { [f.disabled]: _ }),
                    children: [
                        (0, r.jsx)(
                            d.P3F,
                            N(b({}, n), {
                                tabIndex: _ ? -1 : 0,
                                onClick: _ ? p.dG4 : t,
                                style: {
                                    backgroundColor: y,
                                    borderColor: A
                                },
                                className: f.swatch,
                                'aria-label': h.NW.string(h.t.Qp04hI),
                                focusProps: { ringTarget: S },
                                children: (0, r.jsx)(d.vdY, {
                                    size: 'custom',
                                    className: f.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: P
                                })
                            })
                        ),
                        E
                    ]
                });
            }
        })
    );
}
