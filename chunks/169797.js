t.d(n, { DJ: () => I, Jg: () => T, KT: () => w, lo: () => A, oH: () => E, s3: () => y });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    o = t(20742),
    a = t(364840),
    c = t(331322),
    u = t(224640),
    d = t(430993),
    x = t(289873),
    j = t(231723),
    h = t(632088),
    m = t(500380),
    C = t(423764),
    g = t(683433),
    p = t(981036),
    v = t(725836),
    f = t(520149),
    k = t(652215),
    b = t(857414);
function y(e) {
    let {
            gradientColor: n,
            title: t,
            headerBadgeVariant: s = "expressive",
            headerBadgeText: r,
            headerBadgeIcon: a,
            countryCode: c,
            relocationCountryCode: u,
            ...d
        } = e,
        x = i.useCallback(
            () => (null == c ? null : (0, l.jsx)("img", { alt: "", className: b.bI, src: (0, m.t)(c) })),
            [c],
        ),
        j = i.useMemo(() => {
            if (null != r) return { icon: a, type: { text: r ?? "" }, variant: s };
        }, [r, a, s]),
        h = null != c && null != u,
        g = i.useMemo(() => {
            if (!h && null != c) return { text: (0, C.j7)((0, C.ni)(c)), leadingIcon: x };
        }, [h, c, x]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.rQ, {
                ...d,
                badge: j,
                badgePosition: "end",
                gradientColor: n,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: g,
            }),
            h && (0, l.jsx)(f.w, { countryCode: c, relocationCountryCode: u }),
        ],
    });
}
let N = { top: 16, bottom: 8 };
function A(e) {
    let { onBackClick: n, primaryButtonProps: t, portalClassName: i } = e,
        { variant: s } = t,
        { setCheckoutFooterContentNode: o } = (0, v.ck)();
    return (0, l.jsxs)(a.j, {
        children: [
            (0, l.jsx)("div", { ref: o, className: r()(b.K4, i) }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                justify: null != n ? "space-between" : "end",
                fullWidth: !0,
                padding: N,
                children: [
                    null != n ? (0, l.jsx)(g.A, { onClick: n }) : null,
                    (0, l.jsx)(p.p, { ...t, variant: s ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: r()(b.g4, n),
        children: (0, l.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS, itemClassName: b.Je }),
    });
}
function T(e) {
    let { children: n, size: t = "md", maxHeight: i = "viewport", isModalContentLoading: s, ...r } = e;
    return (0, l.jsx)(v.e0, {
        children: (0, l.jsx)(u.d, {
            size: t,
            ...r,
            maxHeight: i,
            contentOutsideContainer: (0, l.jsx)(h.A, {}),
            children: s ? (0, l.jsx)(I, {}) : n,
        }),
    });
}
function w() {
    return (0, l.jsx)(T, { transitionState: j.ip.ENTERED, onClose: k.tEg, size: "md", isModalContentLoading: !0 });
}
function E(e) {
    let {
        title: n,
        gradientColor: t = "purple",
        countryCode: i,
        relocationCountryCode: s,
        headerBadgeText: r,
        headerBadgeIcon: o,
        onBackClick: a,
        primaryButtonProps: c,
        children: x,
        ...j
    } = e;
    return (0, l.jsx)(v.e0, {
        children: (0, l.jsxs)(u.d, {
            ...j,
            children: [
                (0, l.jsx)(y, {
                    gradientColor: t,
                    title: n,
                    countryCode: i,
                    relocationCountryCode: s,
                    headerBadgeText: r,
                    headerBadgeIcon: o,
                }),
                (0, l.jsx)(d.c, { children: x }),
                (0, l.jsx)(A, { onBackClick: a, primaryButtonProps: c }),
            ],
        }),
    });
}
