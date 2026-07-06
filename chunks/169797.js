t.d(n, { DJ: () => B, Jg: () => N, lo: () => y, oH: () => A, s3: () => k });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(20742),
    c = t(364840),
    o = t(331322),
    d = t(224640),
    u = t(430993),
    x = t(289873),
    j = t(632088),
    h = t(500380),
    m = t(423764),
    g = t(683433),
    C = t(981036),
    p = t(725836),
    v = t(520149),
    f = t(857414);
function k(e) {
    let {
            gradientColor: n,
            title: t,
            headerBadgeVariant: i = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: c,
            countryCode: o,
            relocationCountryCode: d,
            ...u
        } = e,
        { checkoutHeaderConfigs: x } = (0, p.ck)(),
        j = r.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, h.t)(o) })),
            [o],
        ),
        g = r.useMemo(() => {
            if (null != s || null != x.headerBadgeText)
                return {
                    icon: x.headerBadgeIcon ?? c,
                    type: { text: x.headerBadgeText ?? s ?? "" },
                    variant: x.headerBadgeVariant ?? i,
                };
        }, [s, c, x.headerBadgeText, x.headerBadgeIcon, i, x.headerBadgeVariant]),
        C = null != o && null != d,
        k = r.useMemo(() => {
            if (!C && null != o) return { text: (0, m.j7)((0, m.ni)(o)), leadingIcon: j };
        }, [C, o, j]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.rQ, {
                ...u,
                badge: g,
                badgePosition: "end",
                gradientColor: n,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: k,
            }),
            C && (0, l.jsx)(v.w, { countryCode: o, relocationCountryCode: d }),
        ],
    });
}
let b = { top: 16, bottom: 8 };
function y(e) {
    let { onBackClick: n, primaryButtonProps: t, portalClassName: r } = e,
        { variant: i } = t,
        { setCheckoutFooterContentNode: a } = (0, p.ck)();
    return (0, l.jsxs)(c.j, {
        children: [
            (0, l.jsx)("div", { ref: a, className: s()(f.K4, r) }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != n ? "space-between" : "end",
                fullWidth: !0,
                padding: b,
                children: [
                    null != n ? (0, l.jsx)(g.A, { onClick: n }) : null,
                    (0, l.jsx)(C.p, { ...t, variant: i ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: s()(f.g4, n),
        children: (0, l.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS, itemClassName: f.Je }),
    });
}
function N(e) {
    let { children: n, size: t = "md", maxHeight: r = "viewport", isModalContentLoading: i, ...s } = e;
    return (0, l.jsx)(p.e0, {
        children: (0, l.jsx)(d.d, {
            size: t,
            ...s,
            maxHeight: r,
            contentOutsideContainer: (0, l.jsx)(j.A, {}),
            children: i ? (0, l.jsx)(B, {}) : n,
        }),
    });
}
function A(e) {
    let {
        title: n,
        gradientColor: t = "purple",
        countryCode: r,
        relocationCountryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: c,
        primaryButtonProps: o,
        children: x,
        ...j
    } = e;
    return (0, l.jsx)(p.e0, {
        children: (0, l.jsxs)(d.d, {
            ...j,
            children: [
                (0, l.jsx)(k, {
                    gradientColor: t,
                    title: n,
                    countryCode: r,
                    relocationCountryCode: i,
                    headerBadgeText: s,
                    headerBadgeIcon: a,
                }),
                (0, l.jsx)(u.c, { children: x }),
                (0, l.jsx)(y, { onBackClick: c, primaryButtonProps: o }),
            ],
        }),
    });
}
