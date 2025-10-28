n.d(t, { Y: () => i });
var r = n(951288),
    o = n(793030),
    l = n(836519);
function i(e) {
    let { title: t, subtitle: n, icon: i, type: a = "primary" } = e;
    return "secondary" === a
        ? (0, r.jsx)(o.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              children: (0, r.jsx)(o.X6q, {
                  variant: "heading-md/semibold",
                  color: "text-secondary",
                  children: t,
              }),
          })
        : (0, r.jsxs)(o.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: l.headerTitle,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              variant: "heading-lg/semibold",
                              color: "header-primary",
                              children: t,
                          }),
                          null != i && i,
                      ],
                  }),
                  null != n &&
                      (0, r.jsx)(o.xvT, {
                          variant: "text-md/normal",
                          color: "text-secondary",
                          children: n,
                      }),
              ],
          });
}
