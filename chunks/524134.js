n.d(t, { A: () => O }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(110259),
    r = n(311907),
    s = n(562465),
    o = n(397927),
    c = n(830215),
    d = n(398590),
    u = n(631670),
    m = n(475743),
    p = n(775121),
    h = n(139286),
    f = n(80556),
    x = n(557722),
    b = n(544028),
    g = n(870570),
    v = n(446868),
    j = n(683589),
    y = n(87404),
    _ = n(652215),
    A = n(53516),
    C = n(985018);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function O() {
    let { action: e, theme: t } = (0, r.cf)([g.A, b.A], () => ({
            action: g.A.getAction(),
            theme: b.A.theme,
        })),
        O = v.A.getVerificationTypes(e),
        [E, N] = l.useState(0),
        T = (0, m.A)(O);
    (0, h.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: O[0],
                verification_types: O,
            },
        },
        {},
        [O.toString()],
    );
    let I = () => {
        (0, u.Cw)(),
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("95988").then(n.bind(n, 946815));
                    return (t) => (0, a.jsx)(e, S({}, t));
                },
                {
                    modalKey: y.H1,
                    Layer: f.Ay,
                },
            );
    };
    return (
        l.useEffect(
            () => (
                p.A.disable(),
                () => {
                    p.A.enable();
                }
            ),
            [],
        ),
        l.useEffect(() => {
            (null == T ? void 0 : T[0]) === _.Fz7.PHONE &&
                (null == O ? void 0 : O[0]) === _.Fz7.EMAIL &&
                (0, o.mMO)(
                    async () => {
                        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                        return (t) => {
                            var n, l;
                            return (0, a.jsx)(
                                e,
                                ((n = S({}, t)),
                                (l = l =
                                    {
                                        title: C.intl.string(C.t.KLnLIP),
                                        body: C.intl.string(C.t.XGbCq3),
                                        confirmText: C.intl.string(C.t["3oK4qw"]),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        };
                    },
                    {
                        modalKey: y.Pr,
                        Layer: f.Ay,
                        onCloseCallback: I,
                    },
                );
        }, [O, T]),
        (0, a.jsx)(j.A, {
            types: O,
            captchaKey: E,
            onCaptchaVerify: (e) => {
                s.Bo.post({
                    url: _.Rsh.CAPTCHA,
                    body: { captcha_key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(d.jH, () => {
                    N((e) => e + 1);
                });
            },
            theme: t,
            onClick: (e) => {
                e === _.Fz7.EMAIL_OR_PHONE || e === _.Fz7.EMAIL || e === _.Fz7.REVERIFY_EMAIL
                    ? I()
                    : (0, o.mMO)(
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                              return (t) =>
                                  (0, a.jsx)(
                                      e,
                                      S(
                                          {
                                              layerContext: f.OH,
                                              reason: x.d.USER_ACTION_REQUIRED,
                                          },
                                          t,
                                      ),
                                  );
                          },
                          {
                              modalKey: A.V,
                              Layer: f.Ay,
                          },
                      );
            },
            onLogout: () => {
                (0, o.mMO)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 732159));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                S(
                                    {
                                        title: C.intl.string(C.t["2jxGer"]),
                                        subtitle: C.intl.string(C.t.SUnWBB),
                                        confirmText: C.intl.string(C.t["2jxGer"]),
                                        cancelText: C.intl.string(C.t["ETE/oC"]),
                                        onConfirm: () => c.A.logout("verification"),
                                    },
                                    t,
                                ),
                            );
                    },
                    { Layer: f.Ay },
                );
            },
        })
    );
}
