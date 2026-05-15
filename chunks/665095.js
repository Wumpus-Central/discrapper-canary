"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    s = n(562708),
    a = n(17928),
    o = n(636537),
    l = n(192308),
    u = n(830215),
    c = n(398590),
    d = n(631670),
    _ = n(475743),
    f = n(775121),
    h = n(139286),
    p = n(80556),
    E = n(557722),
    m = n(363195),
    g = n(870570),
    A = n(446868),
    I = n(503698),
    T = n.n(I),
    S = n(607399),
    N = n(821609),
    y = n(331322),
    C = n(534514),
    v = n(834730),
    O = n(700525),
    R = n(975571),
    b = n(652215),
    D = n(375708),
    L = n(72828);
let w = R.A.getArticleURL(b.MVz.VERIFICATION_FAQ);
class M extends r.PureComponent {
    static defaultProps = { types: [b.Fz7.CAPTCHA], onCaptchaVerify: b.tEg, onLogout: b.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === b.Fz7.CAPTCHA
                    ? (0, i.jsx)(O.A, { onVerify: r, theme: n }, t)
                    : (0, i.jsx)(N.$, { onClick: () => this.handleClick(e), text: A.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(y.B, {
            gap: 16,
            className: L.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(y.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: T()(L.kL, { [L.Fr]: S.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(y.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: L.Sl }),
                                (0, i.jsxs)(y.B, {
                                    className: L.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(C.D, {
                                            variant: "heading-xl/normal",
                                            children: D.intl.string(D.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-md/normal",
                                            children: D.intl.format(D.t["0rqMV5"], { helpCenterURL: w }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(y.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(y.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(v.E, {
                            variant: "text-sm/normal",
                            className: L.qr,
                            children: D.intl.string(D.t.qqYun3),
                        }),
                        (0, i.jsxs)(y.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    className: L.qr,
                                    children: D.intl.format(D.t.WL51ZR, { supportURL: R.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: T()(L.qr, L.mf), children: "\u2022" }),
                                (0, i.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    className: L.qr,
                                    children: D.intl.format(D.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
    x = n(53516);
function U() {
    let { action: e, theme: t } = (0, a.cf)([g.A, m.A], () => ({ action: g.A.getAction(), theme: m.A.theme })),
        I = A.A.getVerificationTypes(e),
        [T, S] = r.useState(0),
        N = (0, _.A)(I);
    (0, h.A)(
        {
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: I[0], verification_types: I },
        },
        {},
        [I.toString()],
    );
    let y = () => {
        (0, d.Cw)(),
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: P.H1, Layer: p.Ay },
            );
    };
    return (
        r.useEffect(
            () => (
                f.A.disable(),
                () => {
                    f.A.enable();
                }
            ),
            [],
        ),
        r.useEffect(() => {
            N?.[0] === b.Fz7.PHONE &&
                I?.[0] === b.Fz7.EMAIL &&
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: D.intl.string(D.t.KLnLIP),
                                body: D.intl.string(D.t.XGbCq3),
                                confirmText: D.intl.string(D.t["3oK4qw"]),
                            });
                    },
                    { modalKey: P.Pr, Layer: p.Ay, onCloseCallback: y },
                );
        }, [I, N]),
        (0, i.jsx)(M, {
            types: I,
            captchaKey: T,
            onCaptchaVerify: (e) => {
                o.Bo.post({
                    url: b.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    S((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === b.Fz7.EMAIL_OR_PHONE || e === b.Fz7.EMAIL || e === b.Fz7.REVERIFY_EMAIL
                    ? y()
                    : (0, l.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("54266"),
                                  n.e("79924"),
                                  n.e("89545"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: p.OH, reason: E.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: x.V, Layer: p.Ay },
                      );
            },
            onLogout: () => {
                (0, l.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: D.intl.string(D.t["2jxGer"]),
                                subtitle: D.intl.string(D.t.SUnWBB),
                                confirmText: D.intl.string(D.t["2jxGer"]),
                                cancelText: D.intl.string(D.t["ETE/oC"]),
                                onConfirm: () => u.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: p.Ay },
                );
            },
        })
    );
}
