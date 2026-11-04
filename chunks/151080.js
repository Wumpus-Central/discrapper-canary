var n = i(477900),
    a = i(582128),
    s = i(613412),
    l = i(189213),
    r = i(192308),
    c = i(331322),
    o = i(632738),
    d = i(975571),
    u = i(871309),
    p = i(171576),
    A = i(652215),
    f = i(664188),
    k = i(792996);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: _ } = t,
                b = a.useCallback(() => {
                    (_(), u.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.ACCOUNT_AGE_GROUP }));
                }, [_]),
                h = a.useCallback(() => {
                    (_(),
                        (0, r.mM)(async () => {
                            let { default: t } = await i.e(500956).then(i.bind(i, 253463));
                            return (e) => (0, n.jsx)(t, { ...e });
                        }));
                }, [_]),
                C = a.useCallback(() => {
                    u.A.openUrl(d.A.getArticleURL(A.MVz.AGE_VERIFICATION_LEARN_MORE));
                }, []);
            return (0, n.jsx)(l.a, {
                transitionState: e,
                onClose: _,
                title: k.intl.string(f.default.PY4MA0),
                subtitle: k.intl.format(f.default["1DN29p"], { handleOnHelpUrlHook: C }),
                actions: [],
                trackingProps: {
                    impression: { impressionName: s.ImpressionNames.USER_AGE_VERIFICATION_RESET_OPTIONS },
                },
                children: (0, n.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        (0, n.jsx)(o.PQ, {
                            variant: "clickable",
                            title: k.intl.string(f.default.SH6Tcv),
                            description: k.intl.string(f.default.rJiO86),
                            onButtonPress: b,
                        }),
                        (0, n.jsx)(o.PQ, {
                            variant: "clickable",
                            title: k.intl.string(f.default["bD//cU"]),
                            description: k.intl.string(f.default.Gn0SAj),
                            onButtonPress: h,
                        }),
                    ],
                }),
            });
        },
    },
);
