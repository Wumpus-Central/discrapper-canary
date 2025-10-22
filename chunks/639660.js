n.d(t, { Z: () => b }), n(539854), n(388685);
var r = n(951288),
    i = n(793030),
    o = n(442837),
    l = n(704215),
    a = n(243778),
    s = n(430824),
    c = n(618460),
    u = n(800869),
    d = n(366751),
    p = n(309945),
    f = n(385902),
    m = n(981631),
    g = n(149829),
    v = n(388032),
    x = n(547885);
function _() {
    return (0, r.jsx)("div", {
        className: x.staffContainer,
        children: (0, r.jsx)(i.xvT, {
            variant: "text-sm/medium",
            children: v.intl.string(g.default.l9n4QZ),
        }),
    });
}
function b(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([s.Z], () => {
            var e;
            return (
                (null == (e = s.Z.getGuild(t)) ? void 0 : e.features.has(m.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) ===
                !0
            );
        }),
        b = (0, c.Z)(t),
        h = b.length > 0,
        { shouldShow: j, notificationConfig: C } = (0, f._)(t, "GuildPowerupNotificationContainer"),
        I = [];
    j && I.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [w, E] = (0, a.ZT)(I, t),
        Z = null != w && null != C,
        P = [];
    Z || h || P.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
    let [T, y] = (0, a.US)(P),
        N = ((e) => {
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
                                notificationConfig: C,
                                markAsDismissed: (e) => {
                                    E(e);
                                },
                            },
                            "rollback-notification",
                        ),
                    ),
                null != e &&
                    e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK &&
                    n.push((0, r.jsx)(u.Z, { markAsDismissed: y }, "info-card")),
                n
            );
        })(T);
    return 0 !== N.length || n
        ? (0, r.jsxs)("div", {
              className: x.container,
              children: [
                  (0, r.jsx)(i.xvT, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: v.intl.string(g.default["3FRirU"]),
                  }),
                  n && (0, r.jsx)(_, {}),
                  N.map((e) => e),
              ],
          })
        : null;
}
