n.d(t, {
    o: () => b,
    x: () => I,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(313666),
    l = n(307267),
    c = n(797202),
    u = n(950292),
    d = n(151108),
    f = n(409794),
    _ = n(821541),
    p = n(777207),
    h = n(624653),
    m = n(325380);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, h.v)();
    return !1 === n
        ? null
        : (0, r.jsx)(l.P, {
              onClick: i,
              variant: t ? "color-mix" : void 0,
          });
}
function y(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: m.headerLeading,
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: m.headerTrailing,
                children: [null != n && n, (0, r.jsx)(b, { shouldColorMix: i })],
            }),
        ],
    });
}
function O(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: o()(m.headerLeading, m.headerLeadingAbsolute),
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: o()(m.headerTrailing, m.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(b, { shouldColorMix: i })],
            }),
        ],
    });
}
function v(e) {
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
                    className: o()(m.headerLeading, m.headerLeadingAbsolute),
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: m.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                s,
                (0, r.jsx)("div", {
                    className: m.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                (0, r.jsxs)("div", {
                    ref: _,
                    className: o()(m.headerTrailing, m.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(b, { shouldColorMix: a })],
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
            alignCenter: g = !1,
            leading: b,
            trailing: I,
        } = e,
        { headingId: S } = (0, h.v)(),
        A = null != t,
        C = (0, d.MW)(n),
        N = g ? (C ? O : v) : y,
        R =
            null != n &&
            (0, r.jsx)("div", {
                className: o()(m.headerGraphic, { [m.headerGraphicAnimated]: C }),
                children: (0, r.jsx)("div", {
                    className: m.headerGraphicContainer,
                    children: (0, r.jsx)(u.z, E({}, n)),
                }),
            }),
        P = (0, r.jsx)(f.X, {
            className: m.headerTitle,
            id: S,
            variant: null != s ? s : "heading-lg/semibold",
            color: "text-primary",
            children: a,
        }),
        w = (0, r.jsx)(p.x, {
            className: m.headerSubtitle,
            variant: "text-md/normal",
            color: "text-secondary",
            children: l,
        }),
        D = null != n ? R : P,
        L = (0, r.jsx)("header", {
            className: o()(m.section, m.header, { [m.headerCentered]: g }),
            children: (0, r.jsxs)(_.K, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: m.headerLayout,
                        children: (0, r.jsx)(N, {
                            leading: b,
                            trailing: I,
                            hasGradient: A,
                            children: (0, r.jsx)("div", {
                                className: m.headerMain,
                                children: D,
                            }),
                        }),
                    }),
                    (0, r.jsx)(T, { badge: i }),
                    null != n && null != a && P,
                    null != l && w,
                ],
            }),
        });
    return A
        ? (0, r.jsx)(c.$, {
              color: t,
              className: m.headerGradient,
              children: L,
          })
        : L;
}
function T(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, s.R)(t);
    return (0, r.jsx)("div", {
        className: m.headerBadge,
        children: (0, r.jsx)(s.C, E({}, n)),
    });
}
