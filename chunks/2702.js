n.d(t, { default: () => _ }), n(314940), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    s = n.n(a),
    o = n(278074),
    l = n(442837),
    u = n(481060),
    d = n(809206),
    c = n(219496),
    g = n(807369),
    m = n(25990),
    f = n(594174),
    E = n(74538),
    h = n(981631),
    S = n(388032),
    v = n(377238);
function _(e) {
    var t, n;
    let { transitionState: a, onClose: _ } = e,
        O = (0, l.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        y = i.useMemo(() => E.ZP.canEditDiscriminator(O) && !O.hasUniqueUsername(), [O]),
        [p, T] = i.useState(O.username),
        [L, R] = i.useState(O.discriminator),
        [b, M] = i.useState(""),
        [A, P] = i.useState(!1),
        C = (0, l.e7)([m.Z], () => m.Z.getErrors()),
        U = O.hasUniqueUsername(),
        x = (0, g.a)(p, U, !1, O.username),
        N = i.useRef(null),
        w = i.useMemo(() => {
            var e, t, n;
            return null != (n = null == C || null == (e = C.username) ? void 0 : e[0])
                ? n
                : null == C || null == (t = C.discriminator)
                  ? void 0
                  : t[0];
        }, [C]);
    i.useEffect(() => {
        if (a === u.Dvm.ENTERED) {
            var e;
            null == (e = N.current) || e.focus();
        }
    }, [a]);
    let k = L !== O.discriminator;
    async function I(e) {
        e.preventDefault(), P(!0);
        let t = await (0, d.Mn)({
            username: p,
            discriminator: y ? L : void 0,
            password: b,
        });
        P(!1), (null == t ? void 0 : t.ok) && _();
    }
    return (0, r.jsxs)(u.Y0X, {
        transitionState: a,
        parentComponent: "ChangeUsernameModal",
        children: [
            (0, r.jsxs)(u.xBx, {
                separator: !1,
                className: v.header,
                children: [
                    (0, r.jsx)(u.X6q, {
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        className: v.title,
                        children: S.intl.string(S.t["m5or5+"]),
                    }),
                    (0, r.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: v.subtitle,
                        children: S.intl.string(S.t.SLJvy8),
                    }),
                    (0, r.jsx)(u.olH, {
                        onClick: _,
                        className: v.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)("form", {
                onSubmit: I,
                children: [
                    (0, r.jsx)(u.hzk, {
                        className: v.content,
                        children: (0, r.jsxs)(u.Kqy, {
                            gap: 16,
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: "horizontal",
                                            gap: 4,
                                            children: [
                                                (0, r.jsx)(
                                                    u.oil,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
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
                                                    })(
                                                        {
                                                            label: S.intl.string(S.t.TWzdWl),
                                                            error: w,
                                                            name: "username",
                                                            value: p,
                                                            maxLength: h.l$U,
                                                            onChange: T,
                                                            inputRef: N,
                                                            fullWidth: !0,
                                                        },
                                                        ((n = O.hasUniqueUsername()),
                                                        (0, o.EQ)(x)
                                                            .with(
                                                                {
                                                                    type: c.K.ERROR,
                                                                    message: o.P.select(),
                                                                },
                                                                (e) => ({ error: e }),
                                                            )
                                                            .with(
                                                                {
                                                                    type: c.K.AVAILABLE,
                                                                    message: o.P.select(),
                                                                },
                                                                (e) => ({ successMessage: e }),
                                                            )
                                                            .otherwise(() =>
                                                                n ? { helperText: S.intl.string(S.t.z7c4bG) } : {},
                                                            )),
                                                    ),
                                                ),
                                                !O.hasUniqueUsername() &&
                                                    (0, r.jsx)(u.oil, {
                                                        name: "discriminator",
                                                        "aria-label": S.intl.string(S.t.ozumaG),
                                                        maxLength: 4,
                                                        value: L,
                                                        onChange: R,
                                                        disabled: !y,
                                                        leading: "#",
                                                    }),
                                            ],
                                        }),
                                        k
                                            ? (0, r.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "header-secondary",
                                                  className: v.discriminatorChangeWarning,
                                                  children: S.intl.string(S.t.mConUV),
                                              })
                                            : null,
                                    ],
                                }),
                                (0, r.jsx)(u.oil, {
                                    label: S.intl.string(S.t.TmdnJy),
                                    error: null == C || null == (t = C.password) ? void 0 : t[0],
                                    type: "password",
                                    value: b,
                                    onChange: M,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(u.mzw, {
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: S.intl.string(S.t.i4jeWV),
                                type: "submit",
                                loading: A,
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: v.cancel,
                                children: (0, r.jsx)(u.zxk, {
                                    variant: "secondary",
                                    text: S.intl.string(S.t["ETE/oK"]),
                                    onClick: _,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
