"use strict";
n.d(t, { Ay: () => T, B5: () => A, BP: () => I, FQ: () => _, Uj: () => f, VF: () => p, _G: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(735438),
    l = n.n(s),
    o = n(707554),
    d = n(814635);
function c(e) {
    return `${e / 16}rem`;
}
function u() {
    return (0, i.jsx)("div", { className: d.my, style: { opacity: 0.08 } });
}
function _(e) {
    let { width: t, height: n, opacity: r, className: s } = e,
        o = { width: c(t), opacity: null != r ? r : l().random(0.02, 0.08) };
    return null != n && (o.height = c(n)), (0, i.jsx)("div", { className: a()(s, { [d.av]: !0 }), style: o });
}
function E(e) {
    let t,
        {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: s,
            usernameWidth: c,
            usernameOpacity: E,
            className: A,
            style: h,
        } = e,
        I = r ? 50 : l().random(40, 50);
    return (
        !r && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u, {}),
                      (0, i.jsx)(o.H, {
                          className: d.wx,
                          children: (0, i.jsx)(_, { width: c, opacity: E, className: d.__invalid_username }),
                      }),
                  ],
              }))
            : r &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(_, { width: I, className: a()({ [d.ce]: !0, [d.R]: !n }) }),
                      (0, i.jsx)(o.H, { className: d.wx, children: (0, i.jsx)(_, { width: c, opacity: E }) }),
                  ],
              })),
        (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(A, { [d.iE]: !0, [d.oE]: r, [d.E]: !r }),
            style: h,
            children: [
                (0, i.jsxs)("div", {
                    className: d.PG,
                    children: [
                        t,
                        (0, i.jsx)("div", {
                            className: d.Qs,
                            children: Array(l().random(3, 8))
                                .fill(null)
                                .map(() => l().random(30, 80))
                                .map((e, t) => (0, i.jsx)(_, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: d.Dq,
                        children: (0, i.jsx)("div", { className: d.oh, style: { opacity: 0.03, ...s } }),
                    }),
            ],
        })
    );
}
let A = 44,
    h = 22,
    I = 26,
    f = 26,
    p = 6;
function T(e) {
    let { messages: t, groupSpacing: n = 0, compact: r = !1, attachmentSpecs: a, className: s } = e,
        o = null != a ? (a.last ? t - 1 : l().random(0, t - 1)) : -1,
        d = l().random(80, 120),
        u = l().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    E,
                    {
                        compact: r,
                        className: s,
                        usernameWidth: d,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? a : void 0,
                        style: 0 === t ? { marginTop: c(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
