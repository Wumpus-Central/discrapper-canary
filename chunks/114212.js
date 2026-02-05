n.d(t, { Ay: () => S, B5: () => u, BP: () => I, FQ: () => d, Uj: () => N, VF: () => R, _G: () => T });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(735438),
    a = n.n(s),
    o = n(397927),
    E = n(406590);
function c(e) {
    return `${e / 16}rem`;
}
function _() {
    return (0, i.jsx)("div", { className: E.my, style: { opacity: 0.08 } });
}
function d(e) {
    let { width: t, height: n, opacity: l, className: s } = e,
        o = { width: c(t), opacity: null != l ? l : a().random(0.02, 0.08) };
    return null != n && (o.height = c(n)), (0, i.jsx)("div", { className: r()(s, { [E.av]: !0 }), style: o });
}
function A(e) {
    let t,
        {
            groupStart: n = !1,
            compact: l = !1,
            attachmentSpecs: s,
            usernameWidth: c,
            usernameOpacity: A,
            className: u,
            style: T,
        } = e,
        I = l ? 50 : a().random(40, 50);
    return (
        !l && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(_, {}),
                      (0, i.jsx)(o.H, {
                          className: E.wx,
                          children: (0, i.jsx)(d, { width: c, opacity: A, className: E.__invalid_username }),
                      }),
                  ],
              }))
            : l &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      l && (0, i.jsx)(d, { width: I, className: r()({ [E.ce]: !0, [E.R]: !n }) }),
                      (0, i.jsx)(o.H, { className: E.wx, children: (0, i.jsx)(d, { width: c, opacity: A }) }),
                  ],
              })),
        (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: r()(u, { [E.iE]: !0, [E.oE]: l, [E.E]: !l }),
            style: T,
            children: [
                (0, i.jsxs)("div", {
                    className: E.PG,
                    children: [
                        t,
                        (0, i.jsx)("div", {
                            className: E.Qs,
                            children: Array(a().random(3, 8))
                                .fill(null)
                                .map(() => a().random(30, 80))
                                .map((e, t) => (0, i.jsx)(d, { width: e, opacity: 0.06 }, t)),
                        }),
                    ],
                }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: E.Dq,
                        children: (0, i.jsx)("div", { className: E.oh, style: { opacity: 0.03, ...s } }),
                    }),
            ],
        })
    );
}
let u = 44,
    T = 22,
    I = 26,
    N = 26,
    R = 6;
function S(e) {
    let { messages: t, groupSpacing: n = 0, compact: l = !1, attachmentSpecs: r, className: s } = e,
        o = null != r ? (r.last ? t - 1 : a().random(0, t - 1)) : -1,
        E = a().random(80, 120),
        _ = a().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    A,
                    {
                        compact: l,
                        className: s,
                        usernameWidth: E,
                        usernameOpacity: _,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? r : void 0,
                        style: 0 === t ? { marginTop: c(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
