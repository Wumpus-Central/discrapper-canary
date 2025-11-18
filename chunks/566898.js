n.d(t, {
    M9: () => O,
    Pb: () => y,
    XX: () => E,
    ZP: () => v,
    ZT: () => h,
    iv: () => b,
    pk: () => g,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(481060),
    c = n(91406);
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
function _() {
    return Array(s().random(3, 8))
        .fill(null)
        .map(() => s().random(30, 80));
}
function p() {
    return (0, r.jsx)("div", {
        className: c.avatar,
        style: { opacity: 0.08 },
    });
}
function h(e) {
    let { width: t, height: n, opacity: i, className: o } = e,
        l = {
            width: f(t),
            opacity: null != i ? i : s().random(0.02, 0.08),
        };
    return (
        null != n && (l.height = f(n)),
        (0, r.jsx)("div", {
            className: a()(o, { [c.blob]: !0 }),
            style: l,
        })
    );
}
function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: i = !1,
            attachmentSpecs: o,
            usernameWidth: u,
            usernameOpacity: f,
            className: m,
            style: g,
        } = e,
        E = i ? 50 : s().random(40, 50);
    return (
        !i && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(p, {}),
                      (0, r.jsx)(l.H, {
                          className: c.header,
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
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !n,
                              }),
                          }),
                      (0, r.jsx)(l.H, {
                          className: c.header,
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
                [c.wrapper]: !0,
                [c.compact]: i,
                [c.cozy]: !i,
            }),
            style: g,
            children: [
                (0, r.jsxs)("div", {
                    className: c.contents,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: c.content,
                            children: _().map((e, t) =>
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
                null != o &&
                    (0, r.jsx)("div", {
                        className: c.attachmentContainer,
                        children: (0, r.jsx)("div", {
                            className: c.attachment,
                            style: d({ opacity: 0.03 }, o),
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
function v(e) {
    let { messages: t, groupSpacing: n = 0, compact: i = !1, attachmentSpecs: a, className: o } = e,
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
                        compact: i,
                        className: o,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === l ? a : void 0,
                        style: 0 === t ? { marginTop: f(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
