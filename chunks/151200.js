n.d(t, { Z: () => T });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(328731),
    l = n(442550),
    c = n(435439),
    u = n(206295),
    d = n(297781),
    f = n(313201),
    p = n(231338),
    _ = n(388032),
    m = n(382150),
    h = n(46999);
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
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let { className: t, clickableClassName: n, clickable: i, children: s } = e,
        l = (0, f.Dt)();
    if (null != i && "href" in i) {
        let { ariaDescription: e, href: c } = i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.nn4, {
                    id: l,
                    children: e,
                }),
                (0, r.jsx)(a.Anchor, {
                    className: o()(t, n),
                    href: c,
                    "aria-describedby": l,
                    children: s,
                }),
            ],
        });
    }
    let { onClick: c, ariaDescription: u } = null != i ? i : {};
    return (0, r.jsxs)(a.g$b.Provider, {
        value: null == c,
        children: [
            null != c &&
                null != u &&
                (0, r.jsx)(a.nn4, {
                    id: l,
                    children: u,
                }),
            (0, r.jsx)(a.P3F, {
                onClick: c,
                "aria-describedby": null == c ? void 0 : l,
                className: o()(t, null != c && n),
                children: s,
            }),
        ],
    });
}
function I(e) {
    var { clickable: t } = e,
        n = O(e, ["clickable"]);
    return (0, r.jsx)(
        S,
        y(E({}, n), {
            clickable: y(E({}, t), { ariaDescription: "" }),
            clickableClassName: h.clickable,
        }),
    );
}
function T(e) {
    let {
            entry: t,
            channel: n,
            title: i,
            subtitle: h,
            thumbnailUrl: g,
            titleClickable: b,
            subtitleClickable: y,
            thumbnailClickable: O,
            providerIconProps: v,
            style: T = {},
        } = e,
        C = (0, f.Dt)(),
        { primaryColor: A, secondaryColor: N } = (0, u.Z)(g);
    return (
        null != g && (T.background = "linear-gradient(45deg, ".concat(A, ", ").concat(N, ")")),
        (0, r.jsx)(a.f6W, {
            theme: p.BR.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)("figure", {
                    "aria-roledescription": _.intl.string(_.t.zFfUhF),
                    "aria-labelledby": C,
                    className: o()(m.container, e),
                    style: T,
                    children: [
                        (0, r.jsx)(S, {
                            className: m.thumbnailContainer,
                            clickableClassName: m.clickable,
                            clickable: O,
                            children: (0, r.jsx)(l.f, {
                                src: g,
                                constrain: "width",
                                size: 64,
                                "aria-hidden": !0,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: m.infoContainer,
                            children: [
                                (0, r.jsx)(s.Z, {
                                    channel: n,
                                    entry: t,
                                    className: m.users,
                                }),
                                (0, r.jsx)(a.LZC, { size: 2 }),
                                (0, r.jsx)(I, {
                                    clickable: b,
                                    className: m.clickableText,
                                    children: (0, r.jsx)(a.Heading, {
                                        id: C,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: o()(m.textPrimary, m.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i,
                                    }),
                                }),
                                null != h
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.LZC, { size: 2 }),
                                              (0, r.jsx)(I, {
                                                  clickable: y,
                                                  className: m.clickableText,
                                                  children: (0, r.jsx)(a.Text, {
                                                      variant: "text-sm/normal",
                                                      className: o()(m.textSecondary, m.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: h,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsx)(d.PZ, {
                                    className: m.badges,
                                    entry: t,
                                    location: d.Gt.EMBED,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: m.headerIcons,
                            children: null != v ? (0, r.jsx)(c.Z, E({}, v)) : null,
                        }),
                    ],
                }),
        })
    );
}
