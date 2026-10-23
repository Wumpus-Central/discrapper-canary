(s.r(t), s.d(t, { default: () => T }));
var i = s(477900),
    n = s(582128),
    r = s(562708),
    a = s(17928),
    o = s(772707),
    l = s(66834),
    A = s(379257),
    c = s(306537),
    p = s(734057),
    E = s(309010),
    u = s(287809),
    d = s(174459),
    f = s(975571),
    _ = s(612200),
    m = s(323073),
    G = s(597306),
    g = s(204925),
    k = s(652215),
    C = s(105292),
    I = s(700129);
function T(e) {
    let { transitionState: t, source: s } = e,
        T = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        y = (0, a.bG)([E.Ay, p.A], () => p.A.getChannel(E.Ay.getChannelId())),
        h = (0, G.a)(),
        {
            verifyAgreementButtonText: N,
            verifyDisagreementButtonText: w,
            verifyEmphasiseDisagree: S,
            verifyGateDescription: b,
            verifyTitle: R,
        } = (0, m.Gn)(s),
        P = m.Bc.has(s);
    function v() {
        if (s === g.w_.NSFW_SERVER_INVITE_EMBED) return ((0, _.IO)(s), Promise.resolve());
        let e = y?.getGuildId();
        return (l.A.nsfwReturnToSafety(e), (0, _.IO)(s), Promise.resolve());
    }
    (n.useEffect(() => {
        T?.nsfwAllowed !== !0 || h || (0, _.Nk)(s);
    }, [T?.nsfwAllowed, h, s]),
        n.useEffect(() => {
            d.default.track(k.HAw.AGE_GATE_ACTION, { source: s, action: g.AM.AGE_GATE_OPEN });
        }, [s]));
    let M = n.useCallback(() => {
            A.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_AGE_GATE });
        }, []),
        O = { transitionState: t, onClose: v, graphic: { type: "image", src: I.A }, gradientColor: "blue" };
    if (h) {
        let e = { text: w ?? C.intl.string(C.t.f3Pet9), onClick: v },
            t = { text: N ?? C.intl.string(C.t.FDSSia), onClick: M };
        return (0, i.jsx)(o.k, {
            title: R,
            subtitle: b,
            actions: !0 === S ? [{ ...t, variant: "secondary" }, e] : [{ ...e, variant: "secondary" }, t],
            trackingProps: {
                impression: { impressionName: r.ImpressionNames.USER_AGE_GATE_VERIFY },
                impressionType: r.ImpressionTypes.MODAL,
            },
            ...O,
        });
    }
    return (0, i.jsx)(o.k, {
        title: C.intl.string(P ? C.t["H0SG/g"] : C.t.NEabBa),
        subtitle: C.intl.format(P ? C.t["6++3cX"] : C.t["2kHZes"], { helpURL: f.A.getArticleURL(k.MVz.AGE_GATE) }),
        actions: [{ text: C.intl.string(C.t["/g10LC"]), onClick: v, variant: "secondary" }],
        trackingProps: {
            impression: { impressionName: r.ImpressionNames.USER_AGE_GATE_VERIFY },
            impressionType: r.ImpressionTypes.MODAL,
        },
        ...O,
    });
}
