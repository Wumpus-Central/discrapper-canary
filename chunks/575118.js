n.d(t, { x: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(313666),
    c = n(307267),
    u = n(797202),
    d = n(950292),
    f = n(151108),
    p = n(409794),
    _ = n(821541),
    m = n(777207),
    h = n(624653),
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
        { dismissable: n, onClose: i } = (0, h.v)();
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
function S(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        f = i.useRef(null),
        p = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != p && null != p.current) {
                    let n = p.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                d(Math.ceil(t)), c(Math.ceil(e));
            });
            return (
                null != f.current && e.observe(f.current),
                null != p.current && e.observe(p.current),
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
                    ref: p,
                    className: o()(g.headerTrailing, g.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(y, { shouldColorMix: a })],
                }),
            ],
        })
    );
}
function I(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            title: a,
            titleTextVariant: s,
            subtitle: l,
            alignCenter: c = !1,
            leading: m,
            trailing: E,
        } = e,
        { headingId: y } = (0, h.v)(),
        I = null != t,
        C = (0, f.MW)(n),
        N = c ? (C ? v : S) : O,
        P =
            null != n &&
            (0, r.jsx)("div", {
                className: o()(g.headerGraphic, { [g.headerGraphicAnimated]: C }),
                children: (0, r.jsx)("div", {
                    className: g.headerGraphicContainer,
                    children: (0, r.jsx)(d.z, b({}, n)),
                }),
            }),
        R = (0, r.jsx)(p.X, {
            className: g.headerTitle,
            id: y,
            variant: null != s ? s : "heading-lg/semibold",
            color: "text-strong",
            children: a,
        }),
        w = null != n ? P : R,
        D = (0, r.jsx)("header", {
            className: o()(g.section, g.header, { [g.headerCentered]: c }),
            children: (0, r.jsxs)(_.K, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: g.headerLayout,
                        children: (0, r.jsx)(N, {
                            leading: m,
                            trailing: E,
                            hasGradient: I,
                            children: (0, r.jsx)("div", {
                                className: g.headerMain,
                                children: w,
                            }),
                        }),
                    }),
                    (0, r.jsx)(T, { badge: i }),
                    null != n && null != a && R,
                    null != l && (0, r.jsx)(A, { subtitle: l }),
                ],
            }),
        });
    return I
        ? (0, r.jsx)(u.$, {
              color: t,
              className: g.headerGradient,
              children: D,
          })
        : D;
}
function T(e) {
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
    let n = (0, r.jsx)(m.x, {
            className: g.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, r.jsxs)("div", {
        className: g.headerSubtitleWrapper,
        children: [
            null != i &&
                (0, r.jsx)(i, {
                    className: g.headerSubtitleIcon,
                    color: s.Z.colors.TEXT_SUBTLE,
                    size: "sm",
                }),
            n,
        ],
    });
}
