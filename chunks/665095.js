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
    S = n(331322),
    j = n(297264),
    b = n(834730),
    T = n(700525),
    N = n(975571),
    y = n(652215),
    M = n(375708),
    R = n(690807);
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
                    className: C()(R.kL, { [R.Fr]: _.Fr }),
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
                                        (0, i.jsx)(j.D, {
                                            variant: "heading-xl/normal",
                                            children: M.intl.string(M.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            children: M.intl.format(M.t["0rqMV5"], { helpCenterURL: O }),
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
                        (0, i.jsx)(b.E, {
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
                                (0, i.jsx)(b.E, {
                                    variant: "text-sm/semibold",
                                    className: R.qr,
                                    children: M.intl.format(M.t.WL51ZR, { supportURL: N.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(R.qr, R.mf), children: "\u2022" }),
                                (0, i.jsx)(b.E, {
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
var k = n(87404),
    L = n(53516);
function P() {
    let { action: e, theme: t } = (0, s.cf)([x.A, A.A], () => ({ action: x.A.getAction(), theme: A.A.theme })),
        E = v.A.getVerificationTypes(e),
        [C, _] = l.useState(0),
        I = (0, m.Ay)(E);
    function S() {
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
                        let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: M.intl.string(M.t.KLnLIP),
                                body: M.intl.string(M.t.XGbCq3),
                                confirmText: M.intl.string(M.t["3oK4qw"]),
                            });
                    },
                    { modalKey: k.Pr, Layer: p.Ay, onCloseCallback: S },
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
                                  (0, i.jsx)(e, { layerContext: p.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: L.V, Layer: p.Ay },
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
                    { Layer: p.Ay },
                );
            },
        })
    );
}
