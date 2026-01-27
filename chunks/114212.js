n.d(t, {
    Ay: () => h,
    B5: () => p,
    BP: () => y,
    FQ: () => b,
    Uj: () => m,
    VF: () => g,
    _G: () => _,
});
var r = n(627968);
n(64700);
var o = n(503698),
    a = n.n(o),
    l = n(735438),
    i = n.n(l),
    c = n(397927),
    s = n(406590);

function u(e) {
    return "".concat(e / 16, "rem");
}

function d() {
    return (0, r.jsx)("div", {
        className: s.my,
        style: {
            opacity: 0.08,
        },
    });
}

function b(e) {
    let { width: t, height: n, opacity: o, className: l } = e,
        c = {
            width: u(t),
            opacity: null != o ? o : i().random(0.02, 0.08),
        };
    return (
        null != n && (c.height = u(n)),
        (0, r.jsx)("div", {
            className: a()(l, {
                [s.av]: !0,
            }),
            style: c,
        })
    );
}

function f(e) {
    let t,
        {
            groupStart: n = !1,
            compact: o = !1,
            attachmentSpecs: l,
            usernameWidth: u,
            usernameOpacity: f,
            className: p,
            style: _,
        } = e,
        y = o ? 50 : i().random(40, 50);
    return (
        !o && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d, {}),
                      (0, r.jsx)(c.H, {
                          className: s.wx,
                          children: (0, r.jsx)(b, {
                              width: u,
                              opacity: f,
                              className: s.__invalid_username,
                          }),
                      }),
                  ],
              }))
            : o &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      o &&
                          (0, r.jsx)(b, {
                              width: y,
                              className: a()({
                                  [s.ce]: !0,
                                  [s.R]: !n,
                              }),
                          }),
                      (0, r.jsx)(c.H, {
                          className: s.wx,
                          children: (0, r.jsx)(b, {
                              width: u,
                              opacity: f,
                          }),
                      }),
                  ],
              })),
        (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(p, {
                [s.iE]: !0,
                [s.oE]: o,
                [s.E]: !o,
            }),
            style: _,
            children: [
                (0, r.jsxs)("div", {
                    className: s.PG,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: s.Qs,
                            children: Array(i().random(3, 8))
                                .fill(null)
                                .map(() => i().random(30, 80))
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        b,
                                        {
                                            width: e,
                                            opacity: 0.06,
                                        },
                                        t,
                                    ),
                                ),
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsx)("div", {
                        className: s.Dq,
                        children: (0, r.jsx)("div", {
                            className: s.oh,
                            style: (function (e) {
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
                            })(
                                {
                                    opacity: 0.03,
                                },
                                l,
                            ),
                        }),
                    }),
            ],
        })
    );
}
let p = 44,
    _ = 22,
    y = 26,
    m = 26,
    g = 6;

function h(e) {
    let { messages: t, groupSpacing: n = 0, compact: o = !1, attachmentSpecs: a, className: l } = e,
        c = null != a ? (a.last ? t - 1 : i().random(0, t - 1)) : -1,
        s = i().random(80, 120),
        d = i().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    f,
                    {
                        compact: o,
                        className: l,
                        usernameWidth: s,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === c ? a : void 0,
                        style:
                            0 === t
                                ? {
                                      marginTop: u(n),
                                  }
                                : void 0,
                    },
                    t,
                ),
            ),
    });
}
