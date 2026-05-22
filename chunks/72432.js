t.d(n, { A: () => O });
var i = t(141931),
    r = t(941426),
    o = t(401843),
    a = t(952818),
    s = t(506600),
    u = t(91777),
    d = t(885386),
    l = t(929921),
    c = t(734057),
    p = t(71393),
    h = t(761853),
    S = t(309010),
    g = t(287809),
    m = t(723702),
    E = t(258585),
    f = t(327649),
    A = t(837859),
    I = t(725792),
    P = t(310689),
    y = t(753070),
    R = t(765682);
let w = new Set(["356943187589201930"]),
    C = new Set(["1402418696126992445"]),
    D = new r.Vy("startStreamWithSource");
async function O(e, n) {
    let t = g.default.getCurrentUser(),
        r = S.A.getVoiceChannelId(),
        O = c.A.getChannel(r),
        _ = O?.getGuildId(),
        b = p.A.getGuild(_)?.premiumTier;
    if (null == t || null == O || null == r) return [!1, "no user or channel"];
    let v = null;
    if (null == (v = "number" == typeof e ? a.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !h.Ay.getUseSystemScreensharePicker() &&
        !(await u.A.hasPermission(R.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: T, resolution: k, fps: L, soundshareEnabled: W } = l.A.getState(),
        $ = n?.preset ?? T,
        { allowAutoQuality: G } = (0, E.eO)({ location: "startStreamWithSource" });
    $ !== y.jQ.PRESET_AUTO || G || ($ = y.jQ.PRESET_VIDEO);
    let M = $ === y.jQ.PRESET_AUTO ? y.jQ.PRESET_VIDEO : $,
        [j, Q] = (0, A.Ay)(M, t, b) ?? [],
        U = j ?? n?.resolution ?? k,
        V = Q ?? n?.fps ?? L,
        N = n?.previewDisabled ?? d.uh.getSetting(),
        F = n?.soundshareEnabled ?? W;
    return (
        (0, f.A)(M, U, V, t, b, O) || (($ = y.jQ.PRESET_VIDEO), (U = y.on.RESOLUTION_720), (V = y.kn.FPS_30)),
        (0, o.Xd)({ preset: $, resolution: U, frameRate: V, soundshareEnabled: F }),
        (0, o.XI)(_, r, {
            ...(function (e) {
                let n;
                if (e.hasOwnProperty("pid"))
                    return D.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
                let t = (0, P.A)(void 0, e, a.Ay.getRunningGames()),
                    r =
                        !(0, m.isWindows)() ||
                        null == t ||
                        ((n = t.id),
                        s.P.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == n || !C.has(n)
                            : null != n && w.has(n)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    o = null != t ? t.pid : null;
                return r || null == o
                    ? (null == o && e.id?.startsWith("prepicked:") && (o = I.Ay.getLastPickedContentPID()),
                      D.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${o}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: o })
                    : (D.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${o}`,
                      ),
                      { pid: o });
            })(v),
            audioSourceId: v.id?.startsWith(i.fS.CAMERA) ? n?.audioSourceId : void 0,
            sound: F,
            previewDisabled: N,
            goLiveModalDurationMs: n?.goLiveModalDurationMs,
            analyticsLocations: n?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
