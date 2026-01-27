n.d(t, {
    A: () => j,
});
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(397927),
    s = n(769840),
    o = n(263577),
    c = n(156603),
    u = n(176563),
    d = n(506326),
    m = n(915089),
    f = n(818348),
    p = n(985018),
    h = n(787226),
    b = n(16312);

function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let { className: t, clickableClassName: n, clickable: l, children: s } = e,
        o = (0, m.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: c } = l;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.AC4, {
                    id: o,
                    children: e,
                }),
                (0, r.jsx)(i.MzZ, {
                    className: a()(t, n),
                    href: c,
                    "aria-describedby": o,
                    children: s,
                }),
            ],
        });
    }
    let { onClick: c, ariaDescription: u } = null != l ? l : {};
    return (0, r.jsxs)(i.gmh.Provider, {
        value: null == c,
        children: [
            null != c &&
                null != u &&
                (0, r.jsx)(i.AC4, {
                    id: o,
                    children: u,
                }),
            (0, r.jsx)(i.DUT, {
                onClick: c,
                "aria-describedby": null == c ? void 0 : o,
                className: a()(t, null != c && n),
                children: s,
            }),
        ],
    });
}

function v(e) {
    let { clickable: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(e, ["clickable"]);
    return (0, r.jsx)(
        y,
        x(g({}, n), {
            clickable: x(g({}, t), {
                ariaDescription: "",
            }),
            clickableClassName: b.v,
        }),
    );
}

function j(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: b,
            thumbnailUrl: x,
            titleClickable: j,
            subtitleClickable: C,
            thumbnailClickable: _,
            providerIconProps: A,
            style: O = {},
        } = e,
        E = (0, m.GV)(),
        { primaryColor: S, secondaryColor: N } = (0, u.A)(x);
    return (
        null != x && (O.background = "linear-gradient(45deg, ".concat(S, ", ").concat(N, ")")),
        (0, r.jsx)(i.NPJ, {
            theme: f.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)("figure", {
                    "aria-roledescription": p.intl.string(p.t.zFfUhF),
                    "aria-labelledby": E,
                    className: a()(h.kL, e),
                    style: O,
                    children: [
                        (0, r.jsx)(y, {
                            className: h.iT,
                            clickableClassName: h.vk,
                            clickable: _,
                            children: (0, r.jsx)(o.V, {
                                src: x,
                                constrain: "width",
                                size: 64,
                                "aria-hidden": !0,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.op,
                            children: [
                                (0, r.jsx)(s.A, {
                                    channel: n,
                                    entry: t,
                                    className: h.VV,
                                }),
                                (0, r.jsx)(i.hKd, {
                                    size: 2,
                                }),
                                (0, r.jsx)(v, {
                                    clickable: j,
                                    className: h.sd,
                                    children: (0, r.jsx)(i.Heading, {
                                        id: E,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: a()(h.ek, h.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != b
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(i.hKd, {
                                                  size: 2,
                                              }),
                                              (0, r.jsx)(v, {
                                                  clickable: C,
                                                  className: h.sd,
                                                  children: (0, r.jsx)(i.Text, {
                                                      variant: "text-sm/normal",
                                                      className: a()(h.c1, h.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: b,
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
                            children: null != A ? (0, r.jsx)(c.A, g({}, A)) : null,
                        }),
                    ],
                }),
        })
    );
}
