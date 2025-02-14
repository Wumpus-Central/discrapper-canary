n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(949389),
    s = n(324262),
    o = n(434404),
    d = n(899667),
    c = n(267642),
    u = n(981631),
    h = n(388032),
    m = n(571472);
let p = (e) => {
    let { guild: t } = e,
        n = t.id,
        p = (0, l.e7)([d.Z], () => d.Z.getAppliedGuildBoostsForGuild(t.id));
    return null == p || 0 >= (0, c._k)(p, n)
        ? null
        : (0, i.jsx)(s.Z, {
              guild: t,
              onDismissed: () => {
                  (0, a.GO)(n);
              },
              onClick: () => {
                  o.Z.open(n, u.pNK.GUILD_PREMIUM);
              },
              message: h.intl.string(h.t.uogVVl),
              trackingSource: u.PsQ.GRACE_PERIOD_NOTICE,
              type: u.vID.GUILD_BOOSTING_GRACE_PERIOD,
              image: m,
              cta: h.intl.string(h.t['4E1M8P']),
              ctaColor: r.Ttl.PRIMARY
          });
};
