t.d(n, { DJ: () => T, Jg: () => I, KT: () => A, lo: () => N, oH: () => w, s3: () => y });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(20742),
    o = t(364840),
    d = t(331322),
    c = t(224640),
    u = t(430993),
    x = t(289873),
    j = t(231723),
    h = t(632088),
    g = t(500380),
    m = t(423764),
    C = t(683433),
    p = t(981036),
    v = t(725836),
    f = t(520149),
    k = t(652215),
    b = t(857414);
function y(e) {
    let {
            gradientColor: n,
            title: t,
            headerBadgeVariant: r = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: o,
            countryCode: d,
            relocationCountryCode: c,
            ...u
        } = e,
        { checkoutHeaderConfigs: x } = (0, v.ck)(),
        j = i.useCallback(
            () => (null == d ? null : (0, l.jsx)("img", { alt: "", className: b.bI, src: (0, g.t)(d) })),
            [d],
        ),
        h = i.useMemo(() => {
            if (null != s || null != x.headerBadgeText)
                return {
                    icon: x.headerBadgeIcon ?? o,
                    type: { text: x.headerBadgeText ?? s ?? "" },
                    variant: x.headerBadgeVariant ?? r,
                };
        }, [s, o, x.headerBadgeText, x.headerBadgeIcon, r, x.headerBadgeVariant]),
        C = null != d && null != c,
        p = i.useMemo(() => {
            if (!C && null != d) return { text: (0, m.j7)((0, m.ni)(d)), leadingIcon: j };
        }, [C, d, j]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.rQ, {
                ...u,
                badge: h,
                badgePosition: "end",
                gradientColor: n,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: p,
            }),
            C && (0, l.jsx)(f.w, { countryCode: d, relocationCountryCode: c }),
        ],
    });
}
let B = { top: 16, bottom: 8 };
function N(e) {
    let { onBackClick: n, primaryButtonProps: t, portalClassName: i } = e,
        { variant: r } = t,
        { setCheckoutFooterContentNode: a } = (0, v.ck)();
    return (0, l.jsxs)(o.j, {
        children: [
            (0, l.jsx)("div", { ref: a, className: s()(b.K4, i) }),
            (0, l.jsxs)(d.B, {
                direction: "horizontal",
                align: "center",
                justify: null != n ? "space-between" : "end",
                fullWidth: !0,
                padding: B,
                children: [
                    null != n ? (0, l.jsx)(C.A, { onClick: n }) : null,
                    (0, l.jsx)(p.p, { ...t, variant: r ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: s()(b.g4, n),
        children: (0, l.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS, itemClassName: b.Je }),
    });
}
function I(e) {
    let { children: n, size: t = "md", maxHeight: i = "viewport", isModalContentLoading: r, ...s } = e;
    return (0, l.jsx)(v.e0, {
        children: (0, l.jsx)(c.d, {
            size: t,
            ...s,
            maxHeight: i,
            contentOutsideContainer: (0, l.jsx)(h.A, {}),
            children: r ? (0, l.jsx)(T, {}) : n,
        }),
    });
}
function A() {
    return (0, l.jsx)(I, { transitionState: j.ip.ENTERED, onClose: k.tEg, size: "md", isModalContentLoading: !0 });
}
function w(e) {
    let {
        title: n,
        gradientColor: t = "purple",
        countryCode: i,
        relocationCountryCode: r,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: o,
        primaryButtonProps: d,
        children: x,
        ...j
    } = e;
    return (0, l.jsx)(v.e0, {
        children: (0, l.jsxs)(c.d, {
            ...j,
            children: [
                (0, l.jsx)(y, {
                    gradientColor: t,
                    title: n,
                    countryCode: i,
                    relocationCountryCode: r,
                    headerBadgeText: s,
                    headerBadgeIcon: a,
                }),
                (0, l.jsx)(u.c, { children: x }),
                (0, l.jsx)(N, { onBackClick: o, primaryButtonProps: d }),
            ],
        }),
    });
}
