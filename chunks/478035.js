n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(370774),
    a = n(703656),
    c = n(914010),
    s = n(981631),
    u = n(388032);
function d(e) {
    let t = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        n = (0, o.D)();
    return __OVERLAY__ || (t !== s.I_8 && !n)
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "go-to-original-guild",
              label: u.intl.string(u.t.WYj55Y),
              action: function () {
                  (0, a.XU)(e.guild_id, e.id);
              },
          });
}
