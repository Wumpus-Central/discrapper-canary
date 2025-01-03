var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(949389),
    s = n(324262),
    o = n(434404),
    c = n(899667),
    d = n(267642),
    u = n(981631),
    h = n(388032),
    m = n(571472);
t.Z = (e) => {
    let { guild: t } = e,
        n = t.id,
        p = (0, r.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t.id));
    return null == p || 0 >= (0, d._k)(p, n)
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
              ctaColor: l.ButtonColors.PRIMARY
          });
};
