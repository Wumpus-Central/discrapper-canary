n.d(t, { Z: () => x }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    m = n(44315),
    p = n(654904),
    g = n(981631),
    h = n(388032),
    f = n(768402);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { onChange: t, onClose: n, color: s, suggestedColors: x, disabled: E, label: j, colorPickerMiddle: C, colorPickerFooter: O, showEyeDropper: S } = e,
        v = r.useRef(null),
        T = (0, d.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        I = c.Z.colors.BACKGROUND_ACCENT.css,
        N = (0, p.DP)(s),
        y = (0, o.Rf)(s),
        A = y === T ? I : y,
        P = (0, m.Lq)(N ? g.Ilk.WHITE_500 : g.Ilk.PRIMARY_530),
        R = (0, u.Z)(C),
        D = (0, u.Z)(O),
        [Z, w] = r.useState((0, a.Z)());
    return (
        r.useEffect(() => {
            (R !== C || D !== O) && w((0, a.Z)());
        }, [O, C, D, R]),
        (0, i.jsx)(d.yRy, {
            positionKey: Z,
            renderPopout: (e) =>
                (0, i.jsx)(
                    d.Z$W,
                    _(b({}, e), {
                        value: s,
                        onChange: t,
                        suggestedColors: x,
                        middle: C,
                        footer: O,
                        showEyeDropper: S
                    })
                ),
            onRequestClose: n,
            children: (e) => {
                var { onClick: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    s = Object.keys(e);
                                for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                        }
                        return r;
                    })(e, ['onClick']);
                return (0, i.jsxs)('div', {
                    ref: v,
                    className: l()(f.colorSwatch, { [f.disabled]: E }),
                    children: [
                        (0, i.jsx)(
                            d.P3F,
                            _(b({}, n), {
                                tabIndex: E ? -1 : 0,
                                onClick: E ? g.dG4 : t,
                                style: {
                                    backgroundColor: y,
                                    borderColor: A
                                },
                                className: f.swatch,
                                'aria-label': h.intl.string(h.t.Qp04hI),
                                focusProps: { ringTarget: v },
                                children: (0, i.jsx)(d.vdY, {
                                    size: 'custom',
                                    className: f.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: P
                                })
                            })
                        ),
                        j
                    ]
                });
            }
        })
    );
}
