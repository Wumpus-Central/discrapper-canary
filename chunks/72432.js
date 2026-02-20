"use strict";
n.d(t, { A: () => R });
var r = n(141931),
    i = n(118356),
    s = n(401843),
    a = n(15285),
    o = n(674966),
    l = n(253932),
    u = n(929921),
    c = n(734057),
    d = n(71393),
    _ = n(430452),
    f = n(309010),
    p = n(287809),
    h = n(723702),
    m = n(258585),
    E = n(874124),
    g = n(476697),
    A = n(571044),
    I = n(310689),
    T = n(753070),
    S = n(765682);
let y = new Set(["356943187589201930"]),
    v = new i.Vy("startStreamWithSource");
function N(e) {
    return e.hasOwnProperty("pid");
}
function C(e) {
    let t = e.id;
    return null != t && y.has(t);
}
function b(e) {
    if (N(e)) return v.info(`Starting stream for running game source pid ${e.pid}`), { pid: e.pid };
    let t = (0, I.A)(void 0, e, a.Ay.getRunningGames()),
        n = !(0, h.isWindows)() || null == t || C(t) || e?.id.startsWith(r.fS.CAMERA),
        i = null != t ? t.pid : null;
    return n || null == i
        ? (null == i && e.id?.startsWith("prepicked:") && (i = A.Ay.getLastPickedContentPID()),
          v.info(`Starting stream for source id ${e.id} and name ${e.name} and pid ${i}`),
          { sourceId: e.id, sourceName: e.name, sourceIcon: e.icon, sourcePid: i })
        : (v.info(`Starting stream for source id ${e.id} and name ${e.name} converted to running game pid ${i}`),
          { pid: i });
}
async function R(e, t) {
    let n = p.default.getCurrentUser(),
        i = f.A.getVoiceChannelId(),
        h = c.A.getChannel(i),
        A = h?.getGuildId(),
        I = d.A.getGuild(A)?.premiumTier;
    if (null == n || null == h || null == i) return [!1, "no user or channel"];
    let y = null;
    if (null == (y = "number" == typeof e ? a.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !_.Ay.getUseSystemScreensharePicker() &&
        !(await o.A.hasPermission(S.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: v, resolution: N, fps: C, soundshareEnabled: R } = u.A.getState(),
        O = t?.preset ?? v,
        { allowAutoQuality: D } = (0, m.eO)({ location: "startStreamWithSource" });
    O !== T.jQ.PRESET_AUTO || D || (O = T.jQ.PRESET_VIDEO);
    let L = O === T.jQ.PRESET_AUTO ? T.jQ.PRESET_VIDEO : O,
        [w, x] = (0, g.A)(L, n, I) ?? [],
        M = w ?? t?.resolution ?? N,
        P = x ?? t?.fps ?? C,
        k = t?.previewDisabled ?? l.uh.getSetting(),
        U = t?.soundshareEnabled ?? R;
    return (
        (0, E.A)(L, M, P, n, I, h) || ((O = T.jQ.PRESET_VIDEO), (M = T.on.RESOLUTION_720), (P = T.kn.FPS_30)),
        (0, s.Xd)({ preset: O, resolution: M, frameRate: P, soundshareEnabled: U }),
        (0, s.XI)(A, i, {
            ...b(y),
            audioSourceId: y.id?.startsWith(r.fS.CAMERA) ? t?.audioSourceId : void 0,
            sound: U,
            previewDisabled: k,
            goLiveModalDurationMs: t?.goLiveModalDurationMs,
            analyticsLocations: t?.analyticsLocations,
        }),
        [!0, void 0]
    );
}
