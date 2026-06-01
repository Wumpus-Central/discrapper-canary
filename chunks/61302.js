"use strict";
n.d(t, {
    yT: () => eu,
    yO: () => Z,
    $N: () => eN,
    YK: () => ef,
    h$: () => ei,
    eQ: () => X,
    YP: () => J,
    PW: () => eS,
    MI: () => ec,
    Fb: () => ep,
    w7: () => eC,
    K7: () => eE,
    HU: () => et,
    VO: () => eg,
    Mt: () => ee,
    GS: () => en,
    fd: () => Q,
    Ts: () => ey,
    e6: () => eT,
    H1: () => eI,
    oH: () => em,
    jA: () => eh,
    l0: () => ev,
    yd: () => el,
    XK: () => e_,
    Yy: () => ed,
}),
    n(321073);
var i = n(636537),
    r = n(459838),
    s = n(823598),
    a = n(228366),
    o = n(77729),
    l = n(166929),
    u = n(885386),
    c = n(994500),
    d = n(461213),
    _ = n(652215),
    h = n(952818),
    f = n(652896),
    p = n(400492),
    E = n(929921),
    m = n(616356),
    g = n(495544),
    A = n(734057),
    I = n(761853),
    T = n(763827),
    S = n(116956),
    y = n(803301),
    N = n(174459),
    v = n(723702),
    C = n(274372),
    R = n(372684),
    O = n(974293),
    b = n(458977),
    D = n(439818),
    L = n(572164),
    w = n(835245),
    M = n(935208),
    P = n(696016);
let x = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? R.nQ.SCREENSHOT : R.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, w.A)(), createdAt: M.default.extractTimestamp(e.id) }),
    ],
    k = null;
async function U(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != k
                ? k
                : (k = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(P.kd).optional(),
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
                              .allow(R.nQ.CLIP, R.nQ.SCREENSHOT, R.nQ.VOICE_CLIP)
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
            x.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var G = n(284009),
    F = n.n(G);
async function V(e) {
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
    F()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var B = n(956050),
    H = n(587895),
    j = n(47167),
    Y = n(311043),
    W = n(985253),
    K = n(287809),
    $ = n(977997),
    z = n(375708);
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: s,
            sourceApplicationId: a,
            activity: o,
            isVoiceOnly: l,
        } = (function () {
            let e = m.A.getStreamerActiveStreamMetadata(),
                t = e?.pid,
                n = e?.sourceName,
                i = (() => {
                    if (null == e) return h.Ay.getVisibleGame();
                    {
                        let e = null != t ? h.Ay.getGameForPID(t) : null,
                            i = null != n ? h.Ay.getGameForName(n) : null;
                        return e ?? i;
                    }
                })(),
                r = e?.id ?? i?.id,
                s = e?.sourceName ?? i?.name,
                a = T.A.getChannelId(),
                o = null == s && null != a;
            if (o) {
                let e = null != a ? A.A.getChannel(a) : null;
                s = null != e ? (0, j.m1)(e, K.default, c.A) : "";
            }
            let l = (0, W.A)(r, Y.A, H.A),
                u = d.A.getUnfilteredActivities(!0).filter(
                    (e) => e.type === _.$pd.PLAYING && null != e.application_id && l.has(e.application_id),
                );
            return {
                sourceName: s,
                sourceApplicationId: r,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(
                    u.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        u[0],
                ),
                isVoiceOnly: o,
            };
        })(),
        u = T.A.getChannelId(),
        f = T.A.getGuildId(),
        p = new Set([g.default.getId()]);
    null != u && (p = p.union(new Set(Object.keys($.A.getVoiceStatesForChannel(u))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && p.add(t.userId);
        });
    let E = l && t === R.nQ.CLIP ? R.nQ.VOICE_CLIP : t;
    return {
        id: (0, w.A)(),
        createdAt: Date.now(),
        version: P.kd,
        applicationName: s ?? z.intl.string(z.t.qtSJxb),
        applicationId: a,
        activity: o,
        users: Array.from(p),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: f ?? void 0,
        channelId: u ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === R.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: E,
    };
}
async function X(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t, clip_runtime: (0, O.GN)() }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function Z(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
                clip_runtime: (0, O.GN)(),
            });
}
function Q(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
                clip_runtime: (0, O.GN)(),
            });
}
function J(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e, clip_runtime: (0, O.GN)() });
}
function et(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ep(e).catch((e) => {
            P.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function ei(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function er(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            r = (0, l.kZ)(e),
            s = n.get(r) ?? 0;
        n.set(r, s + i);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: n.get(l.yo.NVIDIA_CUDA) ?? 0,
        frames_encoded_nvidia_direct3d: n.get(l.yo.NVIDIA_DIRECT_3D) ?? 0,
        frames_encoded_openh264: n.get(l.yo.OPENH264) ?? 0,
        frames_encoded_videotoolbox: n.get(l.yo.VIDEOTOOLBOX) ?? 0,
        frames_encoded_amd_direct3d: n.get(l.yo.AMD_DIRECT_3D) ?? 0,
        frames_encoded_amd_vaapi: n.get(l.yo.AMD_VAAPI) ?? 0,
        frames_encoded_intel: n.get(l.yo.INTEL) ?? 0,
        frames_encoded_intel_direct3d: n.get(l.yo.INTEL_DIRECT_3D) ?? 0,
        frames_encoded_wmf_direct3d_intel: n.get(l.yo.WMF_DIRECT_3D_INTEL) ?? 0,
        frames_encoded_wmf_direct3d_nvidia: n.get(l.yo.WMF_DIRECT_3D_NVIDIA) ?? 0,
        frames_encoded_wmf_direct3d_amd: n.get(l.yo.WMF_DIRECT_3D_AMD) ?? 0,
        frames_encoded_wmf_direct3d:
            (n.get(l.yo.WMF_DIRECT_3D) ?? 0) +
            (n.get(l.yo.WMF_DIRECT_3D_INTEL) ?? 0) +
            (n.get(l.yo.WMF_DIRECT_3D_NVIDIA) ?? 0) +
            (n.get(l.yo.WMF_DIRECT_3D_AMD) ?? 0),
        frames_encoded_uncategorized: n.get(l.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(l.yo.UNKNOWN) ?? 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: C.Ay.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: E.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
        clip_runtime: (0, O.GN)(),
    };
}
async function es(e) {
    if (
        !b.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== R.Gy.MANUAL
    )
        return;
    let t = T.A.getChannelId(),
        n = A.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!d.A.getActivities(!1).some((e) => e.type === _.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => c.A.isFriend(e));
            if (e.isGuildVocalOrThread()) {
                let t = e.guild_id;
                return !u.JG.getSetting().includes(t);
            }
            return !1;
        })(n)
    )
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: _.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await ed(e.id, { remoteClipId: t })),
                N.default.track(_.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                    clip_runtime: (0, O.GN)(),
                });
        } catch (e) {
            P.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ea(e) {
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
async function eo() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = arguments.length > 4 ? arguments[4] : void 0,
        u = C.Ay.getSettings().storageLocation,
        c = q(n, R.nQ.CLIP, i, r, l);
    c.isCandidate = s ?? !1;
    let d = `${(0, D.A)(c.applicationName.substring(0, 20))}_${c.id}.mp4`,
        h = o.A.fileManager.join(u, d),
        p = I.Ay.getMediaEngine(),
        E = JSON.stringify(c),
        A =
            ((t = null != (e = m.A.getCurrentUserActiveStream()) ? S.A.getRTCConnection((0, f._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: c.guildId,
                channel_id: c.channelId,
                application_id: c.applicationId,
                application_name: c.applicationName,
                clip_uuid: c.id,
                clip_event_timeline_size: c.timeline.length,
            });
    s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...c, pending: !0, filepath: h } });
    try {
        let { duration: e, clipStats: t } = await (null != m.A.getCurrentUserActiveStream()
                ? p.saveClipForUser(g.default.getId(), h, E)
                : p.saveClip(h, E)),
            n = er(A, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null),
                (n.remote_clip_id = c.remoteClipId));
        let i = "";
        try {
            i = await (0, B.m)(o.A.clips.getClipProtocolURLFromPath(h), 0);
        } catch (e) {
            P.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (c.thumbnail = i),
            (c.length = e),
            N.default.track(_.HAw.CLIP_SAVED, n),
            P.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await p.updateClipMetadata(h, JSON.stringify(c)),
            { ...c, filepath: h }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: c.id }), !("errorMessage" in t)))
            throw (N.default.track(_.HAw.CLIP_SAVE_FAILURE, { ...A, clip_runtime: (0, O.GN)() }), t);
        let e = er(A, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            N.default.track(_.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function el() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 ? arguments[4] : void 0;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: R.RC.MAX_CONCURRENT_SAVES });
    let l = (0, L.TD)(),
        u = m.A.getCurrentUserActiveStream(),
        c = null != u,
        d = (0, L.Ao)(),
        _ = h.Ay.getVisibleGame()?.windowHandle != null,
        E = I.Ay.hasClipsSource(),
        g = d && _ && E;
    if (!(l && c) && !g)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: R.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: l,
                hasActiveStream: c,
                decoupledClipsEnabled: d,
                hasVisibleGameWindow: _,
                hasClipsSource: E,
            },
        });
    let A = null != u ? (0, f._z)(u) : void 0,
        T = (() => {
            if (null != u) return P.Fv.STREAMER;
            if (g) return P.Fv.DECOUPLED;
            throw Error("No clip type available");
        })(),
        S = await (async () => {
            if (null == A) return;
            let { ownerId: e, guildId: t } = (0, f.Iy)(A),
                n = y.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, B.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: A,
        thumbnail: i ? void 0 : S,
        clipMethod: e,
        signal: n?.signal,
    });
    let N = "manual" === e ? (0, p.Ak)("clip_save", 0.5) : null,
        v = performance.now(),
        O = setTimeout(() => {
            P.nx.warn(`Clip save still pending after ${P.ut}ms \u{2014} native callback may have stalled`),
                a.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: e, elapsedMs: P.ut });
        }, P.ut);
    try {
        if ("auto" === e && !i) {
            let e = C.Ay.getSettings().maxAutoClips,
                t = C.Ay.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (P.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await em(t.filepath, t.id);
                    } catch (e) {
                        P.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await eo(e, t, n, i, o);
        if (
            i &&
            !C.Ay.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), em(r.filepath, r.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), es(r);
    } catch (e) {
        P.nx.error("Clip Failed to Save", e),
            N?.stop(),
            i || (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ea(e) });
    } finally {
        clearTimeout(O);
    }
    P.nx.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - v)}ms`);
}
async function eu(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = m.A.getCurrentUserActiveStream(),
        r = I.Ay.getMediaEngine(),
        s = q(e, R.nQ.SCREENSHOT),
        l = C.Ay.getSettings().storageLocation,
        u = `${(0, D.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        c = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = h.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            P.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = h.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            P.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = h.Ay.getVisibleGame()) && P.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), P.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        P.nx.error("Failed to save screenshot: No window handle available"), (0, p.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: P.Fv.STREAMER,
        streamKey: null != i ? (0, f._z)(i) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let d = (0, p.Ak)("clip_save", 0.5),
        _ = performance.now();
    try {
        let e = { ...s, filepath: c, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            i = (await r.saveScreenshot(c, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${i}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            P.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            P.nx.log("Successfully saved screenshot to:", c);
    } catch (e) {
        throw (
            (P.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ea(e) }),
            e)
        );
    }
}
function ec(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function ed(e, t) {
    let n = C.Ay.getClipById(e) ?? C.Ay.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await U(i)) &&
        (await I.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        N.default.track(_.HAw.CLIP_EDITED, { clip_uuid: i.id, clip_runtime: (0, O.GN)() }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function e_(e) {
    await ed(e.id, { isFavorite: !e.isFavorite });
}
function eh() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function ef(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ep(e) {
    if (!(0, v.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await U({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function eE(e) {
    ed(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function em(e, t) {
    (0, v.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function eg(e) {
    try {
        eI([e.id]);
        let t = I.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await ed(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, O.qi)()) {
            let n = await o.A.app.getPath("temp"),
                i = o.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                a = o.A.fileManager.join(i, s),
                l = await t.exportClipToFile(e.filepath, a, r);
            try {
                let t = await o.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === R.nQ.SCREENSHOT) return n;
                return V(n);
            } finally {
                await eA(l);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === R.nQ.SCREENSHOT) return s;
        return V(s);
    } finally {
        eI(null);
    }
}
async function eA(e) {
    if ((0, v.isDesktop)())
        try {
            await o.A.clips.deleteClip(e);
        } catch {}
}
function eI(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eT(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eS(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...C.Ay.getSettings().clipSignals, ...e } },
    });
}
function ey(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eN(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function ev() {
    ey({ type: R.Gy.MANUAL });
}
async function eC(e) {
    await ed(e, { isTemporary: !1 });
}
