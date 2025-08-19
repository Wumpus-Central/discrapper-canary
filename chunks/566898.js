n.d(t, {
    M9: () => f,
    Pb: () => g,
    XX: () => h,
    ZP: () => y,
    ZT: () => m,
    iv: () => _,
    pk: () => b,
});
var r = n(951288);
n(647438);
var o = n(120356),
    a = n.n(o),
    i = n(392711),
    l = n.n(i),
    c = n(481060),
    s = n(674944);
function d(e) {
    return "".concat(e / 16, "rem");
}
function u() {
    return (0, r.jsx)("div", {
        className: s.avatar,
        style: { opacity: 0.08 },
    });
}
function m(e) {
    let { width: t, height: n, opacity: o, className: i } = e,
        c = {
            width: d(t),
            opacity: null != o ? o : l().random(0.02, 0.08),
        };
    return (
        null != n && (c.height = d(n)),
        (0, r.jsx)("div", {
            className: a()(i, { [s.blob]: !0 }),
            style: c,
        })
    );
}
function p(e) {
    let t,
        {
            groupStart: n = !1,
            compact: o = !1,
            attachmentSpecs: i,
            usernameWidth: d,
            usernameOpacity: p,
            className: b,
            style: h,
        } = e,
        _ = o ? 50 : l().random(40, 50);
    return (
        !o && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(u, {}),
                      (0, r.jsx)(c.H, {
                          className: s.header,
                          children: (0, r.jsx)(m, {
                              width: d,
                              opacity: p,
                              className: s.__invalid_username,
                          }),
                      }),
                  ],
              }))
            : o &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      o &&
                          (0, r.jsx)(m, {
                              width: _,
                              className: a()({
                                  [s.compactTimestamp]: !0,
                                  [s.hidden]: !n,
                              }),
                          }),
                      (0, r.jsx)(c.H, {
                          className: s.header,
                          children: (0, r.jsx)(m, {
                              width: d,
                              opacity: p,
                          }),
                      }),
                  ],
              })),
        (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(b, {
                [s.wrapper]: !0,
                [s.compact]: o,
                [s.cozy]: !o,
            }),
            style: h,
            children: [
                (0, r.jsxs)("div", {
                    className: s.contents,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: s.content,
                            children: Array(l().random(3, 8))
                                .fill(null)
                                .map(() => l().random(30, 80))
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        m,
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
                null != i &&
                    (0, r.jsx)("div", {
                        className: s.attachmentContainer,
                        children: (0, r.jsx)("div", {
                            className: s.attachment,
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
                            })({ opacity: 0.03 }, i),
                        }),
                    }),
            ],
        })
    );
}
let b = 44,
    h = 22,
    _ = 26,
    g = 26,
    f = 6;
function y(e) {
    let { messages: t, groupSpacing: n = 0, compact: o = !1, attachmentSpecs: a, className: i } = e,
        c = null != a ? (a.last ? t - 1 : l().random(0, t - 1)) : -1,
        s = l().random(80, 120),
        u = l().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    p,
                    {
                        compact: o,
                        className: i,
                        usernameWidth: s,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === c ? a : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
