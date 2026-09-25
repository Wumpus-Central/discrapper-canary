n.d(t, { A: () => P });
var i = n(477900),
    l = n(582128),
    a = n(562708),
    s = n(17928),
    r = n(636537),
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
    x = n(870570),
    v = n(446868),
    E = n(503698),
    C = n.n(E),
    _ = n(607399),
    I = n(821609),
    b = n(331322),
    S = n(297264),
    j = n(834730),
    T = n(700525),
    N = n(975571),
    y = n(652215),
    R = n(375708),
    M = n(690807);
let O = N.A.getArticleURL(y.MVz.VERIFICATION_FAQ);
class w extends l.PureComponent {
    static defaultProps = { types: [y.Fz7.CAPTCHA], onCaptchaVerify: y.tEg, onLogout: y.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === y.Fz7.CAPTCHA
                    ? (0, i.jsx)(T.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(I.$, { onClick: () => this.handleClick(e), text: v.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(b.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(b.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: C()(M.kL, { [M.Fr]: _.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(b.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: M.Sl }),
                                (0, i.jsxs)(b.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-xl/normal",
                                            children: R.intl.string(R.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t["0rqMV5"], { helpCenterURL: O }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(b.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(b.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(j.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: R.intl.string(R.t.qqYun3),
                        }),
                        (0, i.jsxs)(b.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(j.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.WL51ZR, { supportURL: N.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(M.qr, M.mf), children: "\u2022" }),
                                (0, i.jsx)(j.E, {
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
var k = n(87404),
    L = n(53516);
function P() {
    let { action: e, theme: t } = (0, s.cf)([x.A, A.A], () => ({ action: x.A.getAction(), theme: A.A.theme })),
        E = v.A.getVerificationTypes(e),
        [C, _] = l.useState(0),
        I = (0, m.Ay)(E);
    function b() {
        ((0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("647999"), n.e("689913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: k.H1, Layer: p.Ay },
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
            I?.[0] === y.Fz7.PHONE &&
                E?.[0] === y.Fz7.EMAIL &&
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
                    { modalKey: k.Pr, Layer: p.Ay, onCloseCallback: b },
                );
        }, [E, I]),
        (0, i.jsx)(w, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: function (e) {
                r.Bo.post({
                    url: y.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    _((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === y.Fz7.EMAIL_OR_PHONE || e === y.Fz7.EMAIL || e === y.Fz7.REVERIFY_EMAIL
                    ? b()
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
                          { modalKey: L.V, Layer: p.Ay },
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
