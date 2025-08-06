A.d(t, { Z: () => p }), A(388685);
var n = A(255367),
    r = A(73800),
    l = A(120356),
    a = A.n(l),
    o = A(481060),
    i = A(813197),
    s = A(388032),
    d = A(887670);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
let f = "custom-image",
    g = r.forwardRef(function (e, t) {
        let { selectedImageName: A, onChange: r, disabled: l = !1, name: i, alt: s, data: f } = e,
            g = i === A,
            p = (0, o.xUy)({
                isSelected: g,
                label: s,
            }),
            m = l
                ? void 0
                : () => {
                      r(f, i);
                  };
        return (0, n.jsx)(
            o.P3F,
            u(
                c(
                    {
                        ref: t,
                        className: a()(d.radioOption, {
                            [d.selected]: g,
                            [d.disabled]: l,
                        }),
                        onClick: m,
                        "aria-disabled": l,
                    },
                    p,
                ),
                {
                    children: (0, n.jsx)("img", {
                        src: f,
                        alt: s,
                        className: d.radioOptionImage,
                    }),
                },
            ),
        );
    });
function p(e) {
    let {
            presetImages: t,
            image: A,
            imageName: l,
            savedImageName: p,
            onChange: m,
            uploadButtonLabel: h = s.intl.string(s.t["MsUY/f"]),
            radioGroupAriaLabel: C = s.intl.string(s.t["0Q0UJi"]),
            disabled: q = !1,
        } = e,
        b = l === f,
        [v, x] = r.useState(b ? A : null),
        [j, U] = r.useState(null),
        V = r.useRef(null),
        P = r.useRef(null);
    r.useEffect(() => {
        p !== f && (x(null), U(null));
    }, [p]);
    let O = null != j ? s.intl.formatToPlainString(s.t["Kw+5YW"], { filename: j }) : s.intl.string(s.t.SNPvSk),
        I = (0, o.arW)({
            orientation: "horizontal",
            isDisabled: q,
        }),
        { ref: N } = I,
        F = (function (e, t) {
            if (null == e) return {};
            var A,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        n,
                        r = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (A = l[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (A = l[n]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
            }
            return r;
        })(I, ["ref"]),
        y = () => {
            var e;
            return null == (e = V.current) ? void 0 : e.activateUploadDialogue();
        },
        K = () => {
            l === f && m(t[0].data, t[0].name), x(null), U(null);
        };
    return (
        r.useEffect(() => {
            if (b && null != j) {
                var e, t;
                null == (t = P.current) || null == (e = t.ref) || e.focus();
            }
        }, [b, j]),
        (0, n.jsxs)("div", {
            className: d.imageSelectionContainer,
            children: [
                (0, n.jsx)(o.tEY, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: a()(d.uploadButton, {
                            [d.disabled]: q,
                            [d.hidden]: null != v,
                        }),
                        "aria-disabled": q,
                        children: [
                            (0, n.jsx)(o.FmF, {
                                size: "xs",
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: h,
                            }),
                            (0, n.jsx)(i.ZP, {
                                ref: V,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (U(t.name), x(e), m(e, f));
                                },
                                "aria-label": h,
                            }),
                        ],
                    }),
                }),
                null != v &&
                    (0, n.jsxs)("div", {
                        className: d.customImageActionContainer,
                        children: [
                            (0, n.jsx)(o.ua7, {
                                text: s.intl.string(s.t.AQYXMD),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        o.P3F,
                                        u(c({}, e), {
                                            className: d.customImageAction,
                                            onClick: y,
                                            "aria-label": s.intl.formatToPlainString(s.t.Qc9Lg4, { filename: j }),
                                            children: (0, n.jsx)(o.vdY, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: d.editIcon,
                                            }),
                                        }),
                                    ),
                            }),
                            (0, n.jsx)(o.ua7, {
                                text: s.intl.string(s.t.WxqWU1),
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(
                                        o.P3F,
                                        u(c({}, e), {
                                            className: d.customImageAction,
                                            onClick: K,
                                            "aria-label": s.intl.formatToPlainString(s.t.Z43V9f, { filename: j }),
                                            children: (0, n.jsx)(o.XHJ, {
                                                size: "md",
                                                color: "currentColor",
                                                className: d.deleteIcon,
                                            }),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                (0, n.jsxs)(
                    "div",
                    u(
                        c(
                            {
                                "aria-label": C,
                                ref: N,
                            },
                            F,
                        ),
                        {
                            className: d.radioGroup,
                            children: [
                                null != v &&
                                    (0, n.jsx)(g, {
                                        ref: P,
                                        selectedImageName: l,
                                        onChange: m,
                                        disabled: q,
                                        name: f,
                                        alt: O,
                                        data: v,
                                    }),
                                t.map((e) =>
                                    (0, n.jsx)(
                                        g,
                                        c(
                                            {
                                                selectedImageName: l,
                                                onChange: m,
                                                disabled: q,
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
