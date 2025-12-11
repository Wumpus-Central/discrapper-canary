n.d(t, { Z: () => C }), n(539854), n(388685);
var r = n(54381),
    i = n(494497),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(243778),
    u = n(430824),
    c = n(765703),
    d = n(618460),
    p = n(800869),
    f = n(366751),
    m = n(309945),
    g = n(385902),
    v = n(981631),
    x = n(400580),
    _ = n(5238),
    b = n(388032),
    h = n(547885);
function j() {
    return (0, r.jsx)("div", {
        className: h.staffContainer,
        children: (0, r.jsx)(l.xvT, {
            variant: "text-sm/medium",
            children: b.intl.string(_.default.l9n4QZ),
        }),
    });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([u.Z], () => {
            var e;
            return (
                (null == (e = u.Z.getGuild(t)) ? void 0 : e.features.has(v.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) ===
                !0
            );
        }),
        C = (0, d.Z)(t),
        Z = (0, c.Z)(t),
        w = C.length > 0 || Z.length > 0,
        { shouldShow: I, notificationConfig: E } = (0, g._)(t, "GuildPowerupNotificationContainer"),
        P = [];
    I && P.push(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [T, y] = (0, s.ZT)(P, t),
        N = null != T && null != E,
        O = [];
    N || w || O.push(a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
    let [S, A] = (0, s.US)(O),
        k = ((e) => {
            let n = [];
            if (w) {
                let e = C.some((e) => e.skuId === i.A$),
                    l = Z.length > 0 ? b.intl.string(x.default["B3OfL/"]) : void 0,
                    o = [];
                e && o.push(b.intl.string(_.default.Sfr0Jw)),
                    Z.length > 0 && o.push(b.intl.string(x.default.wiungr)),
                    n.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guildId: t,
                                powerupNames: [...C.map((e) => e.title), ...(null != l ? [l] : [])],
                                warnings: o,
                            },
                            "expiring-powerups",
                        ),
                    );
            }
            return (
                N &&
                    n.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                notificationConfig: E,
                                markAsDismissed: (e) => {
                                    y(e);
                                },
                            },
                            "rollback-notification",
                        ),
                    ),
                null != e &&
                    e === a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK &&
                    n.push((0, r.jsx)(p.Z, { markAsDismissed: A }, "info-card")),
                n
            );
        })(S);
    return 0 !== k.length || n
        ? (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(l.xvT, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: b.intl.string(_.default["3FRirU"]),
                  }),
                  n && (0, r.jsx)(j, {}),
                  k.map((e) => e),
              ],
          })
        : null;
}
