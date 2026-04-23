n.d(e, { A: () => o });
var l = n(627968);
n(64700);
var t = n(192308),
    a = n(477782),
    d = n(214947),
    r = n(494713),
    s = n(985018);
function o(i) {
    let { guildFriendsEnabled: e } = r.A.useConfig({ location: "useFriendsItem" });
    return e
        ? (0, l.jsx)(a.Dr, {
              id: "friends",
              label: s.intl.string(s.t.kYxEcH),
              icon: d.$,
              leadingAccessory: { type: "icon", icon: d.$ },
              action: () => {
                  (0, t.openModalLazy)(async () => {
                      let { default: e } = await n.e("42048").then(n.bind(n, 151203));
                      return (n) => (0, l.jsx)(e, { guild: i, ...n });
                  });
              },
          })
        : null;
}
