n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(987909),
    a = n(430824),
    s = n(630388),
    c = n(35125),
    u = n(523361),
    d = n(981631);
function p(e) {
    var t, n;
    let { channel: p, message: m } = e,
        f = null != (n = null == (t = m.roleSubscriptionData) ? void 0 : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(),
        g = p.guild_id,
        _ = (0, l.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getGuild(g)) ? void 0 : e.systemChannelFlags;
        }, [g]),
        h = null != _ && (0, s.yE)(_, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        b = i.useMemo(() => (0, c._i)(p, m), [p, m]);
    return h
        ? null
        : (0, r.jsx)(o.Z, {
              channel: p,
              message: m,
              buttonLabels: f,
              stickers: u.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: b,
          });
}
