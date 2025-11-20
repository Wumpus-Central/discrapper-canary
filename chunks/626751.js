n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(95015),
    o = n(442837),
    s = n(987909),
    l = n(430824),
    c = n(35125),
    u = n(523361),
    d = n(981631);
function f(e) {
    var t, n;
    let { channel: f, message: _ } = e,
        p = null != (n = null == (t = _.roleSubscriptionData) ? void 0 : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(),
        h = f.guild_id,
        m = (0, o.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.getGuild(h)) ? void 0 : e.systemChannelFlags;
        }, [h]),
        g = null != m && (0, a.yE)(m, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        E = i.useMemo(() => (0, c._i)(f, _), [f, _]);
    return g
        ? null
        : (0, r.jsx)(s.Z, {
              channel: f,
              message: _,
              buttonLabels: p,
              stickers: u.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: E,
          });
}
