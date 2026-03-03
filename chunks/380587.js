n.d(t, { Ev: () => E, Ow: () => C, Xj: () => f, aK: () => T, m3: () => S });
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
    x = n(835002),
    p = n(985018);
function E() {
    let e = (0, d.WX)();
    return (0, i.jsx)(m.e, {
        label: p.t.EUo0yj,
        labelHook: () => {
            window.open(h.A.getArticleURL(e), "_blank");
        },
        noticeType: x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function C() {
    return (0, i.jsx)(m.e, {
        label: p.t.OX4ybh,
        labelHook: () => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function T() {
    let e = (0, A.Z)(),
        t = (0, d.WX)(),
        n = s.useCallback(() => {
            window.open(h.A.getArticleURL(t), "_blank"),
                (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.LEARN_MORE);
        }, [t]),
        a = s.useCallback(() => {
            (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: g.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: a,
                useText: () =>
                    p.intl.format(p.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(l.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, a]);
}
function S() {
    let e = (0, u.SJ)(),
        t = (0, c.b8)(),
        n = e && !t,
        a = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.LEARN_MORE);
        }, []),
        d = s.useCallback(() => {
            (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (n)
            return {
                type: g.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: d,
                useText: () =>
                    p.intl.format(p.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(l.MzZ, { onClick: a, children: e }, t) }),
            };
    }, [a, n, d]);
}
function I() {
    let e = (0, d.WX)();
    s.useEffect(() => {
        (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.VIEWED);
    }, []);
    let t = s.useCallback(() => {
            window.open(h.A.getArticleURL(e), "_blank"), (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.LEARN_MORE);
        }, [e]),
        n = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.CONFIRM_AGE);
        }, []);
    return (0, i.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        action: (0, i.jsx)(l.QWc, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: p.intl.string(p.t.FDSSia),
            onClick: n,
        }),
        children: p.intl.format(p.t.mFgsfg, { hook: (e, n) => (0, i.jsx)(l.MzZ, { onClick: t, children: e }, n) }),
    });
}
function f() {
    let e = (0, u.aX)(a.t.REACTIVE_CHECK),
        t = (0, c.b8)();
    return s.useMemo(() => {
        if (e && !t) return { type: g.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: I };
    }, [e, t]);
}
