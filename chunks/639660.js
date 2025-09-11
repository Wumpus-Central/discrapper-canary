n.d(t, { Z: () => h }), n(539854), n(388685);
var r = n(951288),
    i = n(793030),
    o = n(442837),
    s = n(704215),
    l = n(243778),
    a = n(430824),
    c = n(618460),
    u = n(800869),
    d = n(366751),
    p = n(309945),
    m = n(385902),
    g = n(981631),
    f = n(989308),
    v = n(388032),
    _ = n(547885);
function x() {
    return (0, r.jsx)("div", {
        className: _.staffContainer,
        children: (0, r.jsx)(i.xvT, {
            variant: "text-sm/medium",
            children: v.intl.string(f.default.l9n4QU),
        }),
    });
}
function h(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([a.Z], () => {
            var e;
            return (null == (e = a.Z.getGuild(t)) ? void 0 : e.features.has(g.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        h = (0, c.Z)(t),
        b = h.length > 0,
        { shouldShow: C, notificationConfig: j } = (0, m._)(t, "GuildPowerupNotificationContainer"),
        T = [];
    C && T.push(s.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [E, P] = (0, l.ZT)(T, t),
        I = null != E && null != j,
        y = [];
    I || b || y.push(s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
    let [w, Z] = (0, l.US)(y),
        S = ((e) => {
            let n = [];
            return (
                b &&
                    n.push(
                        (0, r.jsx)(
                            p.Z,
                            {
                                guildId: t,
                                powerups: h,
                            },
                            "expiring-powerups",
                        ),
                    ),
                I &&
                    n.push(
                        (0, r.jsx)(
                            d.Z,
                            {
                                notificationConfig: j,
                                markAsDismissed: (e) => {
                                    P(e);
                                },
                            },
                            "rollback-notification",
                        ),
                    ),
                null != e &&
                    e === s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK &&
                    n.push((0, r.jsx)(u.Z, { markAsDismissed: Z }, "info-card")),
                n
            );
        })(w);
    return 0 !== S.length || n
        ? (0, r.jsxs)("div", {
              className: _.container,
              children: [
                  (0, r.jsx)(i.xvT, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: v.intl.string(f.default["3FRira"]),
                  }),
                  n && (0, r.jsx)(x, {}),
                  S.map((e) => e),
              ],
          })
        : null;
}
