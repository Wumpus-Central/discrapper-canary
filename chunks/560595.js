t.d(n, { A: () => D });
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
var u = t(674966),
    d = t(885386),
    l = t(929921),
    c = t(734057),
    p = t(71393),
    m = t(192820),
    f = t(309010),
    g = t(287809),
    h = t(723702),
    S = t(258585),
    E = t(327649),
    A = t(476697),
    w = t(725792),
    y = t(260643),
    I = t(830012),
    R = t(753070),
    C = t(765682);
let P = new Set(["356943187589201930"]),
    b = new Set(["1402418696126992445"]),
    v = new r.Vy("startStreamWithSource");
async function D(e, n) {
    let t = g.default.getCurrentUser(),
        r = f.Ay.getVoiceChannelId(),
        D = c.A.getChannel(r),
        O = D?.getGuildId(),
        _ = p.A.getGuild(O)?.premiumTier;
    if (null == t || null == D || null == r) return [!1, "no user or channel"];
    let k = null;
    if (null == (k = "number" == typeof e ? o.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    let T = m.Ay.getUseSystemScreensharePicker(),
        L = "number" != typeof e && (0, y.K4)(e);
    if (!T && !L && !(await u.A.hasPermission(C.iL.SCREEN_RECORDING, { showAuthorizationError: !1 })))
        return [!1, "no permission"];
    let { preset: W, resolution: $, fps: j, soundshareEnabled: G } = l.A.getState(),
        M = n?.preset ?? W,
        { allowAutoQuality: Q } = (0, S.eO)({ location: "startStreamWithSource" });
    M !== R.jQ.PRESET_AUTO || Q || (M = R.jQ.PRESET_VIDEO);
    let U = M === R.jQ.PRESET_AUTO ? R.jQ.PRESET_VIDEO : M,
        [V, N] = (0, A.Ay)(U, t, _, O) ?? [],
        F = V ?? n?.resolution ?? $,
        X = N ?? n?.fps ?? j,
        x = n?.previewDisabled ?? d.uh.getSetting(),
        z = n?.soundshareEnabled ?? G;
    if (
        (null != V ||
            (0, E.A)(U, F, X, t, _, D) ||
            ((M = R.jQ.PRESET_VIDEO), (F = R.on.RESOLUTION_720), (X = R.kn.FPS_30)),
        L)
    ) {
        let n = await (0, y.ys)(e, { audio: z, maxFrameRate: X });
        if (null == n) return [!1, "no source"];
        k = n;
    }
    return (
        (0, a.Xd)({ preset: M, resolution: F, frameRate: X, soundshareEnabled: z }),
        (0, a.XI)(O, r, {
            ...(function (e) {
                var n, t;
                let r;
                if (e.hasOwnProperty("pid"))
                    return (v.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid });
                let a =
                        ((n = void 0),
                        (t = o.Ay.getRunningGames()),
                        null == e ? n : t.find((n) => (0, I.A)(e.id, n.windowHandle))),
                    u =
                        !(0, h.isWindows)() ||
                        null == a ||
                        ((r = a.id),
                        s.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == r || !b.has(r)
                            : null != r && P.has(r)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    d = null != a ? a.pid : null;
                return u || null == d
                    ? (null == d && e.id?.startsWith("prepicked:") && (d = w.Ay.getLastPickedContentPID()),
                      v.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${d}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: d })
                    : (v.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${d}`,
                      ),
                      { pid: d });
            })(k),
            audioSourceId: k.id?.startsWith(i.fS.CAMERA) ? n?.audioSourceId : void 0,
            sound: z,
            previewDisabled: x,
            goLiveModalDurationMs: n?.goLiveModalDurationMs,
            analyticsLocations: n?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
