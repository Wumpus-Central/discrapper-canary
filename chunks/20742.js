"use strict";
n.d(t, { V6: () => b, rQ: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(22856),
    E = n(22789);
function A(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, g.k)();
    return !1 === n ? null : (0, r.jsx)(u.J, { onClick: i, variant: t ? "color-mix" : void 0 });
}
function I(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t && (0, r.jsx)("div", { className: E.headerLeading, children: t }),
            a,
            (0, r.jsxs)("div", {
                className: E.headerTrailing,
                children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: i })],
            }),
        ],
    });
}
function T(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t && (0, r.jsx)("div", { className: s()(E.headerLeading, E.headerLeadingAbsolute), children: t }),
            a,
            (0, r.jsxs)("div", {
                className: s()(E.headerTrailing, E.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: i })],
            }),
        ],
    });
}
function y(e) {
    let { leading: t, trailing: n, hasGradient: a, children: o } = e,
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
                (0, r.jsx)("div", { ref: _, className: s()(E.headerLeading, E.headerLeadingAbsolute), children: t }),
                (0, r.jsx)("div", { className: E.headerLeadingSpacer, style: { height: l, width: c } }),
                o,
                (0, r.jsx)("div", { className: E.headerTrailingSpacer, style: { height: l, width: c } }),
                (0, r.jsxs)("div", {
                    ref: f,
                    className: s()(E.headerTrailing, E.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(A, { shouldColorMix: a })],
                }),
            ],
        })
    );
}
function S(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            badgePosition: a = "top",
            title: o,
            titleTextVariant: l,
            subtitle: u,
            alignCenter: m = !1,
            leading: A,
            trailing: S,
            progressBarProps: b,
        } = e,
        { headingId: N } = (0, g.k)(),
        R = null != t,
        O = (0, _.Oy)(n),
        D = m ? (O ? T : y) : I,
        L =
            null != n &&
            (0, r.jsx)("div", {
                className: s()(E.headerGraphic, { [E.headerGraphicAnimated]: O }),
                children: (0, r.jsx)("div", {
                    className: E.headerGraphicContainer,
                    children: (0, r.jsx)(d.v, { ...n }),
                }),
            }),
        w = (0, r.jsx)(f.D, {
            className: E.headerTitle,
            id: N,
            variant: l ?? "heading-lg/semibold",
            color: "text-strong",
            children: o,
        });
    "end" === a &&
        (w = (0, r.jsxs)(h.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [w, (0, r.jsx)(v, { badge: i, position: a })],
        }));
    let x = null != n ? L : w,
        P = (0, r.jsx)("header", {
            className: s()(E.section, E.header, { [E.headerCentered]: m }),
            children: (0, r.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: E.headerLayout,
                        children: (0, r.jsx)(D, {
                            leading: A,
                            trailing: S,
                            hasGradient: R,
                            children: (0, r.jsxs)("div", {
                                className: E.headerMain,
                                children: [
                                    null != b &&
                                        (0, r.jsx)("div", {
                                            className: E.headerStepIndicator,
                                            children: (0, r.jsx)(p.z, { ...b }),
                                        }),
                                    x,
                                ],
                            }),
                        }),
                    }),
                    "top" === a && (0, r.jsx)(v, { badge: i, position: a }),
                    null != n && null != o && w,
                    null != u && (0, r.jsx)(C, { subtitle: u }),
                ],
            }),
        });
    return R ? (0, r.jsx)(c.h, { color: t, className: E.headerGradient, children: P }) : P;
}
function v(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let i = (0, l.U)(t);
    return (0, r.jsx)("div", {
        className: E.headerBadge,
        "data-position": n,
        children: (0, r.jsx)(l.E, { variant: "brand", ...i }),
    });
}
function C(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, r.jsx)(m.E, {
            className: E.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, r.jsxs)("div", {
        className: E.headerSubtitleWrapper,
        children: [
            null != i && (0, r.jsx)(i, { className: E.headerSubtitleIcon, color: o.A.colors.TEXT_SUBTLE, size: "sm" }),
            n,
        ],
    });
}
function b(e) {
    let { gradientColor: t, graphic: n, badge: i, title: a, subtitle: s, ...o } = e;
    return (0, r.jsx)(S, {
        ...o,
        gradientColor: t,
        graphic: n,
        badge: i,
        title: a,
        titleTextVariant: "heading-xl/semibold",
        subtitle: s,
        alignCenter: !0,
    });
}
