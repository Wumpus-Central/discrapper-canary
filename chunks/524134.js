n.d(t, { A: () => T });
var a = n(627968),
    s = n(64700),
    i = n(110259),
    l = n(311907),
    r = n(562465),
    o = n(397927),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    m = n(475743),
    h = n(775121),
    x = n(139286),
    p = n(80556),
    g = n(557722),
    _ = n(544028),
    f = n(870570),
    v = n(446868),
    b = n(683589),
    j = n(87404),
    A = n(652215),
    C = n(53516),
    S = n(985018);
function T() {
    let { action: e, theme: t } = (0, l.cf)([f.A, _.A], () => ({ action: f.A.getAction(), theme: _.A.theme })),
        T = v.A.getVerificationTypes(e),
        [y, N] = s.useState(0),
        E = (0, m.A)(T);
    (0, x.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: T[0], verification_types: T },
        },
        {},
        [T.toString()],
    );
    let I = () => {
        (0, u.Cw)(),
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("95988").then(n.bind(n, 946815));
                    return (t) => (0, a.jsx)(e, { ...t });
                },
                { modalKey: j.H1, Layer: p.Ay },
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
            E?.[0] === A.Fz7.PHONE &&
                T?.[0] === A.Fz7.EMAIL &&
                (0, o.mMO)(
                    async () => {
                        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                        return (t) =>
                            (0, a.jsx)(e, {
                                ...t,
                                title: S.intl.string(S.t.KLnLIP),
                                body: S.intl.string(S.t.XGbCq3),
                                confirmText: S.intl.string(S.t["3oK4qw"]),
                            });
                    },
                    { modalKey: j.Pr, Layer: p.Ay, onCloseCallback: I },
                );
        }, [T, E]),
        (0, a.jsx)(b.A, {
            types: T,
            captchaKey: y,
            onCaptchaVerify: (e) => {
                r.Bo.post({
                    url: A.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(c.jH, () => {
                    N((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === A.Fz7.EMAIL_OR_PHONE || e === A.Fz7.EMAIL || e === A.Fz7.REVERIFY_EMAIL
                    ? I()
                    : (0, o.mMO)(
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                              return (t) =>
                                  (0, a.jsx)(e, { layerContext: p.OH, reason: g.d.USER_ACTION_REQUIRED, ...t });
                          },
                          { modalKey: C.V, Layer: p.Ay },
                      );
            },
            onLogout: () => {
                (0, o.mMO)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, a.jsx)(e, {
                                title: S.intl.string(S.t["2jxGer"]),
                                subtitle: S.intl.string(S.t.SUnWBB),
                                confirmText: S.intl.string(S.t["2jxGer"]),
                                cancelText: S.intl.string(S.t["ETE/oC"]),
                                onConfirm: () => d.A.logout("verification"),
                                ...t,
                            });
                    },
                    { Layer: p.Ay },
                );
            },
        })
    );
}
