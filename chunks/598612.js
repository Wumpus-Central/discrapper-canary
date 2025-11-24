n.d(t, { Y: () => o });
var r = n(54381),
    l = n(793030),
    i = n(836519);
function o(e) {
    let { title: t, subtitle: n, badge: o, type: a = "primary" } = e;
    return "secondary" === a
        ? (0, r.jsx)(l.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              children: (0, r.jsx)(l.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-secondary",
                  children: t,
              }),
          })
        : (0, r.jsxs)(l.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
                  bottom: 24,
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: i.headerTitle,
                      children: [
                          (0, r.jsx)(l.X6q, {
                              variant: "heading-xl/normal",
                              color: "header-primary",
                              children: t,
                          }),
                          null != o && o,
                      ],
                  }),
                  null != n &&
                      (0, r.jsx)(l.xvT, {
                          variant: "text-md/normal",
                          color: "text-secondary",
                          children: n,
                      }),
              ],
          });
}
