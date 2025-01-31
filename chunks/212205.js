e.d(t, { Z: () => o });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(914010),
    s = e(362658),
    d = e(981631),
    u = e(388032);
function o(n) {
    let t = (0, l.e7)([a.Z], () => a.Z.getGuildId()),
        o = n.type === d.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, s.z)('useChannelFavoriteSetNickname');
    return __OVERLAY__ || t !== d.I_8
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'set-channel-nickname',
              label: c && o ? u.intl.string(u.t.xXYKiI) : u.intl.string(u.t.dilOFx),
              action: function () {
                  (0, r.ZDy)(async () => {
                      let { default: t } = await e.e('46161').then(e.bind(e, 238716));
                      return (e) =>
                          (0, i.jsx)(t, {
                              ...e,
                              channelId: n.id,
                              heading: c && o ? u.intl.string(u.t.xXYKiI) : u.intl.string(u.t.dilOFx),
                              formTitle: c && o ? u.intl.string(u.t.OCAkGB) : u.intl.string(u.t['621LJC']),
                              allowReset: !(c && o)
                          });
                  });
              }
          });
}
