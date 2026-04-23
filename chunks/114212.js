n.d(t, { Ay: () => E, B5: () => A, BP: () => _, FQ: () => h, Uj: () => p, VF: () => f, _G: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(735438),
    r = n.n(s),
    o = n(707554),
    c = n(814635);
function d(e) {
    return `${e / 16}rem`;
}
function u() {
    return (0, i.jsx)("div", { className: c.my, style: { opacity: 0.08 } });
}
function h(e) {
    let { width: t, height: n, opacity: l, className: s } = e,
        o = { width: d(t), opacity: null != l ? l : r().random(0.02, 0.08) };
    return null != n && (o.height = d(n)), (0, i.jsx)("div", { className: a()(s, { [c.av]: !0 }), style: o });
}
function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: l = !1,
            attachmentSpecs: s,
            usernameWidth: d,
            usernameOpacity: m,
            className: A,
            style: g,
        } = e,
        _ = l ? 50 : r().random(40, 50);
    return (
        !l && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u, {}),
                      (0, i.jsx)(o.H, {
                          className: c.wx,
                          children: (0, i.jsx)(h, { width: d, opacity: m, className: c.__invalid_username }),
                      }),
                  ],
              }))
            : l &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h, { width: _, className: a()({ [c.ce]: !0, [c.R]: !n }) }),
                      (0, i.jsx)(o.H, { className: c.wx, children: (0, i.jsx)(h, { width: d, opacity: m }) }),
                  ],
              })),
        (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(A, { [c.iE]: !0, [c.oE]: l, [c.E]: !l }),
            style: g,
            children: [
                (0, i.jsxs)("div", {
                    className: c.PG,
                    children: [
                        t,
                        (0, i.jsx)("div", {
                            className: c.Qs,
                            children: Array(r().random(3, 8))
                                .fill(null)
                                .map(() => r().random(30, 80))
                                .map((e, t) => (0, i.jsx)(h, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: c.Dq,
                        children: (0, i.jsx)("div", { className: c.oh, style: { opacity: 0.03, ...s } }),
                    }),
            ],
        })
    );
}
let A = 44,
    g = 22,
    _ = 26,
    p = 26,
    f = 6;
function E(e) {
    let { messages: t, groupSpacing: n = 0, compact: l = !1, attachmentSpecs: a, className: s } = e,
        o = null != a ? (a.last ? t - 1 : r().random(0, t - 1)) : -1,
        c = r().random(80, 120),
        u = r().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    m,
                    {
                        compact: l,
                        className: s,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? a : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
