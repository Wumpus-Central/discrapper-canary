A.d(t, { Z: () => h }), A(388685);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    i = A.n(a),
    l = A(28664),
    o = A(755721),
    s = A(481060),
    d = A(813197),
    u = A(388032),
    c = A(288532);
function g(e) {
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
function f(e, t) {
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
let p = "custom-image",
    m = r.forwardRef(function (e, t) {
        let { selectedImageName: A, onChange: r, disabled: a = !1, name: l, alt: d, data: u } = e,
            p = l === A,
            m = (0, o.jm)({
                isSelected: p,
                label: d,
            }),
            h = a
                ? void 0
                : () => {
                      r(u, l);
                  };
        return (0, n.jsx)(
            s.P3F,
            f(
                g(
                    {
                        ref: t,
                        className: i()(c.radioOption, {
                            [c.selected]: p,
                            [c.disabled]: a,
                        }),
                        onClick: h,
                        "aria-disabled": a,
                    },
                    m,
                ),
                {
                    children: (0, n.jsx)("img", {
                        src: u,
                        alt: d,
                        className: c.radioOptionImage,
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
            uploadButtonLabel: q = u.intl.string(u.t["MsUY/S"]),
            radioGroupAriaLabel: b = u.intl.string(u.t["0Q0UJq"]),
            disabled: C = !1,
        } = e,
        U = a === p,
        [j, V] = r.useState(U ? A : null),
        [x, O] = r.useState(null),
        P = r.useRef(null),
        F = r.useRef(null);
    r.useEffect(() => {
        h !== p && (V(null), O(null));
    }, [h]);
    let y = null != x ? u.intl.formatToPlainString(u.t["Kw+5YX"], { filename: x }) : u.intl.string(u.t.SNPvSv),
        I = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: C,
        }),
        { ref: N } = I,
        K = (function (e, t) {
            if (null == e) return {};
            var A,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (A = a[n]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
            }
            return r;
        })(I, ["ref"]);
    return (
        r.useEffect(() => {
            if (U && null != x) {
                var e, t;
                null == (t = F.current) || null == (e = t.ref) || e.focus();
            }
        }, [U, x]),
        (0, n.jsxs)("div", {
            className: c.imageSelectionContainer,
            children: [
                (0, n.jsx)(s.tEY, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: i()(c.uploadButton, {
                            [c.disabled]: C,
                            [c.hidden]: null != j,
                        }),
                        "aria-disabled": C,
                        children: [
                            (0, n.jsx)(s.FmF, {
                                size: "xs",
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: q,
                            }),
                            (0, n.jsx)(d.ZP, {
                                ref: P,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (O(t.name), V(e), v(e, p));
                                },
                                "aria-label": q,
                            }),
                        ],
                    }),
                }),
                null != j &&
                    (0, n.jsxs)("div", {
                        className: c.customImageActionContainer,
                        children: [
                            (0, n.jsx)(l.u, {
                                asContainer: !0,
                                text: u.intl.string(u.t.AQYXMO),
                                children: (0, n.jsx)(s.P3F, {
                                    className: c.customImageAction,
                                    onClick: () => {
                                        var e;
                                        return null == (e = P.current) ? void 0 : e.activateUploadDialogue();
                                    },
                                    "aria-label": u.intl.formatToPlainString(u.t.Qc9Lg6, { filename: x }),
                                    children: (0, n.jsx)(s.vdY, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: c.editIcon,
                                    }),
                                }),
                            }),
                            (0, n.jsx)(l.u, {
                                asContainer: !0,
                                text: u.intl.string(u.t.WxqWU0),
                                children: (0, n.jsx)(s.P3F, {
                                    className: c.customImageAction,
                                    onClick: () => {
                                        a === p && v(t[0].data, t[0].name), V(null), O(null);
                                    },
                                    "aria-label": u.intl.formatToPlainString(u.t.Z43V9S, { filename: x }),
                                    children: (0, n.jsx)(s.XHJ, {
                                        size: "md",
                                        color: "currentColor",
                                        className: c.deleteIcon,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, n.jsxs)(
                    "div",
                    f(
                        g(
                            {
                                "aria-label": b,
                                ref: N,
                            },
                            K,
                        ),
                        {
                            className: c.radioGroup,
                            children: [
                                null != j &&
                                    (0, n.jsx)(m, {
                                        ref: F,
                                        selectedImageName: a,
                                        onChange: v,
                                        disabled: C,
                                        name: p,
                                        alt: y,
                                        data: j,
                                    }),
                                t.map((e) =>
                                    (0, n.jsx)(
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
