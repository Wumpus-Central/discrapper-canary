t.d(n, { A: () => b });
var i = t(141931),
    r = t(941426),
    a = t(401843),
    o = t(952818);
let s = (0, t(945810).mj)({
    name: "2026-02-capture-target-window",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = t(91777),
    u = t(885386),
    l = t(929921),
    c = t(734057),
    p = t(71393),
    g = t(235058),
    h = t(309010),
    m = t(287809),
    S = t(723702),
    f = t(258585),
    E = t(327649),
    A = t(837859),
    w = t(725792),
    I = t(830012),
    y = t(753070),
    C = t(765682);
let P = new Set(["356943187589201930"]),
    R = new Set(["1402418696126992445"]),
    v = new r.Vy("startStreamWithSource");
async function b(e, n) {
    let t = m.default.getCurrentUser(),
        r = h.A.getVoiceChannelId(),
        b = c.A.getChannel(r),
        D = b?.getGuildId(),
        O = p.A.getGuild(D)?.premiumTier;
    if (null == t || null == b || null == r) return [!1, "no user or channel"];
    let _ = null;
    if (null == (_ = "number" == typeof e ? o.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !g.Ay.getUseSystemScreensharePicker() &&
        !(await d.A.hasPermission(C.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: k, resolution: T, fps: L, soundshareEnabled: W } = l.A.getState(),
        $ = n?.preset ?? k,
        { allowAutoQuality: j } = (0, f.eO)({ location: "startStreamWithSource" });
    $ !== y.jQ.PRESET_AUTO || j || ($ = y.jQ.PRESET_VIDEO);
    let G = $ === y.jQ.PRESET_AUTO ? y.jQ.PRESET_VIDEO : $,
        [M, Q] = (0, A.Ay)(G, t, O) ?? [],
        U = M ?? n?.resolution ?? T,
        V = Q ?? n?.fps ?? L,
        N = n?.previewDisabled ?? u.uh.getSetting(),
        F = n?.soundshareEnabled ?? W;
    return (
        (0, E.A)(G, U, V, t, O, b) || (($ = y.jQ.PRESET_VIDEO), (U = y.on.RESOLUTION_720), (V = y.kn.FPS_30)),
        (0, a.Xd)({ preset: $, resolution: U, frameRate: V, soundshareEnabled: F }),
        (0, a.XI)(D, r, {
            ...(function (e) {
                var n, t;
                let r;
                if (e.hasOwnProperty("pid"))
                    return v.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
                let a =
                        ((n = void 0),
                        (t = o.Ay.getRunningGames()),
                        null == e ? n : t.find((n) => (0, I.A)(e.id, n.windowHandle))),
                    d =
                        !(0, S.isWindows)() ||
                        null == a ||
                        ((r = a.id),
                        s.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == r || !R.has(r)
                            : null != r && P.has(r)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    u = null != a ? a.pid : null;
                return d || null == u
                    ? (null == u && e.id?.startsWith("prepicked:") && (u = w.Ay.getLastPickedContentPID()),
                      v.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${u}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: u })
                    : (v.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${u}`,
                      ),
                      { pid: u });
            })(_),
            audioSourceId: _.id?.startsWith(i.fS.CAMERA) ? n?.audioSourceId : void 0,
            sound: F,
            previewDisabled: N,
            goLiveModalDurationMs: n?.goLiveModalDurationMs,
            analyticsLocations: n?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
