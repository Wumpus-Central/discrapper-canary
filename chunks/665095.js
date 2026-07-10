"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    r = n(64700),
    a = n(562708),
    s = n(17928),
    l = n(636537),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    _ = n(475743),
    E = n(775121),
    A = n(139286),
    h = n(80556),
    I = n(557722),
    f = n(363195),
    p = n(870570),
    T = n(446868),
    m = n(503698),
    g = n.n(m),
    S = n(607399),
    N = n(821609),
    C = n(331322),
    R = n(534514),
    O = n(834730),
    L = n(700525),
    D = n(975571),
    y = n(652215),
    v = n(375708),
    b = n(72828);
let M = D.A.getArticleURL(y.MVz.VERIFICATION_FAQ);
class P extends r.PureComponent {
    static defaultProps = { types: [y.Fz7.CAPTCHA], onCaptchaVerify: y.tEg, onLogout: y.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === y.Fz7.CAPTCHA
                    ? (0, i.jsx)(L.A, { onVerify: r, theme: n }, t)
                    : (0, i.jsx)(N.$, { onClick: () => this.handleClick(e), text: T.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(C.B, {
            gap: 16,
            className: b.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(C.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: g()(b.kL, { [b.Fr]: S.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(C.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: b.Sl }),
                                (0, i.jsxs)(C.B, {
                                    className: b.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(R.D, {
                                            variant: "heading-xl/normal",
                                            children: v.intl.string(v.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(O.E, {
                                            variant: "text-md/normal",
                                            children: v.intl.format(v.t["0rqMV5"], { helpCenterURL: M }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(C.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(C.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(O.E, {
                            variant: "text-sm/normal",
                            className: b.qr,
                            children: v.intl.string(v.t.qqYun3),
                        }),
                        (0, i.jsxs)(C.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    className: b.qr,
                                    children: v.intl.format(v.t.WL51ZR, { supportURL: D.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: g()(b.qr, b.mf), children: "\u2022" }),
                                (0, i.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    className: b.qr,
                                    children: v.intl.format(v.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
    w = n(53516);
function G() {
    let { action: e, theme: t } = (0, s.cf)([p.A, f.A], () => ({ action: p.A.getAction(), theme: f.A.theme })),
        m = T.A.getVerificationTypes(e),
        [g, S] = r.useState(0),
        N = (0, _.A)(m);
    function C() {
        (0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: U.H1, Layer: h.Ay },
            );
    }
    return (
        (0, A.A)(
            {
                type: a.ImpressionTypes.MODAL,
                name: a.ImpressionNames.USER_ACTION_REQUIRED,
                properties: { verification_type: m[0], verification_types: m },
            },
            {},
            [m.toString()],
        ),
        r.useEffect(
            () => (
                E.A.disable(),
                () => {
                    E.A.enable();
                }
            ),
            [],
        ),
        r.useEffect(() => {
            N?.[0] === y.Fz7.PHONE &&
                m?.[0] === y.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: v.intl.string(v.t.KLnLIP),
                                body: v.intl.string(v.t.XGbCq3),
                                confirmText: v.intl.string(v.t["3oK4qw"]),
                            });
                    },
                    { modalKey: U.Pr, Layer: h.Ay, onCloseCallback: C },
                );
        }, [m, N]),
        (0, i.jsx)(P, {
            types: m,
            captchaKey: g,
            onCaptchaVerify: function (e) {
                l.Bo.post({
                    url: y.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    S((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === y.Fz7.EMAIL_OR_PHONE || e === y.Fz7.EMAIL || e === y.Fz7.REVERIFY_EMAIL
                    ? C()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("56643"),
                                  n.e("65264"),
                                  n.e("86380"),
                                  n.e("89545"),
                                  n.e("91531"),
                                  n.e("11493"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: h.OH, reason: I.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: w.V, Layer: h.Ay },
                      );
            },
            onLogout: function () {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: v.intl.string(v.t["2jxGer"]),
                                subtitle: v.intl.string(v.t.SUnWBB),
                                confirmText: v.intl.string(v.t["2jxGer"]),
                                cancelText: v.intl.string(v.t["ETE/oC"]),
                                onConfirm: () => d.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: h.Ay },
                );
            },
        })
    );
}
