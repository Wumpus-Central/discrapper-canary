n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(562708),
    a = n(17928),
    r = n(636537),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    h = n(475743),
    m = n(775121),
    p = n(139286),
    g = n(80556),
    f = n(557722),
    A = n(363195),
    x = n(870570),
    v = n(446868),
    E = n(503698),
    C = n.n(E),
    I = n(607399),
    _ = n(821609),
    T = n(331322),
    j = n(534514),
    S = n(834730),
    N = n(700525),
    y = n(975571),
    b = n(652215),
    M = n(375708),
    R = n(72828);
let k = y.A.getArticleURL(b.MVz.VERIFICATION_FAQ);
class w extends l.PureComponent {
    static defaultProps = { types: [b.Fz7.CAPTCHA], onCaptchaVerify: b.tEg, onLogout: b.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === b.Fz7.CAPTCHA
                    ? (0, i.jsx)(N.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(_.$, { onClick: () => this.handleClick(e), text: v.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(T.B, {
            gap: 16,
            className: R.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(T.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: C()(R.kL, { [R.Fr]: I.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(T.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: R.Sl }),
                                (0, i.jsxs)(T.B, {
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
                                        (0, i.jsx)(S.E, {
                                            variant: "text-md/normal",
                                            children: M.intl.format(M.t["0rqMV5"], { helpCenterURL: k }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(T.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(T.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(S.E, {
                            variant: "text-sm/normal",
                            className: R.qr,
                            children: M.intl.string(M.t.qqYun3),
                        }),
                        (0, i.jsxs)(T.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(S.E, {
                                    variant: "text-sm/semibold",
                                    className: R.qr,
                                    children: M.intl.format(M.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: C()(R.qr, R.mf), children: "\u2022" }),
                                (0, i.jsx)(S.E, {
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
var O = n(87404),
    L = n(53516);
function P() {
    let { action: e, theme: t } = (0, a.cf)([x.A, A.A], () => ({ action: x.A.getAction(), theme: A.A.theme })),
        E = v.A.getVerificationTypes(e),
        [C, I] = l.useState(0),
        _ = (0, h.A)(E);
    function T() {
        (0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("47999"), n.e("89913"), n.e("25467")]).then(
                        n.bind(n, 415478),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: O.H1, Layer: g.Ay },
            );
    }
    return (
        (0, p.A)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.USER_ACTION_REQUIRED,
                properties: { verification_type: E[0], verification_types: E },
            },
            {},
            [E.toString()],
        ),
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
            _?.[0] === b.Fz7.PHONE &&
                E?.[0] === b.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("31910"), n.e("10919")]).then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: M.intl.string(M.t.KLnLIP),
                                body: M.intl.string(M.t.XGbCq3),
                                confirmText: M.intl.string(M.t["3oK4qw"]),
                            });
                    },
                    { modalKey: O.Pr, Layer: g.Ay, onCloseCallback: T },
                );
        }, [E, _]),
        (0, i.jsx)(w, {
            types: E,
            captchaKey: C,
            onCaptchaVerify: function (e) {
                r.Bo.post({
                    url: b.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    I((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === b.Fz7.EMAIL_OR_PHONE || e === b.Fz7.EMAIL || e === b.Fz7.REVERIFY_EMAIL
                    ? T()
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
                                  (0, i.jsx)(e, { layerContext: g.OH, reason: f.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: L.V, Layer: g.Ay },
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
                    { Layer: g.Ay },
                );
            },
        })
    );
}
