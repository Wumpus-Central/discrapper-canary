n.d(t, {
    Ay: () => A,
    B5: () => g,
    BP: () => b,
    FQ: () => h,
    Uj: () => y,
    VF: () => O,
    _G: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(397927),
    c = n(406590);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e) {
    return "".concat(e / 16, "rem");
}

function p() {
    return Array(o().random(3, 8))
        .fill(null)
        .map(() => o().random(30, 80));
}

function _() {
    return (0, r.jsx)("div", {
        className: c.my,
        style: {
            opacity: 0.08,
        },
    });
}

function h(e) {
    let { width: t, height: n, opacity: i, className: s } = e,
        l = {
            width: f(t),
            opacity: null != i ? i : o().random(0.02, 0.08),
        };
    return (
        null != n && (l.height = f(n)),
        (0, r.jsx)("div", {
            className: a()(s, {
                [c.av]: !0,
            }),
            style: l,
        })
    );
}

function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: i = !1,
            attachmentSpecs: s,
            usernameWidth: u,
            usernameOpacity: f,
            className: m,
            style: g,
        } = e,
        E = i ? 50 : o().random(40, 50);
    return (
        !i && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(_, {}),
                      (0, r.jsx)(l.H, {
                          className: c.wx,
                          children: (0, r.jsx)(h, {
                              width: u,
                              opacity: f,
                              className: c.__invalid_username,
                          }),
                      }),
                  ],
              }))
            : i &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      i &&
                          (0, r.jsx)(h, {
                              width: E,
                              className: a()({
                                  [c.ce]: !0,
                                  [c.R]: !n,
                              }),
                          }),
                      (0, r.jsx)(l.H, {
                          className: c.wx,
                          children: (0, r.jsx)(h, {
                              width: u,
                              opacity: f,
                          }),
                      }),
                  ],
              })),
        (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(m, {
                [c.iE]: !0,
                [c.oE]: i,
                [c.E]: !i,
            }),
            style: g,
            children: [
                (0, r.jsxs)("div", {
                    className: c.PG,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: c.Qs,
                            children: p().map((e, t) =>
                                (0, r.jsx)(
                                    h,
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
                null != s &&
                    (0, r.jsx)("div", {
                        className: c.Dq,
                        children: (0, r.jsx)("div", {
                            className: c.oh,
                            style: d(
                                {
                                    opacity: 0.03,
                                },
                                s,
                            ),
                        }),
                    }),
            ],
        })
    );
}
let g = 44,
    E = 22,
    b = 26,
    y = 26,
    O = 6;

function A(e) {
    let { messages: t, groupSpacing: n = 0, compact: i = !1, attachmentSpecs: a, className: s } = e,
        l = null != a ? (a.last ? t - 1 : o().random(0, t - 1)) : -1,
        c = o().random(80, 120),
        u = o().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    m,
                    {
                        compact: i,
                        className: s,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === l ? a : void 0,
                        style:
                            0 === t
                                ? {
                                      marginTop: f(n),
                                  }
                                : void 0,
                    },
                    t,
                ),
            ),
    });
}
