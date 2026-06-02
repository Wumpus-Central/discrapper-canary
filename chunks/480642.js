r.d(t, { oH: () => P, s3: () => v, lo: () => w, Jg: () => x });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    i = r.n(l),
    u = r(20742),
    s = r(364840),
    o = r(331322),
    c = r(224640),
    d = r(430993),
    p = r(632088),
    f = r(500380),
    _ = r(423764),
    m = r(683433),
    h = r(981036),
    y = r(725836),
    I = r(834730),
    E = r(857414);
function S(e) {
    let { countryCode: t, relocationCountryCode: r } = e;
    return (0, n.jsxs)("div", {
        className: E.uL,
        children: [
            (0, n.jsx)("img", { alt: "", className: E.bI, src: (0, f.t)(t) }),
            (0, n.jsx)(I.E, { variant: "text-md/normal", color: "text-subtle", children: (0, _.j7)((0, _.ni)(t)) }),
            (0, n.jsx)(I.E, { variant: "text-md/normal", color: "text-subtle", className: E.B5, children: "\u2192" }),
            (0, n.jsx)("img", { alt: "", className: E.bI, src: (0, f.t)(r) }),
            (0, n.jsx)(I.E, { variant: "text-md/normal", color: "text-subtle", children: (0, _.j7)((0, _.ni)(r)) }),
        ],
    });
}
function v(e) {
    let {
            gradientColor: t,
            title: r,
            headerBadgeVariant: l = "expressive",
            headerBadgeText: i,
            headerBadgeIcon: s,
            countryCode: o,
            relocationCountryCode: c,
            ...d
        } = e,
        { checkoutHeaderConfigs: p } = (0, y.ck)(),
        m = a.useCallback(
            () => (null == o ? null : (0, n.jsx)("img", { alt: "", className: E.bI, src: (0, f.t)(o) })),
            [o],
        ),
        h = a.useMemo(() => {
            if (null != i || null != p.headerBadgeText)
                return {
                    icon: p.headerBadgeIcon ?? s,
                    type: { text: p.headerBadgeText ?? i ?? "" },
                    variant: p.headerBadgeVariant ?? l,
                };
        }, [i, s, p.headerBadgeText, p.headerBadgeIcon, l, p.headerBadgeVariant]),
        I = null != o && null != c,
        v = a.useMemo(() => {
            if (!I && null != o) return { text: (0, _.j7)((0, _.ni)(o)), leadingIcon: m };
        }, [I, o, m]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.rQ, {
                ...d,
                badge: h,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: r,
                subtitle: v,
            }),
            I && (0, n.jsx)(S, { countryCode: o, relocationCountryCode: c }),
        ],
    });
}
let C = { top: 16, bottom: 8 };
function w(e) {
    let { onBackClick: t, primaryButtonProps: r, portalClassName: a } = e,
        { variant: l } = r,
        { setCheckoutFooterContentNode: u } = (0, y.ck)();
    return (0, n.jsxs)(s.j, {
        children: [
            (0, n.jsx)("div", { ref: u, className: i()(E.K4, a) }),
            (0, n.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: C,
                children: [
                    null != t ? (0, n.jsx)(m.A, { onClick: t }) : null,
                    (0, n.jsx)(h.p, { ...r, variant: l ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { children: t, size: r = "md", maxHeight: a = "viewport", ...l } = e;
    return (0, n.jsx)(c.d, { size: r, ...l, maxHeight: a, contentOutsideContainer: (0, n.jsx)(p.A, {}), children: t });
}
function P(e) {
    let {
        title: t,
        gradientColor: r = "purple",
        countryCode: a,
        relocationCountryCode: l,
        headerBadgeText: i,
        headerBadgeIcon: u,
        onBackClick: s,
        primaryButtonProps: o,
        children: p,
        ...f
    } = e;
    return (0, n.jsx)(y.e0, {
        children: (0, n.jsxs)(c.d, {
            ...f,
            children: [
                (0, n.jsx)(v, {
                    gradientColor: r,
                    title: t,
                    countryCode: a,
                    relocationCountryCode: l,
                    headerBadgeText: i,
                    headerBadgeIcon: u,
                }),
                (0, n.jsx)(d.c, { children: p }),
                (0, n.jsx)(w, { onBackClick: s, primaryButtonProps: o }),
            ],
        }),
    });
}
