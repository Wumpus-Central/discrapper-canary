"use strict";
n.d(t, { A: () => k });
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
    h = n(775121),
    f = n(139286),
    p = n(80556),
    E = n(557722),
    m = n(363195),
    g = n(870570),
    A = n(446868),
    I = n(503698),
    T = n.n(I),
    S = n(607399),
    y = n(821609),
    C = n(331322),
    N = n(534514),
    v = n(834730),
    R = n(700525),
    O = n(975571),
    b = n(652215),
    D = n(375708),
    L = n(854780);
let w = O.A.getArticleURL(b.MVz.VERIFICATION_FAQ);
class M extends r.PureComponent {
    static defaultProps = { types: [b.Fz7.CAPTCHA], onCaptchaVerify: b.tEg, onLogout: b.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === b.Fz7.CAPTCHA
                    ? (0, i.jsx)(R.A, { onVerify: r, theme: n }, t)
                    : (0, i.jsx)(y.$, { onClick: () => this.handleClick(e), text: A.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(C.B, {
            gap: 16,
            className: L.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(C.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: T()(L.kL, { [L.Fr]: S.Fr }),
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
                                (0, i.jsx)("div", { className: L.Sl }),
                                (0, i.jsxs)(C.B, {
                                    className: L.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(N.D, {
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
                        (0, i.jsx)(v.E, {
                            variant: "text-sm/normal",
                            className: L.qr,
                            children: D.intl.string(D.t.qqYun3),
                        }),
                        (0, i.jsxs)(C.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    className: L.qr,
                                    children: D.intl.format(D.t.WL51ZR, { supportURL: O.A.getSubmitRequestURL() }),
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
function k() {
    let { action: e, theme: t } = (0, a.cf)([g.A, m.A], () => ({ action: g.A.getAction(), theme: m.A.theme })),
        I = A.A.getVerificationTypes(e),
        [T, S] = r.useState(0),
        y = (0, _.A)(I);
    function C() {
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
    }
    return (
        (0, f.A)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.USER_ACTION_REQUIRED,
                properties: { verification_type: I[0], verification_types: I },
            },
            {},
            [I.toString()],
        ),
        r.useEffect(
            () => (
                h.A.disable(),
                () => {
                    h.A.enable();
                }
            ),
            [],
        ),
        r.useEffect(() => {
            y?.[0] === b.Fz7.PHONE &&
                I?.[0] === b.Fz7.EMAIL &&
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("80198"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: D.intl.string(D.t.KLnLIP),
                                body: D.intl.string(D.t.XGbCq3),
                                confirmText: D.intl.string(D.t["3oK4qw"]),
                            });
                    },
                    { modalKey: P.Pr, Layer: p.Ay, onCloseCallback: C },
                );
        }, [I, y]),
        (0, i.jsx)(M, {
            types: I,
            captchaKey: T,
            onCaptchaVerify: function (e) {
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
                    ? C()
                    : (0, l.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("11183"),
                                  n.e("72506"),
                                  n.e("89545"),
                                  n.e("91531"),
                                  n.e("11493"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: p.OH, reason: E.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: x.V, Layer: p.Ay },
                      );
            },
            onLogout: function () {
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
