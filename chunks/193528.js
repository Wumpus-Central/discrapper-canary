n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(866442),
    c = n(692547),
    u = n(481060),
    d = n(699682),
    f = n(44315),
    _ = n(654904),
    p = n(981631),
    h = n(388032),
    m = n(707892);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    let {
            onChange: t,
            onClose: n,
            color: a,
            suggestedColors: g,
            disabled: b,
            label: v,
            colorPickerMiddle: I,
            colorPickerFooter: T,
            showEyeDropper: S,
        } = e,
        A = i.useRef(null),
        C = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(),
        N = c.Z.colors.BACKGROUND_ACCENT.css,
        R = (0, _.DP)(a),
        P = (0, l.Rf)(a),
        D = P === C ? N : P,
        w = (0, f.Lq)(R ? p.Ilk.WHITE_500 : p.Ilk.PRIMARY_530),
        x = (0, d.Z)(I),
        L = (0, d.Z)(T),
        [M, k] = i.useState((0, s.Z)());
    return (
        i.useEffect(() => {
            (x !== I || L !== T) && k((0, s.Z)());
        }, [T, I, L, x]),
        (0, r.jsx)(u.yRy, {
            targetElementRef: A,
            positionKey: M,
            renderPopout: (e) =>
                (0, r.jsx)(
                    u.Z$W,
                    y(E({}, e), {
                        value: a,
                        onChange: t,
                        suggestedColors: g,
                        middle: I,
                        footer: T,
                        showEyeDropper: S,
                    }),
                ),
            onRequestClose: n,
            children: (e) => {
                var { onClick: t } = e,
                    n = O(e, ["onClick"]);
                return (0, r.jsxs)("div", {
                    ref: A,
                    className: o()(m.colorSwatch, { [m.disabled]: b }),
                    children: [
                        (0, r.jsx)(
                            u.P3F,
                            y(E({}, n), {
                                tabIndex: b ? -1 : 0,
                                onClick: b ? p.dG4 : t,
                                style: {
                                    backgroundColor: P,
                                    borderColor: D,
                                },
                                className: m.swatch,
                                "aria-label": h.intl.string(h.t.Qp04hK),
                                focusProps: { ringTarget: A },
                                children: (0, r.jsx)(u.vdY, {
                                    size: "custom",
                                    className: m.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: w,
                                }),
                            }),
                        ),
                        v,
                    ],
                });
            },
        })
    );
}
