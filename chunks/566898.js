r.d(t, {
    M9: () => O,
    Pb: () => S,
    XX: () => m,
    ZP: () => h,
    ZT: () => p,
    iv: () => b,
    pk: () => y,
});
var n = r(255367);
r(73800);
var a = r(120356),
    l = r.n(a),
    i = r(392711),
    o = r.n(i),
    s = r(481060),
    c = r(674944);
function u(e) {
    return "".concat(e / 16, "rem");
}
function d() {
    return (0, n.jsx)("div", {
        className: c.avatar,
        style: { opacity: 0.08 },
    });
}
function p(e) {
    let { width: t, height: r, opacity: a, className: i } = e,
        s = {
            width: u(t),
            opacity: null != a ? a : o().random(0.02, 0.08),
        };
    return (
        null != r && (s.height = u(r)),
        (0, n.jsx)("div", {
            className: l()(i, { [c.blob]: !0 }),
            style: s,
        })
    );
}
function f(e) {
    let t,
        {
            groupStart: r = !1,
            compact: a = !1,
            attachmentSpecs: i,
            usernameWidth: u,
            usernameOpacity: f,
            className: y,
            style: m,
        } = e,
        b = a ? 50 : o().random(40, 50);
    return (
        !a && r
            ? (t = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(d, {}),
                      (0, n.jsx)(s.H, {
                          className: c.header,
                          children: (0, n.jsx)(p, {
                              width: u,
                              opacity: f,
                              className: c.__invalid_username,
                          }),
                      }),
                  ],
              }))
            : a &&
              (t = (0, n.jsxs)(n.Fragment, {
                  children: [
                      a &&
                          (0, n.jsx)(p, {
                              width: b,
                              className: l()({
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !r,
                              }),
                          }),
                      (0, n.jsx)(s.H, {
                          className: c.header,
                          children: (0, n.jsx)(p, {
                              width: u,
                              opacity: f,
                          }),
                      }),
                  ],
              })),
        (0, n.jsxs)("div", {
            "aria-hidden": !0,
            className: l()(y, {
                [c.wrapper]: !0,
                [c.compact]: a,
                [c.cozy]: !a,
            }),
            style: m,
            children: [
                (0, n.jsxs)("div", {
                    className: c.contents,
                    children: [
                        t,
                        (0, n.jsx)("div", {
                            className: c.content,
                            children: Array(o().random(3, 8))
                                .fill(null)
                                .map(() => o().random(30, 80))
                                .map((e, t) =>
                                    (0, n.jsx)(
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
                    (0, n.jsx)("div", {
                        className: c.attachmentContainer,
                        children: (0, n.jsx)("div", {
                            className: c.attachment,
                            style: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
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
let y = 44,
    m = 22,
    b = 26,
    S = 26,
    O = 6;
function h(e) {
    let { messages: t, groupSpacing: r = 0, compact: a = !1, attachmentSpecs: l, className: i } = e,
        s = null != l ? (l.last ? t - 1 : o().random(0, t - 1)) : -1,
        c = o().random(80, 120),
        d = o().random(0.1, 0.2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, n.jsx)(
                    f,
                    {
                        compact: a,
                        className: i,
                        usernameWidth: c,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === s ? l : void 0,
                        style: 0 === t ? { marginTop: u(r) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
