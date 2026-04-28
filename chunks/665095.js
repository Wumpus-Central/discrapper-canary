n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(110259),
    a = n(17928),
    r = n(636537),
    o = n(192308),
    u = n(830215),
    c = n(398590),
    d = n(631670),
    p = n(475743),
    m = n(775121),
    h = n(139286),
    f = n(80556),
    g = n(557722),
    x = n(363195),
    A = n(870570),
    C = n(446868),
    E = n(503698),
    T = n.n(E),
    _ = n(607399),
    S = n(821609),
    j = n(331322),
    v = n(534514),
    N = n(834730),
    y = n(700525),
    R = n(975571),
    I = n(652215),
    b = n(985018),
    M = n(72828);
let O = R.A.getArticleURL(I.MVz.VERIFICATION_FAQ);
class U extends s.PureComponent {
    static defaultProps = { types: [I.Fz7.CAPTCHA], onCaptchaVerify: I.tEg, onLogout: I.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: s } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === I.Fz7.CAPTCHA
                    ? (0, i.jsx)(y.A, { onVerify: s, theme: n }, t)
                    : (0, i.jsx)(S.$, { onClick: () => this.handleClick(e), text: C.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(j.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(j.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: T()(M.kL, { [M.Fr]: _.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(j.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: M.Sl }),
                                (0, i.jsxs)(j.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(v.D, {
                                            variant: "heading-xl/normal",
                                            children: b.intl.string(b.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(N.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.format(b.t["0rqMV5"], { helpCenterURL: O }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(j.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(j.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(N.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: b.intl.string(b.t.qqYun3),
                        }),
                        (0, i.jsxs)(j.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(N.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: b.intl.format(b.t.WL51ZR, { supportURL: R.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: T()(M.qr, M.mf), children: "•" }),
                                (0, i.jsx)(N.E, {
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
var P = n(87404),
    k = n(53516);
function D() {
    let { action: e, theme: t } = (0, a.cf)([A.A, x.A], () => ({ action: A.A.getAction(), theme: x.A.theme })),
        E = C.A.getVerificationTypes(e),
        [T, _] = s.useState(0),
        S = (0, p.A)(E);
    (0, h.A)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: E[0], verification_types: E },
        },
        {},
        [E.toString()],
    );
    let j = () => {
        (0, d.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("53983"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: P.H1, Layer: f.Ay },
            );
    };
    return (
        s.useEffect(
            () => (
                m.A.disable(),
                () => {
                    m.A.enable();
                }
            ),
            [],
        ),
        s.useEffect(() => {
            S?.[0] === I.Fz7.PHONE &&
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
                    { modalKey: P.Pr, Layer: f.Ay, onCloseCallback: j },
                );
        }, [E, S]),
        (0, i.jsx)(U, {
            types: E,
            captchaKey: T,
            onCaptchaVerify: (e) => {
                r.Bo.post({
                    url: I.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    _((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === I.Fz7.EMAIL_OR_PHONE || e === I.Fz7.EMAIL || e === I.Fz7.REVERIFY_EMAIL
                    ? j()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("93816"),
                                  n.e("94232"),
                                  n.e("89545"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: f.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: k.V, Layer: f.Ay },
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
