n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(311907),
    o = n(147351),
    l = n(71393),
    c = n(942075),
    u = n(226139),
    d = n(652215);
function f(e) {
    var t, n;
    let { channel: f, message: p } = e,
        _ = null != (t = null == (n = p.roleSubscriptionData) ? void 0 : n.is_renewal) && t ? (0, u.J9)() : (0, u.oL)(),
        h = f.guild_id,
        m = (0, s.bG)([l.A], () => {
            var e;
            return null == (e = l.A.getGuild(h)) ? void 0 : e.systemChannelFlags;
        }, [h]),
        g = null != m && (0, a.Lt)(m, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        E = i.useMemo(() => (0, c.y4)(f, p), [f, p]);
    return g
        ? null
        : (0, r.jsx)(o.A, {
              channel: f,
              message: p,
              buttonLabels: _,
              stickers: u.D3,
              event: d.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: E,
          });
}
