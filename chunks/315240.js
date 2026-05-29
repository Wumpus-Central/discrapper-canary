"use strict";
n.d(t, {
    yT: () => el,
    yO: () => X,
    $N: () => ey,
    YK: () => eh,
    h$: () => en,
    eQ: () => q,
    YP: () => Q,
    PW: () => eT,
    MI: () => eu,
    Fb: () => ef,
    w7: () => ev,
    K7: () => ep,
    HU: () => ee,
    VO: () => em,
    Mt: () => J,
    GS: () => et,
    fd: () => Z,
    Ts: () => eS,
    e6: () => eI,
    H1: () => eA,
    oH: () => eE,
    jA: () => e_,
    l0: () => eN,
    yd: () => eo,
    XK: () => ed,
    Yy: () => ec,
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
    H = n(47167),
    j = n(587895),
    Y = n(311043),
    W = n(287809),
    K = n(977997),
    $ = n(375708);
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        {
            sourceName: r,
            sourceApplicationId: s,
            activity: a,
            isVoiceOnly: o,
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
                a = null != e ? (0, H.m1)(e, W.default, c.A) : "";
            }
            let u =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        Y.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        j.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), Y.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
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
        l = T.A.getChannelId(),
        u = T.A.getGuildId(),
        f = new Set([g.default.getId()]);
    null != l && (f = f.union(new Set(Object.keys(K.A.getVoiceStatesForChannel(l))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && f.add(t.userId);
        });
    let p = o && t === R.nQ.CLIP ? R.nQ.VOICE_CLIP : t;
    return {
        id: (0, w.A)(),
        createdAt: Date.now(),
        version: P.kd,
        applicationName: r ?? $.intl.string($.t.qtSJxb),
        applicationId: s,
        activity: a,
        users: Array.from(f),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: u ?? void 0,
        channelId: l ?? void 0,
        timeline: n,
        decision: i,
        remoteClipId: i?.signal?.type === R.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: p,
    };
}
async function q(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t, clip_runtime: (0, O.GN)() }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function X(e) {
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
function Z(e) {
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
function Q(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function J(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        N.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e, clip_runtime: (0, O.GN)() });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ef(e).catch((e) => {
            P.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function et(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function ei(e, t) {
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
async function er(e) {
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
            null != t && (await ec(e.id, { remoteClipId: t })),
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
function es(e) {
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
async function ea() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = C.Ay.getSettings().storageLocation,
        u = z(n, R.nQ.CLIP, i, r);
    u.isCandidate = s ?? !1;
    let c = `${(0, D.A)(u.applicationName.substring(0, 20))}_${u.id}.mp4`,
        d = o.A.fileManager.join(l, c),
        h = I.Ay.getMediaEngine(),
        p = JSON.stringify(u),
        E =
            ((t = null != (e = m.A.getCurrentUserActiveStream()) ? S.A.getRTCConnection((0, f._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: u.guildId,
                channel_id: u.channelId,
                application_id: u.applicationId,
                application_name: u.applicationName,
                clip_uuid: u.id,
                clip_event_timeline_size: u.timeline.length,
            });
    s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...u, pending: !0, filepath: d } });
    try {
        let { duration: e, clipStats: t } = await (null != m.A.getCurrentUserActiveStream()
                ? h.saveClipForUser(g.default.getId(), d, p)
                : h.saveClip(d, p)),
            n = ei(E, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null),
                (n.remote_clip_id = u.remoteClipId));
        let i = "";
        try {
            i = await (0, B.m)(o.A.clips.getClipProtocolURLFromPath(d), 0);
        } catch (e) {
            P.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (u.thumbnail = i),
            (u.length = e),
            N.default.track(_.HAw.CLIP_SAVED, n),
            P.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await h.updateClipMetadata(d, JSON.stringify(u)),
            { ...u, filepath: d }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: u.id }), !("errorMessage" in t)))
            throw (N.default.track(_.HAw.CLIP_SAVE_FAILURE, { ...E, clip_runtime: (0, O.GN)() }), t);
        let e = ei(E, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            N.default.track(_.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function eo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: R.RC.MAX_CONCURRENT_SAVES });
    let o = (0, L.TD)(),
        l = m.A.getCurrentUserActiveStream(),
        u = null != l,
        c = (0, L.Ao)(),
        d = h.Ay.getVisibleGame()?.windowHandle != null,
        _ = I.Ay.hasClipsSource(),
        E = c && d && _;
    if (!(o && u) && !E)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: R.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: o,
                hasActiveStream: u,
                decoupledClipsEnabled: c,
                hasVisibleGameWindow: d,
                hasClipsSource: _,
            },
        });
    let g = null != l ? (0, f._z)(l) : void 0,
        A = (() => {
            if (null != l) return P.Fv.STREAMER;
            if (E) return P.Fv.DECOUPLED;
            throw Error("No clip type available");
        })(),
        T = await (async () => {
            if (null == g) return;
            let { ownerId: e, guildId: t } = (0, f.Iy)(g),
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
        clipType: A,
        streamKey: g,
        thumbnail: i ? void 0 : T,
        clipMethod: e,
        signal: n?.signal,
    });
    let S = "manual" === e ? (0, p.Ak)("clip_save", 0.5) : null,
        N = performance.now(),
        v = setTimeout(() => {
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
                        await eE(t.filepath, t.id);
                    } catch (e) {
                        P.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await ea(e, t, n, i);
        if (
            i &&
            !C.Ay.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eE(r.filepath, r.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), er(r);
    } catch (e) {
        P.nx.error("Clip Failed to Save", e),
            S?.stop(),
            i || (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...es(e) });
    } finally {
        clearTimeout(v);
    }
    P.nx.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - N)}ms`);
}
async function el(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = m.A.getCurrentUserActiveStream(),
        r = I.Ay.getMediaEngine(),
        s = z(e, R.nQ.SCREENSHOT),
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
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...es(e) }),
            e)
        );
    }
}
function eu(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function ec(e, t) {
    let n = C.Ay.getClipById(e) ?? C.Ay.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await U(i)) &&
        (await I.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        N.default.track(_.HAw.CLIP_EDITED, { clip_uuid: i.id, clip_runtime: (0, O.GN)() }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function ed(e) {
    await ec(e.id, { isFavorite: !e.isFavorite });
}
function e_() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function eh(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ef(e) {
    if (!(0, v.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await U({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function ep(e) {
    ec(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function eE(e, t) {
    (0, v.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function em(e) {
    try {
        eA([e.id]);
        let t = I.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await ec(e.id, i);
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
                await eg(l);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === R.nQ.SCREENSHOT) return s;
        return V(s);
    } finally {
        eA(null);
    }
}
async function eg(e) {
    if ((0, v.isDesktop)())
        try {
            await o.A.clips.deleteClip(e);
        } catch {}
}
function eA(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eI(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eT(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...C.Ay.getSettings().clipSignals, ...e } },
    });
}
function eS(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ey(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eN() {
    eS({ type: R.Gy.MANUAL });
}
async function ev(e) {
    await ec(e, { isTemporary: !1 });
}
