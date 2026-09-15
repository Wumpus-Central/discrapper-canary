n.d(t, { A: () => L });
var i = n(477900),
    l = n(582128),
    a = n(562708),
    s = n(17928),
    r = n(636537),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    h = n(475743),
    m = n(775121),
    p = n(139286),
    f = n(80556),
    g = n(557722),
    A = n(363195),
    x = n(870570),
    v = n(446868),
    E = n(503698),
    C = n.n(E),
    T = n(607399),
    _ = n(821609),
    S = n(331322),
    I = n(297264),
    j = n(834730),
    b = n(700525),
    y = n(975571),
    N = n(652215),
    M = n(375708),
    R = n(690807);
let k = y.A.getArticleURL(N.MVz.VERIFICATION_FAQ);
class w extends l.PureComponent {
    static defaultProps = { types: [N.Fz7.CAPTCHA], onCaptchaVerify: N.tEg, onLogout: N.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === N.Fz7.CAPTCHA
                    ? (0, i.jsx)(b.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(_.$, { onClick: () => this.handleClick(e), text: v.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(S.B, {
            gap: 16,
            className: R.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(S.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: C()(R.kL, { [R.Fr]: T.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(S.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: R.Sl }),
                                (0, i.jsxs)(S.B, {
                                    className: R.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(I.D, {
                                            variant: "heading-xl/normal",
                                            children: M.intl.string(M.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            children: M.intl.format(M.t["0rqMV5"], { helpCenterURL: k }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(S.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(S.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(j.E, {
                            variant: "text-sm/normal",
                            className: R.qr,
                            children: M.intl.string(M.t.qqYun3),
                        }),
                        (0, i.jsxs)(S.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(j.E, {
                                    variant: "text-sm/semibold",
                                    className: R.qr,
                                    children: M.intl.format(M.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(R.qr, R.mf), children: "\u2022" }),
                                (0, i.jsx)(j.E, {
                                    variant: "text-sm/semibold",
                                    className: R.qr,
                                    children: M.intl.format(M.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    handleClick = (e) => {
        let { onClick: t } = this.props;
        t?.(e);
    };
}
var O = n(87404),
    P = n(53516);
function L() {
    let { action: e, theme: t } = (0, s.cf)([x.A, A.A], () => ({ action: x.A.getAction(), theme: A.A.theme })),
        E = v.A.getVerificationTypes(e),
        [C, T] = l.useState(0),
        _ = (0, h.Ay)(E);
    function S() {
        ((0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("647999"), n.e("689913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: O.H1, Layer: f.Ay },
            ));
    }
    return (
        (0, p.A)(
            {
                type: a.ImpressionTypes.MODAL,
                name: a.ImpressionNames.USER_ACTION_REQUIRED,
                properties: { verification_type: E[0], verification_types: E },
            },
            {},
            [E.toString()],
        ),
        l.useEffect(
            () => (
                m.A.disable(),
                () => {
                    m.A.enable();
                }
            ),
            [],
        ),
        l.useEffect(() => {
            _?.[0] === N.Fz7.PHONE &&
                E?.[0] === N.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: M.intl.string(M.t.KLnLIP),
                                body: M.intl.string(M.t.XGbCq3),
                                confirmText: M.intl.string(M.t["3oK4qw"]),
                            });
                    },
                    { modalKey: O.Pr, Layer: f.Ay, onCloseCallback: S },
                );
        }, [E, _]),
        (0, i.jsx)(w, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: function (e) {
                r.Bo.post({
                    url: N.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    T((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === N.Fz7.EMAIL_OR_PHONE || e === N.Fz7.EMAIL || e === N.Fz7.REVERIFY_EMAIL
                    ? S()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("590275"),
                                  n.e("766806"),
                                  n.e("14775"),
                                  n.e("989545"),
                                  n.e("991531"),
                                  n.e("311493"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: f.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: P.V, Layer: f.Ay },
                      );
            },
            onLogout: function () {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: M.intl.string(M.t["2jxGer"]),
                                subtitle: M.intl.string(M.t.SUnWBB),
                                confirmText: M.intl.string(M.t["2jxGer"]),
                                cancelText: M.intl.string(M.t["ETE/oC"]),
                                onConfirm: () => d.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: f.Ay },
                );
            },
        })
    );
}
