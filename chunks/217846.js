n.d(t, { a: () => m, n: () => f });
var l = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    i = n(140735),
    s = n(775946),
    u = n(404373),
    d = n(248675),
    o = n(660183),
    c = n(543226);
function m(e) {
    let { projectId: t } = e;
    return null != (0, u.Yl)(t) ? (0, l.jsx)("div", { className: c.d, "aria-hidden": !0 }) : null;
}
function f(e) {
    let { projectId: t, className: n } = e,
        a = (0, u.Yl)(t);
    return null == a || 0 === a
        ? null
        : (0, l.jsxs)("div", {
              className: r()(c.W, n),
              children: [
                  (0, l.jsx)(s.A, { mentionsCount: a }),
                  (0, l.jsx)(i.A, { children: o.intl.string(d.default.hfIuc7) }),
              ],
          });
}
