"use strict";
a.d(t, { Ay: () => A, B5: () => p, BP: () => g, FQ: () => u, Uj: () => h, VF: () => b, _G: () => m });
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    i = a(735438),
    l = a.n(i),
    o = a(397927),
    c = a(406590);
function _(e) {
    return `${e / 16}rem`;
}
function d() {
    return (0, n.jsx)("div", { className: c.my, style: { opacity: 0.08 } });
}
function u(e) {
    let { width: t, height: a, opacity: r, className: i } = e,
        o = { width: _(t), opacity: null != r ? r : l().random(0.02, 0.08) };
    return null != a && (o.height = _(a)), (0, n.jsx)("div", { className: s()(i, { [c.av]: !0 }), style: o });
}
function f(e) {
    let t,
        {
            groupStart: a = !1,
            compact: r = !1,
            attachmentSpecs: i,
            usernameWidth: _,
            usernameOpacity: f,
            className: p,
            style: m,
        } = e,
        g = r ? 50 : l().random(40, 50);
    return (
        !r && a
            ? (t = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(d, {}),
                      (0, n.jsx)(o.H, {
                          className: c.wx,
                          children: (0, n.jsx)(u, { width: _, opacity: f, className: c.__invalid_username }),
                      }),
                  ],
              }))
            : r &&
              (t = (0, n.jsxs)(n.Fragment, {
                  children: [
                      r && (0, n.jsx)(u, { width: g, className: s()({ [c.ce]: !0, [c.R]: !a }) }),
                      (0, n.jsx)(o.H, { className: c.wx, children: (0, n.jsx)(u, { width: _, opacity: f }) }),
                  ],
              })),
        (0, n.jsxs)("div", {
            "aria-hidden": !0,
            className: s()(p, { [c.iE]: !0, [c.oE]: r, [c.E]: !r }),
            style: m,
            children: [
                (0, n.jsxs)("div", {
                    className: c.PG,
                    children: [
                        t,
                        (0, n.jsx)("div", {
                            className: c.Qs,
                            children: Array(l().random(3, 8))
                                .fill(null)
                                .map(() => l().random(30, 80))
                                .map((e, t) => (0, n.jsx)(u, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != i &&
                    (0, n.jsx)("div", {
                        className: c.Dq,
                        children: (0, n.jsx)("div", { className: c.oh, style: { opacity: 0.03, ...i } }),
                    }),
            ],
        })
    );
}
let p = 44,
    m = 22,
    g = 26,
    h = 26,
    b = 6;
function A(e) {
    let { messages: t, groupSpacing: a = 0, compact: r = !1, attachmentSpecs: s, className: i } = e,
        o = null != s ? (s.last ? t - 1 : l().random(0, t - 1)) : -1,
        c = l().random(80, 120),
        d = l().random(0.1, 0.2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, n.jsx)(
                    f,
                    {
                        compact: r,
                        className: i,
                        usernameWidth: c,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? s : void 0,
                        style: 0 === t ? { marginTop: _(a) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
