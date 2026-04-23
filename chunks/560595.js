n.d(t, { A: () => T });
var i = n(141931),
    a = n(118356),
    l = n(401843),
    o = n(328153);
let r = (0, n(945810).mj)({
    name: "2026-02-capture-target-window",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = n(91777),
    d = n(253932),
    c = n(929921),
    u = n(734057),
    h = n(71393),
    _ = n(969341),
    f = n(309010),
    p = n(287809),
    A = n(723702),
    m = n(258585),
    y = n(327649),
    g = n(837859),
    b = n(725792),
    E = n(830012),
    v = n(753070),
    w = n(765682);
let I = new Set(["356943187589201930"]),
    S = new Set(["1402418696126992445"]),
    C = new a.Vy("startStreamWithSource");
async function T(e, t) {
    let n = p.default.getCurrentUser(),
        a = f.A.getVoiceChannelId(),
        T = u.A.getChannel(a),
        N = T?.getGuildId(),
        x = h.A.getGuild(N)?.premiumTier;
    if (null == n || null == T || null == a) return [!1, "no user or channel"];
    let k = null;
    if (null == (k = "number" == typeof e ? o.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !_.Ay.getUseSystemScreensharePicker() &&
        !(await s.A.hasPermission(w.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: L, resolution: P, fps: M, soundshareEnabled: O } = c.A.getState(),
        D = t?.preset ?? L,
        { allowAutoQuality: j } = (0, m.eO)({ location: "startStreamWithSource" });
    D !== v.jQ.PRESET_AUTO || j || (D = v.jQ.PRESET_VIDEO);
    let R = D === v.jQ.PRESET_AUTO ? v.jQ.PRESET_VIDEO : D,
        [U, V] = (0, g.Ay)(R, n, x) ?? [],
        B = U ?? t?.resolution ?? P,
        G = V ?? t?.fps ?? M,
        H = t?.previewDisabled ?? d.uh.getSetting(),
        F = t?.soundshareEnabled ?? O;
    return (
        (0, y.A)(R, B, G, n, x, T) || ((D = v.jQ.PRESET_VIDEO), (B = v.on.RESOLUTION_720), (G = v.kn.FPS_30)),
        (0, l.Xd)({ preset: D, resolution: B, frameRate: G, soundshareEnabled: F }),
        (0, l.XI)(N, a, {
            ...(function (e) {
                var t, n;
                let a;
                if (e.hasOwnProperty("pid"))
                    return C.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
                let l =
                        ((t = void 0),
                        (n = o.Ay.getRunningGames()),
                        null == e ? t : n.find((t) => (0, E.A)(e.id, t.windowHandle))),
                    s =
                        !(0, A.isWindows)() ||
                        null == l ||
                        ((a = l.id),
                        r.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == a || !S.has(a)
                            : null != a && I.has(a)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    d = null != l ? l.pid : null;
                return s || null == d
                    ? (null == d && e.id?.startsWith("prepicked:") && (d = b.Ay.getLastPickedContentPID()),
                      C.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${d}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: d })
                    : (C.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${d}`,
                      ),
                      { pid: d });
            })(k),
            audioSourceId: k.id?.startsWith(i.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: F,
            previewDisabled: H,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
