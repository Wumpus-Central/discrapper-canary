"use strict";
n.d(t, {
    $N: () => es,
    Fb: () => Z,
    GS: () => G,
    H1: () => J,
    HU: () => U,
    MI: () => W,
    Mt: () => k,
    PW: () => et,
    Su: () => q,
    Ts: () => ei,
    VO: () => Q,
    XK: () => $,
    Yy: () => K,
    dR: () => en,
    e6: () => ee,
    eQ: () => M,
    fd: () => x,
    h$: () => F,
    jA: () => z,
    l0: () => ea,
    oH: () => X,
    pM: () => er,
    w7: () => eo,
    yO: () => P,
    yT: () => Y,
    yd: () => j,
}),
    n(321073);
var r = n(562465),
    i = n(205693),
    s = n(823598),
    a = n(73153),
    o = n(77729),
    l = n(166929),
    u = n(15285),
    c = n(652896),
    d = n(400492),
    _ = n(253932),
    f = n(929921),
    p = n(616356),
    h = n(961350),
    m = n(430452),
    E = n(383501),
    g = n(162605),
    A = n(803301),
    I = n(954571),
    T = n(723702),
    S = n(734066),
    y = n(274372),
    v = n(372684),
    N = n(439818),
    C = n(520165),
    R = n(572164),
    O = n(142135),
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
function x(e) {
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
function U(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function G(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function F(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function V(e) {
    let t = p.A.getCurrentUserActiveStream(),
        n = null != t ? g.A.getRTCConnection((0, c._z)(t)) : null;
    return {
        rtc_connection_id: n?.getRTCConnectionId(),
        media_session_id: n?.getMediaSessionId(),
        parent_media_session_id: n?.parentMediaSessionId,
        guild_id: e.guildId,
        channel_id: e.channelId,
        application_id: e.applicationId,
        application_name: e.applicationName,
    };
}
function B(e, t) {
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
async function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = y.A.getSettings().storageLocation,
        i = (0, C.A)(e, v.nQ.CLIP, t, n),
        s = `${(0, N.A)(i.applicationName.substring(0, 20))}_${i.id}.mp4`,
        a = o.A.fileManager.join(r, s),
        l = m.Ay.getMediaEngine(),
        u = JSON.stringify(i),
        c = V(i);
    try {
        let { duration: e, clipStats: t } = await (null != p.A.getCurrentUserActiveStream()
                ? l.saveClipForUser(h.default.getId(), a, u)
                : l.saveClip(a, u)),
            n = B(c, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let r = "";
        try {
            r = await (0, D.m)(o.A.clips.getClipProtocolURLFromPath(a), 0);
        } catch (e) {
            L.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (i.thumbnail = r),
            (i.length = e),
            I.default.track(w.HAw.CLIP_SAVED, n),
            L.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await l.updateClipMetadata(a, JSON.stringify(i)),
            { ...i, filepath: a }
        );
    } catch (n) {
        if (!("errorMessage" in n)) throw (I.default.track(w.HAw.CLIP_SAVE_FAILURE, c), n);
        let e = n,
            t = B(c, e);
        throw (
            ((t.error_at = e.errorAt),
            (t.error_message = e.errorMessage),
            I.default.track(w.HAw.CLIP_SAVE_FAILURE, t),
            e.errorMessage)
        );
    }
}
async function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let o = (0, R.TD)() && null != p.A.getCurrentUserActiveStream(),
        l = (0, R.Ao)() && u.Ay.getVisibleGame()?.windowHandle != null && m.Ay.hasClipsSource(),
        _ = (0, S.Vr)() && (0, R.TD)() && null == p.A.getCurrentUserActiveStream() && null != E.A.getChannelId();
    if (!o && !l && !_) return;
    let f = p.A.getCurrentUserActiveStream(),
        h = null != f ? (0, c._z)(f) : void 0,
        g = null != f ? L.Fv.STREAMER : l ? L.Fv.DECOUPLED : L.Fv.VOICE,
        I = await (async () => {
            if (null == h) return;
            let { ownerId: e, guildId: t } = (0, c.Iy)(h),
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
    a.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: g, streamKey: h, thumbnail: I, clipMethod: e });
    let T = "manual" === e ? (0, d.Ak)("clip_save", 0.5) : null,
        v = performance.now();
    try {
        if ("auto" === e) {
            let e = y.A.getSettings().maxAutoClips,
                t = y.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (L.nx.info(`Deleting ${r.length} temporary clips to stay within limit of ${e}`), r))
                    try {
                        await X(t.filepath, t.id);
                    } catch (e) {
                        L.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let i = await H(e, t, n);
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: i });
        let s = E.A.getChannelId();
        null != s &&
            null != i.applicationId &&
            (0, S.J)() &&
            r.Bo.post({
                url: w.Rsh.SEND_CLIPS_REMOTE_TRIGGER(s),
                body: { application_id: i.applicationId },
                rejectWithError: !0,
            }).catch((e) => {
                L.nx.warn("Failed to send remote clip trigger", e);
            });
    } catch (e) {
        L.nx.error("Clip Failed to Save", e),
            T?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    L.nx.info(`${y.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - v)}ms`);
}
async function Y(e) {
    let t, n;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let r = p.A.getCurrentUserActiveStream(),
        i = m.Ay.getMediaEngine(),
        s = (0, C.A)(e, v.nQ.SCREENSHOT),
        l = y.A.getSettings().storageLocation,
        _ = "jpeg",
        f = `${(0, N.A)(s.applicationName.substring(0, 20))}_${s.id}.${_}`,
        h = o.A.fileManager.join(l, f);
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
        L.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: L.Fv.STREAMER,
        streamKey: null != r ? (0, c._z)(r) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let E = (0, d.Ak)("clip_save", 0.5),
        g = performance.now();
    try {
        let e = { ...s, filepath: h, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            r = (await i.saveScreenshot(h, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            L.nx.info(`Screenshot save took ${Math.round(performance.now() - g)}ms`),
            L.nx.log("Successfully saved screenshot to:", h);
    } catch (e) {
        throw (
            (L.nx.error("Failed to save screenshot:", e),
            E?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function W(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function K(e, t) {
    let n = y.A.getClipById(e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, O.q)(r)) &&
        (await m.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        I.default.track(w.HAw.CLIP_EDITED, { clip_id: r.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function $(e) {
    await K(e.id, { isFavorite: !e.isFavorite });
}
function z() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function q() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function Z(e) {
    if (!(0, T.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, O.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
async function X(e, t) {
    (0, T.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function Q(e) {
    let t = m.Ay.getMediaEngine(),
        n = await t.exportClip(
            e.filepath,
            e.editMetadata ?? {
                start: 0,
                end: e.length / 1e3,
                applicationAudio: !0,
                voiceAudio: !0,
                soundboardAudio: !0,
            },
        );
    return e.type === v.nQ.SCREENSHOT ? n : (0, b.A)(n);
}
function J(e) {
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
    let t = m.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
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
    ei({ type: v.Gy.MANUAL });
}
async function eo(e) {
    await K(e, { isTemporary: !1 });
}
