n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(110259),
    a = n(311907),
    r = n(562465),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    p = n(475743),
    h = n(775121),
    m = n(139286),
    _ = n(80556),
    A = n(557722),
    f = n(544028),
    g = n(870570),
    x = n(446868),
    E = n(683589),
    C = n(87404),
    T = n(652215),
    v = n(53516),
    S = n(985018);
function b() {
    let { action: e, theme: t } = (0, a.cf)([g.A, f.A], () => ({ action: g.A.getAction(), theme: f.A.theme })),
        b = x.A.getVerificationTypes(e),
        [j, I] = s.useState(0),
        R = (0, p.A)(b);
    (0, m.A)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: b[0], verification_types: b },
        },
        {},
        [b.toString()],
    );
    let N = () => {
        (0, u.Cw)(),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("95988").then(n.bind(n, 946815));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: C.H1, Layer: _.Ay },
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
            R?.[0] === T.Fz7.PHONE &&
                b?.[0] === T.Fz7.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: S.intl.string(S.t.KLnLIP),
                                body: S.intl.string(S.t.XGbCq3),
                                confirmText: S.intl.string(S.t["3oK4qw"]),
                            });
                    },
                    { modalKey: C.Pr, Layer: _.Ay, onCloseCallback: N },
                );
        }, [b, R]),
        (0, i.jsx)(E.A, {
            types: b,
            captchaKey: j,
            onCaptchaVerify: (e) => {
                r.Bo.post({
                    url: T.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    I((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === T.Fz7.EMAIL_OR_PHONE || e === T.Fz7.EMAIL || e === T.Fz7.REVERIFY_EMAIL
                    ? N()
                    : (0, o.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([n.e("84704"), n.e("16398")]).then(
                                  n.bind(n, 615715),
                              );
                              return (t) =>
                                  (0, i.jsx)(e, { layerContext: _.OH, reason: A.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: v.V, Layer: _.Ay },
                      );
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: S.intl.string(S.t["2jxGer"]),
                                subtitle: S.intl.string(S.t.SUnWBB),
                                confirmText: S.intl.string(S.t["2jxGer"]),
                                cancelText: S.intl.string(S.t["ETE/oC"]),
                                onConfirm: () => d.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: _.Ay },
                );
            },
        })
    );
}
