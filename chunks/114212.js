"use strict";
a.d(t, { Ay: () => A, B5: () => f, BP: () => m, FQ: () => _, Uj: () => g, VF: () => b, _G: () => h });
var r = a(627968);
a(64700);
var i = a(503698),
    n = a.n(i),
    l = a(735438),
    s = a.n(l),
    o = a(707554),
    c = a(814635);
function d(e) {
    return `${e / 16}rem`;
}
function u() {
    return (0, r.jsx)("div", { className: c.my, style: { opacity: 0.08 } });
}
function _(e) {
    let { width: t, height: a, opacity: i, className: l } = e,
        o = { width: d(t), opacity: null != i ? i : s().random(0.02, 0.08) };
    return null != a && (o.height = d(a)), (0, r.jsx)("div", { className: n()(l, { [c.av]: !0 }), style: o });
}
function p(e) {
    let t,
        {
            groupStart: a = !1,
            compact: i = !1,
            attachmentSpecs: l,
            usernameWidth: d,
            usernameOpacity: p,
            className: f,
            style: h,
        } = e,
        m = i ? 50 : s().random(40, 50);
    return (
        !i && a
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(u, {}),
                      (0, r.jsx)(o.H, {
                          className: c.wx,
                          children: (0, r.jsx)(_, { width: d, opacity: p, className: c.__invalid_username }),
                      }),
                  ],
              }))
            : i &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(_, { width: m, className: n()({ [c.ce]: !0, [c.R]: !a }) }),
                      (0, r.jsx)(o.H, { className: c.wx, children: (0, r.jsx)(_, { width: d, opacity: p }) }),
                  ],
              })),
        (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: n()(f, { [c.iE]: !0, [c.oE]: i, [c.E]: !i }),
            style: h,
            children: [
                (0, r.jsxs)("div", {
                    className: c.PG,
                    children: [
                        t,
                        (0, r.jsx)("div", {
                            className: c.Qs,
                            children: Array(s().random(3, 8))
                                .fill(null)
                                .map(() => s().random(30, 80))
                                .map((e, t) => (0, r.jsx)(_, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsx)("div", {
                        className: c.Dq,
                        children: (0, r.jsx)("div", { className: c.oh, style: { opacity: 0.03, ...l } }),
                    }),
            ],
        })
    );
}
let f = 44,
    h = 22,
    m = 26,
    g = 26,
    b = 6;
function A(e) {
    let { messages: t, groupSpacing: a = 0, compact: i = !1, attachmentSpecs: n, className: l } = e,
        o = null != n ? (n.last ? t - 1 : s().random(0, t - 1)) : -1,
        c = s().random(80, 120),
        u = s().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    p,
                    {
                        compact: i,
                        className: l,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? n : void 0,
                        style: 0 === t ? { marginTop: d(a) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
