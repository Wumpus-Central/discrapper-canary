n.d(t, {
    o: () => g,
    x: () => O,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(446673),
    c = n(146187),
    u = n(304789),
    d = n(751334),
    f = n(587272),
    _ = n(667137),
    p = n(525751);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, _.v)();
    return (0, r.jsx)(c.P, {
        onClick: n,
        colorMix: t,
    });
}
function E(e) {
    let { leading: t, trailing: n, hasGradient: i, children: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: p.headerLeading,
                    children: t,
                }),
            o,
            (0, r.jsxs)("div", {
                className: p.headerTrailing,
                children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: i })],
            }),
        ],
    });
}
function b(e) {
    let { leading: t, trailing: n, hasGradient: i, children: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: a()(p.headerLeading, p.headerLeadingAbsolute),
                    children: t,
                }),
            o,
            (0, r.jsxs)("div", {
                className: a()(p.headerTrailing, p.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: i })],
            }),
        ],
    });
}
function y(e) {
    let { leading: t, trailing: n, hasGradient: o, children: s } = e,
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
                    className: a()(p.headerLeading, p.headerLeadingAbsolute),
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: p.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                s,
                (0, r.jsx)("div", {
                    className: p.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                (0, r.jsxs)("div", {
                    ref: _,
                    className: a()(p.headerTrailing, p.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: o })],
                }),
            ],
        })
    );
}
function O(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            title: o,
            titleTextVariant: c,
            subtitle: h,
            alignCenter: g = !1,
            leading: O,
            trailing: v,
        } = e,
        { headingId: I } = (0, _.v)(),
        T = null != t,
        S = (0, f.MW)(n),
        A = g ? (S ? b : y) : E,
        N =
            null != n &&
            (0, r.jsx)("div", {
                className: a()(p.headerGraphic, { [p.headerGraphicAnimated]: S }),
                children: (0, r.jsx)("div", {
                    className: p.headerGraphicContainer,
                    children: (0, r.jsx)(d.z, m({}, n)),
                }),
            }),
        C = (0, r.jsx)(s.X6, {
            className: p.headerTitle,
            id: I,
            variant: null != c ? c : "heading-lg/semibold",
            color: "text-primary",
            children: o,
        }),
        R = (0, r.jsx)(s.xv, {
            className: p.headerSubtitle,
            variant: "text-md/normal",
            color: "text-secondary",
            children: h,
        }),
        P = null != n ? N : C,
        w = (0, r.jsx)("header", {
            className: a()(p.section, p.header, { [p.headerCentered]: g }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: p.headerLayout,
                        children: (0, r.jsx)(A, {
                            leading: O,
                            trailing: v,
                            hasGradient: T,
                            children: (0, r.jsx)("div", {
                                className: p.headerMain,
                                children: P,
                            }),
                        }),
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: p.headerBadge,
                            children: (0, r.jsx)(l.C, { badge: i }),
                        }),
                    null != n && null != o && C,
                    null != h && R,
                ],
            }),
        });
    return T
        ? (0, r.jsx)(u.$, {
              color: t,
              className: p.headerGradient,
              children: w,
          })
        : w;
}
