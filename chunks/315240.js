"use strict";
n.d(t, {
    TE: () => ea,
    yT: () => ei,
    h$: () => Q,
    YP: () => $,
    Uh: () => q,
    p8: () => eo,
    Fb: () => ec,
    VO: () => eh,
    uL: () => em,
    GS: () => Z,
    fd: () => K,
    Ts: () => eA,
    e6: () => eE,
    H1: () => ep,
    l0: () => eT,
    yd: () => en,
    Su: () => el,
    yO: () => W,
    $N: () => eI,
    YK: () => eu,
    eQ: () => Y,
    PW: () => eg,
    w7: () => eS,
    K7: () => ed,
    HU: () => X,
    Mt: () => z,
    oH: () => e_,
    Yy: () => er,
    XK: () => es,
}),
    n(321073);
var i = n(636537),
    r = n(228366),
    s = n(77729),
    a = n(885386),
    o = n(994500),
    l = n(461213),
    u = n(652215),
    c = n(952818),
    d = n(400492),
    _ = n(616356),
    h = n(495544),
    f = n(734057),
    p = n(555975),
    E = n(763827),
    m = n(174459),
    g = n(723702),
    A = n(53677),
    I = n(888916),
    T = n(274372),
    S = n(372684),
    y = n(974293),
    N = n(458977),
    v = n(439818),
    C = n(572164),
    R = n(835245),
    O = n(935208),
    b = n(696016);
let D = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? S.nQ.SCREENSHOT : S.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, R.A)(), createdAt: O.default.extractTimestamp(e.id) }),
    ],
    L = null;
async function w(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != L
                ? L
                : (L = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(b.kd).optional(),
                          name: t.string().when("version", { is: t.number().less(3), then: t.string().allow("") }),
                          gameName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.forbidden(),
                                  otherwise: t.required(),
                              }),
                          applicationName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.required().allow(""),
                                  otherwise: t.forbidden(),
                              }),
                          applicationId: t.string(),
                          activity: t
                              .object()
                              .keys({
                                  state: t.string(),
                                  details: t.string(),
                                  timestamps: t.object().keys({ start: t.number(), end: t.number() }),
                                  party: t.object().keys({ id: t.string(), size: t.array().items(t.number()) }),
                              }),
                          users: t.array().items(t.string()).required(),
                          filepath: t.string().required(),
                          length: t.number().required(),
                          thumbnail: t.string().required().allow(""),
                          editMetadata: t
                              .object()
                              .keys({
                                  start: t.number(),
                                  end: t.number(),
                                  applicationAudio: t.boolean(),
                                  voiceAudio: t.boolean(),
                                  soundboardAudio: t.boolean(),
                              }),
                          createdAt: t
                              .number()
                              .when("version", { is: t.number().greater(4).required(), then: t.required() }),
                          type: t
                              .string()
                              .allow(S.nQ.CLIP, S.nQ.SCREENSHOT, S.nQ.VOICE_CLIP)
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                          clipMethod: t.string().allow("auto", "manual").required(),
                          guildId: t.string(),
                          channelId: t.string(),
                          isFavorite: t.boolean(),
                          isTemporary: t.boolean(),
                          isCandidate: t.boolean(),
                          remoteClipId: t.string(),
                          gameSessionId: t.string(),
                          decision: t
                              .object()
                              .keys({
                                  reason: t.string(),
                                  clippingPressure: t.number(),
                                  currentThreshold: t.number(),
                                  effectivePressure: t.number(),
                                  timestamp: t.number(),
                                  signal: t.object().required(),
                              }),
                          timeline: t
                              .array()
                              .items(
                                  t
                                      .object()
                                      .keys({ signal: t.object().required(), timestamp: t.number().required() })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                      })
                      .required());
    try {
        return (
            delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            null != e.decision && delete e.decision.emotionHistory,
            t.assert(e, i),
            null == e.version && (e.version = 0),
            D.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var M = n(284009),
    P = n.n(M);
async function x(e) {
    let t,
        { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        r = i.createFile(!1),
        s = new Promise((e) => {
            r.onReady = e;
        }),
        a = await e.arrayBuffer();
    for (let e of ((a.fileStart = 0),
    r.appendBuffer(a),
    r.flush(),
    await s,
    P()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var k = n(956050),
    U = n(47167),
    G = n(587895),
    F = n(311043),
    V = n(287809),
    B = n(977997),
    H = n(375708);
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: s,
            sourceApplicationId: a,
            activity: d,
            isVoiceOnly: p,
        } = (function () {
            let e,
                t = _.A.getStreamerActiveStreamMetadata(),
                n = t?.pid,
                i = t?.sourceName,
                r = (() => {
                    if (null == t) return c.Ay.getVisibleGame();
                    {
                        let e = null != n ? c.Ay.getGameForPID(n) : null,
                            t = null != i ? c.Ay.getGameForName(i) : null;
                        return e ?? t;
                    }
                })(),
                s = t?.id ?? r?.id,
                a = t?.sourceName ?? r?.name,
                d = E.A.getChannelId(),
                h = null == a && null != d;
            if (h) {
                let e = null != d ? f.A.getChannel(d) : null;
                a = null != e ? (0, U.m1)(e, V.default, o.A) : "";
            }
            let p =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        F.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        G.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), F.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                m = l.A.getUnfilteredActivities(!0).filter(
                    (e) => e.type === u.$pd.PLAYING && null != e.application_id && p.has(e.application_id),
                );
            return {
                sourceName: a,
                sourceApplicationId: s,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(
                    m.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        m[0],
                ),
                isVoiceOnly: h,
            };
        })(),
        m = E.A.getChannelId(),
        g = E.A.getGuildId(),
        A = new Set([h.default.getId()]);
    null != m && (A = A.union(new Set(Object.keys(B.A.getVoiceStatesForChannel(m))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && A.add(t.userId);
        });
    let I = p && t === S.nQ.CLIP ? S.nQ.VOICE_CLIP : t;
    return {
        id: (0, R.A)(),
        createdAt: Date.now(),
        version: b.kd,
        applicationName: s ?? H.intl.string(H.t.qtSJxb),
        applicationId: a,
        activity: d,
        users: Array.from(A),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: g ?? void 0,
        channelId: m ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === S.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: I,
    };
}
async function Y(e) {
    let { allowVoiceRecording: t } = e;
    await a.Q$.updateSetting(t),
        m.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t, clip_runtime: (0, y.GN)() }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function W(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        s = !t && !(0, I.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(s && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            m.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(s && { decoupled_clips_enabled: !1 }),
                clip_runtime: (0, y.GN)(),
            });
}
function K(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            m.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
                clip_runtime: (0, y.GN)(),
            });
}
function $(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function z(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e, clip_runtime: (0, y.GN)() });
}
function q(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function X(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ec(e).catch((e) => {
            b.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function Z(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function Q(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function J(e) {
    if (
        !N.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== S.Gy.MANUAL
    )
        return;
    let t = E.A.getChannelId(),
        n = f.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!l.A.getActivities(!1).some((e) => e.type === u.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => o.A.isFriend(e));
            if (e.isGuildVocalOrThread()) {
                let t = e.guild_id;
                return !a.JG.getSetting().includes(t);
            }
            return !1;
        })(n)
    )
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: u.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await er(e.id, { remoteClipId: t }, !1)),
                m.default.track(u.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                    clip_runtime: (0, y.GN)(),
                });
        } catch (e) {
            b.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ee(e) {
    return "string" == typeof e
        ? { errorMessage: e }
        : null != e && "object" == typeof e
          ? {
                errorMessage:
                    "string" == typeof e.errorMessage
                        ? e.errorMessage
                        : "string" == typeof e.message
                          ? e.message
                          : void 0,
                errorAt: "string" == typeof e.errorAt ? e.errorAt : void 0,
            }
          : {};
}
async function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        o = T.Ay.getSettings().storageLocation,
        l = j(e, S.nQ.CLIP, t, n, a);
    l.isCandidate = i ?? !1;
    let c = `${(0, v.A)(l.applicationName.substring(0, 20))}_${l.id}.mp4`,
        d = s.A.fileManager.join(o, c),
        f = p.Ay.getMediaEngine(),
        E = JSON.stringify(l),
        g = A.TX(l);
    i && r.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...l, pending: !0, filepath: d } });
    try {
        let { duration: e, clipStats: t } = await (null != _.A.getCurrentUserActiveStream()
                ? f.saveClipForUser(h.default.getId(), d, E)
                : f.saveClip(d, E)),
            n = A.kY(g, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null),
                (n.remote_clip_id = l.remoteClipId)),
            (n.clip_signal_types = A.Gb(l));
        let i = "";
        try {
            i = await (0, k.m)(s.A.clips.getClipProtocolURLFromPath(d), 0);
        } catch (e) {
            b.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (l.thumbnail = i),
            (l.length = e),
            m.default.track(u.HAw.CLIP_SAVED, n),
            b.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await f.updateClipMetadata(d, JSON.stringify(l)),
            { ...l, filepath: d }
        );
    } catch (t) {
        if ((i && r.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: l.id }), !("errorMessage" in t)))
            throw (m.default.track(u.HAw.CLIP_SAVE_FAILURE, { ...g, clip_runtime: (0, y.GN)() }), t);
        let e = A.kY(g, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            m.default.track(u.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function en() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0;
    if (T.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: S.RC.MAX_CONCURRENT_SAVES });
    let a = (0, C.TD)(),
        o = _.A.getCurrentUserActiveStream(),
        l = null != o,
        u = (0, C.Ao)(),
        h = c.Ay.getVisibleGame()?.windowHandle != null,
        f = p.Ay.hasClipsSource(),
        E = u && h && f;
    if (!(a && l) && !E)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: S.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: a,
                hasActiveStream: l,
                decoupledClipsEnabled: u,
                hasVisibleGameWindow: h,
                hasClipsSource: f,
            },
        });
    let m = (() => {
        if (null != o) return b.Fv.STREAMER;
        if (E) return b.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: m, clipMethod: e, signal: n?.signal });
    let g = "manual" === e ? (0, d.Ak)("clip_save", 0.5) : null,
        A = performance.now(),
        I = setTimeout(() => {
            b.nx.warn(`Clip save still pending after ${b.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: e, elapsedMs: b.ut });
        }, b.ut);
    try {
        if ("auto" === e && !i) {
            let e = T.Ay.getSettings().maxAutoClips,
                t = T.Ay.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (b.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await e_(t, !1);
                    } catch (e) {
                        b.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let a = await et(e, t, n, i, s);
        if (
            i &&
            !T.Ay.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === a.id;
            })
        ) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), e_(a);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: a }), J(a);
    } catch (e) {
        b.nx.error("Clip Failed to Save", e),
            g?.stop(),
            i || (0, d.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ee(e) });
    } finally {
        clearTimeout(I);
    }
    b.nx.info(`${T.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - A)}ms`);
}
async function ei(e) {
    let t, n;
    if (T.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = p.Ay.getMediaEngine(),
        a = j(e, S.nQ.SCREENSHOT),
        o = T.Ay.getSettings().storageLocation,
        l = `${(0, v.A)(a.applicationName.substring(0, 20))}_${a.id}.jpeg`,
        u = s.A.fileManager.join(o, l);
    if (
        (null != a.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === a.applicationId)) &&
            b.nx.log("Matched application ID to running game:", a.applicationId, n.name),
        null == n &&
            null != a.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === a.applicationName)) &&
            b.nx.log("Matched application name to running game:", a.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && b.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), b.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        b.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: b.Fv.STREAMER, clipMethod: e ?? "manual" });
    let _ = (0, d.Ak)("clip_save", 0.5),
        h = performance.now();
    try {
        let e = { ...a, filepath: u, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            s = (await i.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${s}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            b.nx.info(`Screenshot save took ${Math.round(performance.now() - h)}ms`),
            b.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (b.nx.error("Failed to save screenshot:", e),
            _?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ee(e) }),
            e)
        );
    }
}
async function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = T.Ay.getClipById(e) ?? T.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    null != (await w(s)) &&
        (await p.Ay.getMediaEngine().updateClipMetadata(s.filepath, JSON.stringify(s)),
        n && m.default.track(u.HAw.CLIP_EDITED, { clip_uuid: s.id, ...A.lc() }),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s }));
}
async function es(e) {
    await er(e.id, { isFavorite: !e.isFavorite }, !0);
}
function ea() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function eo(e) {
    r.h.dispatch({ type: "CLIPS_SESSION_UPDATE", session: e });
}
function el() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eu(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ec(e) {
    if (!(0, g.isDesktop)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await w({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function ed(e) {
    er(e.id, { isCandidate: !1 }),
        r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function e_(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, g.isDesktop)() || s.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    await s.A.clips.deleteClip(n),
        r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            m.default.track(u.HAw.CLIP_DELETED, {
                ...A.lc(),
                ...A.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function eh(e) {
    try {
        ep([e.id]);
        let t = p.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await er(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, y.qi)()) {
            let n = await s.A.app.getPath("temp"),
                i = s.A.fileManager.join(n, "Discord Clips"),
                a = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                o = s.A.fileManager.join(i, a),
                l = await t.exportClipToFile(e.filepath, o, r);
            try {
                let t = await s.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === S.nQ.SCREENSHOT) return n;
                return x(n);
            } finally {
                await ef(l);
            }
        }
        let a = await t.exportClip(e.filepath, r);
        if (e.type === S.nQ.SCREENSHOT) return a;
        return x(a);
    } finally {
        ep(null);
    }
}
async function ef(e) {
    if ((0, g.isDesktop)())
        try {
            await s.A.clips.deleteClip(e);
        } catch {}
}
function ep(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eE(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function em(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } });
}
function eg(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...T.Ay.getSettings().clipSignals, ...e } },
    });
}
function eA(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eI(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eT() {
    eA({ type: S.Gy.MANUAL });
}
async function eS(e) {
    await er(e, { isTemporary: !1 }, !0);
}
