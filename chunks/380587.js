n.d(t, {
    Ev: () => h,
    Ow: () => b,
    aK: () => E,
    m3: () => x,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(935649),
    a = n(847599),
    o = n(444802),
    c = n(207560),
    d = n(558001),
    u = n(866945),
    _ = n(840387),
    p = n(933297),
    m = n(975571),
    g = n(64313),
    A = n(835002),
    f = n(985018);

function h() {
    let e = (0, o.WX)();
    return (0, r.jsx)(u.e, {
        label: f.t.EUo0yj,
        labelHook: () => {
            window.open(m.A.getArticleURL(e), "_blank");
        },
        noticeType: A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}

function b() {
    return (0, r.jsx)(u.e, {
        label: f.t.OX4ybh,
        labelHook: () => {
            s.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.CONTENT_AND_SOCIAL_NOTICE,
            });
        },
        noticeType: A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}

function E() {
    let e = (0, _.Z)(),
        t = (0, o.WX)(),
        n = i.useCallback(() => {
            window.open(m.A.getArticleURL(t), "_blank"),
                (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, A.YX.LEARN_MORE);
        }, [t]),
        s = i.useCallback(() => {
            (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, A.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: p.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: s,
                useText: () =>
                    f.intl.format(f.t.EUo0yj, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                l.MzZ,
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

function x() {
    let e = (0, c.SJ)(),
        t = (0, g.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = e || t,
        o = i.useCallback(() => {
            s.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.CONTENT_AND_SOCIAL_NOTICE,
            }),
                (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, A.YX.LEARN_MORE);
        }, []),
        u = i.useCallback(() => {
            (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, A.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (n)
            return {
                type: p.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: u,
                useText: () =>
                    f.intl.format(f.t.OX4ybh, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                l.MzZ,
                                {
                                    onClick: o,
                                    children: e,
                                },
                                t,
                            ),
                    }),
            };
    }, [o, n, u]);
}
