"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    l = n(665260),
    s = n(311907),
    a = n(147351),
    o = n(71393),
    c = n(942075),
    u = n(226139),
    d = n(652215);
function _(e) {
    let { channel: t, message: n } = e,
        _ = n.roleSubscriptionData?.is_renewal ? (0, u.J9)() : (0, u.oL)(),
        E = t.guild_id,
        A = (0, s.bG)([o.A], () => o.A.getGuild(E)?.systemChannelFlags, [E]),
        m = null != A && (0, l.Lt)(A, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        I = r.useMemo(() => (0, c.y4)(t, n), [t, n]);
    return m
        ? null
        : (0, i.jsx)(a.A, {
              channel: t,
              message: n,
              buttonLabels: _,
              stickers: u.D3,
              event: d.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: I,
          });
}
