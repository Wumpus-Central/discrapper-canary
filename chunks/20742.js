"use strict";
n.d(t, { V6: () => C, rQ: () => y, s_: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(508770),
    u = n(815021),
    c = n(315629),
    d = n(353795),
    _ = n(978495),
    h = n(534514),
    f = n(911608),
    p = n(331322),
    E = n(834730),
    m = n(22856),
    g = n(967744);
function A(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: r } = (0, m.k)();
    return !1 === n ? null : (0, i.jsx)(u.J, { onClick: r, variant: t ? "color-mix" : void 0 });
}
function I(e) {
    let { leading: t, trailing: n, hasGradient: r, children: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t && (0, i.jsx)("div", { className: g.headerLeading, children: t }),
            s,
            (0, i.jsxs)("div", {
                className: g.headerTrailing,
                children: [null != n && n, (0, i.jsx)(A, { shouldColorMix: r })],
            }),
        ],
    });
}
function T(e) {
    let { leading: t, trailing: n, hasGradient: r, children: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t && (0, i.jsx)("div", { className: a()(g.headerLeading, g.headerLeadingAbsolute), children: t }),
            s,
            (0, i.jsxs)("div", {
                className: a()(g.headerTrailing, g.headerTrailingAbsolute),
                children: [null != n && n, (0, i.jsx)(A, { shouldColorMix: r })],
            }),
        ],
    });
}
function S(e) {
    let { leading: t, trailing: n, hasGradient: s, children: o } = e,
        [l, u] = r.useState(24),
        [c, d] = r.useState(24),
        _ = r.useRef(null),
        h = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != h && null != h.current) {
                    let n = h.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                d(Math.ceil(t)), u(Math.ceil(e));
            });
            return (
                null != _.current && e.observe(_.current),
                null != h.current && e.observe(h.current),
                () => e.disconnect()
            );
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: _, className: a()(g.headerLeading, g.headerLeadingAbsolute), children: t }),
                (0, i.jsx)("div", { className: g.headerLeadingSpacer, style: { height: l, width: c } }),
                o,
                (0, i.jsx)("div", { className: g.headerTrailingSpacer, style: { height: l, width: c } }),
                (0, i.jsxs)("div", {
                    ref: h,
                    className: a()(g.headerTrailing, g.headerTrailingAbsolute),
                    children: [null != n && n, (0, i.jsx)(A, { shouldColorMix: s })],
                }),
            ],
        })
    );
}
function y(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: r,
            badgePosition: s = "top",
            title: o,
            titleTextVariant: l,
            subtitle: u,
            alignCenter: E = !1,
            leading: A,
            trailing: y,
            progressBarProps: C,
        } = e,
        { headingId: R } = (0, m.k)(),
        O = null != t,
        b = (0, _.Oy)(n),
        D =
            null != n &&
            (0, i.jsx)("div", {
                className: a()(g.headerGraphic, { [g.headerGraphicAnimated]: b }),
                children: (0, i.jsx)("div", {
                    className: g.headerGraphicContainer,
                    children: (0, i.jsx)(d.v, { ...n }),
                }),
            }),
        L = (0, i.jsx)(h.D, {
            className: g.headerTitle,
            id: R,
            variant: l ?? "heading-lg/semibold",
            color: "text-strong",
            children: o,
        });
    "end" === s &&
        (L = (0, i.jsxs)(p.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [L, (0, i.jsx)(N, { badge: r, position: s })],
        }));
    let w = null != n ? D : L,
        M = (0, i.jsx)("header", {
            className: a()(g.section, g.header, { [g.headerCentered]: E }),
            children: (0, i.jsxs)(p.B, {
                gap: 8,
                children: [
                    (0, i.jsx)("div", {
                        className: g.headerLayout,
                        children: (0, i.jsx)(E ? (b ? T : S) : I, {
                            leading: A,
                            trailing: y,
                            hasGradient: O,
                            children: (0, i.jsxs)("div", {
                                className: g.headerMain,
                                children: [
                                    null != C &&
                                        (0, i.jsx)("div", {
                                            className: g.headerStepIndicator,
                                            children: (0, i.jsx)(f.z, { ...C }),
                                        }),
                                    w,
                                ],
                            }),
                        }),
                    }),
                    "top" === s && (0, i.jsx)(N, { badge: r, position: s }),
                    null != n && null != o && L,
                    null != u && (0, i.jsx)(v, { subtitle: u }),
                ],
            }),
        });
    return O ? (0, i.jsx)(c.h, { color: t, className: g.headerGradient, children: M }) : M;
}
function N(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let r = (0, l.U)(t);
    return (0, i.jsx)("div", {
        className: g.headerBadge,
        "data-position": n,
        children: (0, i.jsx)(l.E, { variant: "brand", ...r }),
    });
}
function v(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, i.jsx)(E.E, {
            className: g.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        r = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, i.jsxs)("div", {
        className: g.headerSubtitleWrapper,
        children: [
            null != r && (0, i.jsx)(r, { className: g.headerSubtitleIcon, color: o.A.colors.TEXT_SUBTLE, size: "sm" }),
            n,
        ],
    });
}
function C(e) {
    let { gradientColor: t, graphic: n, badge: r, title: s, subtitle: a, ...o } = e;
    return (0, i.jsx)(y, {
        ...o,
        gradientColor: t,
        graphic: n,
        badge: r,
        title: s,
        titleTextVariant: "heading-xl/semibold",
        subtitle: a,
        alignCenter: !0,
    });
}
