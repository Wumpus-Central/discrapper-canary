t.d(A, { A: () => b }), t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(990078),
    s = t(421380),
    o = t(397927),
    d = t(946274),
    c = t(985018),
    u = t(893347);
function g(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (A) {
                var r;
                (r = t[A]),
                    A in e
                        ? Object.defineProperty(e, A, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[A] = r);
            });
    }
    return e;
}
function f(e, A) {
    return (
        (A = null != A ? A : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A))
            : (function (e, A) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(A)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t));
              }),
        e
    );
}
let p = "custom-image",
    m = n.forwardRef(function (e, A) {
        let { selectedImageName: t, onChange: n, disabled: l = !1, name: i, alt: d, data: c } = e,
            p = i === t,
            m = (0, s.Gx)({
                isSelected: p,
                label: d,
            }),
            b = l
                ? void 0
                : () => {
                      n(c, i);
                  };
        return (0, r.jsx)(
            o.DUT,
            f(
                g(
                    {
                        ref: A,
                        className: a()(u.hO, {
                            [u.wH]: p,
                            [u.r9]: l,
                        }),
                        onClick: b,
                        "aria-disabled": l,
                    },
                    m,
                ),
                {
                    children: (0, r.jsx)("img", {
                        src: c,
                        alt: d,
                        className: u.mp,
                    }),
                },
            ),
        );
    });
function b(e) {
    let {
            presetImages: A,
            image: t,
            imageName: l,
            savedImageName: b,
            onChange: v,
            uploadButtonLabel: q = c.intl.string(c.t["MsUY/S"]),
            radioGroupAriaLabel: h = c.intl.string(c.t["0Q0UJq"]),
            disabled: C = !1,
        } = e,
        j = l === p,
        [U, V] = n.useState(j ? t : null),
        [O, x] = n.useState(null),
        y = n.useRef(null),
        P = n.useRef(null);
    n.useEffect(() => {
        b !== p && (V(null), x(null));
    }, [b]);
    let K = null != O ? c.intl.formatToPlainString(c.t["Kw+5YX"], { filename: O }) : c.intl.string(c.t.SNPvSv),
        N = (0, s._u)({
            orientation: "horizontal",
            isDisabled: C,
        }),
        { ref: T } = N,
        F = (function (e, A) {
            if (null == e) return {};
            var t,
                r,
                n,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++)
                    (r = t[n]),
                        !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, A) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (t = l[r]),
                            !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                    return n;
                })(e, A)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                    (r = t[n]),
                        !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(N, ["ref"]);
    return (
        n.useEffect(() => {
            if (j && null != O) {
                var e, A;
                null == (A = P.current) || null == (e = A.ref) || e.focus();
            }
        }, [j, O]),
        (0, r.jsxs)("div", {
            className: u.fE,
            children: [
                (0, r.jsx)(o.vN3, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: a()(u.au, {
                            [u.r9]: C,
                            [u.R]: null != U,
                        }),
                        "aria-disabled": C,
                        children: [
                            (0, r.jsx)(o.XGR, {
                                size: "xs",
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: q,
                            }),
                            (0, r.jsx)(d.Ay, {
                                ref: y,
                                tabIndex: 0,
                                onChange: (e, A) => {
                                    null != A && (x(A.name), V(e), v(e, p));
                                },
                                "aria-label": q,
                            }),
                        ],
                    }),
                }),
                null != U &&
                    (0, r.jsxs)("div", {
                        className: u.kt,
                        children: [
                            (0, r.jsx)(i.m, {
                                asContainer: !0,
                                text: c.intl.string(c.t.AQYXMO),
                                children: (0, r.jsx)(o.DUT, {
                                    className: u.xA,
                                    onClick: () => {
                                        var e;
                                        return null == (e = y.current) ? void 0 : e.activateUploadDialogue();
                                    },
                                    "aria-label": c.intl.formatToPlainString(c.t.Qc9Lg6, { filename: O }),
                                    children: (0, r.jsx)(o.R2l, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: u.IZ,
                                    }),
                                }),
                            }),
                            (0, r.jsx)(i.m, {
                                asContainer: !0,
                                text: c.intl.string(c.t.WxqWU0),
                                children: (0, r.jsx)(o.DUT, {
                                    className: u.xA,
                                    onClick: () => {
                                        l === p && v(A[0].data, A[0].name), V(null), x(null);
                                    },
                                    "aria-label": c.intl.formatToPlainString(c.t.Z43V9S, { filename: O }),
                                    children: (0, r.jsx)(o.ucK, {
                                        size: "md",
                                        color: "currentColor",
                                        className: u.fy,
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
                                "aria-label": h,
                                ref: T,
                            },
                            F,
                        ),
                        {
                            className: u.R$,
                            children: [
                                null != U &&
                                    (0, r.jsx)(m, {
                                        ref: P,
                                        selectedImageName: l,
                                        onChange: v,
                                        disabled: C,
                                        name: p,
                                        alt: K,
                                        data: U,
                                    }),
                                A.map((e) =>
                                    (0, r.jsx)(
                                        m,
                                        g(
                                            {
                                                selectedImageName: l,
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
