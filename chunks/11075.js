n.d(t, { a: () => s });
var a = n(951288);
n(647438);
var r = n(704215),
    i = n(481060),
    l = n(699867);
let s = (e) => {
    let { className: t } = e,
        n = Object.keys(r.z).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == n
        ? null
        : (0, a.jsx)(i.hjN, {
              title: "Shop Marketing",
              tag: "h1",
              className: t,
              children: (0, a.jsx)("div", {
                  style: { zIndex: 1 },
                  children: (0, a.jsx)(l.Z, { items: [n] }),
              }),
          });
};
