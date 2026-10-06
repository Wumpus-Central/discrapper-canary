n.d(t, { A: () => P });
var i = n(477900),
    l = n(582128),
    a = n(562708),
    r = n(17928),
    s = n(636537),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    m = n(475743),
    h = n(775121),
    f = n(139286),
    p = n(80556),
    g = n(557722),
    A = n(363195),
    v = n(870570),
    x = n(446868),
    E = n(503698),
    C = n.n(E),
    _ = n(607399),
    T = n(821609),
    I = n(331322),
    b = n(297264),
    S = n(834730),
    j = n(700525),
    y = n(975571),
    N = n(652215),
    R = n(375708),
    M = n(690807);
let O = y.A.getArticleURL(N.MVz.VERIFICATION_FAQ);
class w extends l.PureComponent {
    static defaultProps = { types: [N.Fz7.CAPTCHA], onCaptchaVerify: N.tEg, onLogout: N.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === N.Fz7.CAPTCHA
                    ? (0, i.jsx)(j.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(T.$, { onClick: () => this.handleClick(e), text: x.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(I.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(I.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: C()(M.kL, { [M.Fr]: _.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(I.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: M.Sl }),
                                (0, i.jsxs)(I.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(b.D, {
                                            variant: "heading-xl/normal",
                                            children: R.intl.string(R.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(S.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t["0rqMV5"], { helpCenterURL: O }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(I.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(I.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(S.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: R.intl.string(R.t.qqYun3),
                        }),
                        (0, i.jsxs)(I.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(M.qr, M.mf), children: "\u2022" }),
                                (0, i.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
var L = n(87404),
    k = n(53516);
function P() {
    let { action: e, theme: t } = (0, r.cf)([v.A, A.A], () => ({ action: v.A.getAction(), theme: A.A.theme })),
        E = x.A.getVerificationTypes(e),
        [C, _] = l.useState(0),
        T = (0, m.Ay)(E);
    function I() {
        ((0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("647999"), n.e("689913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: L.H1, Layer: p.Ay },
            ));
    }
    return (
        (0, f.A)(
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
                h.A.disable(),
                () => {
                    h.A.enable();
                }
            ),
            [],
        ),
        l.useEffect(() => {
            T?.[0] === N.Fz7.PHONE &&
                E?.[0] === N.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: R.intl.string(R.t.KLnLIP),
                                body: R.intl.string(R.t.XGbCq3),
                                confirmText: R.intl.string(R.t["3oK4qw"]),
                            });
                    },
                    { modalKey: L.Pr, Layer: p.Ay, onCloseCallback: I },
                );
        }, [E, T]),
        (0, i.jsx)(w, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: function (e) {
                s.Bo.post({
                    url: N.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    _((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === N.Fz7.EMAIL_OR_PHONE || e === N.Fz7.EMAIL || e === N.Fz7.REVERIFY_EMAIL
                    ? I()
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
                                  (0, i.jsx)(e, { layerContext: p.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: k.V, Layer: p.Ay },
                      );
            },
            onLogout: function () {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.all([n.e("304823"), n.e("223976"), n.e("977260")]).then(
                            n.bind(n, 397927),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: R.intl.string(R.t["2jxGer"]),
                                subtitle: R.intl.string(R.t.SUnWBB),
                                confirmText: R.intl.string(R.t["2jxGer"]),
                                cancelText: R.intl.string(R.t["ETE/oC"]),
                                onConfirm: () => d.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: p.Ay },
                );
            },
        })
    );
}
