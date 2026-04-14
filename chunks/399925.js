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
    fd: () => P,
    h$: () => F,
    jA: () => z,
    l0: () => ea,
    oH: () => X,
    pM: () => er,
    w7: () => eo,
    yO: () => x,
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
async function x(e) {
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
function P(e) {
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
    let t, n, r;
    if (null != e) {
        t = null != e ? g.A.getRTCConnection(e) : null;
        let i = (0, c.Iy)(e);
        (n = i.guildId), (r = i.channelId);
    } else {
        let e = h.default.getId(),
            i = p.A.getActiveStreamForUser(e, null);
        (t = null != i ? g.A.getRTCConnection((0, c._z)(i)) : null), (n = i?.guildId), (r = i?.channelId);
    }
    let i = t?.analyticsContext?.streamApplication;
    return {
        rtc_connection_id: t?.getRTCConnectionId(),
        media_session_id: t?.getMediaSessionId(),
        parent_media_session_id: t?.parentMediaSessionId,
        guild_id: n,
        channel_id: r,
        application_id: i?.id,
        application_name: i?.name,
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
async function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = y.A.getSettings().storageLocation,
        s = (0, C.A)(e, t, v.nQ.CLIP, n, r),
        l = `${(0, N.A)(s.applicationName.substring(0, 20))}_${s.id}.mp4`,
        u = o.A.fileManager.join(i, l),
        d = m.Ay.getMediaEngine(),
        _ = JSON.stringify(s),
        f = null != e ? (0, c.Iy)(e).ownerId : void 0,
        p = V(e);
    null != e && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER", clip: { ...s, pending: !0, filepath: u } });
    try {
        let { duration: e, clipStats: t } = await (null != f ? d.saveClipForUser(f, u, _) : d.saveClip(u, _)),
            n = B(p, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            I.default.track(w.HAw.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, D.m)(o.A.clips.getClipProtocolURLFromPath(u), 0);
        } catch (e) {
            L.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (s.thumbnail = r),
            (s.length = e),
            L.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await d.updateClipMetadata(u, JSON.stringify(s)),
            { ...s, filepath: u }
        );
    } catch (r) {
        if (
            (null != e && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR", clipId: s.id }),
            !("errorMessage" in r))
        )
            throw (I.default.track(w.HAw.CLIP_SAVE_FAILURE, p), r);
        let t = r,
            n = B(p, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            I.default.track(w.HAw.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 ? arguments[3] : void 0;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let l = (0, R.TD)() && null != p.A.getCurrentUserActiveStream(),
        _ = (0, R.Ao)() && u.Ay.getVisibleGame()?.windowHandle != null && m.Ay.hasClipsSource(),
        f = (0, S.Vr)() && (0, R.TD)() && null == p.A.getCurrentUserActiveStream() && null != E.A.getChannelId();
    if (!l && !_ && !f) return;
    let g = p.A.getCurrentUserActiveStream(),
        I = null != g ? (0, c._z)(g) : void 0,
        T = e ?? I,
        v = (() => {
            let e = null != T ? (0, c.Iy)(T).ownerId : void 0;
            return e === h.default.getId() ? L.Fv.STREAMER : null != e ? L.Fv.VIEWER : _ ? L.Fv.DECOUPLED : L.Fv.VOICE;
        })(),
        N = await (async () => {
            if (null == T) return;
            let { ownerId: e, guildId: t } = (0, c.Iy)(T),
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
    a.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: v, streamKey: T, thumbnail: N, clipMethod: t });
    let C = "manual" === t ? (0, d.Ak)("clip_save", 0.5) : null,
        O = performance.now();
    try {
        if ("auto" === t) {
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
        let e = await H(T, t, n, o);
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e });
        let i = E.A.getChannelId();
        null != i &&
            null != e.applicationId &&
            (0, S.J)() &&
            r.Bo.post({
                url: w.Rsh.SEND_CLIPS_REMOTE_TRIGGER(i),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            }).catch((e) => {
                L.nx.warn("Failed to send remote clip trigger", e);
            });
    } catch (e) {
        L.nx.error("Clip Failed to Save", e),
            C?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    L.nx.info(`${y.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - O)}ms`);
}
async function Y(e, t) {
    let n, r;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let i = p.A.getCurrentUserActiveStream(),
        s = null != i ? (0, c._z)(i) : void 0,
        l = e ?? s,
        _ = m.Ay.getMediaEngine(),
        f = (0, C.A)(l, t, v.nQ.SCREENSHOT),
        E = y.A.getSettings().storageLocation,
        g = "jpeg",
        A = `${(0, N.A)(f.applicationName.substring(0, 20))}_${f.id}.${g}`,
        I = o.A.fileManager.join(E, A),
        T = (null != l ? (0, c.Iy)(l).ownerId : void 0) === h.default.getId() ? L.Fv.STREAMER : L.Fv.VIEWER;
    if (
        (null != f.applicationId &&
            null != (r = u.Ay.getRunningGames().find((e) => e.id === f.applicationId)) &&
            L.nx.log("Matched application ID to running game:", f.applicationId, r.name),
        null == r &&
            null != f.applicationName &&
            null != (r = u.Ay.getRunningGames().find((e) => e.name === f.applicationName)) &&
            L.nx.log("Matched application name to running game:", f.applicationName),
        null == r && null != (r = u.Ay.getVisibleGame()) && L.nx.log("Using visible game for screenshot:", r.name),
        r?.windowHandle != null)
    )
        (n = parseInt(r.windowHandle, 10)), L.nx.log("Using window handle for full resolution screenshot:", n);
    else {
        L.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: l,
        thumbnail: void 0,
        clipMethod: t ?? "manual",
    });
    let S = (0, d.Ak)("clip_save", 0.5),
        R = performance.now();
    try {
        let e = { ...f, filepath: I, length: 0, thumbnail: "" },
            t = JSON.stringify(e),
            r = (await _.saveScreenshot(I, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            L.nx.info(`Screenshot save took ${Math.round(performance.now() - R)}ms`),
            L.nx.log("Successfully saved screenshot to:", I);
    } catch (e) {
        throw (
            (L.nx.error("Failed to save screenshot:", e),
            S?.stop(),
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
