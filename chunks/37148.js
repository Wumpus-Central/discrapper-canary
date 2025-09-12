n.d(t, {
    o: () => g,
    x: () => O,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(446673),
    c = n(304789),
    u = n(751334),
    d = n(587272),
    f = n(159691),
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
        { dismissable: n, onClose: i } = (0, _.v)();
    return !1 === n
        ? null
        : (0, r.jsx)(f.PZ7, {
              onClick: i,
              variant: t ? "color-mix" : void 0,
          });
}
function E(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: p.headerLeading,
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: p.headerTrailing,
                children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: i })],
            }),
        ],
    });
}
function b(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: o()(p.headerLeading, p.headerLeadingAbsolute),
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: o()(p.headerTrailing, p.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: i })],
            }),
        ],
    });
}
function y(e) {
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
                    className: o()(p.headerLeading, p.headerLeadingAbsolute),
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
                    className: o()(p.headerTrailing, p.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(g, { shouldColorMix: a })],
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
            title: a,
            titleTextVariant: l,
            subtitle: f,
            alignCenter: h = !1,
            leading: g,
            trailing: O,
        } = e,
        { headingId: I } = (0, _.v)(),
        T = null != t,
        S = (0, d.MW)(n),
        A = h ? (S ? b : y) : E,
        C =
            null != n &&
            (0, r.jsx)("div", {
                className: o()(p.headerGraphic, { [p.headerGraphicAnimated]: S }),
                children: (0, r.jsx)("div", {
                    className: p.headerGraphicContainer,
                    children: (0, r.jsx)(u.z, m({}, n)),
                }),
            }),
        N = (0, r.jsx)(s.X6q, {
            className: p.headerTitle,
            id: I,
            variant: null != l ? l : "heading-lg/semibold",
            color: "text-primary",
            children: a,
        }),
        R = (0, r.jsx)(s.xvT, {
            className: p.headerSubtitle,
            variant: "text-md/normal",
            color: "text-secondary",
            children: f,
        }),
        P = null != n ? C : N,
        w = (0, r.jsx)("header", {
            className: o()(p.section, p.header, { [p.headerCentered]: h }),
            children: (0, r.jsxs)(s.Kqy, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: p.headerLayout,
                        children: (0, r.jsx)(A, {
                            leading: g,
                            trailing: O,
                            hasGradient: T,
                            children: (0, r.jsx)("div", {
                                className: p.headerMain,
                                children: P,
                            }),
                        }),
                    }),
                    (0, r.jsx)(v, { badge: i }),
                    null != n && null != a && N,
                    null != f && R,
                ],
            }),
        });
    return T
        ? (0, r.jsx)(c.$, {
              color: t,
              className: p.headerGradient,
              children: w,
          })
        : w;
}
function v(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, l.R)(t);
    return (0, r.jsx)("div", {
        className: p.headerBadge,
        children: (0, r.jsx)(l.C, m({}, n)),
    });
}
