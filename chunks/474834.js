n.d(t, { A: () => $ });
var i = n(141931),
    a = n(611599),
    l = n(401843),
    r = n(644727);
let u = (0, n(945810).mj)({
    name: "2026-02-capture-target-window",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(674966),
    d = n(253932),
    c = n(929921),
    s = n(734057),
    p = n(71393),
    f = n(754712),
    m = n(309010),
    h = n(287809),
    g = n(723702),
    A = n(258585),
    I = n(676030),
    y = n(476697),
    S = n(71689),
    w = n(260643),
    E = n(830012),
    v = n(753070),
    C = n(765682);
let T = new Set(["356943187589201930"]),
    R = new Set(["1402418696126992445"]),
    b = new a.Vy("startStreamWithSource");
async function $(e, t) {
    let n = h.default.getCurrentUser(),
        a = m.Ay.getVoiceChannelId(),
        $ = s.A.getChannel(a),
        P = $?.getGuildId(),
        _ = p.A.getGuild(P)?.premiumTier;
    if (null == n || null == $ || null == a) return [!1, "no user or channel"];
    let D = null;
    if (null == (D = "number" == typeof e ? r.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    let F = f.Ay.getUseSystemScreensharePicker(),
        M = "number" != typeof e && (0, w.K4)(e);
    if (!F && !M && !(await o.A.hasPermission(C.iL.SCREEN_RECORDING, { showAuthorizationError: !1 })))
        return [!1, "no permission"];
    let { preset: O, resolution: k, fps: L, soundshareEnabled: U } = c.A.getState(),
        V = t?.preset ?? O,
        { allowAutoQuality: G } = (0, A.eO)({ location: "startStreamWithSource" });
    V !== v.jQ.PRESET_AUTO || G || (V = v.jQ.PRESET_VIDEO);
    let N = V === v.jQ.PRESET_AUTO ? v.jQ.PRESET_VIDEO : V,
        [W, j] = (0, y.Ay)(N, n, _, P) ?? [],
        x = W ?? t?.resolution ?? k,
        Y = j ?? t?.fps ?? L,
        H = t?.previewDisabled ?? d.uh.getSetting(),
        Q = t?.soundshareEnabled ?? U;
    if (
        (null != W ||
            (0, I.A)(N, x, Y, n, _, $) ||
            ((V = v.jQ.PRESET_VIDEO), (x = v.on.RESOLUTION_720), (Y = v.kn.FPS_30)),
        M)
    ) {
        let t = await (0, w.ys)(e, { audio: Q, maxFrameRate: Y });
        if (null == t) return [!1, "no source"];
        D = t;
    }
    return (
        (0, l.Xd)({ preset: V, resolution: x, frameRate: Y, soundshareEnabled: Q }),
        (0, l.XI)(P, a, {
            ...(function (e) {
                var t, n;
                let a;
                if (e.hasOwnProperty("pid"))
                    return (b.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid });
                let l =
                        ((t = void 0),
                        (n = r.Ay.getRunningGames()),
                        null == e ? t : n.find((t) => (0, E.A)(e.id, t.windowHandle))),
                    o =
                        !(0, g.uF)() ||
                        null == l ||
                        ((a = l.id),
                        u.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == a || !R.has(a)
                            : null != a && T.has(a)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    d = null != l ? l.pid : null;
                return o || null == d
                    ? (null == d && e.id?.startsWith("prepicked:") && (d = S.Ay.getLastPickedContentPID()),
                      b.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${d}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: d })
                    : (b.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${d}`,
                      ),
                      { pid: d });
            })(D),
            audioSourceId: D.id?.startsWith(i.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: Q,
            previewDisabled: H,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
