n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(562708),
    a = n(17928),
    r = n(636537),
    o = n(192308),
    u = n(830215),
    c = n(398590),
    d = n(631670),
    h = n(475743),
    m = n(775121),
    p = n(139286),
    f = n(80556),
    g = n(557722),
    A = n(363195),
    x = n(870570),
    C = n(446868),
    E = n(503698),
    v = n.n(E),
    T = n(607399),
    j = n(821609),
    _ = n(331322),
    N = n(534514),
    S = n(834730),
    y = n(700525),
    R = n(975571),
    I = n(652215),
    b = n(375708),
    M = n(72828);
let w = R.A.getArticleURL(I.MVz.VERIFICATION_FAQ);
class O extends l.PureComponent {
    static defaultProps = { types: [I.Fz7.CAPTCHA], onCaptchaVerify: I.tEg, onLogout: I.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === I.Fz7.CAPTCHA
                    ? (0, i.jsx)(y.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(j.$, { onClick: () => this.handleClick(e), text: C.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(_.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(_.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: v()(M.kL, { [M.Fr]: T.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(_.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: M.Sl }),
                                (0, i.jsxs)(_.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(N.D, {
                                            variant: "heading-xl/normal",
                                            children: b.intl.string(b.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(S.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.format(b.t["0rqMV5"], { helpCenterURL: w }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(_.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(_.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(S.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: b.intl.string(b.t.qqYun3),
                        }),
                        (0, i.jsxs)(_.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: b.intl.format(b.t.WL51ZR, { supportURL: R.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: v()(M.qr, M.mf), children: "\u2022" }),
                                (0, i.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: b.intl.format(b.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
var U = n(87404),
    D = n(53516);
function P() {
    let { action: e, theme: t } = (0, a.cf)([x.A, A.A], () => ({ action: x.A.getAction(), theme: A.A.theme })),
        E = C.A.getVerificationTypes(e),
        [v, T] = l.useState(0),
        j = (0, h.A)(E);
    (0, p.A)(
        {
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: E[0], verification_types: E },
        },
        {},
        [E.toString()],
    );
    let _ = () => {
        (0, d.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: U.H1, Layer: f.Ay },
            );
    };
    return (
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
            j?.[0] === I.Fz7.PHONE &&
                E?.[0] === I.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: b.intl.string(b.t.KLnLIP),
                                body: b.intl.string(b.t.XGbCq3),
                                confirmText: b.intl.string(b.t["3oK4qw"]),
                            });
                    },
                    { modalKey: U.Pr, Layer: f.Ay, onCloseCallback: _ },
                );
        }, [E, j]),
        (0, i.jsx)(O, {
            types: E,
            captchaKey: v,
            onCaptchaVerify: (e) => {
                r.Bo.post({
                    url: I.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    T((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === I.Fz7.EMAIL_OR_PHONE || e === I.Fz7.EMAIL || e === I.Fz7.REVERIFY_EMAIL
                    ? _()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("2677"),
                                  n.e("4782"),
                                  n.e("2238"),
                                  n.e("89545"),
                                  n.e("91531"),
                                  n.e("11493"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: f.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: D.V, Layer: f.Ay },
                      );
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: b.intl.string(b.t["2jxGer"]),
                                subtitle: b.intl.string(b.t.SUnWBB),
                                confirmText: b.intl.string(b.t["2jxGer"]),
                                cancelText: b.intl.string(b.t["ETE/oC"]),
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
