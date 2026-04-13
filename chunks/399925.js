"use strict";
n.d(t, {
    $N: () => ei,
    Fb: () => q,
    GS: () => U,
    H1: () => Q,
    HU: () => k,
    MI: () => Y,
    Mt: () => P,
    PW: () => ee,
    Su: () => z,
    Ts: () => er,
    VO: () => X,
    XK: () => K,
    Yy: () => W,
    dR: () => et,
    e6: () => J,
    eQ: () => w,
    fd: () => x,
    h$: () => G,
    jA: () => $,
    l0: () => es,
    oH: () => Z,
    pM: () => en,
    w7: () => ea,
    yO: () => M,
    yT: () => j,
    yd: () => H,
}),
    n(321073);
var r = n(205693),
    i = n(823598),
    s = n(73153),
    a = n(77729),
    o = n(166929),
    l = n(15285),
    u = n(652896),
    c = n(400492),
    d = n(253932),
    _ = n(929921),
    f = n(616356),
    p = n(961350),
    h = n(430452),
    m = n(383501),
    E = n(162605),
    g = n(803301),
    A = n(954571),
    I = n(723702),
    T = n(734066),
    S = n(274372),
    y = n(372684),
    v = n(439818),
    N = n(520165),
    C = n(572164),
    R = n(142135),
    O = n(93532),
    b = n(956050),
    D = n(696016),
    L = n(652215);
async function w(e) {
    let { allowVoiceRecording: t } = e;
    await d.Q$.updateSetting(t),
        A.default.track(L.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        s.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function M(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        r &&
            A.default.track(L.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function x(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            A.default.track(L.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function P(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        A.default.track(L.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function k(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function U(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function G(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function F(e) {
    let t, n, r;
    if (null != e) {
        t = null != e ? E.A.getRTCConnection(e) : null;
        let i = (0, u.Iy)(e);
        (n = i.guildId), (r = i.channelId);
    } else {
        let e = p.default.getId(),
            i = f.A.getActiveStreamForUser(e, null);
        (t = null != i ? E.A.getRTCConnection((0, u._z)(i)) : null), (n = i?.guildId), (r = i?.channelId);
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
function V(e, t) {
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
        clip_duration_setting: S.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: _.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = S.A.getSettings().storageLocation,
        o = (0, N.A)(e, t, y.nQ.CLIP, n, r),
        l = `${(0, v.A)(o.applicationName.substring(0, 20))}_${o.id}.mp4`,
        c = a.A.fileManager.join(i, l),
        d = h.Ay.getMediaEngine(),
        _ = JSON.stringify(o),
        f = null != e ? (0, u.Iy)(e).ownerId : void 0,
        p = F(e);
    null != e && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER", clip: { ...o, pending: !0, filepath: c } });
    try {
        let { duration: e, clipStats: t } = await (null != f ? d.saveClipForUser(f, c, _) : d.saveClip(c, _)),
            n = V(p, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            A.default.track(L.HAw.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, b.m)(a.A.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            D.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = r),
            (o.length = e),
            D.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await d.updateClipMetadata(c, JSON.stringify(o)),
            { ...o, filepath: c }
        );
    } catch (r) {
        if (
            (null != e && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR", clipId: o.id }),
            !("errorMessage" in r))
        )
            throw (A.default.track(L.HAw.CLIP_SAVE_FAILURE, p), r);
        let t = r,
            n = V(p, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            A.default.track(L.HAw.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = arguments.length > 3 ? arguments[3] : void 0;
    if (S.A.getIsAtMaxSaveClipOperations()) return;
    let o = (0, C.TD)() && null != f.A.getCurrentUserActiveStream(),
        d = (0, C.Ao)() && l.Ay.getVisibleGame()?.windowHandle != null && h.Ay.hasClipsSource(),
        _ = (0, T.Vr)() && (0, C.TD)() && null == f.A.getCurrentUserActiveStream() && null != m.A.getChannelId();
    if (!o && !d && !_) return;
    let E = f.A.getCurrentUserActiveStream(),
        A = null != E ? (0, u._z)(E) : void 0,
        I = e ?? A,
        y = (() => {
            let e = null != I ? (0, u.Iy)(I).ownerId : void 0;
            return e === p.default.getId() ? D.Fv.STREAMER : null != e ? D.Fv.VIEWER : d ? D.Fv.DECOUPLED : D.Fv.VOICE;
        })(),
        v = await (async () => {
            if (null == I) return;
            let { ownerId: e, guildId: t } = (0, u.Iy)(I),
                n = g.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, i.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, b.n)(t);
                } catch (e) {
                    return;
                }
        })();
    s.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: y, streamKey: I, thumbnail: v, clipMethod: t });
    let N = "manual" === t ? (0, c.Ak)("clip_save", 0.5) : null,
        R = performance.now();
    try {
        if ("auto" === t) {
            let e = S.A.getSettings().maxAutoClips,
                t = S.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (D.nx.info(`Deleting ${r.length} temporary clips to stay within limit of ${e}`), r))
                    try {
                        await Z(t.filepath, t.id);
                    } catch (e) {
                        D.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await B(I, t, n, a);
        s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e });
    } catch (e) {
        D.nx.error("Clip Failed to Save", e),
            N?.stop(),
            (0, c.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    D.nx.info(`${S.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - R)}ms`);
}
async function j(e, t) {
    let n, r;
    if (S.A.getIsAtMaxSaveClipOperations()) return;
    let i = f.A.getCurrentUserActiveStream(),
        o = null != i ? (0, u._z)(i) : void 0,
        d = e ?? o,
        _ = h.Ay.getMediaEngine(),
        m = (0, N.A)(d, t, y.nQ.SCREENSHOT),
        E = S.A.getSettings().storageLocation,
        g = "jpeg",
        A = `${(0, v.A)(m.applicationName.substring(0, 20))}_${m.id}.${g}`,
        I = a.A.fileManager.join(E, A),
        T = (null != d ? (0, u.Iy)(d).ownerId : void 0) === p.default.getId() ? D.Fv.STREAMER : D.Fv.VIEWER;
    if (
        (null != m.applicationId &&
            null != (r = l.Ay.getRunningGames().find((e) => e.id === m.applicationId)) &&
            D.nx.log("Matched application ID to running game:", m.applicationId, r.name),
        null == r &&
            null != m.applicationName &&
            null != (r = l.Ay.getRunningGames().find((e) => e.name === m.applicationName)) &&
            D.nx.log("Matched application name to running game:", m.applicationName),
        null == r && null != (r = l.Ay.getVisibleGame()) && D.nx.log("Using visible game for screenshot:", r.name),
        r?.windowHandle != null)
    )
        (n = parseInt(r.windowHandle, 10)), D.nx.log("Using window handle for full resolution screenshot:", n);
    else {
        D.nx.error("Failed to save screenshot: No window handle available"), (0, c.Ak)("clip_error", 0.5);
        return;
    }
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: d,
        thumbnail: void 0,
        clipMethod: t ?? "manual",
    });
    let C = (0, c.Ak)("clip_save", 0.5),
        R = performance.now();
    try {
        let e = { ...m, filepath: I, length: 0, thumbnail: "" },
            t = JSON.stringify(e),
            r = (await _.saveScreenshot(I, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            D.nx.info(`Screenshot save took ${Math.round(performance.now() - R)}ms`),
            D.nx.log("Successfully saved screenshot to:", I);
    } catch (e) {
        throw (
            (D.nx.error("Failed to save screenshot:", e),
            C?.stop(),
            (0, c.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function Y(e, t) {
    s.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function W(e, t) {
    let n = S.A.getClipById(e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, R.q)(r)) &&
        (await h.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        A.default.track(L.HAw.CLIP_EDITED, { clip_id: r.id }),
        s.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function K(e) {
    await W(e.id, { isFavorite: !e.isFavorite });
}
function $() {
    s.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function z() {
    s.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function q(e) {
    if (!(0, I.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, R.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    s.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
async function Z(e, t) {
    (0, I.isDesktop)() &&
        a.A.clips?.deleteClip != null &&
        (await a.A.clips.deleteClip(e), s.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function X(e) {
    let t = h.Ay.getMediaEngine(),
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
    return e.type === y.nQ.SCREENSHOT ? n : (0, O.A)(n);
}
function Q(e) {
    s.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function J(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function ee(e) {
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...S.A.getSettings().clipSignals, ...e } },
    });
}
function et(e) {
    let t = h.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        s.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...S.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function en(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function er(e, t) {
    s.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ei(e) {
    s.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function es() {
    er({ type: y.Gy.MANUAL });
}
async function ea(e) {
    await W(e, { isTemporary: !1 });
}
