a.d(t, { p: () => r });
var n = a(627968);
a(64700);
var l = a(554146),
    i = a(534514),
    s = a(963763);
let r = (e) => {
    let { className: t } = e,
        a = Object.keys(l.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: t,
              children: [
                  (0, n.jsx)(i.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                  (0, n.jsx)("div", { style: { zIndex: 1 }, children: (0, n.jsx)(s.A, { items: [a] }) }),
              ],
          });
};
