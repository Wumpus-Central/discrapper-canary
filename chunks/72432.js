"use strict";
n.d(t, { A: () => D });
var r = n(141931),
    i = n(118356),
    s = n(401843),
    a = n(15285),
    o = n(506600),
    l = n(674966),
    u = n(253932),
    c = n(929921),
    d = n(734057),
    _ = n(71393),
    f = n(430452),
    p = n(309010),
    h = n(287809),
    m = n(723702),
    E = n(258585),
    g = n(874124),
    A = n(476697),
    I = n(571044),
    T = n(310689),
    S = n(753070),
    y = n(765682);
let v = new Set(["356943187589201930"]),
    N = new Set(["1402418696126992445"]),
    C = new i.Vy("startStreamWithSource");
function b(e) {
    return e.hasOwnProperty("pid");
}
function R(e) {
    let t = e.id;
    return o.P.getConfig({ location: "shouldCaptureGameByWindow" }).enabled
        ? null == t || !N.has(t)
        : null != t && v.has(t);
}
function O(e) {
    if (b(e)) return C.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
    let t = (0, T.A)(void 0, e, a.Ay.getRunningGames()),
        n = !(0, m.isWindows)() || null == t || R(t) || e?.id.startsWith(r.fS.CAMERA),
        i = null != t ? t.pid : null;
    return n || null == i
        ? (null == i && e.id?.startsWith("prepicked:") && (i = I.Ay.getLastPickedContentPID()),
          C.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${i}`),
          { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: i })
        : (C.info(`Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${i}`),
          { pid: i });
}
async function D(e, t) {
    let n = h.default.getCurrentUser(),
        i = p.A.getVoiceChannelId(),
        o = d.A.getChannel(i),
        m = o?.getGuildId(),
        I = _.A.getGuild(m)?.premiumTier;
    if (null == n || null == o || null == i) return [!1, "no user or channel"];
    let T = null;
    if (null == (T = "number" == typeof e ? a.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !f.Ay.getUseSystemScreensharePicker() &&
        !(await l.A.hasPermission(y.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: v, resolution: N, fps: C, soundshareEnabled: b } = c.A.getState(),
        R = t?.preset ?? v,
        { allowAutoQuality: D } = (0, E.eO)({ location: "startStreamWithSource" });
    R !== S.jQ.PRESET_AUTO || D || (R = S.jQ.PRESET_VIDEO);
    let L = R === S.jQ.PRESET_AUTO ? S.jQ.PRESET_VIDEO : R,
        [w, x] = (0, A.A)(L, n, I) ?? [],
        M = w ?? t?.resolution ?? N,
        P = x ?? t?.fps ?? C,
        k = t?.previewDisabled ?? u.uh.getSetting(),
        U = t?.soundshareEnabled ?? b;
    return (
        (0, g.A)(L, M, P, n, I, o) || ((R = S.jQ.PRESET_VIDEO), (M = S.on.RESOLUTION_720), (P = S.kn.FPS_30)),
        (0, s.Xd)({ preset: R, resolution: M, frameRate: P, soundshareEnabled: U }),
        (0, s.XI)(m, i, {
            ...O(T),
            audioSourceId: T.id?.startsWith(r.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: U,
            previewDisabled: k,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
