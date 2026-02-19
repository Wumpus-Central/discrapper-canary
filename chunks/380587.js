n.d(t, { Ev: () => C, Ow: () => T, Xj: () => N, aK: () => S, m3: () => I });
var i = n(627968),
    s = n(64700),
    a = n(687123),
    l = n(397927),
    r = n(935649),
    o = n(847599),
    c = n(36149),
    d = n(444802),
    u = n(207560),
    _ = n(558001),
    m = n(866945),
    A = n(840387),
    g = n(933297),
    h = n(975571),
    x = n(64313),
    p = n(835002),
    E = n(985018);
function C() {
    let e = (0, d.WX)();
    return (0, i.jsx)(m.e, {
        label: E.t.EUo0yj,
        labelHook: () => {
            window.open(h.A.getArticleURL(e), "_blank");
        },
        noticeType: p.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function T() {
    return (0, i.jsx)(m.e, {
        label: E.t.OX4ybh,
        labelHook: () => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: p.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function S() {
    let e = (0, A.Z)(),
        t = (0, d.WX)(),
        n = s.useCallback(() => {
            window.open(h.A.getArticleURL(t), "_blank"),
                (0, _.N)(p.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, p.YX.LEARN_MORE);
        }, [t]),
        a = s.useCallback(() => {
            (0, _.N)(p.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, p.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: g.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: a,
                useText: () =>
                    E.intl.format(E.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(l.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, a]);
}
function I() {
    let e = (0, u.SJ)(),
        t = (0, x.j)("useContentAndSocialAgeVerificationInlineNotice"),
        n = (0, c.b8)(),
        a = (e || t) && !n,
        d = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(p.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, p.YX.LEARN_MORE);
        }, []),
        m = s.useCallback(() => {
            (0, _.N)(p.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, p.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (a)
            return {
                type: g.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: m,
                useText: () =>
                    E.intl.format(E.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(l.MzZ, { onClick: d, children: e }, t) }),
            };
    }, [d, a, m]);
}
function f() {
    let e = (0, d.WX)();
    s.useEffect(() => {
        (0, _.N)(p.YA.AGE_CONFIRMATION_NOTICE, p.YX.VIEWED);
    }, []);
    let t = s.useCallback(() => {
            window.open(h.A.getArticleURL(e), "_blank"), (0, _.N)(p.YA.AGE_CONFIRMATION_NOTICE, p.YX.LEARN_MORE);
        }, [e]),
        n = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(p.YA.AGE_CONFIRMATION_NOTICE, p.YX.CONFIRM_AGE);
        }, []);
    return (0, i.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        action: (0, i.jsx)(l.QWc, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: E.intl.string(E.t.FDSSia),
            onClick: n,
        }),
        children: E.intl.format(E.t.mFgsfg, { hook: (e, n) => (0, i.jsx)(l.MzZ, { onClick: t, children: e }, n) }),
    });
}
function N() {
    let e = (0, u.aX)(a.t.REACTIVE_CHECK),
        t = (0, c.b8)();
    return s.useMemo(() => {
        if (e && !t) return { type: g.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f };
    }, [e, t]);
}
