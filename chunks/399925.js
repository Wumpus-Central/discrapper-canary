"use strict";
n.d(t, {
    Fb: () => X,
    GS: () => G,
    H1: () => ee,
    HU: () => U,
    MI: () => K,
    Mt: () => k,
    PW: () => en,
    Su: () => Z,
    Ts: () => es,
    VO: () => J,
    Wn: () => V,
    XK: () => $,
    Yy: () => z,
    dR: () => er,
    e6: () => et,
    eQ: () => x,
    fd: () => P,
    h$: () => F,
    jA: () => q,
    l0: () => ea,
    oH: () => Q,
    pM: () => ei,
    w7: () => eo,
    yO: () => M,
    yT: () => W,
    yd: () => Y,
}),
    n(321073);
var r = n(205693),
    i = n(823598),
    s = n(73153),
    a = n(77729),
    o = n(166929),
    l = n(15285),
    u = n(652896),
    c = n(670470),
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
    b = n(572164),
    R = n(142135),
    O = n(93532),
    D = n(956050),
    L = n(696016),
    w = n(652215);
async function x(e) {
    let { allowVoiceRecording: t } = e;
    await _.Q$.updateSetting(t),
        I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        s.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function M(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await s.h.dispatch({
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
    s.h.dispatch({
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
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function U(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function G(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function F(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function V(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { viewerClipsEnabled: t } }),
        n && I.default.track(w.HAw.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function B(e) {
    let t, n, r;
    if (null != e) {
        t = null != e ? g.A.getRTCConnection(e) : null;
        let i = (0, u.Iy)(e);
        (n = i.guildId), (r = i.channelId);
    } else {
        let e = h.default.getId(),
            i = p.A.getActiveStreamForUser(e, null);
        (t = null != i ? g.A.getRTCConnection((0, u._z)(i)) : null), (n = i?.guildId), (r = i?.channelId);
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
function H(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, o.kZ)(e),
            s = n.get(i) ?? 0;
        n.set(i, s + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: n.get(o.yo.NVIDIA_CUDA) ?? 0,
        frames_encoded_nvidia_direct3d: n.get(o.yo.NVIDIA_DIRECT_3D) ?? 0,
        frames_encoded_openh264: n.get(o.yo.OPENH264) ?? 0,
        frames_encoded_videotoolbox: n.get(o.yo.VIDEOTOOLBOX) ?? 0,
        frames_encoded_amd_direct3d: n.get(o.yo.AMD_DIRECT_3D) ?? 0,
        frames_encoded_amd_vaapi: n.get(o.yo.AMD_VAAPI) ?? 0,
        frames_encoded_intel: n.get(o.yo.INTEL) ?? 0,
        frames_encoded_intel_direct3d: n.get(o.yo.INTEL_DIRECT_3D) ?? 0,
        frames_encoded_uncategorized: n.get(o.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(o.yo.UNKNOWN) ?? 0,
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
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = y.A.getSettings().storageLocation,
        o = (0, C.A)(e, t, v.nQ.CLIP, n, r),
        l = `${(0, N.A)(o.applicationName.substring(0, 20))}_${o.id}.mp4`,
        c = a.A.fileManager.join(i, l),
        d = m.Ay.getMediaEngine(),
        _ = JSON.stringify(o),
        f = null != e ? (0, u.Iy)(e).ownerId : void 0,
        p = B(e);
    null != e && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER", clip: { ...o, pending: !0, filepath: c } });
    try {
        let { duration: e, clipStats: t } = await (null != f ? d.saveClipForUser(f, c, _) : d.saveClip(c, _)),
            n = H(p, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            I.default.track(w.HAw.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, D.m)(a.A.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            L.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = r),
            (o.length = e),
            L.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await d.updateClipMetadata(c, JSON.stringify(o)),
            { ...o, filepath: c }
        );
    } catch (r) {
        if (
            (null != e && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR", clipId: o.id }),
            !("errorMessage" in r))
        )
            throw (I.default.track(w.HAw.CLIP_SAVE_FAILURE, p), r);
        let t = r,
            n = H(p, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            I.default.track(w.HAw.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = arguments.length > 3 ? arguments[3] : void 0,
        { enableViewerClipping: o } = c.A.getCurrentConfig({ location: "SaveClip" }, { autoTrackExposure: !1 });
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let _ = (0, b.TD)() && null != p.A.getCurrentUserActiveStream(),
        f = (0, b.Ao)() && l.Ay.getVisibleGame()?.windowHandle != null && m.Ay.hasClipsSource(),
        g = null != e && null != p.A.getActiveStreamForStreamKey(e) && o,
        I = (0, S.Vr)() && (0, b.TD)() && null == p.A.getCurrentUserActiveStream() && null != E.A.getChannelId();
    if (!_ && !f && !g && !I) return;
    let T = p.A.getCurrentUserActiveStream(),
        v = null != T ? (0, u._z)(T) : void 0,
        N = e ?? v,
        C = (() => {
            let e = null != N ? (0, u.Iy)(N).ownerId : void 0;
            return e === h.default.getId() ? L.Fv.STREAMER : null != e ? L.Fv.VIEWER : f ? L.Fv.DECOUPLED : L.Fv.VOICE;
        })(),
        R = await (async () => {
            if (null == N) return;
            let { ownerId: e, guildId: t } = (0, u.Iy)(N),
                n = A.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, i.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, D.n)(t);
                } catch (e) {
                    return;
                }
        })();
    s.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: C, streamKey: N, thumbnail: R, clipMethod: t });
    let O = "manual" === t ? (0, d.Ak)("clip_save", 0.5) : null,
        w = performance.now();
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
                        await Q(t.filepath);
                    } catch (e) {
                        L.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await j(N, t, n, a);
        s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e });
    } catch (e) {
        L.nx.error("Clip Failed to Save", e),
            O?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    L.nx.info(`${y.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - w)}ms`);
}
async function W(e, t) {
    let n, r;
    if (y.A.getIsAtMaxSaveClipOperations()) return;
    let i = p.A.getCurrentUserActiveStream(),
        o = null != i ? (0, u._z)(i) : void 0,
        c = e ?? o,
        _ = m.Ay.getMediaEngine(),
        f = (0, C.A)(c, t, v.nQ.SCREENSHOT),
        E = y.A.getSettings().storageLocation,
        g = "jpeg",
        A = `${(0, N.A)(f.applicationName.substring(0, 20))}_${f.id}.${g}`,
        I = a.A.fileManager.join(E, A),
        T = (null != c ? (0, u.Iy)(c).ownerId : void 0) === h.default.getId() ? L.Fv.STREAMER : L.Fv.VIEWER;
    if (
        (null != f.applicationId &&
            null != (r = l.Ay.getRunningGames().find((e) => e.id === f.applicationId)) &&
            L.nx.log("Matched application ID to running game:", f.applicationId, r.name),
        null == r &&
            null != f.applicationName &&
            null != (r = l.Ay.getRunningGames().find((e) => e.name === f.applicationName)) &&
            L.nx.log("Matched application name to running game:", f.applicationName),
        null == r && null != (r = l.Ay.getVisibleGame()) && L.nx.log("Using visible game for screenshot:", r.name),
        r?.windowHandle != null)
    )
        (n = parseInt(r.windowHandle, 10)), L.nx.log("Using window handle for full resolution screenshot:", n);
    else {
        L.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: c,
        thumbnail: void 0,
        clipMethod: t ?? "manual",
    });
    let S = (0, d.Ak)("clip_save", 0.5),
        b = performance.now();
    try {
        let e = { ...f, filepath: I, length: 0, thumbnail: "" },
            t = JSON.stringify(e),
            r = (await _.saveScreenshot(I, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            L.nx.info(`Screenshot save took ${Math.round(performance.now() - b)}ms`),
            L.nx.log("Successfully saved screenshot to:", I);
    } catch (e) {
        throw (
            (L.nx.error("Failed to save screenshot:", e),
            S?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function K(e, t) {
    s.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function z(e, t) {
    let n = y.A.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, R.q)(r)) &&
        (await m.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        I.default.track(w.HAw.CLIP_EDITED, { clip_id: r.id }),
        s.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function $(e) {
    await z(e.id, { isFavorite: !e.isFavorite });
}
function q() {
    s.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function Z() {
    s.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function X(e) {
    if (!(0, T.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, R.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    s.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
async function Q(e) {
    (0, T.isDesktop)() &&
        a.A.clips?.deleteClip != null &&
        (await a.A.clips.deleteClip(e), s.h.dispatch({ type: "CLIPS_DELETE_CLIP", filepath: e }));
}
async function J(e) {
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
    return e.type === v.nQ.SCREENSHOT ? n : (0, O.A)(n);
}
function ee(e) {
    s.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function et(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function en(e) {
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...y.A.getSettings().clipSignals, ...e } },
    });
}
function er(e) {
    let t = m.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        s.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...y.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function ei(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function es(e, t) {
    s.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ea() {
    es({ type: v.Gy.MANUAL });
}
async function eo(e) {
    await z(e, { isTemporary: !1 });
}
