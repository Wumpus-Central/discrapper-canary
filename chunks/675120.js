n.d(t, { v: () => r });
var i = n(627968);
n(64700);
var s = n(825484),
    l = n(821609),
    a = n(436818);
let r = (e) => {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, i.jsxs)("footer", {
              className: a.q,
              children: [
                  null != n && (0, i.jsx)("div", { children: n }),
                  (0, i.jsx)(s.e, {
                      className: a.G,
                      justify: "end",
                      children: t.map((e, t) => (0, i.jsx)(l.$, { ...e }, t)),
                  }),
              ],
          });
};
