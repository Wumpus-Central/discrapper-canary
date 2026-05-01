"use strict";
n.d(t, { Ay: () => A, B5: () => h, BP: () => E, FQ: () => _, Uj: () => m, VF: () => g, _G: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(707554),
    u = n(814635);
function c(e) {
    return `${e / 16}rem`;
}
function d() {
    return (0, i.jsx)("div", { className: u.my, style: { opacity: 0.08 } });
}
function _(e) {
    let { width: t, height: n, opacity: r, className: a } = e,
        l = { width: c(t), opacity: null != r ? r : o().random(0.02, 0.08) };
    return null != n && (l.height = c(n)), (0, i.jsx)("div", { className: s()(a, { [u.av]: !0 }), style: l });
}
function f(e) {
    let t,
        {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: f,
            className: h,
            style: p,
        } = e,
        E = r ? 50 : o().random(40, 50);
    return (
        !r && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d, {}),
                      (0, i.jsx)(l.H, {
                          className: u.wx,
                          children: (0, i.jsx)(_, { width: c, opacity: f, className: u.__invalid_username }),
                      }),
                  ],
              }))
            : r &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(_, { width: E, className: s()({ [u.ce]: !0, [u.R]: !n }) }),
                      (0, i.jsx)(l.H, { className: u.wx, children: (0, i.jsx)(_, { width: c, opacity: f }) }),
                  ],
              })),
        (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: s()(h, { [u.iE]: !0, [u.oE]: r, [u.E]: !r }),
            style: p,
            children: [
                (0, i.jsxs)("div", {
                    className: u.PG,
                    children: [
                        t,
                        (0, i.jsx)("div", {
                            className: u.Qs,
                            children: Array(o().random(3, 8))
                                .fill(null)
                                .map(() => o().random(30, 80))
                                .map((e, t) => (0, i.jsx)(_, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: u.Dq,
                        children: (0, i.jsx)("div", { className: u.oh, style: { opacity: 0.03, ...a } }),
                    }),
            ],
        })
    );
}
let h = 44,
    p = 22,
    E = 26,
    m = 26,
    g = 6;
function A(e) {
    let { messages: t, groupSpacing: n = 0, compact: r = !1, attachmentSpecs: s, className: a } = e,
        l = null != s ? (s.last ? t - 1 : o().random(0, t - 1)) : -1,
        u = o().random(80, 120),
        d = o().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        compact: r,
                        className: a,
                        usernameWidth: u,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === l ? s : void 0,
                        style: 0 === t ? { marginTop: c(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
