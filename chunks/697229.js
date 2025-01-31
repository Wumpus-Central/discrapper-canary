e.d(t, { Z: () => o });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(914010),
    s = e(362658),
    d = e(981631),
    c = e(388032);
function o(n) {
    let t = (0, l.e7)([r.Z], () => r.Z.getGuildId()),
        o = n.type === d.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: u } = (0, s.z)('useCategoryAddChannelItem');
    return !__OVERLAY__ && t === d.I_8 && u && o
        ? (0, i.jsx)(a.sNh, {
              id: 'add-channel-to-category',
              icon: a.oFk,
              color: 'brand',
              label: c.intl.string(c.t['6uDHk5']),
              action: function () {
                  (0, a.ZDy)(async () => {
                      let { default: t } = await e.e('95257').then(e.bind(e, 178125));
                      return (e) =>
                          (0, i.jsx)(t, {
                              ...e,
                              parentId: n.id
                          });
                  });
              }
          })
        : null;
}
