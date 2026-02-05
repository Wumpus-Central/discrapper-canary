n.d(t, { _: () => l });
var i = n(627968),
    s = n(158954),
    r = n(397927),
    a = n(50900);
function l(e) {
    let { title: t, titleTrailingIcon: n, subtitle: l, type: o = "primary" } = e;
    return "secondary" === o
        ? (0, i.jsxs)(s.BJc, {
              gap: 8,
              padding: { left: 12, right: 12 },
              direction: "horizontal",
              align: "center",
              children: [
                  (0, i.jsx)(s.DZT, { variant: "heading-md/semibold", color: "text-subtle", children: t }),
                  null != n ? (0, i.jsx)(n, { color: r.LU0.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }) : null,
              ],
          })
        : (0, i.jsxs)(s.BJc, {
              gap: 8,
              padding: { left: 12, right: 12, bottom: 24 },
              children: [
                  (0, i.jsxs)("div", {
                      className: a.q,
                      children: [
                          (0, i.jsx)(s.DZT, { variant: "heading-xl/normal", color: "text-strong", children: t }),
                          null != n
                              ? (0, i.jsx)(n, { color: r.LU0.colors.INTERACTIVE_ICON_DEFAULT, size: "md" })
                              : null,
                      ],
                  }),
                  null != l && (0, i.jsx)(s.EYj, { variant: "text-md/normal", color: "text-subtle", children: l }),
              ],
          });
}
