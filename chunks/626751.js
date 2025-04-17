n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(987909),
    o = n(430824),
    s = n(630388),
    c = n(35125),
    u = n(523361),
    d = n(981631);
function p(e) {
    var t, n;
    let { channel: p, message: m } = e,
        f = null != (n = null == (t = m.roleSubscriptionData) ? void 0 : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(),
        h = p.guild_id,
        g = (0, a.e7)(
            [o.Z],
            () => {
                var e;
                return null == (e = o.Z.getGuild(h)) ? void 0 : e.systemChannelFlags;
            },
            [h]
        ),
        _ = null != g && (0, s.yE)(g, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        b = i.useMemo(() => (0, c._i)(p, m), [p, m]);
    return _
        ? null
        : (0, r.jsx)(l.Z, {
              channel: p,
              message: m,
              buttonLabels: f,
              stickers: u.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: b
          });
}
