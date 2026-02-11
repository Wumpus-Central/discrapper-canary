n.d(t, { A: () => N });
var i = n(141931),
    l = n(118356),
    a = n(401843),
    r = n(15285),
    s = n(674966),
    o = n(253932),
    d = n(929921),
    c = n(734057),
    u = n(71393),
    m = n(430452),
    _ = n(309010),
    h = n(287809),
    p = n(723702),
    g = n(258585),
    A = n(874124),
    f = n(476697),
    x = n(571044),
    E = n(310689),
    C = n(753070),
    I = n(765682);
let T = new Set(["356943187589201930"]),
    v = new l.Vy("startStreamWithSource");
async function N(e, t) {
    let n = h.default.getCurrentUser(),
        l = _.A.getVoiceChannelId(),
        N = c.A.getChannel(l),
        S = N?.getGuildId(),
        b = u.A.getGuild(S)?.premiumTier;
    if (null == n || null == N || null == l) return [!1, "no user or channel"];
    let j = null;
    if (null == (j = "number" == typeof e ? r.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !m.Ay.getUseSystemScreensharePicker() &&
        !(await s.A.hasPermission(I.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: y, resolution: R, fps: L, soundshareEnabled: M } = d.A.getState(),
        O = t?.preset ?? y,
        { allowAutoQuality: D } = (0, g.eO)({ location: "startStreamWithSource" });
    O !== C.jQ.PRESET_AUTO || D || (O = C.jQ.PRESET_VIDEO);
    let P = O === C.jQ.PRESET_AUTO ? C.jQ.PRESET_VIDEO : O,
        [k, U] = (0, f.A)(P, n, b) ?? [],
        w = k ?? t?.resolution ?? R,
        G = U ?? t?.fps ?? L,
        B = t?.previewDisabled ?? o.uh.getSetting(),
        F = t?.soundshareEnabled ?? M;
    return (
        (0, A.A)(P, w, G, n, b, N) || ((O = C.jQ.PRESET_VIDEO), (w = C.on.RESOLUTION_720), (G = C.kn.FPS_30)),
        (0, a.Xd)({ preset: O, resolution: w, frameRate: G, soundshareEnabled: F }),
        (0, a.XI)(S, l, {
            ...(function (e) {
                let t;
                if (e.hasOwnProperty("pid"))
                    return v.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
                let n = (0, E.A)(void 0, e, r.Ay.getRunningGames()),
                    l =
                        !(0, p.isWindows)() ||
                        null == n ||
                        (null != (t = n.id) && T.has(t)) ||
                        e?.id.startsWith(i.fS.CAMERA),
                    a = null != n ? n.pid : null;
                return l || null == a
                    ? (null == a && e.id?.startsWith("prepicked:") && (a = x.Ay.getLastPickedContentPID()),
                      v.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${a}`),
                      { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: a })
                    : (v.info(
                          `Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${a}`,
                      ),
                      { pid: a });
            })(j),
            audioSourceId: j.id?.startsWith(i.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: F,
            previewDisabled: B,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
