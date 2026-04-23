n.d(t, { A: () => s });
var a = n(627968);
n(64700);
var l = n(594808),
    r = n(207963),
    i = n(749131);
function s(e) {
    let { components: t, renderComponents: n } = e,
        { message: s } = (0, r.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: i.kL,
              children: [
                  (0, a.jsx)("div", { className: i.Y_, children: n(t) }),
                  null != s ? (0, a.jsx)(l.Ay, { className: i.z3, message: s, component: e }) : null,
              ],
          });
}
