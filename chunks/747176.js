n.d(t, { A: () => i });
var l = n(627968);
n(64700);
var a = n(594808),
    r = n(207963),
    s = n(100558);
function i(e) {
    let { components: t, renderComponents: n } = e,
        { message: i } = (0, r.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: s.kL,
              children: [
                  (0, l.jsx)("div", { className: s.Y_, children: n(t) }),
                  null != i ? (0, l.jsx)(a.Ay, { className: s.z3, message: i, component: e }) : null,
              ],
          });
}
