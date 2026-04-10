"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(665260),
    l = n(311907),
    a = n(147351),
    c = n(71393),
    o = n(942075),
    u = n(226139),
    d = n(652215);
function _(e) {
    let { channel: t, message: n } = e,
        _ = n.roleSubscriptionData?.is_renewal ? (0, u.J9)() : (0, u.oL)(),
        E = t.guild_id,
        A = (0, l.bG)([c.A], () => c.A.getGuild(E)?.systemChannelFlags, [E]),
        m = null != A && (0, s.Lt)(A, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        I = r.useMemo(() => (0, o.y4)(t, n), [t, n]);
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
