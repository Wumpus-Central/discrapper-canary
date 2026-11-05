n.d(t, { A: () => D });
var i = n(477900),
    l = n(582128),
    r = n(613412),
    a = n(855986),
    s = n(620632),
    o = n(192308),
    u = n(830215),
    c = n(398590),
    d = n(631670),
    m = n(475743),
    f = n(775121),
    p = n(139286),
    h = n(80556),
    g = n(557722),
    A = n(413599),
    C = n(870570),
    E = n(446868),
    x = n(503698),
    v = n.n(x),
    _ = n(607399),
    y = n(821609),
    b = n(331322),
    T = n(534514),
    S = n(834730),
    I = n(241003),
    j = n(975571),
    N = n(652215),
    R = n(792996),
    M = n(690807);
let O = j.A.getArticleURL(N.MVz.VERIFICATION_FAQ);
class P extends l.PureComponent {
    static defaultProps = { types: [N.Fz7.CAPTCHA], onCaptchaVerify: N.tEg, onLogout: N.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: l } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === N.Fz7.CAPTCHA
                    ? (0, i.jsx)(I.A, { onVerify: l, theme: n }, t)
                    : (0, i.jsx)(y.$, { onClick: () => this.handleClick(e), text: E.A.getButtonTitle(e) }, e),
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
                    className: v()(M.kL, { [M.Fr]: _.Fr }),
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
                                        (0, i.jsx)(T.D, {
                                            variant: "heading-xl/medium",
                                            children: R.intl.string(R.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(S.E, {
                                            variant: "body-md/normal",
                                            children: R.intl.format(R.t["0rqMV5"], { helpCenterURL: O }),
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
                        (0, i.jsx)(S.E, {
                            variant: "body-sm/normal",
                            className: M.qr,
                            children: R.intl.string(R.t.qqYun3),
                        }),
                        (0, i.jsxs)(b.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(S.E, {
                                    variant: "body-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.WL51ZR, { supportURL: j.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: v()(M.qr, M.mf), children: "\u2022" }),
                                (0, i.jsx)(S.E, {
                                    variant: "body-sm/semibold",
                                    className: M.qr,
                                    children: R.intl.format(R.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
function D() {
    let { action: e, theme: t } = (0, a.cf)([C.A, A.A], () => ({ action: C.A.getAction(), theme: A.A.theme })),
        x = E.A.getVerificationTypes(e),
        [v, _] = l.useState(0),
        y = (0, m.Ay)(x);
    function b() {
        ((0, d.Cw)(),
            (0, o.mM)(
                async () => {
                    let { default: e } = await Promise.all([n.e(647999), n.e(689913), n.e(248069)]).then(
                        n.bind(n, 9124),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: k.H1, Layer: h.Ay },
            ));
    }
    return (
        (0, p.A)(
            {
                type: r.ImpressionTypes.MODAL,
                name: r.ImpressionNames.USER_ACTION_REQUIRED,
                properties: { verification_type: x[0], verification_types: x },
            },
            {},
            [x.toString()],
        ),
        l.useEffect(
            () => (
                f.A.disable(),
                () => {
                    f.A.enable();
                }
            ),
            [],
        ),
        l.useEffect(() => {
            y?.[0] === N.Fz7.PHONE &&
                x?.[0] === N.Fz7.EMAIL &&
                (0, o.mM)(
                    async () => {
                        let { Alert: e } = await Promise.all([n.e(844331), n.e(542369)]).then(n.bind(n, 291064));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: R.intl.string(R.t.KLnLIP),
                                body: R.intl.string(R.t.XGbCq3),
                                confirmText: R.intl.string(R.t["3oK4qw"]),
                            });
                    },
                    { modalKey: k.Pr, Layer: h.Ay, onCloseCallback: b },
                );
        }, [x, y]),
        (0, i.jsx)(P, {
            types: x,
            captchaKey: v,
            onCaptchaVerify: function (e) {
                s.Bo.post({
                    url: N.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    _((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === N.Fz7.EMAIL_OR_PHONE || e === N.Fz7.EMAIL || e === N.Fz7.REVERIFY_EMAIL
                    ? b()
                    : (0, o.mM)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e(590275),
                                  n.e(766806),
                                  n.e(14775),
                                  n.e(989545),
                                  n.e(991531),
                                  n.e(757786),
                                  n.e(84704),
                              ]).then(n.bind(n, 615715));
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: h.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: L.V, Layer: h.Ay },
                      );
            },
            onLogout: function () {
                (0, o.mM)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.all([n.e(304823), n.e(223976), n.e(977260)]).then(
                            n.bind(n, 397927),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: R.intl.string(R.t["2jxGer"]),
                                subtitle: R.intl.string(R.t.SUnWBB),
                                confirmText: R.intl.string(R.t["2jxGer"]),
                                cancelText: R.intl.string(R.t["ETE/oC"]),
                                onConfirm: () => u.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: h.Ay },
                );
            },
        })
    );
}
