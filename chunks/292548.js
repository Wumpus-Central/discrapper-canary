n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(147351),
    o = n(71393),
    d = n(942075),
    c = n(226139),
    u = n(652215);
function m(e) {
    let { channel: t, message: n } = e,
        m = n.roleSubscriptionData?.is_renewal ? (0, c.J9)() : (0, c.oL)(),
        _ = t.guild_id,
        h = (0, r.bG)([o.A], () => o.A.getGuild(_)?.systemChannelFlags, [_]),
        p = null != h && (0, a.Lt)(h, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        g = l.useMemo(() => (0, d.y4)(t, n), [t, n]);
    return p
        ? null
        : (0, i.jsx)(s.A, {
              channel: t,
              message: n,
              buttonLabels: m,
              stickers: c.D3,
              event: u.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: g,
          });
}
