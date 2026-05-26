n.d(t, { A: () => P });
var l = n(627968),
    s = n(64700),
    i = n(562708),
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
    x = n(363195),
    A = n(870570),
    C = n(446868),
    v = n(503698),
    E = n.n(v),
    T = n(607399),
    j = n(821609),
    _ = n(331322),
    N = n(534514),
    S = n(834730),
    R = n(700525),
    y = n(975571),
    I = n(652215),
    b = n(375708),
    M = n(72828);
let w = y.A.getArticleURL(I.MVz.VERIFICATION_FAQ);
class U extends s.PureComponent {
    static defaultProps = { types: [I.Fz7.CAPTCHA], onCaptchaVerify: I.tEg, onLogout: I.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: s } = this.props;
        return (0, l.jsx)(l.Fragment, {
            children: e.map((e) =>
                e === I.Fz7.CAPTCHA
                    ? (0, l.jsx)(R.A, { onVerify: s, theme: n }, t)
                    : (0, l.jsx)(j.$, { onClick: () => this.handleClick(e), text: C.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, l.jsxs)(_.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, l.jsxs)(_.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: E()(M.kL, { [M.Fr]: T.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsxs)(_.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, l.jsx)("div", { className: M.Sl }),
                                (0, l.jsxs)(_.B, {
                                    className: M.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, l.jsx)(N.D, {
                                            variant: "heading-xl/normal",
                                            children: b.intl.string(b.t.Iz0kDg),
                                        }),
                                        (0, l.jsx)(S.E, {
                                            variant: "text-md/normal",
                                            children: b.intl.format(b.t["0rqMV5"], { helpCenterURL: w }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, l.jsxs)(_.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsx)(S.E, {
                            variant: "text-sm/normal",
                            className: M.qr,
                            children: b.intl.string(b.t.qqYun3),
                        }),
                        (0, l.jsxs)(_.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, l.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: M.qr,
                                    children: b.intl.format(b.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                                }),
                                (0, l.jsx)("div", { className: E()(M.qr, M.mf), children: "\u2022" }),
                                (0, l.jsx)(S.E, {
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
var O = n(87404),
    D = n(53516);
function P() {
    let { action: e, theme: t } = (0, a.cf)([A.A, x.A], () => ({ action: A.A.getAction(), theme: x.A.theme })),
        v = C.A.getVerificationTypes(e),
        [E, T] = s.useState(0),
        j = (0, h.A)(v);
    (0, p.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: v[0], verification_types: v },
        },
        {},
        [v.toString()],
    );
    let _ = () => {
        (0, d.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, l.jsx)(e, { ...t });
                },
                { modalKey: O.H1, Layer: f.Ay },
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
            j?.[0] === I.Fz7.PHONE &&
                v?.[0] === I.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                title: b.intl.string(b.t.KLnLIP),
                                body: b.intl.string(b.t.XGbCq3),
                                confirmText: b.intl.string(b.t["3oK4qw"]),
                            });
                    },
                    { modalKey: O.Pr, Layer: f.Ay, onCloseCallback: _ },
                );
        }, [v, j]),
        (0, l.jsx)(U, {
            types: v,
            captchaKey: E,
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
                                  n.e("29761"),
                                  n.e("72283"),
                                  n.e("89545"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, l.jsx)(e, { layerContext: f.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: D.V, Layer: f.Ay },
                      );
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, l.jsx)(e, {
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
