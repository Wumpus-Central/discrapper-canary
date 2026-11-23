n.d(t, { A: () => $ });
var i = n(141931),
    a = n(611599),
    r = n(401843),
    l = n(644727);
let u = (0, n(945810).mj)({
    name: "2026-02-capture-target-window",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(674966),
    d = n(253932),
    s = n(929921),
    c = n(734057),
    p = n(71393),
    f = n(988468),
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
        $ = c.A.getChannel(a),
        D = $?.getGuildId(),
        P = p.A.getGuild(D)?.premiumTier;
    if (null == n || null == $ || null == a) return [!1, "no user or channel"];
    let _ = null;
    if (null == (_ = "number" == typeof e ? l.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    let F = f.Ay.getUseSystemScreensharePicker(),
        M = "number" != typeof e && (0, w.K4)(e);
    if (!F && !M && !(await o.A.hasPermission(C.iL.SCREEN_RECORDING, { showAuthorizationError: !1 })))
        return [!1, "no permission"];
    let { preset: O, resolution: L, fps: U, soundshareEnabled: V, streamDrawingEnabled: k } = s.A.getState(),
        G = t?.preset ?? O,
        { allowAutoQuality: N } = (0, A.eO)({ location: "startStreamWithSource" });
    G !== v.jQ.PRESET_AUTO || N || (G = v.jQ.PRESET_VIDEO);
    let W = G === v.jQ.PRESET_AUTO ? v.jQ.PRESET_VIDEO : G,
        [x, j] = (0, y.Ay)(W, n, P, D) ?? [],
        Y = x ?? t?.resolution ?? L,
        H = j ?? t?.fps ?? U,
        Q = t?.previewDisabled ?? d.uh.getSetting(),
        X = t?.soundshareEnabled ?? V;
    if (
        (null != x ||
            (0, I.A)(W, Y, H, n, P, $) ||
            ((G = v.jQ.PRESET_VIDEO), (Y = v.on.RESOLUTION_720), (H = v.kn.FPS_30)),
        M)
    ) {
        let t = await (0, w.ys)(e, { audio: X, maxFrameRate: H });
        if (null == t) return [!1, "no source"];
        _ = t;
    }
    return (
        (0, r.Xd)({
            preset: G,
            resolution: Y,
            frameRate: H,
            soundshareEnabled: X,
            streamDrawingEnabled: t?.streamDrawingEnabled ?? k,
        }),
        (0, r.XI)(D, a, {
            ...(function (e) {
                var t, n;
                let a;
                if (e.hasOwnProperty("pid"))
                    return (b.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid });
                let r =
                        ((t = void 0),
                        (n = l.Ay.getRunningGames()),
                        null == e ? t : n.find((t) => (0, E.A)(e.id, t.windowHandle))),
                    o =
                        !(0, g.uF)() ||
                        null == r ||
                        ((a = r.id),
                        u.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == a || !R.has(a)
                            : null != a && T.has(a)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    d = null != r ? r.pid : null;
                return o || null == d
                    ? (null == d && e.id?.startsWith("prepicked:") && (d = S.Ay.getLastPickedContentPID()),
                      b.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${d}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: d })
                    : (b.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${d}`,
                      ),
                      { pid: d });
            })(_),
            audioSourceId: _.id?.startsWith(i.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: X,
            previewDisabled: Q,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
