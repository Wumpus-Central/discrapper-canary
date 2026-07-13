n.d(t, { Ay: () => v, B5: () => p, BP: () => f, FQ: () => h, Uj: () => A, VF: () => x, _G: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(735438),
    r = n.n(a),
    o = n(707554),
    d = n(814635);
function c(e) {
    return `${e / 16}rem`;
}
function u() {
    return (0, i.jsx)("div", { className: d.my, style: { opacity: 0.08 } });
}
function h(e) {
    let { width: t, height: n, opacity: l, className: a } = e,
        o = { width: c(t), opacity: null != l ? l : r().random(0.02, 0.08) };
    return null != n && (o.height = c(n)), (0, i.jsx)("div", { className: s()(a, { [d.av]: !0 }), style: o });
}
function m(e) {
    let t,
        {
            groupStart: n = !1,
            compact: l = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: m,
            className: p,
            style: g,
        } = e,
        f = l ? 50 : r().random(40, 50);
    !l && n
        ? (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u, {}),
                  (0, i.jsx)(o.H, {
                      className: d.wx,
                      children: (0, i.jsx)(h, { width: c, opacity: m, className: d.__invalid_username }),
                  }),
              ],
          }))
        : l &&
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h, { width: f, className: s()({ [d.ce]: !0, [d.R]: !n }) }),
                  (0, i.jsx)(o.H, { className: d.wx, children: (0, i.jsx)(h, { width: c, opacity: m }) }),
              ],
          }));
    let A = (0, i.jsxs)(i.Fragment, {
        children: [
            t,
            (0, i.jsx)("div", {
                className: d.Qs,
                children: (0, i.jsx)(h, { width: r().random(120, 320), opacity: 0.06 }),
            }),
        ],
    });
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: s()(p, { [d.iE]: !0, [d.oE]: l, [d.E]: !l }),
        style: g,
        children: [
            l ? (0, i.jsx)("div", { className: d.PG, children: A }) : A,
            null != a &&
                (0, i.jsx)("div", {
                    className: d.Dq,
                    children: (0, i.jsx)("div", { className: d.oh, style: { opacity: 0.03, ...a } }),
                }),
        ],
    });
}
let p = 44,
    g = 22,
    f = 26,
    A = 26,
    x = 6;
function v(e) {
    let { messages: t, groupSpacing: n = 0, compact: l = !1, attachmentSpecs: s, className: a } = e,
        o = null != s ? (s.last ? t - 1 : r().random(0, t - 1)) : -1,
        d = r().random(80, 120),
        u = r().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    m,
                    {
                        compact: l,
                        className: a,
                        usernameWidth: d,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? s : void 0,
                        style: 0 === t ? { marginTop: c(n) } : void 0,
                    },
                    t,
                ),
            ),
    });
}
