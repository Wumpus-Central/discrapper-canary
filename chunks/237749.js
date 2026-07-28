i.d(n, { A: () => g });
var e = i(477900);
i(582128);
var l = i(17928),
    r = i(477782),
    s = i(734057),
    u = i(71393),
    a = i(576705),
    d = i(287809),
    c = i(849736),
    o = i(312006),
    p = i(652215),
    A = i(375708);
function g(t, n, i) {
    let g = s.A.getChannel(i),
        h = (0, l.bG)([u.A], () => u.A.getGuild(n), [n]),
        b = (0, l.bG)([o.Ay], () => o.Ay.getPermissionsForUser(t.id, i), [i, t.id]),
        C = d.default.getCurrentUser()?.id === t.id,
        k = (0, l.bG)([a.A], () => null != i && a.A.canWithPartialContext(p.xBc.MUTE_MEMBERS, { channelId: i }), [i]);
    return null != g && null != h && (k || C) && b.speaker
        ? (0, e.jsx)(r.Dr, {
              id: "audience",
              label: C ? A.intl.string(A.t["6C6PJx"]) : A.intl.string(A.t.VK3vQy),
              action: function () {
                  null != g && (C ? (0, c.Tf)(g) : (0, c.gt)(t, g));
              },
          })
        : null;
}
