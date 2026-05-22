"use strict";
n.d(t, {
    yT: () => el,
    yO: () => Z,
    $N: () => eN,
    YK: () => ef,
    h$: () => en,
    eQ: () => q,
    YP: () => Q,
    PW: () => eT,
    MI: () => eu,
    Fb: () => eh,
    w7: () => eC,
    K7: () => ep,
    HU: () => ee,
    VO: () => em,
    Mt: () => J,
    GS: () => et,
    fd: () => X,
    Ts: () => eS,
    e6: () => eI,
    H1: () => eA,
    oH: () => eE,
    jA: () => e_,
    l0: () => ey,
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
    f = n(952818),
    h = n(652896),
    p = n(400492),
    E = n(929921),
    m = n(616356),
    g = n(495544),
    A = n(734057),
    I = n(761853),
    T = n(763827),
    S = n(116956),
    N = n(803301),
    y = n(174459),
    C = n(723702),
    v = n(274372),
    O = n(372684),
    R = n(974293),
    b = n(458977),
    D = n(439818),
    L = n(835245),
    w = n(47167),
    M = n(587895),
    P = n(311043),
    x = n(287809),
    U = n(977997),
    k = n(696016),
    G = n(375708);
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.nQ.CLIP,
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
                    if (null == t) return f.Ay.getVisibleGame();
                    {
                        let e = null != n ? f.Ay.getGameForPID(n) : null,
                            t = null != i ? f.Ay.getGameForName(i) : null;
                        return e ?? t;
                    }
                })(),
                s = t?.id ?? r?.id,
                a = t?.sourceName ?? r?.name,
                o = T.A.getChannelId(),
                l = null == a && null != o;
            if (l) {
                let e = null != o ? A.A.getChannel(o) : null;
                a = null != e ? (0, w.m1)(e, x.default, c.A) : "";
            }
            let u =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        P.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        M.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), P.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                h = d.A.getUnfilteredActivities(!0).filter(
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
                    h.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        h[0],
                ),
                isVoiceOnly: l,
            };
        })(),
        l = T.A.getChannelId(),
        u = T.A.getGuildId(),
        h = new Set([g.default.getId()]);
    null != l && (h = h.union(new Set(Object.keys(U.A.getVoiceStatesForChannel(l))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && h.add(t.userId);
        });
    let p = o && t === O.nQ.CLIP ? O.nQ.VOICE_CLIP : t;
    return {
        id: (0, L.A)(),
        createdAt: Date.now(),
        version: k.kd,
        applicationName: r ?? G.intl.string(G.t.qtSJxb),
        applicationId: s,
        activity: a,
        users: Array.from(h),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: u ?? void 0,
        channelId: l ?? void 0,
        timeline: n,
        decision: i,
        remoteClipId: i?.signal?.type === O.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: p,
    };
}
var V = n(572164),
    B = n(935208);
let H = [
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
        (e) => ({ ...e, version: 5, id: (0, L.A)(), createdAt: B.default.extractTimestamp(e.id) }),
    ],
    j = null;
async function Y(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != j
                ? j
                : (j = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(k.kd).optional(),
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
            H.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var W = n(284009),
    K = n.n(W);
async function z(e) {
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
    K()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var $ = n(956050);
async function q(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function Z(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function X(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function Q(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function J(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eh(e).catch((e) => {
            k.nx.error("Failed to load clips directory after storage location change", e);
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
        frames_encoded_uncategorized: n.get(l.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(l.yo.UNKNOWN) ?? 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: v.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: E.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function er(e) {
    if (
        !b.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
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
            null != t && (await ec(e.id, { remoteClipId: t }));
        } catch (e) {
            k.nx.warn("Failed to send remote clip trigger", e);
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
        l = v.A.getSettings().storageLocation,
        u = F(n, O.nQ.CLIP, i, r);
    u.isCandidate = s ?? !1;
    let c = `${(0, D.A)(u.applicationName.substring(0, 20))}_${u.id}.mp4`,
        d = o.A.fileManager.join(l, c),
        f = I.Ay.getMediaEngine(),
        p = JSON.stringify(u),
        E =
            ((t = null != (e = m.A.getCurrentUserActiveStream()) ? S.A.getRTCConnection((0, h._z)(e)) : null),
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
                ? f.saveClipForUser(g.default.getId(), d, p)
                : f.saveClip(d, p)),
            n = ei(E, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let i = "";
        try {
            i = await (0, $.m)(o.A.clips.getClipProtocolURLFromPath(d), 0);
        } catch (e) {
            k.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (u.thumbnail = i),
            (u.length = e),
            y.default.track(_.HAw.CLIP_SAVED, n),
            k.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await f.updateClipMetadata(d, JSON.stringify(u)),
            { ...u, filepath: d }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: u.id }), !("errorMessage" in t)))
            throw (y.default.track(_.HAw.CLIP_SAVE_FAILURE, E), t);
        let e = ei(E, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            y.default.track(_.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function eo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (v.A.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: O.RC.MAX_CONCURRENT_SAVES });
    let o = (0, V.TD)(),
        l = m.A.getCurrentUserActiveStream(),
        u = null != l,
        c = (0, V.Ao)(),
        d = f.Ay.getVisibleGame()?.windowHandle != null,
        _ = I.Ay.hasClipsSource(),
        E = c && d && _;
    if (!(o && u) && !E)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: O.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: o,
                hasActiveStream: u,
                decoupledClipsEnabled: c,
                hasVisibleGameWindow: d,
                hasClipsSource: _,
            },
        });
    let g = null != l ? (0, h._z)(l) : void 0,
        A = (() => {
            if (null != l) return k.Fv.STREAMER;
            if (E) return k.Fv.DECOUPLED;
            throw Error("No clip type available");
        })(),
        T = await (async () => {
            if (null == g) return;
            let { ownerId: e, guildId: t } = (0, h.Iy)(g),
                n = N.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, $.n)(t);
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
        y = performance.now(),
        C = setTimeout(() => {
            k.nx.warn(`Clip save still pending after ${k.ut}ms \u{2014} native callback may have stalled`),
                a.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: e, elapsedMs: k.ut });
        }, k.ut);
    try {
        if ("auto" === e && !i) {
            let e = v.A.getSettings().maxAutoClips,
                t = v.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (k.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await eE(t.filepath, t.id);
                    } catch (e) {
                        k.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await ea(e, t, n, i);
        if (
            i &&
            !v.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eE(r.filepath, r.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), er(r);
    } catch (e) {
        k.nx.error("Clip Failed to Save", e),
            S?.stop(),
            i || (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...es(e) });
    } finally {
        clearTimeout(C);
    }
    k.nx.info(`${v.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - y)}ms`);
}
async function el(e) {
    let t, n;
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let i = m.A.getCurrentUserActiveStream(),
        r = I.Ay.getMediaEngine(),
        s = F(e, O.nQ.SCREENSHOT),
        l = v.A.getSettings().storageLocation,
        u = `${(0, D.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        c = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = f.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            k.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = f.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            k.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = f.Ay.getVisibleGame()) && k.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), k.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        k.nx.error("Failed to save screenshot: No window handle available"), (0, p.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: k.Fv.STREAMER,
        streamKey: null != i ? (0, h._z)(i) : void 0,
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
            k.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            k.nx.log("Successfully saved screenshot to:", c);
    } catch (e) {
        throw (
            (k.nx.error("Failed to save screenshot:", e),
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
    let n = v.A.getClipById(e) ?? v.A.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await Y(i)) &&
        (await I.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        y.default.track(_.HAw.CLIP_EDITED, { clip_uuid: i.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function ed(e) {
    await ec(e.id, { isFavorite: !e.isFavorite });
}
function e_() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function ef(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eh(e) {
    if (!(0, C.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await Y({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function ep(e) {
    ec(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function eE(e, t) {
    (0, C.isDesktop)() &&
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
        if (t.hasExportClipToFile() && (0, R.qi)()) {
            let n = await o.A.app.getPath("temp"),
                i = o.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                a = o.A.fileManager.join(i, s),
                l = await t.exportClipToFile(e.filepath, a, r);
            try {
                let t = await o.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === O.nQ.SCREENSHOT) return n;
                return z(n);
            } finally {
                await eg(l);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === O.nQ.SCREENSHOT) return s;
        return z(s);
    } finally {
        eA(null);
    }
}
async function eg(e) {
    if ((0, C.isDesktop)())
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
        settings: { clipSignals: { ...v.A.getSettings().clipSignals, ...e } },
    });
}
function eS(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eN(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function ey() {
    eS({ type: O.Gy.MANUAL });
}
async function eC(e) {
    await ec(e, { isTemporary: !1 });
}
