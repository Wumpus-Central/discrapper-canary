"use strict";
n.d(t, { V6: () => R, rQ: () => y, s_: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(508770),
    u = n(815021),
    d = n(315629),
    c = n(608250),
    _ = n(978495),
    f = n(534514),
    E = n(911608),
    h = n(331322),
    p = n(834730),
    m = n(22856),
    g = n(967744);
function A(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, m.k)();
    return !1 === n ? null : (0, r.jsx)(u.J, { onClick: i, variant: t ? "color-mix" : void 0 });
}
function I(e) {
    let { leading: t, trailing: n, hasGradient: i, children: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t && (0, r.jsx)("div", { className: g.headerLeading, children: t }),
            s,
            (0, r.jsxs)("div", {
                className: g.headerTrailing,
                children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: i })],
            }),
        ],
    });
}
function T(e) {
    let { leading: t, trailing: n, hasGradient: i, children: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t && (0, r.jsx)("div", { className: a()(g.headerLeading, g.headerLeadingAbsolute), children: t }),
            s,
            (0, r.jsxs)("div", {
                className: a()(g.headerTrailing, g.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: i })],
            }),
        ],
    });
}
function S(e) {
    let { leading: t, trailing: n, hasGradient: s, children: o } = e,
        [l, u] = i.useState(24),
        [d, c] = i.useState(24),
        _ = i.useRef(null),
        f = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                c(Math.ceil(t)), u(Math.ceil(e));
            });
            return (
                null != _.current && e.observe(_.current),
                null != f.current && e.observe(f.current),
                () => e.disconnect()
            );
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { ref: _, className: a()(g.headerLeading, g.headerLeadingAbsolute), children: t }),
                (0, r.jsx)("div", { className: g.headerLeadingSpacer, style: { height: l, width: d } }),
                o,
                (0, r.jsx)("div", { className: g.headerTrailingSpacer, style: { height: l, width: d } }),
                (0, r.jsxs)("div", {
                    ref: f,
                    className: a()(g.headerTrailing, g.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: s })],
                }),
            ],
        })
    );
}
function y(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            badgePosition: s = "top",
            title: o,
            titleTextVariant: l,
            subtitle: u,
            alignCenter: p = !1,
            leading: A,
            trailing: y,
            progressBarProps: R,
        } = e,
        { headingId: v } = (0, m.k)(),
        C = null != t,
        b = (0, _.Oy)(n),
        D =
            null != n &&
            (0, r.jsx)("div", {
                className: a()(g.headerGraphic, { [g.headerGraphicAnimated]: b }),
                children: (0, r.jsx)("div", {
                    className: g.headerGraphicContainer,
                    children: (0, r.jsx)(c.v, { ...n }),
                }),
            }),
        L = (0, r.jsx)(f.D, {
            className: g.headerTitle,
            id: v,
            variant: l ?? "heading-lg/semibold",
            color: "text-strong",
            children: o,
        });
    "end" === s &&
        (L = (0, r.jsxs)(h.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [L, (0, r.jsx)(N, { badge: i, position: s })],
        }));
    let w = null != n ? D : L,
        M = (0, r.jsx)("header", {
            className: a()(g.section, g.header, { [g.headerCentered]: p }),
            children: (0, r.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: g.headerLayout,
                        children: (0, r.jsx)(p ? (b ? T : S) : I, {
                            leading: A,
                            trailing: y,
                            hasGradient: C,
                            children: (0, r.jsxs)("div", {
                                className: g.headerMain,
                                children: [
                                    null != R &&
                                        (0, r.jsx)("div", {
                                            className: g.headerStepIndicator,
                                            children: (0, r.jsx)(E.z, { ...R }),
                                        }),
                                    w,
                                ],
                            }),
                        }),
                    }),
                    "top" === s && (0, r.jsx)(N, { badge: i, position: s }),
                    null != n && null != o && L,
                    null != u && (0, r.jsx)(O, { subtitle: u }),
                ],
            }),
        });
    return C ? (0, r.jsx)(d.h, { color: t, className: g.headerGradient, children: M }) : M;
}
function N(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let i = (0, l.U)(t);
    return (0, r.jsx)("div", {
        className: g.headerBadge,
        "data-position": n,
        children: (0, r.jsx)(l.E, { variant: "brand", ...i }),
    });
}
function O(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, r.jsx)(p.E, {
            className: g.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, r.jsxs)("div", {
        className: g.headerSubtitleWrapper,
        children: [
            null != i && (0, r.jsx)(i, { className: g.headerSubtitleIcon, color: o.A.colors.TEXT_SUBTLE, size: "sm" }),
            n,
        ],
    });
}
function R(e) {
    let { gradientColor: t, graphic: n, badge: i, title: s, subtitle: a, ...o } = e;
    return (0, r.jsx)(y, {
        ...o,
        gradientColor: t,
        graphic: n,
        badge: i,
        title: s,
        titleTextVariant: "heading-xl/semibold",
        subtitle: a,
        alignCenter: !0,
    });
}
