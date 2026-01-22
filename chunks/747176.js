n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(594808),
    a = n(207963),
    s = n(100558);
function o(e) {
    let { components: t, renderComponents: n } = e,
        { message: o } = (0, a.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: s.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: s.Y_,
                      children: n(t),
                  }),
                  null != o
                      ? (0, r.jsx)(i.Ay, {
                            className: s.z3,
                            message: o,
                            component: e,
                        })
                      : null,
              ],
          });
}
