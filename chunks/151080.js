i.d(e, { default: () => k });
var n = i(627968),
    a = i(64700),
    l = i(110259),
    s = i(158954),
    r = i(397927),
    c = i(632738),
    o = i(975571),
    d = i(935649),
    u = i(847599),
    p = i(652215),
    A = i(536242),
    f = i(985018);
function k(t) {
    let { transitionState: e, onClose: k } = t,
        _ = a.useCallback(() => {
            k(), d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.ACCOUNT_AGE_GROUP });
        }, [k]),
        b = a.useCallback(() => {
            k(),
                (0, r.mMO)(async () => {
                    let { default: t } = await i.e("956").then(i.bind(i, 253463));
                    return (e) => (0, n.jsx)(t, { ...e });
                });
        }, [k]),
        h = a.useCallback(() => {
            d.A.openUrl(o.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE));
        }, []);
    return (0, n.jsx)(s.Modal, {
        transitionState: e,
        onClose: k,
        title: f.intl.string(A.default.PY4MA0),
        subtitle: f.intl.format(A.default["1DN29p"], { handleOnHelpUrlHook: h }),
        actions: [],
        trackingProps: { impression: { impressionName: l.ImpressionNames.USER_AGE_VERIFICATION_RESET_OPTIONS } },
        children: (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 8,
            children: [
                (0, n.jsx)(c.PQ, {
                    variant: "clickable",
                    title: f.intl.string(A.default.SH6Tcv),
                    description: f.intl.string(A.default.rJiO86),
                    onButtonPress: _,
                }),
                (0, n.jsx)(c.PQ, {
                    variant: "clickable",
                    title: f.intl.string(A.default["bD//cU"]),
                    description: f.intl.string(A.default.Gn0SAj),
                    onButtonPress: b,
                }),
            ],
        }),
    });
}
