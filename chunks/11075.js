n.d(t, { a: () => s });
var a = n(951288);
n(647438);
var i = n(704215),
    r = n(481060),
    l = n(699867);
let s = (e) => {
    let { className: t } = e,
        n = Object.keys(i.z).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: t,
              children: [
                  (0, a.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: "Shop Marketing",
                  }),
                  (0, a.jsx)("div", {
                      style: { zIndex: 1 },
                      children: (0, a.jsx)(l.Z, { items: [n] }),
                  }),
              ],
          });
};
