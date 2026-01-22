n.d(t, {
    A: () => g,
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(734057),
    o = n(71393),
    u = n(576705),
    s = n(287809),
    d = n(849736),
    c = n(312006),
    A = n(652215),
    b = n(985018);

function g(e, t, n) {
    var g;
    let f = a.A.getChannel(n),
        m = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]),
        p = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (null == (g = s.default.getCurrentUser()) ? void 0 : g.id) === e.id,
        E = (0, i.bG)(
            [u.A],
            () =>
                null != n &&
                u.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, {
                    channelId: n,
                }),
            [n],
        );
    return null != f && null != m && (E || v) && p.speaker
        ? (0, l.jsx)(r.Drp, {
              id: "audience",
              label: v ? b.intl.string(b.t["6C6PJx"]) : b.intl.string(b.t.VK3vQy),
              action: () => {
                  v ? (0, d.Tf)(f) : (0, d.gt)(e, f);
              },
          })
        : null;
}
