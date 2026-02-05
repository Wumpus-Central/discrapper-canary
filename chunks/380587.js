n.d(t, { Ev: () => p, Ow: () => C, aK: () => x, m3: () => T });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(935649),
    l = n(847599),
    o = n(444802),
    c = n(207560),
    d = n(558001),
    u = n(866945),
    _ = n(840387),
    m = n(933297),
    A = n(975571),
    g = n(64313),
    E = n(835002),
    h = n(985018);
function p() {
    let e = (0, o.WX)();
    return (0, i.jsx)(u.e, {
        label: h.t.EUo0yj,
        labelHook: () => {
            window.open(A.A.getArticleURL(e), "_blank");
        },
        noticeType: E.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function C() {
    return (0, i.jsx)(u.e, {
        label: h.t.OX4ybh,
        labelHook: () => {
            a.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: E.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function x() {
    let e = (0, _.Z)(),
        t = (0, o.WX)(),
        n = s.useCallback(() => {
            window.open(A.A.getArticleURL(t), "_blank"),
                (0, d.N)(E.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, E.YX.LEARN_MORE);
        }, [t]),
        a = s.useCallback(() => {
            (0, d.N)(E.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, E.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: m.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: a,
                useText: () =>
                    h.intl.format(h.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, a]);
}
function T() {
    let e = (0, c.SJ)(),
        t = (0, g.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = e || t,
        o = s.useCallback(() => {
            a.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, d.N)(E.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, E.YX.LEARN_MORE);
        }, []),
        u = s.useCallback(() => {
            (0, d.N)(E.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, E.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (n)
            return {
                type: m.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: u,
                useText: () =>
                    h.intl.format(h.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: o, children: e }, t) }),
            };
    }, [o, n, u]);
}
