i.d(t, { Z: () => o });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(703656),
    d = i(914010),
    s = i(981631),
    c = i(388032);
function o(n) {
    let t = (0, l.e7)([d.Z], () => d.Z.getGuildId());
    return __OVERLAY__ || t !== s.I_8
        ? null
        : (0, e.jsx)(a.sNh, {
              id: 'go-to-original-guild',
              label: c.intl.string(c.t.WYj55e),
              action: function () {
                  (0, r.XU)(n.guild_id, n.id);
              }
          });
}
