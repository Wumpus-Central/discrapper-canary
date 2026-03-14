n.d(t, { Ay: () => v, B5: () => x, BP: () => h, FQ: () => _, Uj: () => g, VF: () => A, _G: () => p });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(735438),
    s = n.n(i),
    d = n(397927),
    o = n(167216);
function c(e) {
    return `${e / 16}rem`;
}
function u() {
    return (0, l.jsx)("div", { className: o.my, style: { opacity: 0.08 } });
}
function _(e) {
    let { width: t, height: n, opacity: a, className: i } = e,
        d = { width: c(t), opacity: null != a ? a : s().random(0.02, 0.08) };
    return null != n && (d.height = c(n)), (0, l.jsx)("div", { className: r()(i, { [o.av]: !0 }), style: d });
}
function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: i,
            usernameWidth: c,
            usernameOpacity: m,
            className: x,
            style: p,
        } = e,
        h = a ? 50 : s().random(40, 50);
    return (
        !a && n
            ? (t = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(u, {}),
                      (0, l.jsx)(d.H, {
                          className: o.wx,
                          children: (0, l.jsx)(_, { width: c, opacity: m, className: o.__invalid_username }),
                      }),
                  ],
              }))
            : a &&
              (t = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(_, { width: h, className: r()({ [o.ce]: !0, [o.R]: !n }) }),
                      (0, l.jsx)(d.H, { className: o.wx, children: (0, l.jsx)(_, { width: c, opacity: m }) }),
                  ],
              })),
        (0, l.jsxs)("div", {
            "aria-hidden": !0,
            className: r()(x, { [o.iE]: !0, [o.oE]: a, [o.E]: !a }),
            style: p,
            children: [
                (0, l.jsxs)("div", {
                    className: o.PG,
                    children: [
                        t,
                        (0, l.jsx)("div", {
                            className: o.Qs,
                            children: Array(s().random(3, 8))
                                .fill(null)
                                .map(() => s().random(30, 80))
                                .map((e, t) => (0, l.jsx)(_, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != i &&
                    (0, l.jsx)("div", {
                        className: o.Dq,
                        children: (0, l.jsx)("div", { className: o.oh, style: { opacity: 0.03, ...i } }),
                    }),
            ],
        })
    );
}
let x = 44,
    p = 22,
    h = 26,
    g = 26,
    A = 6;
function v(e) {
    let { messages: t, groupSpacing: n = 0, compact: a = !1, attachmentSpecs: r, className: i } = e,
        d = null != r ? (r.last ? t - 1 : s().random(0, t - 1)) : -1,
        o = s().random(80, 120),
        u = s().random(0.1, 0.2);
    return (0, l.jsx)(l.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, l.jsx)(
                    m,
                    {
                        compact: a,
                        className: i,
                        usernameWidth: o,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === d ? r : void 0,
                        style: 0 === t ? { marginTop: c(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
