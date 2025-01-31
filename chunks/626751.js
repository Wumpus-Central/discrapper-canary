n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(987909),
    s = n(430824),
    o = n(630388),
    c = n(35125),
    d = n(523361),
    u = n(981631);
function m(e) {
    var t, n;
    let { channel: m, message: h } = e,
        _ = null !== (n = null === (t = h.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, d.Md)() : (0, d.Q8)(),
        p = m.guild_id,
        g = (0, a.e7)(
            [s.Z],
            () => {
                var e;
                return null === (e = s.Z.getGuild(p)) || void 0 === e ? void 0 : e.systemChannelFlags;
            },
            [p]
        ),
        f = null != g && (0, o.yE)(g, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        x = l.useMemo(() => (0, c._i)(m, h), [m, h]);
    return f
        ? null
        : (0, i.jsx)(r.Z, {
              channel: m,
              message: h,
              buttonLabels: _,
              stickers: d.HG,
              event: u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: x
          });
}
