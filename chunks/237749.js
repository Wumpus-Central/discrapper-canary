var i = n(477900);
n(582128);
var a = n(855986),
    l = n(477782),
    r = n(734057),
    s = n(71393),
    u = n(576705),
    c = n(287809),
    o = n(849736),
    d = n(312006),
    p = n(652215),
    A = n(792996);
n.d(
    e,
    {},
    {
        A: function (t, e, n) {
            let g = r.A.getChannel(n),
                m = (0, a.bG)([s.A], () => s.A.getGuild(e), [e]),
                b = (0, a.bG)([d.Ay], () => d.Ay.getPermissionsForUser(t.id, n), [n, t.id]),
                h = c.default.getCurrentUser()?.id === t.id,
                f = (0, a.bG)(
                    [u.A],
                    () => null != n && u.A.canWithPartialContext(p.xBc.MUTE_MEMBERS, { channelId: n }),
                    [n],
                );
            return null != g && null != m && (f || h) && b.speaker
                ? (0, i.jsx)(l.Dr, {
                      id: "audience",
                      label: h ? A.intl.string(A.t["6C6PJx"]) : A.intl.string(A.t.VK3vQy),
                      action: function () {
                          null != g && (h ? (0, o.Tf)(g) : (0, o.gt)(t, g));
                      },
                  })
                : null;
        },
    },
);
