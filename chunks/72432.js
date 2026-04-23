n.d(t, { A: () => y });
var i = n(141931),
    l = n(118356),
    a = n(401843),
    s = n(15285),
    r = n(506600),
    o = n(674966),
    d = n(253932),
    c = n(929921),
    u = n(734057),
    m = n(71393),
    _ = n(430452),
    h = n(309010),
    p = n(287809),
    g = n(723702),
    A = n(258585),
    f = n(874124),
    x = n(476697),
    C = n(571044),
    E = n(310689),
    I = n(753070),
    v = n(765682);
let b = new Set(["356943187589201930"]),
    T = new Set(["1402418696126992445"]),
    S = new l.Vy("startStreamWithSource");
async function y(e, t) {
    let n = p.default.getCurrentUser(),
        l = h.A.getVoiceChannelId(),
        y = u.A.getChannel(l),
        N = y?.getGuildId(),
        j = m.A.getGuild(N)?.premiumTier;
    if (null == n || null == y || null == l) return [!1, "no user or channel"];
    let L = null;
    if (null == (L = "number" == typeof e ? s.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !_.Ay.getUseSystemScreensharePicker() &&
        !(await o.A.hasPermission(v.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: R, resolution: P, fps: w, soundshareEnabled: D } = c.A.getState(),
        k = t?.preset ?? R,
        { allowAutoQuality: O } = (0, A.eO)({ location: "startStreamWithSource" });
    k !== I.jQ.PRESET_AUTO || O || (k = I.jQ.PRESET_VIDEO);
    let M = k === I.jQ.PRESET_AUTO ? I.jQ.PRESET_VIDEO : k,
        [U, G] = (0, x.A)(M, n, j) ?? [],
        B = U ?? t?.resolution ?? P,
        F = G ?? t?.fps ?? w,
        H = t?.previewDisabled ?? d.uh.getSetting(),
        V = t?.soundshareEnabled ?? D;
    return (
        (0, f.A)(M, B, F, n, j, y) || ((k = I.jQ.PRESET_VIDEO), (B = I.on.RESOLUTION_720), (F = I.kn.FPS_30)),
        (0, a.Xd)({ preset: k, resolution: B, frameRate: F, soundshareEnabled: V }),
        (0, a.XI)(N, l, {
            ...(function (e) {
                let t;
                if (e.hasOwnProperty("pid"))
                    return S.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
                let n = (0, E.A)(void 0, e, s.Ay.getRunningGames()),
                    l =
                        !(0, g.isWindows)() ||
                        null == n ||
                        ((t = n.id),
                        r.P.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
                            ? null == t || !T.has(t)
                            : null != t && b.has(t)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    a = null != n ? n.pid : null;
                return l || null == a
                    ? (null == a && e.id?.startsWith("prepicked:") && (a = C.Ay.getLastPickedContentPID()),
                      S.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${a}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: a })
                    : (S.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${a}`,
                      ),
                      { pid: a });
            })(L),
            audioSourceId: L.id?.startsWith(i.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: V,
            previewDisabled: H,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
