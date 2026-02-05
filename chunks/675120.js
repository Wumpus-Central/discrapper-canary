n.d(t, { v: () => l });
var a = n(627968);
n(64700);
var s = n(732955),
    i = n(542242);
let l = (e) => {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: i.q,
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(s.e2v, {
                      className: i.G,
                      justify: "end",
                      children: t.map((e, t) => (0, a.jsx)(s.$nd, { ...e }, t)),
                  }),
              ],
          });
};
