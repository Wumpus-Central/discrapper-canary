n.d(t, { Y: () => s });
var r = n(54381),
    i = n(793030),
    a = n(481060),
    o = n(860317);
function s(e) {
    let { title: t, titleTrailingIcon: n, subtitle: s, type: l = "primary" } = e;
    return "secondary" === l
        ? (0, r.jsxs)(i.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              direction: "horizontal",
              align: "center",
              children: [
                  (0, r.jsx)(i.X6q, {
                      variant: "heading-md/semibold",
                      color: "text-subtle",
                      children: t,
                  }),
                  null != n
                      ? (0, r.jsx)(n, {
                            color: a.TVs.colors.INTERACTIVE_ICON_DEFAULT,
                            size: "md",
                        })
                      : null,
              ],
          })
        : (0, r.jsxs)(i.Kqy, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
                  bottom: 24,
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: o.headerTitle,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: "heading-xl/normal",
                              color: "text-strong",
                              children: t,
                          }),
                          null != n
                              ? (0, r.jsx)(n, {
                                    color: a.TVs.colors.INTERACTIVE_ICON_DEFAULT,
                                    size: "md",
                                })
                              : null,
                      ],
                  }),
                  null != s &&
                      (0, r.jsx)(i.xvT, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: s,
                      }),
              ],
          });
}
