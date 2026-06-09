"use strict";
n.d(t, {
    TE: () => ef,
    yT: () => ec,
    h$: () => er,
    YP: () => J,
    Uh: () => et,
    p8: () => ep,
    MI: () => ed,
    Fb: () => eg,
    VO: () => eT,
    uL: () => ev,
    GS: () => ei,
    fd: () => Q,
    Ts: () => eR,
    e6: () => eN,
    H1: () => ey,
    l0: () => eb,
    yd: () => eu,
    Su: () => eE,
    yO: () => Z,
    $N: () => eO,
    YK: () => em,
    eQ: () => X,
    PW: () => eC,
    w7: () => eD,
    K7: () => eA,
    HU: () => en,
    Mt: () => ee,
    oH: () => eI,
    Yy: () => e_,
    XK: () => eh,
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
    I = n(555975),
    T = n(763827),
    S = n(116956),
    y = n(803301),
    N = n(174459),
    v = n(723702),
    C = n(888916),
    R = n(274372),
    O = n(372684),
    b = n(974293),
    D = n(458977),
    L = n(439818),
    w = n(572164),
    M = n(835245),
    P = n(935208),
    x = n(696016);
let k = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? O.nQ.SCREENSHOT : O.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, M.A)(), createdAt: P.default.extractTimestamp(e.id) }),
    ],
    U = null;
async function G(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != U
                ? U
                : (U = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(x.kd).optional(),
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
                              .allow(O.nQ.CLIP, O.nQ.SCREENSHOT, O.nQ.VOICE_CLIP)
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
            k.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var F = n(284009),
    V = n.n(F);
async function B(e) {
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
    V()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var H = n(956050),
    j = n(47167),
    Y = n(587895),
    W = n(311043),
    K = n(287809),
    $ = n(977997),
    z = n(375708);
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: s,
            sourceApplicationId: a,
            activity: o,
            isVoiceOnly: l,
        } = (function () {
            let e,
                t = m.A.getStreamerActiveStreamMetadata(),
                n = t?.pid,
                i = t?.sourceName,
                r = (() => {
                    if (null == t) return h.Ay.getVisibleGame();
                    {
                        let e = null != n ? h.Ay.getGameForPID(n) : null,
                            t = null != i ? h.Ay.getGameForName(i) : null;
                        return e ?? t;
                    }
                })(),
                s = t?.id ?? r?.id,
                a = t?.sourceName ?? r?.name,
                o = T.A.getChannelId(),
                l = null == a && null != o;
            if (l) {
                let e = null != o ? A.A.getChannel(o) : null;
                a = null != e ? (0, j.m1)(e, K.default, c.A) : "";
            }
            let u =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        W.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        Y.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), W.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                f = d.A.getUnfilteredActivities(!0).filter(
                    (e) => e.type === _.$pd.PLAYING && null != e.application_id && u.has(e.application_id),
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
                    f.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        f[0],
                ),
                isVoiceOnly: l,
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
    let E = l && t === O.nQ.CLIP ? O.nQ.VOICE_CLIP : t;
    return {
        id: (0, M.A)(),
        createdAt: Date.now(),
        version: x.kd,
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
        remoteClipId: i?.signal?.type === O.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: E,
    };
}
async function X(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t, clip_runtime: (0, b.GN)() }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function Z(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        r = !t && !(0, C.Fp)();
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(r && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(r && { decoupled_clips_enabled: !1 }),
                clip_runtime: (0, b.GN)(),
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
                clip_runtime: (0, b.GN)(),
            });
}
function J(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e, clip_runtime: (0, b.GN)() });
}
function et(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eg(e).catch((e) => {
            x.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function ei(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function er(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function es(e, t) {
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
        clip_duration_setting: R.Ay.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: E.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
        clip_runtime: (0, b.GN)(),
    };
}
async function ea(e) {
    if (
        !D.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== O.Gy.MANUAL
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
            null != t && (await e_(e.id, { remoteClipId: t })),
                N.default.track(_.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                    clip_runtime: (0, b.GN)(),
                });
        } catch (e) {
            x.nx.warn("Failed to send remote clip trigger", e);
        }
}
function eo(e) {
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
async function el() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = arguments.length > 4 ? arguments[4] : void 0,
        u = R.Ay.getSettings().storageLocation,
        c = q(n, O.nQ.CLIP, i, r, l);
    c.isCandidate = s ?? !1;
    let d = `${(0, L.A)(c.applicationName.substring(0, 20))}_${c.id}.mp4`,
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
            n = es(A, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null),
                (n.remote_clip_id = c.remoteClipId));
        let i = "";
        try {
            i = await (0, H.m)(o.A.clips.getClipProtocolURLFromPath(h), 0);
        } catch (e) {
            x.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (c.thumbnail = i),
            (c.length = e),
            N.default.track(_.HAw.CLIP_SAVED, n),
            x.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await p.updateClipMetadata(h, JSON.stringify(c)),
            { ...c, filepath: h }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: c.id }), !("errorMessage" in t)))
            throw (N.default.track(_.HAw.CLIP_SAVE_FAILURE, { ...A, clip_runtime: (0, b.GN)() }), t);
        let e = es(A, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            N.default.track(_.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function eu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 ? arguments[4] : void 0;
    if (R.Ay.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: O.RC.MAX_CONCURRENT_SAVES });
    let l = (0, w.TD)(),
        u = m.A.getCurrentUserActiveStream(),
        c = null != u,
        d = (0, w.Ao)(),
        _ = h.Ay.getVisibleGame()?.windowHandle != null,
        E = I.Ay.hasClipsSource(),
        g = d && _ && E;
    if (!(l && c) && !g)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: O.RC.NO_ELIGIBLE_SOURCE,
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
            if (null != u) return x.Fv.STREAMER;
            if (g) return x.Fv.DECOUPLED;
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
                    return (0, H.n)(t);
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
        C = setTimeout(() => {
            x.nx.warn(`Clip save still pending after ${x.ut}ms \u{2014} native callback may have stalled`),
                a.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: e, elapsedMs: x.ut });
        }, x.ut);
    try {
        if ("auto" === e && !i) {
            let e = R.Ay.getSettings().maxAutoClips,
                t = R.Ay.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (x.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await eI(t.filepath, t.id);
                    } catch (e) {
                        x.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await el(e, t, n, i, o);
        if (
            i &&
            !R.Ay.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eI(r.filepath, r.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), ea(r);
    } catch (e) {
        x.nx.error("Clip Failed to Save", e),
            N?.stop(),
            i || (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...eo(e) });
    } finally {
        clearTimeout(C);
    }
    x.nx.info(`${R.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - v)}ms`);
}
async function ec(e) {
    let t, n;
    if (R.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = m.A.getCurrentUserActiveStream(),
        r = I.Ay.getMediaEngine(),
        s = q(e, O.nQ.SCREENSHOT),
        l = R.Ay.getSettings().storageLocation,
        u = `${(0, L.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        c = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = h.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            x.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = h.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            x.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = h.Ay.getVisibleGame()) && x.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), x.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        x.nx.error("Failed to save screenshot: No window handle available"), (0, p.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: x.Fv.STREAMER,
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
            x.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            x.nx.log("Successfully saved screenshot to:", c);
    } catch (e) {
        throw (
            (x.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...eo(e) }),
            e)
        );
    }
}
function ed(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function e_(e, t) {
    let n = R.Ay.getClipById(e) ?? R.Ay.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await G(i)) &&
        (await I.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        N.default.track(_.HAw.CLIP_EDITED, { clip_uuid: i.id, clip_runtime: (0, b.GN)() }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function eh(e) {
    await e_(e.id, { isFavorite: !e.isFavorite });
}
function ef() {
    a.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function ep(e) {
    a.h.dispatch({ type: "CLIPS_SESSION_UPDATE", session: e });
}
function eE() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function em(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eg(e) {
    if (!(0, v.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await G({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function eA(e) {
    e_(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function eI(e, t) {
    (0, v.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function eT(e) {
    try {
        ey([e.id]);
        let t = I.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await e_(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, b.qi)()) {
            let n = await o.A.app.getPath("temp"),
                i = o.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                a = o.A.fileManager.join(i, s),
                l = await t.exportClipToFile(e.filepath, a, r);
            try {
                let t = await o.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === O.nQ.SCREENSHOT) return n;
                return B(n);
            } finally {
                await eS(l);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === O.nQ.SCREENSHOT) return s;
        return B(s);
    } finally {
        ey(null);
    }
}
async function eS(e) {
    if ((0, v.isDesktop)())
        try {
            await o.A.clips.deleteClip(e);
        } catch {}
}
function ey(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eN(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function ev(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } });
}
function eC(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...R.Ay.getSettings().clipSignals, ...e } },
    });
}
function eR(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eO(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eb() {
    eR({ type: O.Gy.MANUAL });
}
async function eD(e) {
    await e_(e, { isTemporary: !1 });
}
