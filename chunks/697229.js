t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(914010),
    u = t(362658),
    d = t(981631),
    s = t(388032);
function o(n) {
    let e = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
        o = n.type === d.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, u.z)('useCategoryAddChannelItem');
    return !__OVERLAY__ && e === d.I_8 && c && o
        ? (0, i.jsx)(l.MenuItem, {
              id: 'add-channel-to-category',
              icon: l.CirclePlusIcon,
              color: 'brand',
              label: s.intl.string(s.t['6uDHk5']),
              action: function () {
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await t.e('95257').then(t.bind(t, 759701));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              parentId: n.id
                          });
                  });
              }
          })
        : null;
}
