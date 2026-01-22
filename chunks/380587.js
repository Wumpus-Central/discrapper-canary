n.d(t, {
    Ev: () => E,
    Ow: () => b,
    aK: () => y,
    m3: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(935649),
    o = n(847599),
    l = n(444802),
    c = n(207560),
    u = n(558001),
    d = n(866945),
    f = n(840387),
    p = n(933297),
    _ = n(975571),
    h = n(64313),
    m = n(835002),
    g = n(985018);
function E() {
    let e = (0, l.WX)(),
        t = () => {
            window.open(_.A.getArticleURL(e), "_blank");
        };
    return (0, r.jsx)(d.e, {
        label: g.t.EUo0yj,
        labelHook: t,
        noticeType: m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function b() {
    let e = () => {
        s.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE });
    };
    return (0, r.jsx)(d.e, {
        label: g.t.OX4ybh,
        labelHook: e,
        noticeType: m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function y() {
    let e = (0, f.Z)(),
        t = (0, l.WX)(),
        n = i.useCallback(() => {
            window.open(_.A.getArticleURL(t), "_blank"),
                (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.YX.LEARN_MORE);
        }, [t]),
        s = i.useCallback(() => {
            (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: p.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: s,
                useText: () =>
                    g.intl.format(g.t.EUo0yj, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.MzZ,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                    }),
            };
    }, [n, e, s]);
}
function O() {
    let e = (0, c.SJ)(),
        t = (0, h.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = e || t,
        l = i.useCallback(() => {
            s.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.YX.LEARN_MORE);
        }, []),
        d = i.useCallback(() => {
            (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (n)
            return {
                type: p.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: d,
                useText: () =>
                    g.intl.format(g.t.OX4ybh, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.MzZ,
                                {
                                    onClick: l,
                                    children: e,
                                },
                                t,
                            ),
                    }),
            };
    }, [l, n, d]);
}
