n.d(t, { x: () => T }), n(388685);
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
    _ = n(402453),
    m = n(821541),
    h = n(777207),
    g = n(624653),
    E = n(325380);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, g.v)();
    return !1 === n
        ? null
        : (0, r.jsx)(c.P, {
              onClick: i,
              variant: t ? "color-mix" : void 0,
          });
}
function v(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: E.headerLeading,
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: E.headerTrailing,
                children: [null != n && n, (0, r.jsx)(O, { shouldColorMix: i })],
            }),
        ],
    });
}
function S(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: o()(E.headerLeading, E.headerLeadingAbsolute),
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: o()(E.headerTrailing, E.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(O, { shouldColorMix: i })],
            }),
        ],
    });
}
function I(e) {
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
                    className: o()(E.headerLeading, E.headerLeadingAbsolute),
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: E.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                s,
                (0, r.jsx)("div", {
                    className: E.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                (0, r.jsxs)("div", {
                    ref: p,
                    className: o()(E.headerTrailing, E.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(O, { shouldColorMix: a })],
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
            leading: b,
            trailing: O,
            stepNumber: T,
            stepCount: N,
        } = e,
        { headingId: P } = (0, g.v)(),
        { i18n: R } = (0, _.ZF)(),
        D = null != t,
        w = (0, f.MW)(n),
        x = c ? (w ? S : I) : v,
        L =
            null != n &&
            (0, r.jsx)("div", {
                className: o()(E.headerGraphic, { [E.headerGraphicAnimated]: w }),
                children: (0, r.jsx)("div", {
                    className: E.headerGraphicContainer,
                    children: (0, r.jsx)(d.z, y({}, n)),
                }),
            }),
        j = (0, r.jsx)(p.X, {
            className: E.headerTitle,
            id: P,
            variant: null != s ? s : "heading-lg/semibold",
            color: "text-strong",
            children: a,
        }),
        M = null != n ? L : j,
        k = (0, r.jsx)("header", {
            className: o()(E.section, E.header, { [E.headerCentered]: c }),
            children: (0, r.jsxs)(m.K, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: E.headerLayout,
                        children: (0, r.jsx)(x, {
                            leading: b,
                            trailing: O,
                            hasGradient: D,
                            children: (0, r.jsxs)("div", {
                                className: E.headerMain,
                                children: [
                                    null != T &&
                                        null != N &&
                                        (0, r.jsx)("div", {
                                            className: E.headerStepIndicator,
                                            children: (0, r.jsx)(h.x, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: R.STEP_INDICATOR(T, N),
                                            }),
                                        }),
                                    M,
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(A, { badge: i }),
                    null != n && null != a && j,
                    null != l && (0, r.jsx)(C, { subtitle: l }),
                ],
            }),
        });
    return D
        ? (0, r.jsx)(u.$, {
              color: t,
              className: E.headerGradient,
              children: k,
          })
        : k;
}
function A(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, l.R)(t);
    return (0, r.jsx)("div", {
        className: E.headerBadge,
        children: (0, r.jsx)(l.C, y({}, n)),
    });
}
function C(e) {
    let { subtitle: t } = e;
    if (null == t) return null;
    let n = (0, r.jsx)(h.x, {
            className: E.headerSubtitle,
            variant: "text-md/normal",
            color: "text-subtle",
            children: "object" == typeof t && "text" in t ? t.text : t,
        }),
        i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : void 0;
    return (0, r.jsxs)("div", {
        className: E.headerSubtitleWrapper,
        children: [
            null != i &&
                (0, r.jsx)(i, {
                    className: E.headerSubtitleIcon,
                    color: s.Z.colors.TEXT_SUBTLE,
                    size: "sm",
                }),
            n,
        ],
    });
}
