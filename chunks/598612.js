n.d(t, { Y: () => o });
var r = n(54381),
    i = n(793030),
    a = n(836519);
function o(e) {
    let { title: t, subtitle: n, type: o = "primary" } = e;
    return "secondary" === o
        ? (0, r.jsx)(i.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              children: (0, r.jsx)(i.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-subtle",
                  children: t,
              }),
          })
        : (0, r.jsxs)(i.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
                  bottom: 24,
              },
              children: [
                  (0, r.jsx)("div", {
                      className: a.headerTitle,
                      children: (0, r.jsx)(i.X6q, {
                          variant: "heading-xl/normal",
                          color: "header-primary",
                          children: t,
                      }),
                  }),
                  null != n &&
                      (0, r.jsx)(i.xvT, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: n,
                      }),
              ],
          });
}
