n.d(t, { DJ: () => M, Jg: () => T, KT: () => L, lo: () => R, oH: () => b, s3: () => P });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(20742),
    u = n(364840),
    c = n(331322),
    o = n(224640),
    d = n(231723),
    f = n(430993),
    h = n(632088),
    m = n(500380),
    p = n(423764),
    C = n(820287),
    E = n(708791),
    y = n(981036),
    _ = n(725836),
    g = n(123816),
    I = n(520149),
    S = n(56763),
    A = n(652215),
    x = n(126223);
function P(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeVariant: i = "expressive",
            headerBadgeText: a,
            headerBadgeIcon: u,
            countryCode: c,
            relocationCountryCode: o,
            ...d
        } = e,
        f = r.useCallback(
            () => (null == c ? null : (0, l.jsx)("img", { alt: "", className: x.bI, src: (0, m.t)(c) })),
            [c],
        ),
        h = r.useMemo(() => {
            if (null != a) return { icon: u, type: { text: a ?? "" }, variant: i };
        }, [a, u, i]),
        C = null != c && null != o,
        E = r.useMemo(() => {
            if (!C && null != c) return { text: (0, p.j7)((0, p.ni)(c)), leadingIcon: f };
        }, [C, c, f]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.rQ, {
                ...d,
                badge: h,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: E,
            }),
            C && (0, l.jsx)(I.w, { countryCode: c, relocationCountryCode: o }),
        ],
    });
}
let v = { top: 16, bottom: 8 };
function R(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i, stripeExpressCheckoutComponent: s } = e,
        { variant: o } = n,
        { setCheckoutFooterContentNode: d } = (0, _.ck)(),
        { isExpressCheckoutEnabledForFooter: f, shouldExpressCheckoutBeVisible: h } = (0, g.t4)((e) => {
            let t = e.getExpressCheckoutVisibilityState();
            return {
                isExpressCheckoutEnabledForFooter: t.isExpressCheckoutEnabledForFooter,
                shouldExpressCheckoutBeVisible: t.shouldExpressCheckoutBeVisible,
            };
        }),
        m = (0, l.jsx)(y.p, { ...n, variant: o ?? "active", autoFocus: !0 }),
        p = f && null != s,
        I = p && h,
        S = null != t,
        {
            direction: A,
            align: P,
            justify: R,
        } = r.useMemo(() => {
            let e = "end";
            return (
                S && !I && (e = "space-between"),
                { direction: I ? "vertical" : "horizontal", align: I ? "stretch" : "center", justify: e }
            );
        }, [S, I]),
        M = S ? (0, l.jsx)(C.A, { onClick: t }) : null;
    return (0, l.jsxs)(u.j, {
        children: [
            (0, l.jsx)("div", { ref: d, className: a()(x.K4, i) }),
            (0, l.jsxs)(c.B, {
                direction: A,
                align: P,
                justify: R,
                fullWidth: !0,
                padding: { ...v, bottom: I ? 8 : v.bottom },
                children: [
                    I ? null : M,
                    I ? (0, l.jsx)(E.rI, {}) : null,
                    p ? (0, l.jsx)(E.Zr, { stripeExpressCheckoutComponent: s, fallbackComponent: m }) : m,
                    I && null != M ? (0, l.jsx)("div", { className: x.aY, children: M }) : null,
                ],
            }),
        ],
    });
}
function M(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: a()(x.g4, t), children: (0, l.jsx)(S.I, {}) });
}
function T(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", isModalContentLoading: i, ...a } = e;
    return (0, l.jsx)(_.e0, {
        children: (0, l.jsx)(o.d, {
            size: n,
            ...a,
            maxHeight: r,
            contentOutsideContainer: (0, l.jsx)(h.A, {}),
            children: i ? (0, l.jsx)(M, {}) : t,
        }),
    });
}
function L() {
    return (0, l.jsx)(T, { transitionState: d.ip.ENTERED, onClose: A.tEg, size: "md", isModalContentLoading: !0 });
}
function b(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: r,
        relocationCountryCode: i,
        headerBadgeText: a,
        headerBadgeIcon: s,
        onBackClick: u,
        primaryButtonProps: c,
        children: d,
        ...h
    } = e;
    return (0, l.jsx)(_.e0, {
        children: (0, l.jsxs)(o.d, {
            ...h,
            children: [
                (0, l.jsx)(P, {
                    gradientColor: n,
                    title: t,
                    countryCode: r,
                    relocationCountryCode: i,
                    headerBadgeText: a,
                    headerBadgeIcon: s,
                }),
                (0, l.jsx)(f.c, { children: d }),
                (0, l.jsx)(R, { onBackClick: u, primaryButtonProps: c }),
            ],
        }),
    });
}
