n.d(t, {
    M9: () => f,
    Pb: () => g,
    XX: () => _,
    ZP: () => y,
    ZT: () => p,
    iv: () => h,
    pk: () => b,
});
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    i = n(392711),
    s = n.n(i),
    l = n(481060),
    c = n(674944);
function d(e) {
    return "".concat(e / 16, "rem");
}
function u() {
    return (0, r.jsx)("div", {
        className: c.avatar,
        style: { opacity: 0.08 },
    });
}
function p(e) {
    let { width: t, height: n, opacity: o, className: i } = e,
        l = {
            width: d(t),
            opacity: null != o ? o : s().random(0.02, 0.08),
        };
    return (
        null != n && (l.height = d(n)),
        (0, r.jsx)("div", {
            className: a()(i, { [c.blob]: !0 }),
            style: l,
        })
    );
}
function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: o = !1,
            attachmentSpecs: i,
            usernameWidth: d,
            usernameOpacity: m,
            className: b,
            style: _,
        } = e,
        h = o ? 50 : s().random(40, 50);
    return (
        !o && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(u, {}),
                      (0, r.jsx)(l.H, {
                          className: c.header,
                          children: (0, r.jsx)(p, {
                              width: d,
                              opacity: m,
                              className: c.__invalid_username,
                          }),
                      }),
                  ],
              }))
            : o &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      o &&
                          (0, r.jsx)(p, {
                              width: h,
                              className: a()({
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !n,
                              }),
                          }),
                      (0, r.jsx)(l.H, {
                          className: c.header,
                          children: (0, r.jsx)(p, {
                              width: d,
                              opacity: m,
                          }),
                      }),
                  ],
              })),
        (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(b, {
                [c.wrapper]: !0,
                [c.compact]: o,
                [c.cozy]: !o,
            }),
            style: _,
            children: [
                (0, r.jsxs)("div", {
                    className: c.contents,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: c.content,
                            children: Array(s().random(3, 8))
                                .fill(null)
                                .map(() => s().random(30, 80))
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        p,
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
                        className: c.attachmentContainer,
                        children: (0, r.jsx)("div", {
                            className: c.attachment,
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
    _ = 22,
    h = 26,
    g = 26,
    f = 6;
function y(e) {
    let { messages: t, groupSpacing: n = 0, compact: o = !1, attachmentSpecs: a, className: i } = e,
        l = null != a ? (a.last ? t - 1 : s().random(0, t - 1)) : -1,
        c = s().random(80, 120),
        u = s().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    m,
                    {
                        compact: o,
                        className: i,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === l ? a : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
