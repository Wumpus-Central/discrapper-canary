n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(866442),
    c = n(692547),
    u = n(481060),
    d = n(699682),
    f = n(654904),
    p = n(981631),
    _ = n(388032),
    h = n(317238);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let {
            onChange: t,
            onClose: n,
            color: a,
            suggestedColors: m,
            disabled: E,
            label: O,
            colorPickerMiddle: v,
            colorPickerFooter: S,
            showEyeDropper: I,
        } = e,
        T = i.useRef(null),
        C = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(),
        A = c.Z.colors.BACKGROUND_MOD_MUTED.css,
        N = (0, f.DP)(a),
        P = (0, l.Rf)(a),
        w = P === C ? A : P,
        R = N ? c.Z.unsafe_rawColors.WHITE.css : c.Z.unsafe_rawColors.PRIMARY_530.css,
        D = (0, d.Z)(v),
        x = (0, d.Z)(S),
        [L, j] = i.useState((0, s.Z)());
    return (
        i.useEffect(() => {
            (D !== v || x !== S) && j((0, s.Z)());
        }, [S, v, x, D]),
        (0, r.jsx)(u.yRy, {
            targetElementRef: T,
            positionKey: L,
            renderPopout: (e) =>
                (0, r.jsx)(
                    u.Z$W,
                    b(g({}, e), {
                        value: a,
                        onChange: t,
                        suggestedColors: m,
                        middle: v,
                        footer: S,
                        showEyeDropper: I,
                    }),
                ),
            onRequestClose: n,
            children: (e) => {
                var { onClick: t } = e,
                    n = y(e, ["onClick"]);
                return (0, r.jsxs)("div", {
                    ref: T,
                    className: o()(h.colorSwatch, { [h.disabled]: E }),
                    children: [
                        (0, r.jsx)(
                            u.P3F,
                            b(g({}, n), {
                                tabIndex: E ? -1 : 0,
                                onClick: E ? p.dG4 : t,
                                style: {
                                    backgroundColor: P,
                                    borderColor: w,
                                },
                                className: h.swatch,
                                "aria-label": _.intl.string(_.t.Qp04hK),
                                focusProps: { ringTarget: T },
                                children: (0, r.jsx)(u.vdY, {
                                    size: "custom",
                                    className: h.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: R,
                                }),
                            }),
                        ),
                        O,
                    ],
                });
            },
        })
    );
}
