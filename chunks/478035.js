n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(703656),
    c = n(914010),
    a = n(981631),
    s = n(388032);
function u(e) {
    let t = (0, i.e7)([c.Z], () => c.Z.getGuildId());
    return __OVERLAY__ || t !== a.I_8
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'go-to-original-guild',
              label: s.NW.string(s.t.WYj55e),
              action: function () {
                  (0, o.XU)(e.guild_id, e.id);
              }
          });
}
