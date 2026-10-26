n.d(t, { DJ: () => M, Jg: () => T, KT: () => L, lo: () => R, oH: () => b, s3: () => A });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(20742),
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
    I = n(725836),
    g = n(123816),
    S = n(520149),
    _ = n(56763),
    x = n(652215),
    P = n(126223);
function A(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeVariant: i = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: u,
            countryCode: c,
            relocationCountryCode: o,
            ...d
        } = e,
        f = r.useCallback(
            () => (null == c ? null : (0, l.jsx)("img", { alt: "", className: P.bI, src: (0, m.t)(c) })),
            [c],
        ),
        h = r.useMemo(() => {
            if (null != s) return { icon: u, type: { text: s ?? "" }, variant: i };
        }, [s, u, i]),
        C = null != c && null != o,
        E = r.useMemo(() => {
            if (!C && null != c) return { text: (0, p.j7)((0, p.ni)(c)), leadingIcon: f };
        }, [C, c, f]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.rQ, {
                ...d,
                badge: h,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: E,
            }),
            C && (0, l.jsx)(S.w, { countryCode: c, relocationCountryCode: o }),
        ],
    });
}
let v = { top: 16, bottom: 8 };
function R(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i, stripeExpressCheckoutComponent: a } = e,
        { variant: o } = n,
        { setCheckoutFooterContentNode: d } = (0, I.ck)(),
        { isExpressCheckoutEnabledForFooter: f, shouldExpressCheckoutBeVisible: h } = (0, g.t4)((e) => {
            let t = e.getExpressCheckoutVisibilityState();
            return {
                isExpressCheckoutEnabledForFooter: t.isExpressCheckoutEnabledForFooter,
                shouldExpressCheckoutBeVisible: t.shouldExpressCheckoutBeVisible,
            };
        }),
        m = (0, l.jsx)(y.p, { ...n, variant: o ?? "active", autoFocus: !0 }),
        p = f && null != a,
        S = p && h,
        _ = null != t,
        {
            direction: x,
            align: A,
            justify: R,
        } = r.useMemo(() => {
            let e = "end";
            return (
                _ && !S && (e = "space-between"),
                { direction: S ? "vertical" : "horizontal", align: S ? "stretch" : "center", justify: e }
            );
        }, [_, S]),
        M = _ ? (0, l.jsx)(C.A, { onClick: t }) : null;
    return (0, l.jsxs)(u.j, {
        children: [
            (0, l.jsx)("div", { ref: d, className: s()(P.K4, i) }),
            (0, l.jsxs)(c.B, {
                direction: x,
                align: A,
                justify: R,
                fullWidth: !0,
                padding: v,
                children: [
                    S ? null : M,
                    p ? (0, l.jsx)(E.Z, { stripeExpressCheckoutComponent: a, fallbackComponent: m }) : m,
                    S && null != M ? (0, l.jsx)("div", { className: P.aY, children: M }) : null,
                ],
            }),
        ],
    });
}
function M(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: s()(P.g4, t), children: (0, l.jsx)(_.I, {}) });
}
function T(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", isModalContentLoading: i, ...s } = e;
    return (0, l.jsx)(I.e0, {
        children: (0, l.jsx)(o.d, {
            size: n,
            ...s,
            maxHeight: r,
            contentOutsideContainer: (0, l.jsx)(h.A, {}),
            children: i ? (0, l.jsx)(M, {}) : t,
        }),
    });
}
function L() {
    return (0, l.jsx)(T, { transitionState: d.ip.ENTERED, onClose: x.tEg, size: "md", isModalContentLoading: !0 });
}
function b(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: r,
        relocationCountryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: u,
        primaryButtonProps: c,
        children: d,
        ...h
    } = e;
    return (0, l.jsx)(I.e0, {
        children: (0, l.jsxs)(o.d, {
            ...h,
            children: [
                (0, l.jsx)(A, {
                    gradientColor: n,
                    title: t,
                    countryCode: r,
                    relocationCountryCode: i,
                    headerBadgeText: s,
                    headerBadgeIcon: a,
                }),
                (0, l.jsx)(f.c, { children: d }),
                (0, l.jsx)(R, { onBackClick: u, primaryButtonProps: c }),
            ],
        }),
    });
}
