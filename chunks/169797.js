n.d(t, { DJ: () => M, Jg: () => T, KT: () => L, lo: () => R, oH: () => b, s3: () => A });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(20742),
    u = n(364840),
    c = n(331322),
    o = n(224640),
    d = n(231723),
    f = n(430993),
    h = n(632088),
    p = n(500380),
    m = n(423764),
    C = n(820287),
    E = n(708791),
    y = n(981036),
    I = n(725836),
    S = n(123816),
    g = n(520149),
    _ = n(56763),
    P = n(652215),
    x = n(126223);
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
        f = l.useCallback(
            () => (null == c ? null : (0, r.jsx)("img", { alt: "", className: x.bI, src: (0, p.t)(c) })),
            [c],
        ),
        h = l.useMemo(() => {
            if (null != s) return { icon: u, type: { text: s ?? "" }, variant: i };
        }, [s, u, i]),
        C = null != c && null != o,
        E = l.useMemo(() => {
            if (!C && null != c) return { text: (0, m.j7)((0, m.ni)(c)), leadingIcon: f };
        }, [C, c, f]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.rQ, {
                ...d,
                badge: h,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: E,
            }),
            C && (0, r.jsx)(g.w, { countryCode: c, relocationCountryCode: o }),
        ],
    });
}
let v = { top: 16, bottom: 8 };
function R(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i, stripeExpressCheckoutComponent: a } = e,
        { variant: o } = n,
        { setCheckoutFooterContentNode: d } = (0, I.ck)(),
        { isExpressCheckoutEnabledForFooter: f, shouldExpressCheckoutBeVisible: h } = (0, S.t4)((e) => {
            let t = e.getExpressCheckoutVisibilityState();
            return {
                isExpressCheckoutEnabledForFooter: t.isExpressCheckoutEnabledForFooter,
                shouldExpressCheckoutBeVisible: t.shouldExpressCheckoutBeVisible,
            };
        }),
        p = (0, r.jsx)(y.p, { ...n, variant: o ?? "active", autoFocus: !0 }),
        m = f && null != a,
        g = m && h,
        _ = null != t,
        {
            direction: P,
            align: A,
            justify: R,
        } = l.useMemo(() => {
            let e = "end";
            return (
                _ && !g && (e = "space-between"),
                { direction: g ? "vertical" : "horizontal", align: g ? "stretch" : "center", justify: e }
            );
        }, [_, g]),
        M = _ ? (0, r.jsx)(C.A, { onClick: t }) : null;
    return (0, r.jsxs)(u.j, {
        children: [
            (0, r.jsx)("div", { ref: d, className: s()(x.K4, i) }),
            (0, r.jsxs)(c.B, {
                direction: P,
                align: A,
                justify: R,
                fullWidth: !0,
                padding: v,
                children: [
                    g ? null : M,
                    m ? (0, r.jsx)(E.Z, { stripeExpressCheckoutComponent: a, fallbackComponent: p }) : p,
                    g && null != M ? (0, r.jsx)("div", { className: x.aY, children: M }) : null,
                ],
            }),
        ],
    });
}
function M(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: s()(x.g4, t), children: (0, r.jsx)(_.I, {}) });
}
function T(e) {
    let { children: t, size: n = "md", maxHeight: l = "viewport", isModalContentLoading: i, ...s } = e;
    return (0, r.jsx)(I.e0, {
        children: (0, r.jsx)(o.d, {
            size: n,
            ...s,
            maxHeight: l,
            contentOutsideContainer: (0, r.jsx)(h.A, {}),
            children: i ? (0, r.jsx)(M, {}) : t,
        }),
    });
}
function L() {
    return (0, r.jsx)(T, { transitionState: d.ip.ENTERED, onClose: P.tEg, size: "md", isModalContentLoading: !0 });
}
function b(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: l,
        relocationCountryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: u,
        primaryButtonProps: c,
        children: d,
        ...h
    } = e;
    return (0, r.jsx)(I.e0, {
        children: (0, r.jsxs)(o.d, {
            ...h,
            children: [
                (0, r.jsx)(A, {
                    gradientColor: n,
                    title: t,
                    countryCode: l,
                    relocationCountryCode: i,
                    headerBadgeText: s,
                    headerBadgeIcon: a,
                }),
                (0, r.jsx)(f.c, { children: d }),
                (0, r.jsx)(R, { onBackClick: u, primaryButtonProps: c }),
            ],
        }),
    });
}
