n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(769840),
    l = n(263577),
    c = n(156603),
    u = n(176563),
    d = n(506326),
    f = n(915089),
    p = n(818348),
    _ = n(985018),
    h = n(787226),
    m = n(16312);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function v(e) {
    let { className: t, clickableClassName: n, clickable: i, children: o } = e,
        l = (0, f.GV)();
    if (null != i && "href" in i) {
        let { ariaDescription: e, href: c } = i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.AC4, {
                    id: l,
                    children: e,
                }),
                (0, r.jsx)(s.MzZ, {
                    className: a()(t, n),
                    href: c,
                    "aria-describedby": l,
                    children: o,
                }),
            ],
        });
    }
    let { onClick: c, ariaDescription: u } = null != i ? i : {};
    return (0, r.jsxs)(s.gmh.Provider, {
        value: null == c,
        children: [
            null != c &&
                null != u &&
                (0, r.jsx)(s.AC4, {
                    id: l,
                    children: u,
                }),
            (0, r.jsx)(s.DUT, {
                onClick: c,
                "aria-describedby": null == c ? void 0 : l,
                className: a()(t, null != c && n),
                children: o,
            }),
        ],
    });
}
function S(e) {
    let { clickable: t } = e,
        n = O(e, ["clickable"]);
    return (0, r.jsx)(
        v,
        y(E({}, n), {
            clickable: y(E({}, t), { ariaDescription: "" }),
            clickableClassName: m.v,
        }),
    );
}
function I(e) {
    let {
            entry: t,
            channel: n,
            title: i,
            subtitle: m,
            thumbnailUrl: g,
            titleClickable: b,
            subtitleClickable: y,
            thumbnailClickable: O,
            providerIconProps: A,
            style: I = {},
        } = e,
        T = (0, f.GV)(),
        { primaryColor: C, secondaryColor: N } = (0, u.A)(g);
    return (
        null != g && (I.background = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")")),
        (0, r.jsx)(s.NPJ, {
            theme: p.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)("figure", {
                    "aria-roledescription": _.intl.string(_.t.zFfUhF),
                    "aria-labelledby": T,
                    className: a()(h.kL, e),
                    style: I,
                    children: [
                        (0, r.jsx)(v, {
                            className: h.iT,
                            clickableClassName: h.vk,
                            clickable: O,
                            children: (0, r.jsx)(l.V, {
                                src: g,
                                constrain: "width",
                                size: 64,
                                "aria-hidden": !0,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.op,
                            children: [
                                (0, r.jsx)(o.A, {
                                    channel: n,
                                    entry: t,
                                    className: h.VV,
                                }),
                                (0, r.jsx)(s.hKd, { size: 2 }),
                                (0, r.jsx)(S, {
                                    clickable: b,
                                    className: h.sd,
                                    children: (0, r.jsx)(s.Heading, {
                                        id: T,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: a()(h.ek, h.IY),
                                        scaleFontToUserSetting: !0,
                                        children: i,
                                    }),
                                }),
                                null != m
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.hKd, { size: 2 }),
                                              (0, r.jsx)(S, {
                                                  clickable: y,
                                                  className: h.sd,
                                                  children: (0, r.jsx)(s.Text, {
                                                      variant: "text-sm/normal",
                                                      className: a()(h.c1, h.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsx)(d.iT, {
                                    className: h.jp,
                                    entry: t,
                                    location: d.N5.EMBED,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: h.Y,
                            children: null != A ? (0, r.jsx)(c.A, E({}, A)) : null,
                        }),
                    ],
                }),
        })
    );
}
