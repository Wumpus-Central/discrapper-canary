n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(110259),
    a = n(17928),
    r = n(636537),
    o = n(192308),
    c = n(830215),
    u = n(398590),
    d = n(631670),
    p = n(475743),
    h = n(775121),
    m = n(139286),
    _ = n(80556),
    f = n(557722),
    g = n(363195),
    A = n(870570),
    x = n(446868),
    E = n(503698),
    C = n.n(E),
    T = n(607399),
    S = n(821609),
    b = n(331322),
    v = n(534514),
    j = n(834730),
    I = n(700525),
    y = n(975571),
    R = n(652215),
    N = n(985018),
    M = n(72828);
let O = y.A.getArticleURL(R.MVz.VERIFICATION_FAQ);
class U extends s.PureComponent {
    static defaultProps = { types: [R.Fz7.CAPTCHA], onCaptchaVerify: R.tEg, onLogout: R.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: s } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === R.Fz7.CAPTCHA
                    ? (0, i.jsx)(I.A, { onVerify: s, theme: n }, t)
                    : (0, i.jsx)(S.$, { onClick: () => this.handleClick(e), text: x.A.getButtonTitle(e) }, e),
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
                    className: C()(M.kL, { [M.Fr]: T.Fr }),
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
                                        (0, i.jsx)(v.D, {
                                            variant: "heading-xl/normal",
                                            children: N.intl.string(N.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            children: N.intl.format(N.t["0rqMV5"], { helpCenterURL: O }),
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
                            children: N.intl.string(N.t.qqYun3),
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
                                    children: N.intl.format(N.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(M.qr, M.mf), children: "•" }),
                                (0, i.jsx)(j.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: N.intl.format(N.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
    P = n(53516);
function w() {
    let { action: e, theme: t } = (0, a.cf)([A.A, g.A], () => ({ action: A.A.getAction(), theme: g.A.theme })),
        E = x.A.getVerificationTypes(e),
        [C, T] = s.useState(0),
        S = (0, p.A)(E);
    (0, m.A)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: E[0], verification_types: E },
        },
        {},
        [E.toString()],
    );
    let b = () => {
        (0, d.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("25467").then(n.bind(n, 415478));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: k.H1, Layer: _.Ay },
            );
    };
    return (
        s.useEffect(
            () => (
                h.A.disable(),
                () => {
                    h.A.enable();
                }
            ),
            [],
        ),
        s.useEffect(() => {
            S?.[0] === R.Fz7.PHONE &&
                E?.[0] === R.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: N.intl.string(N.t.KLnLIP),
                                body: N.intl.string(N.t.XGbCq3),
                                confirmText: N.intl.string(N.t["3oK4qw"]),
                            });
                    },
                    { modalKey: k.Pr, Layer: _.Ay, onCloseCallback: b },
                );
        }, [E, S]),
        (0, i.jsx)(U, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: (e) => {
                r.Bo.post({
                    url: R.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(u.jH, () => {
                    T((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === R.Fz7.EMAIL_OR_PHONE || e === R.Fz7.EMAIL || e === R.Fz7.REVERIFY_EMAIL
                    ? b()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([n.e("84704"), n.e("16398")]).then(
                                  n.bind(n, 615715),
                              );
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: _.OH, reason: f.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: P.V, Layer: _.Ay },
                      );
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: N.intl.string(N.t["2jxGer"]),
                                subtitle: N.intl.string(N.t.SUnWBB),
                                confirmText: N.intl.string(N.t["2jxGer"]),
                                cancelText: N.intl.string(N.t["ETE/oC"]),
                                onConfirm: () => c.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: _.Ay },
                );
            },
        })
    );
}
