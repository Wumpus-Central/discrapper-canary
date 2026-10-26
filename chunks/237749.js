i.d(e, { A: () => g });
var n = i(477900);
i(582128);
var l = i(17928),
    a = i(477782),
    r = i(734057),
    s = i(71393),
    u = i(576705),
    o = i(287809),
    c = i(849736),
    d = i(312006),
    p = i(652215),
    A = i(105292);
function g(t, e, i) {
    let g = r.A.getChannel(i),
        b = (0, l.bG)([s.A], () => s.A.getGuild(e), [e]),
        h = (0, l.bG)([d.Ay], () => d.Ay.getPermissionsForUser(t.id, i), [i, t.id]),
        m = o.default.getCurrentUser()?.id === t.id,
        f = (0, l.bG)([u.A], () => null != i && u.A.canWithPartialContext(p.xBc.MUTE_MEMBERS, { channelId: i }), [i]);
    return null != g && null != b && (f || m) && h.speaker
        ? (0, n.jsx)(a.Dr, {
              id: "audience",
              label: m ? A.intl.string(A.t["6C6PJx"]) : A.intl.string(A.t.VK3vQy),
              action: function () {
                  null != g && (m ? (0, c.Tf)(g) : (0, c.gt)(t, g));
              },
          })
        : null;
}
