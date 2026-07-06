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
    h = n(775121),
    f = n(139286),
    E = n(80556),
    p = n(557722),
    m = n(363195),
    g = n(870570),
    A = n(446868),
    I = n(503698),
    T = n.n(I),
    S = n(607399),
    N = n(821609),
    C = n(331322),
    y = n(534514),
    O = n(834730),
    R = n(700525),
    v = n(975571),
    b = n(652215),
    L = n(375708),
    D = n(72828);
let w = v.A.getArticleURL(b.MVz.VERIFICATION_FAQ);
class P extends r.PureComponent {
    static defaultProps = { types: [b.Fz7.CAPTCHA], onCaptchaVerify: b.tEg, onLogout: b.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === b.Fz7.CAPTCHA
                    ? (0, i.jsx)(R.A, { onVerify: r, theme: n }, t)
                    : (0, i.jsx)(N.$, { onClick: () => this.handleClick(e), text: A.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(C.B, {
            gap: 16,
            className: D.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(C.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: T()(D.kL, { [D.Fr]: S.Fr }),
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
                                (0, i.jsx)("div", { className: D.Sl }),
                                (0, i.jsxs)(C.B, {
                                    className: D.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(y.D, {
                                            variant: "heading-xl/normal",
                                            children: L.intl.string(L.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(O.E, {
                                            variant: "text-md/normal",
                                            children: L.intl.format(L.t["0rqMV5"], { helpCenterURL: w }),
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
                            className: D.qr,
                            children: L.intl.string(L.t.qqYun3),
                        }),
                        (0, i.jsxs)(C.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    className: D.qr,
                                    children: L.intl.format(L.t.WL51ZR, { supportURL: v.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: T()(D.qr, D.mf), children: "\u2022" }),
                                (0, i.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    className: D.qr,
                                    children: L.intl.format(L.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
var M = n(87404),
    x = n(53516);
function U() {
    let { action: e, theme: t } = (0, a.cf)([g.A, m.A], () => ({ action: g.A.getAction(), theme: m.A.theme })),
        I = A.A.getVerificationTypes(e),
        [T, S] = r.useState(0),
        N = (0, _.A)(I);
    function C() {
        (0, d.Cw)(),
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: M.H1, Layer: E.Ay },
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
            N?.[0] === b.Fz7.PHONE &&
                I?.[0] === b.Fz7.EMAIL &&
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: L.intl.string(L.t.KLnLIP),
                                body: L.intl.string(L.t.XGbCq3),
                                confirmText: L.intl.string(L.t["3oK4qw"]),
                            });
                    },
                    { modalKey: M.Pr, Layer: E.Ay, onCloseCallback: C },
                );
        }, [I, N]),
        (0, i.jsx)(P, {
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
                                  n.e("56643"),
                                  n.e("4782"),
                                  n.e("86380"),
                                  n.e("89545"),
                                  n.e("91531"),
                                  n.e("11493"),
                                  n.e("84704"),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: E.OH, reason: p.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: x.V, Layer: E.Ay },
                      );
            },
            onLogout: function () {
                (0, l.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: L.intl.string(L.t["2jxGer"]),
                                subtitle: L.intl.string(L.t.SUnWBB),
                                confirmText: L.intl.string(L.t["2jxGer"]),
                                cancelText: L.intl.string(L.t["ETE/oC"]),
                                onConfirm: () => u.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: E.Ay },
                );
            },
        })
    );
}
