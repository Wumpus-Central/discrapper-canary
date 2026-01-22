n.d(t, {
    p: () => s,
});
var a = n(627968);
n(64700);
var l = n(554146),
    i = n(397927),
    r = n(963763);
let s = (e) => {
    let { className: t } = e,
        n = Object.keys(l.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: t,
              children: [
                  (0, a.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      children: "Shop Marketing",
                  }),
                  (0, a.jsx)("div", {
                      style: {
                          zIndex: 1,
                      },
                      children: (0, a.jsx)(r.A, {
                          items: [n],
                      }),
                  }),
              ],
          });
};
