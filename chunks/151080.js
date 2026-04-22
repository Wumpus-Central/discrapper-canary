i.d(e, { default: () => _ });
var n = i(627968),
    a = i(64700),
    l = i(110259),
    s = i(189213),
    r = i(331322),
    o = i(192308),
    c = i(632738),
    d = i(975571),
    u = i(935649),
    p = i(847599),
    A = i(652215),
    f = i(516761),
    k = i(985018);
function _(t) {
    let { transitionState: e, onClose: _ } = t,
        b = a.useCallback(() => {
            _(), u.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.ACCOUNT_AGE_GROUP });
        }, [_]),
        h = a.useCallback(() => {
            _(),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await i.e("956").then(i.bind(i, 253463));
                    return (e) => (0, n.jsx)(t, { ...e });
                });
        }, [_]),
        C = a.useCallback(() => {
            u.A.openUrl(d.A.getArticleURL(A.MVz.TIGGER_PAWTECT_LEARN_MORE));
        }, []);
    return (0, n.jsx)(s.Modal, {
        transitionState: e,
        onClose: _,
        title: k.intl.string(f.default.PY4MA0),
        subtitle: k.intl.format(f.default["1DN29p"], { handleOnHelpUrlHook: C }),
        actions: [],
        trackingProps: { impression: { impressionName: l.ImpressionNames.USER_AGE_VERIFICATION_RESET_OPTIONS } },
        children: (0, n.jsxs)(r.B, {
            direction: "vertical",
            gap: 8,
            children: [
                (0, n.jsx)(c.PQ, {
                    variant: "clickable",
                    title: k.intl.string(f.default.SH6Tcv),
                    description: k.intl.string(f.default.rJiO86),
                    onButtonPress: b,
                }),
                (0, n.jsx)(c.PQ, {
                    variant: "clickable",
                    title: k.intl.string(f.default["bD//cU"]),
                    description: k.intl.string(f.default.Gn0SAj),
                    onButtonPress: h,
                }),
            ],
        }),
    });
}
