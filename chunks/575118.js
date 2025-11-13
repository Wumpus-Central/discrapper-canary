n.d(t, {
    o: () => y,
    x: () => T,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(313666),
    c = n(307267),
    u = n(797202),
    d = n(950292),
    f = n(151108),
    _ = n(409794),
    p = n(821541),
    h = n(777207),
    m = n(624653),
    g = n(325380);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, m.v)();
    return !1 === n
        ? null
        : (0, r.jsx)(c.P, {
              onClick: i,
              variant: t ? "color-mix" : void 0,
          });
}
function O(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: g.headerLeading,
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: g.headerTrailing,
                children: [null != n && n, (0, r.jsx)(y, { shouldColorMix: i })],
            }),
        ],
    });
}
function v(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: o()(g.headerLeading, g.headerLeadingAbsolute),
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: o()(g.headerTrailing, g.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(y, { shouldColorMix: i })],
            }),
        ],
    });
}
function I(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        f = i.useRef(null),
        _ = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                d(Math.ceil(t)), c(Math.ceil(e));
            });
            return (
                null != f.current && e.observe(f.current),
                null != _.current && e.observe(_.current),
                () => e.disconnect()
            );
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    ref: f,
                    className: o()(g.headerLeading, g.headerLeadingAbsolute),
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: g.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                s,
                (0, r.jsx)("div", {
                    className: g.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                (0, r.jsxs)("div", {
                    ref: _,
                    className: o()(g.headerTrailing, g.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(y, { shouldColorMix: a })],
                }),
            ],
        })
    );
}
function T(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            title: a,
            titleTextVariant: s,
            subtitle: l,
            alignCenter: c = !1,
            leading: h,
            trailing: E,
        } = e,
        { headingId: y } = (0, m.v)(),
        T = null != t,
        C = (0, f.MW)(n),
        N = c ? (C ? v : I) : O,
        R =
            null != n &&
            (0, r.jsx)("div", {
                className: o()(g.headerGraphic, { [g.headerGraphicAnimated]: C }),
                children: (0, r.jsx)("div", {
                    className: g.headerGraphicContainer,
                    children: (0, r.jsx)(d.z, b({}, n)),
                }),
            }),
        P = (0, r.jsx)(_.X, {
            className: g.headerTitle,
            id: y,
            variant: null != s ? s : "heading-lg/semibold",
            color: "text-primary",
            children: a,
        }),
        D = null != n ? R : P,
        w = (0, r.jsx)("header", {
            className: o()(g.section, g.header, { [g.headerCentered]: c }),
            children: (0, r.jsxs)(p.K, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: g.headerLayout,
                        children: (0, r.jsx)(N, {
                            leading: h,
                            trailing: E,
                            hasGradient: T,
                            children: (0, r.jsx)("div", {
                                className: g.headerMain,
                                children: D,
                            }),
                        }),
                    }),
                    (0, r.jsx)(S, { badge: i }),
                    null != n && null != a && P,
                    null != l && (0, r.jsx)(A, { subtitle: l }),
                ],
            }),
        });
    return T
        ? (0, r.jsx)(u.$, {
              color: t,
              className: g.headerGradient,
              children: w,
          })
        : w;
}
function S(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, l.R)(t);
    return (0, r.jsx)("div", {
        className: g.headerBadge,
        children: (0, r.jsx)(l.C, b({}, n)),
    });
}
function A(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, r.jsx)(h.x, {
            className: g.headerSubtitle,
            variant: "text-md/normal",
            color: "text-secondary",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, r.jsxs)("div", {
        className: g.headerSubtitleWrapper,
        children: [
            null != i &&
                (0, r.jsx)(i, {
                    className: g.headerSubtitleIcon,
                    color: s.Z.colors.TEXT_SECONDARY,
                    size: "sm",
                }),
            n,
        ],
    });
}
