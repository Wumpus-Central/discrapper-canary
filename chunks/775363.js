n.d(t, { B: () => c, S: () => d });
var i = n(723702),
    r = n(19575),
    a = n(415281),
    s = n(696016);
let l = 49124,
    o = null;
function d() {
    return `ws://127.0.0.1:${l}`;
}
async function c(e) {
    (0, i.isWindows)() &&
        e &&
        a.A.getConfig({ location: "stats api config install" }).enableRocketLeagueEvents &&
        (null != o && (await o),
        (o = (async () => {
            let { installed: e, config: t } = await r.Ay.readRocketLeagueStatsApiConfig();
            if (!e) return;
            let n = t.port ?? 49123;
            (l = t.webPort ?? 49124) === n && (l = n + 1);
            try {
                let e = await r.Ay.writeRocketLeagueStatsApiConfig({ port: n, webPort: l, packetSendRate: 30 });
                s.nx.info(
                    `[RL] stats API config install ${e ? "succeeded (takes effect on next game launch)" : "failed"}`,
                );
            } catch (e) {
                s.nx.warn("[RL] stats API config install failed", e);
            }
        })()),
        await o);
}
