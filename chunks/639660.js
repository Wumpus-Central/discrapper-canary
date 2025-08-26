n.d(t, { Z: () => b }), n(539854), n(388685);
var r = n(951288),
    i = n(793030),
    o = n(442837),
    l = n(704215),
    a = n(243778),
    s = n(430824),
    u = n(618460),
    c = n(800869),
    d = n(366751),
    p = n(309945),
    f = n(385902),
    m = n(981631),
    _ = n(989308),
    g = n(388032),
    v = n(547885);
function x() {
    return (0, r.jsx)("div", {
        className: v.staffContainer,
        children: (0, r.jsx)(i.xv, {
            variant: "text-sm/medium",
            children: g.intl.string(_.default.l9n4QU),
        }),
    });
}
function b(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([s.Z], () => {
            var e;
            return (null == (e = s.Z.getGuild(t)) ? void 0 : e.features.has(m.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        b = (0, u.Z)(t),
        h = b.length > 0,
        { shouldShow: C, notificationConfig: j } = (0, f._)(t, "GuildPowerupNotificationContainer"),
        I = [];
    C && I.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [E, w] = (0, a.ZT)(I, t),
        Z = null != E && null != j,
        N = [];
    Z || h || N.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
    let [P, T] = (0, a.US)(N),
        y = ((e) => {
            let n = [];
            return (
                h &&
                    n.push(
                        (0, r.jsx)(
                            p.Z,
                            {
                                guildId: t,
                                powerups: b,
                            },
                            "expiring-powerups",
                        ),
                    ),
                Z &&
                    n.push(
                        (0, r.jsx)(
                            d.Z,
                            {
                                notificationConfig: j,
                                markAsDismissed: (e) => {
                                    w(e);
                                },
                            },
                            "rollback-notification",
                        ),
                    ),
                null != e &&
                    e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK &&
                    n.push((0, r.jsx)(c.Z, { markAsDismissed: T }, "info-card")),
                n
            );
        })(P);
    return 0 !== y.length || n
        ? (0, r.jsxs)("div", {
              className: v.container,
              children: [
                  (0, r.jsx)(i.xv, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: g.intl.string(_.default["3FRira"]),
                  }),
                  n && (0, r.jsx)(x, {}),
                  y.map((e) => e),
              ],
          })
        : null;
}
