n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(987909),
    l = n(430824),
    s = n(630388),
    c = n(35125),
    d = n(523361),
    u = n(981631);
function p(e) {
    var t, n;
    let { channel: p, message: m } = e,
        f = null !== (n = null === (t = m.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, d.Md)() : (0, d.Q8)(),
        h = p.guild_id,
        g = (0, a.e7)(
            [l.Z],
            () => {
                var e;
                return null === (e = l.Z.getGuild(h)) || void 0 === e ? void 0 : e.systemChannelFlags;
            },
            [h]
        ),
        _ = null != g && (0, s.yE)(g, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        b = i.useMemo(() => (0, c._i)(p, m), [p, m]);
    return _
        ? null
        : (0, r.jsx)(o.Z, {
              channel: p,
              message: m,
              buttonLabels: f,
              stickers: d.HG,
              event: u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: b
          });
}
