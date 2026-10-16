n.d(t, { a: () => f, n: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(140735),
    s = n(775946),
    o = n(404373),
    u = n(248675),
    d = n(105292),
    c = n(543226);
function f(e) {
    let { projectId: t } = e;
    return null != (0, o.Yl)(t) ? (0, l.jsx)("div", { className: c.d, "aria-hidden": !0 }) : null;
}
function m(e) {
    let { projectId: t, className: n } = e,
        a = (0, o.Yl)(t);
    return null == a || 0 === a
        ? null
        : (0, l.jsxs)("div", {
              className: i()(c.W, n),
              children: [
                  (0, l.jsx)(s.A, { mentionsCount: a }),
                  (0, l.jsx)(r.A, { children: d.intl.string(u.default.hfIuc7) }),
              ],
          });
}
