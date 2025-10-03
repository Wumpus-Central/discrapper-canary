A.d(t, { Z: () => h }), A(388685);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(28664),
    o = A(755721),
    s = A(481060),
    d = A(813197),
    c = A(388032),
    u = A(793156);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, r);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let p = "custom-image",
    m = n.forwardRef(function (e, t) {
        let { selectedImageName: A, onChange: n, disabled: a = !1, name: i, alt: d, data: c } = e,
            p = i === A,
            m = (0, o.jm)({
                isSelected: p,
                label: d,
            }),
            h = a
                ? void 0
                : () => {
                      n(c, i);
                  };
        return (0, r.jsx)(
            s.P3F,
            f(
                g(
                    {
                        ref: t,
                        className: l()(u.radioOption, {
                            [u.selected]: p,
                            [u.disabled]: a,
                        }),
                        onClick: h,
                        "aria-disabled": a,
                    },
                    m,
                ),
                {
                    children: (0, r.jsx)("img", {
                        src: c,
                        alt: d,
                        className: u.radioOptionImage,
                    }),
                },
            ),
        );
    });
function h(e) {
    let {
            presetImages: t,
            image: A,
            imageName: a,
            savedImageName: h,
            onChange: v,
            uploadButtonLabel: q = c.intl.string(c.t["MsUY/f"]),
            radioGroupAriaLabel: b = c.intl.string(c.t["0Q0UJi"]),
            disabled: C = !1,
        } = e,
        j = a === p,
        [x, U] = n.useState(j ? A : null),
        [V, O] = n.useState(null),
        P = n.useRef(null),
        F = n.useRef(null);
    n.useEffect(() => {
        h !== p && (U(null), O(null));
    }, [h]);
    let y = null != V ? c.intl.formatToPlainString(c.t["Kw+5YW"], { filename: V }) : c.intl.string(c.t.SNPvSk),
        I = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: C,
        }),
        { ref: N } = I,
        T = (function (e, t) {
            if (null == e) return {};
            var A,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        r,
                        n = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (A = a[r]), t.indexOf(A) >= 0 || (n[A] = e[A]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (A = a[r]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A]);
            }
            return n;
        })(I, ["ref"]);
    return (
        n.useEffect(() => {
            if (j && null != V) {
                var e, t;
                null == (t = F.current) || null == (e = t.ref) || e.focus();
            }
        }, [j, V]),
        (0, r.jsxs)("div", {
            className: u.imageSelectionContainer,
            children: [
                (0, r.jsx)(s.tEY, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: l()(u.uploadButton, {
                            [u.disabled]: C,
                            [u.hidden]: null != x,
                        }),
                        "aria-disabled": C,
                        children: [
                            (0, r.jsx)(s.FmF, {
                                size: "xs",
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: q,
                            }),
                            (0, r.jsx)(d.ZP, {
                                ref: P,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (O(t.name), U(e), v(e, p));
                                },
                                "aria-label": q,
                            }),
                        ],
                    }),
                }),
                null != x &&
                    (0, r.jsxs)("div", {
                        className: u.customImageActionContainer,
                        children: [
                            (0, r.jsx)(i.u, {
                                asContainer: !0,
                                text: c.intl.string(c.t.AQYXMD),
                                children: (0, r.jsx)(s.P3F, {
                                    className: u.customImageAction,
                                    onClick: () => {
                                        var e;
                                        return null == (e = P.current) ? void 0 : e.activateUploadDialogue();
                                    },
                                    "aria-label": c.intl.formatToPlainString(c.t.Qc9Lg4, { filename: V }),
                                    children: (0, r.jsx)(s.vdY, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: u.editIcon,
                                    }),
                                }),
                            }),
                            (0, r.jsx)(i.u, {
                                asContainer: !0,
                                text: c.intl.string(c.t.WxqWU1),
                                children: (0, r.jsx)(s.P3F, {
                                    className: u.customImageAction,
                                    onClick: () => {
                                        a === p && v(t[0].data, t[0].name), U(null), O(null);
                                    },
                                    "aria-label": c.intl.formatToPlainString(c.t.Z43V9f, { filename: V }),
                                    children: (0, r.jsx)(s.XHJ, {
                                        size: "md",
                                        color: "currentColor",
                                        className: u.deleteIcon,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(
                    "div",
                    f(
                        g(
                            {
                                "aria-label": b,
                                ref: N,
                            },
                            T,
                        ),
                        {
                            className: u.radioGroup,
                            children: [
                                null != x &&
                                    (0, r.jsx)(m, {
                                        ref: F,
                                        selectedImageName: a,
                                        onChange: v,
                                        disabled: C,
                                        name: p,
                                        alt: y,
                                        data: x,
                                    }),
                                t.map((e) =>
                                    (0, r.jsx)(
                                        m,
                                        g(
                                            {
                                                selectedImageName: a,
                                                onChange: v,
                                                disabled: C,
                                            },
                                            e,
                                        ),
                                        e.name,
                                    ),
                                ),
                            ],
                        },
                    ),
                ),
            ],
        })
    );
}
