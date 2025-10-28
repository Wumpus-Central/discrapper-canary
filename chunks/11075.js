n.d(t, { a: () => o });
var a = n(951288);
n(647438);
var r = n(704215),
    l = n(481060),
    i = n(699867);
let o = (e) => {
    let { className: t } = e,
        n = Object.keys(r.z).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: t,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: "Shop Marketing",
                  }),
                  (0, a.jsx)("div", {
                      style: { zIndex: 1 },
                      children: (0, a.jsx)(i.Z, { items: [n] }),
                  }),
              ],
          });
};
