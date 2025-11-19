n.d(t, { a: () => s });
var a = n(54381);
n(473749);
var l = n(704215),
    i = n(481060),
    r = n(699867);
let s = (e) => {
    let { className: t } = e,
        n = Object.keys(l.z).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
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
                      style: { zIndex: 1 },
                      children: (0, a.jsx)(r.Z, { items: [n] }),
                  }),
              ],
          });
};
