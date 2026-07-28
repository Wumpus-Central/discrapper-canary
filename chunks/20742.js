"use strict";
n.d(t, { V6: () => R, rQ: () => N, s_: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(508770),
    d = n(815021),
    c = n(315629),
    u = n(353795),
    _ = n(978495),
    E = n(297264),
    A = n(911608),
    h = n(331322),
    I = n(834730),
    f = n(22856),
    p = n(617736);
function T(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: r } = (0, f.k)();
    return !1 === n ? null : (0, i.jsx)(d.J, { onClick: r, variant: t ? "color-mix" : void 0 });
}
function m(e) {
    let { leading: t, trailing: n, hasGradient: r, children: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t && (0, i.jsx)("div", { className: p.headerLeading, children: t }),
            a,
            (0, i.jsxs)("div", {
                className: p.headerTrailing,
                children: [null != n && n, (0, i.jsx)(T, { shouldColorMix: r })],
            }),
        ],
    });
}
function g(e) {
    let { leading: t, trailing: n, hasGradient: r, children: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t && (0, i.jsx)("div", { className: s()(p.headerLeading, p.headerLeadingAbsolute), children: t }),
            a,
            (0, i.jsxs)("div", {
                className: s()(p.headerTrailing, p.headerTrailingAbsolute),
                children: [null != n && n, (0, i.jsx)(T, { shouldColorMix: r })],
            }),
        ],
    });
}
function S(e) {
    let { leading: t, trailing: n, hasGradient: a, children: l } = e,
        [o, d] = r.useState(24),
        [c, u] = r.useState(24),
        _ = r.useRef(null),
        E = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != E && null != E.current) {
                    let n = E.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                u(Math.ceil(t)), d(Math.ceil(e));
            });
            return (
                null != _.current && e.observe(_.current),
                null != E.current && e.observe(E.current),
                () => e.disconnect()
            );
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: _, className: s()(p.headerLeading, p.headerLeadingAbsolute), children: t }),
                (0, i.jsx)("div", { className: p.headerLeadingSpacer, style: { height: o, width: c } }),
                l,
                (0, i.jsx)("div", { className: p.headerTrailingSpacer, style: { height: o, width: c } }),
                (0, i.jsxs)("div", {
                    ref: E,
                    className: s()(p.headerTrailing, p.headerTrailingAbsolute),
                    children: [null != n && n, (0, i.jsx)(T, { shouldColorMix: a })],
                }),
            ],
        })
    );
}
function N(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: r,
            badgePosition: a = "top",
            title: l,
            titleTextVariant: o,
            subtitle: d,
            alignCenter: I = !1,
            leading: T,
            trailing: N,
            progressBarProps: R,
        } = e,
        { headingId: L } = (0, f.k)(),
        y = null != t,
        D = (0, _.Oy)(n),
        v =
            null != n &&
            (0, i.jsx)("div", {
                className: s()(p.headerGraphic, { [p.headerGraphicAnimated]: D }),
                children: (0, i.jsx)("div", {
                    className: p.headerGraphicContainer,
                    children: (0, i.jsx)(u.v, { ...n }),
                }),
            }),
        b = (0, i.jsx)(E.D, {
            className: p.headerTitle,
            id: L,
            variant: o ?? "heading-lg/semibold",
            color: "text-strong",
            children: l,
        });
    "end" === a &&
        (b = (0, i.jsxs)(h.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [b, (0, i.jsx)(C, { badge: r, position: a })],
        }));
    let M = null != n ? v : b,
        P = (0, i.jsx)("header", {
            className: s()(p.section, p.header, { [p.headerCentered]: I }),
            children: (0, i.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, i.jsx)("div", {
                        className: p.headerLayout,
                        children: (0, i.jsx)(I ? (D ? g : S) : m, {
                            leading: T,
                            trailing: N,
                            hasGradient: y,
                            children: (0, i.jsxs)("div", {
                                className: p.headerMain,
                                children: [
                                    null != R &&
                                        (0, i.jsx)("div", {
                                            className: p.headerStepIndicator,
                                            children: (0, i.jsx)(A.z, { ...R }),
                                        }),
                                    M,
                                ],
                            }),
                        }),
                    }),
                    "top" === a && (0, i.jsx)(C, { badge: r, position: a }),
                    null != n && null != l && b,
                    null != d && (0, i.jsx)(O, { subtitle: d }),
                ],
            }),
        });
    return y ? (0, i.jsx)(c.h, { color: t, className: p.headerGradient, children: P }) : P;
}
function C(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let r = (0, o.U)(t);
    return (0, i.jsx)("div", {
        className: p.headerBadge,
        "data-position": n,
        children: (0, i.jsx)(o.E, { variant: "brand", ...r }),
    });
}
function O(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, i.jsx)(I.E, {
            className: p.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        r = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, i.jsxs)("div", {
        className: p.headerSubtitleWrapper,
        children: [
            null != r && (0, i.jsx)(r, { className: p.headerSubtitleIcon, color: l.A.colors.TEXT_SUBTLE, size: "sm" }),
            n,
        ],
    });
}
function R(e) {
    let { gradientColor: t, graphic: n, badge: r, title: a, subtitle: s, ...l } = e;
    return (0, i.jsx)(N, {
        ...l,
        gradientColor: t,
        graphic: n,
        badge: r,
        title: a,
        titleTextVariant: "heading-xl/semibold",
        subtitle: s,
        alignCenter: !0,
    });
}
