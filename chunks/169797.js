n.d(t, { Jg: () => O, lo: () => m, oH: () => _, s3: () => S });
var r = n(627968),
    l = n(64700),
    u = n(503698),
    a = n.n(u),
    i = n(20742),
    s = n(364840),
    o = n(331322),
    d = n(224640),
    c = n(430993),
    f = n(500380),
    h = n(518977),
    A = n(683433),
    E = n(981036),
    b = n(725836),
    I = n(520149),
    N = n(857414);
function S(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeText: u,
            headerBadgeIcon: a,
            countryCode: s,
            relocationCountryCode: o,
            ...d
        } = e,
        { checkoutHeaderConfigs: c } = (0, b.ck)(),
        A = l.useCallback(
            () => (null == s ? null : (0, r.jsx)("img", { alt: "", className: N.bI, src: (0, f.t)(s) })),
            [s],
        ),
        E = l.useMemo(() => {
            if (null != u || null != c.headerBadgeText)
                return {
                    icon: c.headerBadgeIcon ?? a,
                    type: { text: c.headerBadgeText ?? u ?? "" },
                    variant: "expressive",
                };
        }, [u, a, c.headerBadgeText, c.headerBadgeIcon]),
        S = null != s && null != o,
        T = l.useMemo(() => {
            if (!S && null != s) return { text: (0, h.j7)((0, h.ni)(s)), leadingIcon: A };
        }, [S, s, A]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.rQ, {
                ...d,
                badge: E,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: T,
            }),
            S && (0, r.jsx)(I.w, { countryCode: s, relocationCountryCode: o }),
        ],
    });
}
let T = { top: 16, bottom: 8 };
function m(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: l } = e,
        { variant: u } = n,
        { setCheckoutFooterContentNode: i } = (0, b.ck)();
    return (0, r.jsxs)(s.j, {
        children: [
            (0, r.jsx)("div", { ref: i, className: a()(N.K4, l) }),
            (0, r.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: T,
                children: [
                    null != t ? (0, r.jsx)(A.A, { onClick: t }) : null,
                    (0, r.jsx)(E.p, { ...n, variant: u ?? "active" }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { children: t, size: n = "md", maxHeight: l = "viewport", ...u } = e;
    return (0, r.jsx)(d.d, { size: n, ...u, maxHeight: l, children: t });
}
function _(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: l,
        relocationCountryCode: u,
        headerBadgeText: a,
        headerBadgeIcon: i,
        onBackClick: s,
        primaryButtonProps: o,
        children: f,
        ...h
    } = e;
    return (0, r.jsx)(b.e0, {
        children: (0, r.jsxs)(d.d, {
            ...h,
            children: [
                (0, r.jsx)(S, {
                    gradientColor: n,
                    title: t,
                    countryCode: l,
                    relocationCountryCode: u,
                    headerBadgeText: a,
                    headerBadgeIcon: i,
                }),
                (0, r.jsx)(c.c, { children: f }),
                (0, r.jsx)(m, { onBackClick: s, primaryButtonProps: o }),
            ],
        }),
    });
}
