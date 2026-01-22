n.d(t, { _: () => o });
var r = n(627968),
    i = n(158954),
    a = n(397927),
    s = n(50900);
function o(e) {
    let { title: t, titleTrailingIcon: n, subtitle: o, type: l = "primary" } = e;
    return "secondary" === l
        ? (0, r.jsxs)(i.BJc, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
              },
              direction: "horizontal",
              align: "center",
              children: [
                  (0, r.jsx)(i.DZT, {
                      variant: "heading-md/semibold",
                      color: "text-subtle",
                      children: t,
                  }),
                  null != n
                      ? (0, r.jsx)(n, {
                            color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                            size: "md",
                        })
                      : null,
              ],
          })
        : (0, r.jsxs)(i.BJc, {
              gap: 8,
              padding: {
                  left: 12,
                  right: 12,
                  bottom: 24,
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: s.q,
                      children: [
                          (0, r.jsx)(i.DZT, {
                              variant: "heading-xl/normal",
                              color: "text-strong",
                              children: t,
                          }),
                          null != n
                              ? (0, r.jsx)(n, {
                                    color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                                    size: "md",
                                })
                              : null,
                      ],
                  }),
                  null != o &&
                      (0, r.jsx)(i.EYj, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: o,
                      }),
              ],
          });
}
