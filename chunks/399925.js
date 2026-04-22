"use strict";
n.d(t, {
    $N: () => es,
    Fb: () => q,
    GS: () => G,
    H1: () => Z,
    HU: () => x,
    K7: () => X,
    MI: () => W,
    Mt: () => k,
    PW: () => et,
    Su: () => z,
    Ts: () => ei,
    VO: () => J,
    XK: () => K,
    Yy: () => j,
    dR: () => en,
    e6: () => ee,
    eQ: () => M,
    fd: () => U,
    h$: () => V,
    jA: () => $,
    l0: () => ea,
    oH: () => Q,
    pM: () => er,
    w7: () => eo,
    yO: () => P,
    yT: () => Y,
    yd: () => H,
}),
    n(321073);
var r = n(562465),
    i = n(205693),
    s = n(823598),
    a = n(73153),
    o = n(77729),
    l = n(166929),
    u = n(15285),
    d = n(652896),
    c = n(400492),
    _ = n(253932),
    f = n(929921),
    E = n(616356),
    h = n(961350),
    p = n(430452),
    m = n(383501),
    g = n(162605),
    A = n(803301),
    I = n(954571),
    T = n(723702),
    S = n(734066),
    y = n(274372),
    N = n(372684),
    O = n(439818),
    R = n(520165),
    v = n(572164),
    C = n(142135),
    b = n(93532),
    D = n(956050),
    L = n(696016),
    w = n(652215);
async function M(e) {
    let { allowVoiceRecording: t } = e;
    await _.Q$.updateSetting(t),
        I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function P(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        r &&
            I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function U(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function k(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function x(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function G(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function V(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function F(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, l.kZ)(e),
            s = n.get(i) ?? 0;
        n.set(i, s + r);
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
        clip_duration_setting: y.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: f.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function B() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        r = arguments.length > 1 ? arguments[1] : void 0,
        i = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = y.A.getSettings().storageLocation,
        u = (0, R.A)(n, N.nQ.CLIP, r, i);
    u.isCandidate = s ?? !1;
    let c = `${(0, O.A)(u.applicationName.substring(0, 20))}_${u.id}.mp4`,
        _ = o.A.fileManager.join(l, c),
        f = p.Ay.getMediaEngine(),
        m = JSON.stringify(u),
        A =
            ((t = null != (e = E.A.getCurrentUserActiveStream()) ? g.A.getRTCConnection((0, d._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: u.guildId,
                channel_id: u.channelId,
                application_id: u.applicationId,
                application_name: u.applicationName,
            });
    s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...u, pending: !0, filepath: _ } });
    try {
        let { duration: e, clipStats: t } = await (null != E.A.getCurrentUserActiveStream()
                ? f.saveClipForUser(h.default.getId(), _, m)
                : f.saveClip(_, m)),
            n = F(A, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let r = "";
        try {
            r = await (0, D.m)(o.A.clips.getClipProtocolURLFromPath(_), 0);
        } catch (e) {
            L.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (u.thumbnail = r),
            (u.length = e),
            I.default.track(w.HAw.CLIP_SAVED, n),
            L.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await f.updateClipMetadata(_, JSON.stringify(u)),
            { ...u, filepath: _ }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: u.id }), !("errorMessage" in t)))
            throw (I.default.track(w.HAw.CLIP_SAVE_FAILURE, A), t);
        let e = F(A, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            I.default.track(w.HAw.CLIP_SAVE_FAILURE, e),
            t.errorMessage)
        );
    }
}
async function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 ? arguments[3] : void 0;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let l = (0, v.TD)() && null != E.A.getCurrentUserActiveStream(),
        _ = (0, v.Ao)() && u.Ay.getVisibleGame()?.windowHandle != null && p.Ay.hasClipsSource(),
        f = (0, S.Vr)() && (0, v.TD)() && null == E.A.getCurrentUserActiveStream() && null != m.A.getChannelId();
    if (!l && !_ && !f) return;
    let h = E.A.getCurrentUserActiveStream(),
        g = null != h ? (0, d._z)(h) : void 0,
        I = null != h ? L.Fv.STREAMER : _ ? L.Fv.DECOUPLED : L.Fv.VOICE,
        T = await (async () => {
            if (null == g) return;
            let { ownerId: e, guildId: t } = (0, d.Iy)(g),
                n = A.A.getStreamId(e, t, i.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, D.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: I,
        streamKey: g,
        thumbnail: o ? void 0 : T,
        clipMethod: e,
    });
    let N = "manual" === e ? (0, c.Ak)("clip_save", 0.5) : null,
        O = performance.now();
    try {
        if ("auto" === e && !o) {
            let e = y.A.getSettings().maxAutoClips,
                t = y.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (L.nx.info(`Deleting ${r.length} temporary clips to stay within limit of ${e}`), r))
                    try {
                        await Q(t.filepath, t.id);
                    } catch (e) {
                        L.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let i = await B(e, t, n, o);
        if (
            o &&
            !y.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === i.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), Q(i.filepath, i.id);
            return;
        }
        if ((a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: i }), !o)) {
            let e = m.A.getChannelId();
            null != e &&
                null != i.applicationId &&
                (0, S.J)() &&
                r.Bo.post({
                    url: w.Rsh.SEND_CLIPS_REMOTE_TRIGGER(e),
                    body: { application_id: i.applicationId },
                    rejectWithError: !0,
                }).catch((e) => {
                    L.nx.warn("Failed to send remote clip trigger", e);
                });
        }
    } catch (e) {
        L.nx.error("Clip Failed to Save", e),
            N?.stop(),
            o || (0, c.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    L.nx.info(`${y.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - O)}ms`);
}
async function Y(e) {
    let t, n;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let r = E.A.getCurrentUserActiveStream(),
        i = p.Ay.getMediaEngine(),
        s = (0, R.A)(e, N.nQ.SCREENSHOT),
        l = y.A.getSettings().storageLocation,
        _ = `${(0, O.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        f = o.A.fileManager.join(l, _);
    if (
        (null != s.applicationId &&
            null != (n = u.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            L.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = u.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            L.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = u.Ay.getVisibleGame()) && L.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), L.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        L.nx.error("Failed to save screenshot: No window handle available"), (0, c.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: L.Fv.STREAMER,
        streamKey: null != r ? (0, d._z)(r) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let h = (0, c.Ak)("clip_save", 0.5),
        m = performance.now();
    try {
        let e = { ...s, filepath: f, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            r = (await i.saveScreenshot(f, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            L.nx.info(`Screenshot save took ${Math.round(performance.now() - m)}ms`),
            L.nx.log("Successfully saved screenshot to:", f);
    } catch (e) {
        throw (
            (L.nx.error("Failed to save screenshot:", e),
            h?.stop(),
            (0, c.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function W(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function j(e, t) {
    let n = y.A.getClipById(e) ?? y.A.getClipCandidateById(e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, C.q)(r)) &&
        (await p.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        I.default.track(w.HAw.CLIP_EDITED, { clip_id: r.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function K(e) {
    await j(e.id, { isFavorite: !e.isFavorite });
}
function $() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function z() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function q(e) {
    if (!(0, T.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, C.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function X(e) {
    j(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function Q(e, t) {
    (0, T.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function J(e) {
    let t = p.Ay.getMediaEngine(),
        { filepath: n, ...r } = e;
    await j(e.id, r);
    let i = await t.exportClip(
        e.filepath,
        e.editMetadata ?? { start: 0, end: e.length / 1e3, applicationAudio: !0, voiceAudio: !0, soundboardAudio: !0 },
    );
    return e.type === N.nQ.SCREENSHOT ? i : (0, b.A)(i);
}
function Z(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function et(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...y.A.getSettings().clipSignals, ...e } },
    });
}
function en(e) {
    let t = p.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        a.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...y.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function er(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function ei(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function es(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function ea() {
    ei({ type: N.Gy.MANUAL });
}
async function eo(e) {
    await j(e, { isTemporary: !1 });
}
