var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(646514),
    o = n(805251),
    d = n(815021),
    c = n(315629),
    u = n(566345),
    _ = n(978495),
    E = n(534514),
    A = n(911608),
    f = n(331322),
    h = n(834730),
    I = n(22856),
    p = n(592551);
function m(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: r } = (0, I.k)();
    return !1 === n ? null : (0, i.jsx)(d.J, { onClick: r, variant: t ? "color-mix" : void 0 });
}
function T(e) {
    let { leading: t, trailing: n, hasGradient: r, children: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t && (0, i.jsx)("div", { className: p.headerLeading, children: t }),
            a,
            (0, i.jsxs)("div", {
                className: p.headerTrailing,
                children: [null != n && n, (0, i.jsx)(m, { shouldColorMix: r })],
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
                children: [null != n && n, (0, i.jsx)(m, { shouldColorMix: r })],
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
            let e = new ((_.current ?? E.current)?.ownerDocument?.defaultView ?? window).ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != E && null != E.current) {
                    let n = E.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (u(Math.ceil(t)), d(Math.ceil(e)));
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
                    children: [null != n && n, (0, i.jsx)(m, { shouldColorMix: a })],
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
            alignCenter: h = !1,
            leading: m,
            trailing: N,
            progressBarProps: R,
        } = e,
        { headingId: L } = (0, I.k)(),
        y = null != t,
        D = (0, _.Oy)(n),
        b =
            null != n &&
            (0, i.jsx)("div", {
                className: s()(p.headerGraphic, { [p.headerGraphicAnimated]: D }),
                children: (0, i.jsx)("div", {
                    className: p.headerGraphicContainer,
                    children: (0, i.jsx)(u.v, { ...n }),
                }),
            }),
        v = (0, i.jsx)(E.D, {
            className: p.headerTitle,
            id: L,
            variant: o ?? "heading-lg/semibold",
            color: "text-strong",
            children: l,
        });
    "end" === a &&
        (v = (0, i.jsxs)(f.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [v, (0, i.jsx)(C, { badge: r, position: a })],
        }));
    let P = null != n ? b : v,
        M = (0, i.jsx)("header", {
            className: s()(p.section, p.header, { [p.headerCentered]: h }),
            children: (0, i.jsxs)(f.B, {
                gap: 8,
                children: [
                    (0, i.jsx)("div", {
                        className: p.headerLayout,
                        children: (0, i.jsx)(h ? (D ? g : S) : T, {
                            leading: m,
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
                                    P,
                                ],
                            }),
                        }),
                    }),
                    "top" === a && (0, i.jsx)(C, { badge: r, position: a }),
                    null != n && null != l && v,
                    null != d && (0, i.jsx)(O, { subtitle: d }),
                ],
            }),
        });
    return y ? (0, i.jsx)(c.h, { color: t, className: p.headerGradient, children: M }) : M;
}
function C(e) {
    let { badge: t, position: n } = e;
    if (null == t) return null;
    let r = (0, o.U)(t);
    return (0, i.jsx)("div", {
        className: p.headerBadge,
        "data-position": n,
        children: (0, i.jsx)(o.E, { variant: "primary", ...r }),
    });
}
function O(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, i.jsx)(h.E, {
            className: p.headerSubtitle,
            variant: "body-md/normal",
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
n.d(
    t,
    {},
    {
        V6: function (e) {
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
        },
        rQ: N,
        s_: m,
    },
);
