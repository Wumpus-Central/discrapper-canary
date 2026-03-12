"use strict";
n.d(t, { V6: () => C, rQ: () => y, s_: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(508770),
    u = n(815021),
    c = n(315629),
    d = n(608250),
    _ = n(978495),
    f = n(534514),
    p = n(911608),
    h = n(331322),
    m = n(834730),
    E = n(22856),
    g = n(52379);
function A(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, E.k)();
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
        [c, d] = i.useState(24),
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
                d(Math.ceil(t)), u(Math.ceil(e));
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
                (0, r.jsx)("div", { className: g.headerLeadingSpacer, style: { height: l, width: c } }),
                o,
                (0, r.jsx)("div", { className: g.headerTrailingSpacer, style: { height: l, width: c } }),
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
            alignCenter: m = !1,
            leading: A,
            trailing: y,
            progressBarProps: C,
        } = e,
        { headingId: R } = (0, E.k)(),
        O = null != t,
        b = (0, _.Oy)(n),
        D = m ? (b ? T : S) : I,
        L =
            null != n &&
            (0, r.jsx)("div", {
                className: a()(g.headerGraphic, { [g.headerGraphicAnimated]: b }),
                children: (0, r.jsx)("div", {
                    className: g.headerGraphicContainer,
                    children: (0, r.jsx)(d.v, { ...n }),
                }),
            }),
        w = (0, r.jsx)(f.D, {
            className: g.headerTitle,
            id: R,
            variant: l ?? "heading-lg/semibold",
            color: "text-strong",
            children: o,
        });
    "end" === s &&
        (w = (0, r.jsxs)(h.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [w, (0, r.jsx)(v, { badge: i, position: s })],
        }));
    let M = null != n ? L : w,
        x = (0, r.jsx)("header", {
            className: a()(g.section, g.header, { [g.headerCentered]: m }),
            children: (0, r.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: g.headerLayout,
                        children: (0, r.jsx)(D, {
                            leading: A,
                            trailing: y,
                            hasGradient: O,
                            children: (0, r.jsxs)("div", {
                                className: g.headerMain,
                                children: [
                                    null != C &&
                                        (0, r.jsx)("div", {
                                            className: g.headerStepIndicator,
                                            children: (0, r.jsx)(p.z, { ...C }),
                                        }),
                                    M,
                                ],
                            }),
                        }),
                    }),
                    "top" === s && (0, r.jsx)(v, { badge: i, position: s }),
                    null != n && null != o && w,
                    null != u && (0, r.jsx)(N, { subtitle: u }),
                ],
            }),
        });
    return O ? (0, r.jsx)(c.h, { color: t, className: g.headerGradient, children: x }) : x;
}
function v(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let i = (0, l.U)(t);
    return (0, r.jsx)("div", {
        className: g.headerBadge,
        "data-position": n,
        children: (0, r.jsx)(l.E, { variant: "brand", ...i }),
    });
}
function N(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, r.jsx)(m.E, {
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
function C(e) {
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
