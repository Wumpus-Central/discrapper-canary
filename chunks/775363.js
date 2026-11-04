var i = n(723702),
    r = n(253400),
    a = n(507868),
    s = n(696016),
    l = n(190443);
let o = 49124,
    d = null;
n.d(
    t,
    {},
    {
        B: async function (e) {
            (0, i.uF)() &&
                e &&
                a.A.hasCapability(l.e, s.pZ.GAME_EVENTS) &&
                (null != d && (await d),
                (d = (async () => {
                    let { installed: e, config: t } = await r.Ay.readRocketLeagueStatsApiConfig();
                    if (!e) return;
                    let n = t.port ?? 49123;
                    (o = t.webPort ?? 49124) === n && (o = n + 1);
                    try {
                        let e = await r.Ay.writeRocketLeagueStatsApiConfig({ port: n, webPort: o, packetSendRate: 30 });
                        s.GU.info(
                            `[RL] stats API config install ${e ? "succeeded (takes effect on next game launch)" : "failed"}`,
                        );
                    } catch (e) {
                        s.GU.warn("[RL] stats API config install failed", e);
                    }
                })()),
                await d);
        },
        S: function () {
            return `ws://127.0.0.1:${o}`;
        },
    },
);
