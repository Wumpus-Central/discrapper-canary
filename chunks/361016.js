s.r(e);
var i = s(477900),
    n = s(582128),
    r = s(613412),
    a = s(855986),
    o = s(772707),
    l = s(871309),
    c = s(171576),
    p = s(287809),
    A = s(129230),
    u = s(975571),
    E = s(612200),
    d = s(323073),
    m = s(597306),
    f = s(262942),
    G = s(204925),
    k = s(652215),
    _ = s(792996),
    g = s(700129);
s.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, source: s } = t,
                C = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
                T = (0, m.a)(),
                {
                    verifyAgreementButtonText: h,
                    verifyDisagreementButtonText: y,
                    verifyEmphasiseDisagree: N,
                    verifyGateDescription: b,
                    verifyTitle: w,
                } = (0, d.Gn)(s),
                I = d.Bc.has(s);
            function S() {
                return ((0, f.A)(s), Promise.resolve());
            }
            (n.useEffect(() => {
                C?.nsfwAllowed !== !0 || T || (0, E.Nk)(s);
            }, [C?.nsfwAllowed, T, s]),
                n.useEffect(() => {
                    A.default.track(k.HAw.AGE_GATE_ACTION, { source: s, action: G.AM.AGE_GATE_OPEN });
                }, [s]));
            let P = n.useCallback(() => {
                    l.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_AGE_GATE });
                }, []),
                R = { transitionState: e, onClose: S, graphic: { type: "image", src: g.A }, gradientColor: "blue" };
            if (T) {
                let t = { text: y ?? _.intl.string(_.t.f3Pet9), onClick: S },
                    e = { text: h ?? _.intl.string(_.t.FDSSia), onClick: P };
                return (0, i.jsx)(o.k, {
                    title: w,
                    subtitle: b,
                    actions: !0 === N ? [{ ...e, variant: "secondary" }, t] : [{ ...t, variant: "secondary" }, e],
                    trackingProps: {
                        impression: { impressionName: r.ImpressionNames.USER_AGE_GATE_VERIFY },
                        impressionType: r.ImpressionTypes.MODAL,
                    },
                    ...R,
                });
            }
            return (0, i.jsx)(o.k, {
                title: _.intl.string(I ? _.t["H0SG/g"] : _.t.NEabBa),
                subtitle: _.intl.format(I ? _.t["6++3cX"] : _.t["2kHZes"], {
                    helpURL: u.A.getArticleURL(k.MVz.AGE_GATE),
                }),
                actions: [{ text: _.intl.string(_.t["/g10LC"]), onClick: S, variant: "secondary" }],
                trackingProps: {
                    impression: { impressionName: r.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: r.ImpressionTypes.MODAL,
                },
                ...R,
            });
        },
    },
);
