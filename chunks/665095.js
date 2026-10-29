n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    a = n(562708),
    r = n(17928),
    s = n(636537),
    o = n(192308),
    u = n(830215),
    d = n(398590),
    c = n(631670),
    m = n(475743),
    h = n(775121),
    p = n(139286),
    f = n(80556),
    g = n(557722),
    A = n(363195),
    v = n(870570),
    x = n(446868),
    E = n(503698),
    C = n.n(E),
    _ = n(607399),
    T = n(821609),
    y = n(331322),
    j = n(297264),
    N = n(834730),
    I = n(700525),
    S = n(975571),
    b = n(652215),
    R = n(105292),
    M = n(690807);
let O = S.A.getArticleURL(b.MVz.VERIFICATION_FAQ);
class w extends i.PureComponent {
    static defaultProps = { types: [b.Fz7.CAPTCHA], onCaptchaVerify: b.tEg, onLogout: b.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: i } = this.props;
        return (0, l.jsx)(l.Fragment, {
            children: e.map((e) =>
                e === b.Fz7.CAPTCHA
                    ? (0, l.jsx)(I.A, { onVerify: i, theme: n }, t)
                    : (0, l.jsx)(T.$, { onClick: () => this.handleClick(e), text: x.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, l.jsxs)(y.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, l.jsxs)(y.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: C()(M.kL, { [M.Fr]: _.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsxs)(y.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, l.jsx)("div", { className: M.Sl }),
                                (0, l.jsxs)(y.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, l.jsx)(j.D, {
                                            variant: "heading-xl/normal",
                                            children: R.intl.string(R.t.Iz0kDg),
                                        }),
                                        (0, l.jsx)(N.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t["0rqMV5"], { helpCenterURL: O }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, l.jsxs)(y.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsx)(N.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: R.intl.string(R.t.qqYun3),
                        }),
                        (0, l.jsxs)(y.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, l.jsx)(N.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.WL51ZR, { supportURL: S.A.getSubmitRequestURL() }),
                                }),
                                (0, l.jsx)("div", { className: C()(M.qr, M.mf), children: "\u2022" }),
                                (0, l.jsx)(N.E, {
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
var P = n(87404),
    L = n(53516);
function k() {
    let { action: e, theme: t } = (0, r.cf)([v.A, A.A], () => ({ action: v.A.getAction(), theme: A.A.theme })),
        E = x.A.getVerificationTypes(e),
        [C, _] = i.useState(0),
        T = (0, m.Ay)(E);
    function y() {
        ((0, c.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("647999"), n.e("689913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, l.jsx)(e, { ...t });
                },
                { modalKey: P.H1, Layer: f.Ay },
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
        i.useEffect(
            () => (
                h.A.disable(),
                () => {
                    h.A.enable();
                }
            ),
            [],
        ),
        i.useEffect(() => {
            T?.[0] === b.Fz7.PHONE &&
                E?.[0] === b.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                title: R.intl.string(R.t.KLnLIP),
                                body: R.intl.string(R.t.XGbCq3),
                                confirmText: R.intl.string(R.t["3oK4qw"]),
                            });
                    },
                    { modalKey: P.Pr, Layer: f.Ay, onCloseCallback: y },
                );
        }, [E, T]),
        (0, l.jsx)(w, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: function (e) {
                s.Bo.post({
                    url: b.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(d.jH, () => {
                    _((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === b.Fz7.EMAIL_OR_PHONE || e === b.Fz7.EMAIL || e === b.Fz7.REVERIFY_EMAIL
                    ? y()
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
                                  (0, l.jsx)(e, { layerContext: f.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: L.V, Layer: f.Ay },
                      );
            },
            onLogout: function () {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.all([
                            n.e("304823"),
                            n.e("223976"),
                            n.e("288688"),
                            n.e("977260"),
                        ]).then(n.bind(n, 397927));
                        return (t) =>
                            (0, l.jsx)(e, {
                                title: R.intl.string(R.t["2jxGer"]),
                                subtitle: R.intl.string(R.t.SUnWBB),
                                confirmText: R.intl.string(R.t["2jxGer"]),
                                cancelText: R.intl.string(R.t["ETE/oC"]),
                                onConfirm: () => u.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: f.Ay },
                );
            },
        })
    );
}
