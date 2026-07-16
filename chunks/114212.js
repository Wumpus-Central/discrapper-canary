e.d(a, { Ay: () => N, B5: () => x, BP: () => p, FQ: () => o, Uj: () => y, VF: () => v, _G: () => j });
var n = e(627968);
e(64700);
var i = e(503698),
    t = e.n(i),
    l = e(435558),
    r = e.n(l),
    c = e(707554),
    d = e(814635);
function m(s) {
    return `${s / 16}rem`;
}
function h() {
    return (0, n.jsx)("div", { className: d.my, style: { opacity: 0.08 } });
}
function o(s) {
    let { width: a, height: e, opacity: i, className: l } = s,
        c = { width: m(a), opacity: null != i ? i : r().random(0.02, 0.08) };
    return null != e && (c.height = m(e)), (0, n.jsx)("div", { className: t()(l, { [d.av]: !0 }), style: c });
}
function u(s) {
    let a,
        {
            groupStart: e = !1,
            compact: i = !1,
            attachmentSpecs: l,
            usernameWidth: m,
            usernameOpacity: u,
            className: x,
            style: j,
        } = s,
        p = i ? 50 : r().random(40, 50);
    !i && e
        ? (a = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h, {}),
                  (0, n.jsx)(c.H, {
                      className: d.wx,
                      children: (0, n.jsx)(o, { width: m, opacity: u, className: d.__invalid_username }),
                  }),
              ],
          }))
        : i &&
          (a = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(o, { width: p, className: t()({ [d.ce]: !0, [d.R]: !e }) }),
                  (0, n.jsx)(c.H, { className: d.wx, children: (0, n.jsx)(o, { width: m, opacity: u }) }),
              ],
          }));
    let y = (0, n.jsxs)(n.Fragment, {
        children: [
            a,
            (0, n.jsx)("div", {
                className: d.Qs,
                children: (0, n.jsx)(o, { width: r().random(120, 320), opacity: 0.06 }),
            }),
        ],
    });
    return (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: t()(x, { [d.iE]: !0, [d.oE]: i, [d.E]: !i }),
        style: j,
        children: [
            i ? (0, n.jsx)("div", { className: d.PG, children: y }) : y,
            null != l &&
                (0, n.jsx)("div", {
                    className: d.Dq,
                    children: (0, n.jsx)("div", { className: d.oh, style: { opacity: 0.03, ...l } }),
                }),
        ],
    });
}
let x = 44,
    j = 22,
    p = 26,
    y = 26,
    v = 6;
function N(s) {
    let { messages: a, groupSpacing: e = 0, compact: i = !1, attachmentSpecs: t, className: l } = s,
        c = null != t ? (t.last ? a - 1 : r().random(0, a - 1)) : -1,
        d = r().random(80, 120),
        h = r().random(0.1, 0.2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(a)
            .fill(null)
            .map((s, a) =>
                (0, n.jsx)(
                    u,
                    {
                        compact: i,
                        className: l,
                        usernameWidth: d,
                        usernameOpacity: h,
                        groupStart: 0 === a,
                        attachmentSpecs: a === c ? t : void 0,
                        style: 0 === a ? { marginTop: m(e) } : void 0,
                    },
                    a,
                ),
            ),
    });
}
