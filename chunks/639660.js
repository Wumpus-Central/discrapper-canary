n.d(t, { Z: () => C }), n(539854), n(388685);
var r = n(255367),
    o = n(793030),
    i = n(442837),
    l = n(704215),
    s = n(243778),
    a = n(430824),
    c = n(232062),
    u = n(618460),
    d = n(105529),
    p = n(800869),
    m = n(366751),
    f = n(309945),
    _ = n(385902),
    x = n(234368),
    g = n(981631),
    v = n(989308),
    b = n(388032),
    h = n(547885);
function j() {
    return (0, r.jsx)("div", {
        className: h.staffContainer,
        children: (0, r.jsx)(o.xv, {
            variant: "text-sm/medium",
            children: b.intl.string(v.default.l9n4QU),
        }),
    });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return (null == (e = a.Z.getGuild(t)) ? void 0 : e.features.has(g.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        C = (0, u.Z)(t),
        E = C.length > 0,
        { shouldShow: I, notificationConfig: N } = (0, _._)(t, "GuildPowerupNotificationContainer"),
        w = [];
    I && w.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [Z, P] = (0, s.ZT)(w, t),
        S = null != Z && null != N,
        y = (0, c.W)(t, "GuildPowerupNotificationContainer"),
        T = [];
    S ||
        E ||
        (T.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK),
        y && T.push(l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let [O, A] = (0, s.US)(T),
        R = ((e) => {
            let n = [];
            return (
                E &&
                    n.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                guildId: t,
                                powerups: C,
                            },
                            "expiring-powerups",
                        ),
                    ),
                S &&
                    n.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                notificationConfig: N,
                                markAsDismissed: (e) => {
                                    P(e);
                                },
                            },
                            "rollback-notification",
                        ),
                    ),
                null != e &&
                    (e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                        ? n.push((0, r.jsx)(p.Z, { markAsDismissed: A }, "info-card"))
                        : e === l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL &&
                          n.push(
                              (0, r.jsx)(
                                  d.Z,
                                  {
                                      guildId: t,
                                      perk: x.rm.ENHANCED_ROLE_COLORS,
                                      markAsDismissed: A,
                                  },
                                  "enhanced-role-colors-upsell",
                              ),
                          )),
                n
            );
        })(O);
    return 0 !== R.length || n
        ? (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: b.intl.string(v.default["3FRira"]),
                  }),
                  n && (0, r.jsx)(j, {}),
                  R.map((e) => e),
              ],
          })
        : null;
}
