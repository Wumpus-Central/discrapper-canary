n.d(i, { A: () => r });
var t = n(627968);
n(64700);
var l = n(397927),
    a = n(494713),
    d = n(985018);
function r(e) {
    let { guildFriendsEnabled: i } = a.A.useConfig({ location: "useFriendsItem" });
    return i
        ? (0, t.jsx)(l.Drp, {
              id: "friends",
              label: d.intl.string(d.t.kYxEcH),
              icon: l.$yI,
              leadingAccessory: { type: "icon", icon: l.$yI },
              action: () => {
                  (0, l.mMO)(async () => {
                      let { default: i } = await n.e("42048").then(n.bind(n, 151203));
                      return (n) => (0, t.jsx)(i, { guild: e, ...n });
                  });
              },
          })
        : null;
}
