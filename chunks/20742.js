n.d(t, {
    V6: () => D,
    rQ: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(508770),
    c = n(815021),
    u = n(315629),
    d = n(608250),
    f = n(978495),
    p = n(534514),
    _ = n(460890),
    h = n(331322),
    m = n(834730),
    g = n(22856),
    E = n(22789);
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
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function I(e) {
    let { shouldColorMix: t = !1 } = e,
        { dismissable: n, onClose: i } = (0, g.k)();
    return !1 === n
        ? null
        : (0, r.jsx)(c.J, {
              onClick: i,
              variant: t ? "color-mix" : void 0,
          });
}
function T(e) {
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
                children: [null != n && n, (0, r.jsx)(I, { shouldColorMix: i })],
            }),
        ],
    });
}
function C(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: s()(E.headerLeading, E.headerLeadingAbsolute),
                    children: t,
                }),
            a,
            (0, r.jsxs)("div", {
                className: s()(E.headerTrailing, E.headerTrailingAbsolute),
                children: [null != n && n, (0, r.jsx)(I, { shouldColorMix: i })],
            }),
        ],
    });
}
function N(e) {
    let { leading: t, trailing: n, hasGradient: a, children: o } = e,
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
                    className: s()(E.headerLeading, E.headerLeadingAbsolute),
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: E.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                o,
                (0, r.jsx)("div", {
                    className: E.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u,
                    },
                }),
                (0, r.jsxs)("div", {
                    ref: p,
                    className: s()(E.headerTrailing, E.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(I, { shouldColorMix: a })],
                }),
            ],
        })
    );
}
function R(e) {
    let {
            gradientColor: t,
            graphic: n,
            badge: i,
            title: a,
            titleTextVariant: o,
            subtitle: l,
            alignCenter: c = !1,
            leading: m,
            trailing: b,
            stepNumber: O,
            stepCount: A,
        } = e,
        { headingId: v } = (0, g.k)(),
        { i18n: S } = (0, _.G9)(),
        I = null != t,
        R = (0, f.Oy)(n),
        D = c ? (R ? C : N) : T,
        x =
            null != n &&
            (0, r.jsx)("div", {
                className: s()(E.headerGraphic, { [E.headerGraphicAnimated]: R }),
                children: (0, r.jsx)("div", {
                    className: E.headerGraphicContainer,
                    children: (0, r.jsx)(d.v, y({}, n)),
                }),
            }),
        L = (0, r.jsx)(p.D, {
            className: E.headerTitle,
            id: v,
            variant: null != o ? o : "heading-lg/semibold",
            color: "text-strong",
            children: a,
        }),
        j = null != n ? x : L,
        M = (0, r.jsx)("header", {
            className: s()(E.section, E.header, { [E.headerCentered]: c }),
            children: (0, r.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, r.jsx)("div", {
                        className: E.headerLayout,
                        children: (0, r.jsx)(D, {
                            leading: m,
                            trailing: b,
                            hasGradient: I,
                            children: (0, r.jsxs)("div", {
                                className: E.headerMain,
                                children: [
                                    null != O &&
                                        null != A &&
                                        (0, r.jsx)("div", {
                                            className: E.headerStepIndicator,
                                            children: (0, r.jsx)("span", {
                                                className: E.progressBar,
                                                style: { width: "".concat((O / (A + 1)) * 100, "%") },
                                                role: "progressbar",
                                                "aria-valuenow": O,
                                                "aria-valuemin": 1,
                                                "aria-valuemax": A,
                                                "aria-label": S.STEP_INDICATOR(O, A),
                                            }),
                                        }),
                                    j,
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(w, { badge: i }),
                    null != n && null != a && L,
                    null != l && (0, r.jsx)(P, { subtitle: l }),
                ],
            }),
        });
    return I
        ? (0, r.jsx)(u.h, {
              color: t,
              className: E.headerGradient,
              children: M,
          })
        : M;
}
function w(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, l.U)(t);
    return (0, r.jsx)("div", {
        className: E.headerBadge,
        children: (0, r.jsx)(l.E, y({}, n)),
    });
}
function P(e) {
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
            null != i &&
                (0, r.jsx)(i, {
                    className: E.headerSubtitleIcon,
                    color: o.A.colors.TEXT_SUBTLE,
                    size: "sm",
                }),
            n,
        ],
    });
}
function D(e) {
    let { gradientColor: t, graphic: n, badge: i, title: a, subtitle: s } = e,
        o = v(e, ["gradientColor", "graphic", "badge", "title", "subtitle"]);
    return (0, r.jsx)(
        R,
        A(y({}, o), {
            gradientColor: t,
            graphic: n,
            badge: i,
            title: a,
            titleTextVariant: "heading-xl/semibold",
            subtitle: s,
            alignCenter: !0,
        }),
    );
}
