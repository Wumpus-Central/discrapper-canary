n.d(t, { Ev: () => E, Ow: () => C, aK: () => T, m3: () => S });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(935649),
    r = n(847599),
    o = n(36149),
    c = n(444802),
    d = n(207560),
    u = n(558001),
    _ = n(866945),
    m = n(840387),
    A = n(933297),
    g = n(975571),
    h = n(64313),
    x = n(835002),
    p = n(985018);
function E() {
    let e = (0, c.WX)();
    return (0, i.jsx)(_.e, {
        label: p.t.EUo0yj,
        labelHook: () => {
            window.open(g.A.getArticleURL(e), "_blank");
        },
        noticeType: x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function C() {
    return (0, i.jsx)(_.e, {
        label: p.t.OX4ybh,
        labelHook: () => {
            l.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function T() {
    let e = (0, m.Z)(),
        t = (0, c.WX)(),
        n = s.useCallback(() => {
            window.open(g.A.getArticleURL(t), "_blank"),
                (0, u.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.LEARN_MORE);
        }, [t]),
        l = s.useCallback(() => {
            (0, u.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: A.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: l,
                useText: () =>
                    p.intl.format(p.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, l]);
}
function S() {
    let e = (0, d.SJ)(),
        t = (0, h.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = (0, o.b8)(),
        c = (e || t) && !n,
        _ = s.useCallback(() => {
            l.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, u.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.LEARN_MORE);
        }, []),
        m = s.useCallback(() => {
            (0, u.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (c)
            return {
                type: A.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: m,
                useText: () =>
                    p.intl.format(p.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: _, children: e }, t) }),
            };
    }, [_, c, m]);
}
