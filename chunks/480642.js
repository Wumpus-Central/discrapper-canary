t.d(e, { KT: () => y, oH: () => P, s3: () => I, lo: () => R, DJ: () => L, Jg: () => T });
var l = t(477900),
    n = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(20742),
    c = t(364840),
    o = t(331322),
    h = t(224640),
    d = t(430993),
    u = t(289873),
    m = t(231723),
    p = t(632088),
    x = t(500380),
    E = t(423764),
    j = t(683433),
    v = t(981036),
    A = t(725836),
    C = t(834730),
    f = t(834334);
function g(a) {
    let { countryCode: e, relocationCountryCode: t } = a;
    return (0, l.jsxs)("div", {
        className: f.uL,
        children: [
            (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(e) }),
            (0, l.jsx)(C.E, { variant: "text-md/normal", color: "text-subtle", children: (0, E.j7)((0, E.ni)(e)) }),
            (0, l.jsx)(C.E, { variant: "text-md/normal", color: "text-subtle", className: f.B5, children: "\u2192" }),
            (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(t) }),
            (0, l.jsx)(C.E, { variant: "text-md/normal", color: "text-subtle", children: (0, E.j7)((0, E.ni)(t)) }),
        ],
    });
}
var b = t(652215);
function I(a) {
    let {
            gradientColor: e,
            title: t,
            headerBadgeVariant: i = "expressive",
            headerBadgeText: r,
            headerBadgeIcon: c,
            countryCode: o,
            relocationCountryCode: h,
            ...d
        } = a,
        u = n.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(o) })),
            [o],
        ),
        m = n.useMemo(() => {
            if (null != r) return { icon: c, type: { text: r ?? "" }, variant: i };
        }, [r, c, i]),
        p = null != o && null != h,
        j = n.useMemo(() => {
            if (!p && null != o) return { text: (0, E.j7)((0, E.ni)(o)), leadingIcon: u };
        }, [p, o, u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.rQ, {
                ...d,
                badge: m,
                badgePosition: "end",
                gradientColor: e,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: j,
            }),
            p && (0, l.jsx)(g, { countryCode: o, relocationCountryCode: h }),
        ],
    });
}
let M = { top: 16, bottom: 8 };
function R(a) {
    let { onBackClick: e, primaryButtonProps: t, portalClassName: n } = a,
        { variant: i } = t,
        { setCheckoutFooterContentNode: s } = (0, A.ck)();
    return (0, l.jsxs)(c.j, {
        children: [
            (0, l.jsx)("div", { ref: s, className: r()(f.K4, n) }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != e ? "space-between" : "end",
                fullWidth: !0,
                padding: M,
                children: [
                    null != e ? (0, l.jsx)(j.A, { onClick: e }) : null,
                    (0, l.jsx)(v.p, { ...t, variant: i ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function L(a) {
    let { className: e } = a;
    return (0, l.jsx)("div", {
        className: r()(f.g4, e),
        children: (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, itemClassName: f.Je }),
    });
}
function T(a) {
    let { children: e, size: t = "md", maxHeight: n = "viewport", isModalContentLoading: i, ...r } = a;
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(h.d, {
            size: t,
            ...r,
            maxHeight: n,
            contentOutsideContainer: (0, l.jsx)(p.A, {}),
            children: i ? (0, l.jsx)(L, {}) : e,
        }),
    });
}
function y() {
    return (0, l.jsx)(T, { transitionState: m.ip.ENTERED, onClose: b.tEg, size: "md", isModalContentLoading: !0 });
}
function P(a) {
    let {
        title: e,
        gradientColor: t = "purple",
        countryCode: n,
        relocationCountryCode: i,
        headerBadgeText: r,
        headerBadgeIcon: s,
        onBackClick: c,
        primaryButtonProps: o,
        children: u,
        ...m
    } = a;
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsxs)(h.d, {
            ...m,
            children: [
                (0, l.jsx)(I, {
                    gradientColor: t,
                    title: e,
                    countryCode: n,
                    relocationCountryCode: i,
                    headerBadgeText: r,
                    headerBadgeIcon: s,
                }),
                (0, l.jsx)(d.c, { children: u }),
                (0, l.jsx)(R, { onBackClick: c, primaryButtonProps: o }),
            ],
        }),
    });
}
