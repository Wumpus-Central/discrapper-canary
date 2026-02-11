n.d(t, { Ev: () => p, Ow: () => E, aK: () => C, m3: () => T });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(935649),
    r = n(847599),
    o = n(444802),
    c = n(207560),
    d = n(558001),
    u = n(866945),
    _ = n(840387),
    m = n(933297),
    A = n(975571),
    g = n(64313),
    h = n(835002),
    x = n(985018);
function p() {
    let e = (0, o.WX)();
    return (0, i.jsx)(u.e, {
        label: x.t.EUo0yj,
        labelHook: () => {
            window.open(A.A.getArticleURL(e), "_blank");
        },
        noticeType: h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function E() {
    return (0, i.jsx)(u.e, {
        label: x.t.OX4ybh,
        labelHook: () => {
            l.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function C() {
    let e = (0, _.Z)(),
        t = (0, o.WX)(),
        n = s.useCallback(() => {
            window.open(A.A.getArticleURL(t), "_blank"),
                (0, d.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.LEARN_MORE);
        }, [t]),
        l = s.useCallback(() => {
            (0, d.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: l,
                useText: () =>
                    x.intl.format(x.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, l]);
}
function T() {
    let e = (0, c.SJ)(),
        t = (0, g.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = e || t,
        o = s.useCallback(() => {
            l.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, d.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.LEARN_MORE);
        }, []),
        u = s.useCallback(() => {
            (0, d.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (n)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: u,
                useText: () =>
                    x.intl.format(x.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: o, children: e }, t) }),
            };
    }, [o, n, u]);
}
