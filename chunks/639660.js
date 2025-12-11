n.d(t, { Z: () => C }), n(539854), n(388685);
var r = n(54381),
    i = n(494497),
    l = n(793030),
    a = n(442837),
    o = n(704215),
    s = n(243778),
    c = n(430824),
    u = n(765703),
    d = n(618460),
    f = n(800869),
    p = n(366751),
    m = n(309945),
    g = n(385902),
    v = n(981631),
    x = n(160589),
    b = n(44542),
    h = n(388032),
    j = n(754747);
function _() {
    return (0, r.jsx)("div", {
        className: j.staffContainer,
        children: (0, r.jsx)(l.xvT, {
            variant: "text-sm/medium",
            children: h.intl.string(b.default.l9n4QZ),
        }),
    });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([c.Z], () => {
            var e;
            return (
                (null == (e = c.Z.getGuild(t)) ? void 0 : e.features.has(v.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) ===
                !0
            );
        }),
        C = (0, d.Z)(t),
        Z = (0, u.Z)(t),
        w = C.length > 0 || Z.length > 0,
        { shouldShow: I, notificationConfig: E } = (0, g._)(t, "GuildPowerupNotificationContainer"),
        P = [];
    I && P.push(o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [T, y] = (0, s.ZT)(P, t),
        N = null != T && null != E,
        O = [];
    N || w || O.push(o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
    let [S, A] = (0, s.US)(O),
        k = ((e) => {
            let n = [];
            if (w) {
                let e = C.some((e) => e.skuId === i.A$),
                    l = Z.length > 0 ? h.intl.string(x.default["B3OfL/"]) : void 0,
                    a = [];
                e && a.push(h.intl.string(b.default.Sfr0Jw)),
                    Z.length > 0 && a.push(h.intl.string(x.default.wiungr)),
                    n.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guildId: t,
                                powerupNames: [...C.map((e) => e.title), ...(null != l ? [l] : [])],
                                warnings: a,
                            },
                            "expiring-powerups",
                        ),
                    );
            }
            return (
                N &&
                    n.push(
                        (0, r.jsx)(
                            p.Z,
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
                    e === o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK &&
                    n.push((0, r.jsx)(f.Z, { markAsDismissed: A }, "info-card")),
                n
            );
        })(S);
    return 0 !== k.length || n
        ? (0, r.jsxs)("div", {
              className: j.container,
              children: [
                  (0, r.jsx)(l.xvT, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: h.intl.string(b.default["3FRirU"]),
                  }),
                  n && (0, r.jsx)(_, {}),
                  k.map((e) => e),
              ],
          })
        : null;
}
