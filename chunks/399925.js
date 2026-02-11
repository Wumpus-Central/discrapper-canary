"use strict";
n.d(t, {
    Fb: () => Q,
    GS: () => F,
    H1: () => et,
    HU: () => G,
    MI: () => $,
    Mt: () => U,
    PW: () => er,
    Su: () => Z,
    Ts: () => es,
    VO: () => ee,
    Wn: () => B,
    XK: () => q,
    Yy: () => z,
    dR: () => ei,
    e6: () => en,
    eQ: () => P,
    fd: () => k,
    h$: () => V,
    jA: () => X,
    l0: () => eo,
    oH: () => J,
    pM: () => ea,
    w7: () => el,
    yO: () => M,
    yT: () => K,
    yd: () => W,
}),
    n(321073);
var r = n(205693),
    i = n(823598),
    a = n(73153),
    s = n(77729),
    o = n(166929),
    l = n(15285),
    u = n(652896),
    c = n(670470),
    d = n(400492),
    _ = n(253932),
    f = n(929921),
    h = n(616356),
    p = n(961350),
    g = n(430452),
    E = n(383501),
    A = n(162605),
    I = n(803301),
    T = n(954571),
    y = n(723702),
    S = n(734066),
    v = n(274372),
    C = n(372684),
    b = n(439818),
    N = n(520165),
    R = n(572164),
    O = n(142135),
    D = n(93532),
    L = n(956050),
    w = n(696016),
    x = n(652215);
async function P(e) {
    let { allowVoiceRecording: t } = e;
    await _.Q$.updateSetting(t),
        T.default.track(x.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function M(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        r &&
            T.default.track(x.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function k(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            T.default.track(x.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function U(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        T.default.track(x.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function G(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function F(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function V(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function B(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { viewerClipsEnabled: t } }),
        n && T.default.track(x.HAw.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function j(e) {
    let t, n, r;
    if (null != e) {
        t = null != e ? A.A.getRTCConnection(e) : null;
        let i = (0, u.Iy)(e);
        (n = i.guildId), (r = i.channelId);
    } else {
        let e = p.default.getId(),
            i = h.A.getActiveStreamForUser(e, null);
        (t = null != i ? A.A.getRTCConnection((0, u._z)(i)) : null), (n = i?.guildId), (r = i?.channelId);
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
            a = n.get(i) ?? 0;
        n.set(i, a + r);
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
        clip_duration_setting: v.A.getSettings().clipsLength,
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
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = v.A.getSettings().storageLocation,
        o = (0, N.A)(e, t, C.nQ.CLIP, n, r),
        l = `${(0, b.A)(o.applicationName.substring(0, 20))}_${o.id}.mp4`,
        c = s.A.fileManager.join(i, l),
        d = g.Ay.getMediaEngine(),
        _ = JSON.stringify(o),
        f = null != e ? (0, u.Iy)(e).ownerId : void 0,
        h = j(e);
    null != e && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER", clip: { ...o, pending: !0, filepath: c } });
    try {
        let { duration: e, clipStats: t } = await (null != f ? d.saveClipForUser(f, c, _) : d.saveClip(c, _)),
            n = H(h, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            T.default.track(x.HAw.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, L.m)(s.A.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            w.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = r),
            (o.length = e),
            w.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await d.updateClipMetadata(c, JSON.stringify(o)),
            { ...o, filepath: c }
        );
    } catch (r) {
        if (
            (null != e && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR", clipId: o.id }),
            !("errorMessage" in r))
        )
            throw (T.default.track(x.HAw.CLIP_SAVE_FAILURE, h), r);
        let t = r,
            n = H(h, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            T.default.track(x.HAw.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        { enableViewerClipping: o } = c.A.getCurrentConfig({ location: "SaveClip" }, { autoTrackExposure: !1 });
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let _ = (0, R.TD)() && null != h.A.getCurrentUserActiveStream(),
        f = (0, R.Ao)() && l.Ay.getVisibleGame()?.windowHandle != null && g.Ay.hasClipsSource(),
        A = null != e && null != h.A.getActiveStreamForStreamKey(e) && o,
        T = (0, S.Vr)() && (0, R.TD)() && null == h.A.getCurrentUserActiveStream() && null != E.A.getChannelId();
    if (!_ && !f && !A && !T) return;
    let y = h.A.getCurrentUserActiveStream(),
        C = null != y ? (0, u._z)(y) : void 0,
        b = e ?? C,
        N = (() => {
            let e = null != b ? (0, u.Iy)(b).ownerId : void 0;
            return e === p.default.getId() ? w.Fv.STREAMER : null != e ? w.Fv.VIEWER : f ? w.Fv.DECOUPLED : w.Fv.VOICE;
        })(),
        O = await (async () => {
            if (null == b) return;
            let { ownerId: e, guildId: t } = (0, u.Iy)(b),
                n = I.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, i.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, L.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: N, streamKey: b, thumbnail: O, clipMethod: t });
    let D = "manual" === t ? (0, d.Ak)("clip_save", 0.5) : null,
        x = performance.now();
    try {
        if ("auto" === t) {
            let e = v.A.getSettings().maxAutoClips,
                t = v.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (w.nx.info(`Deleting ${r.length} temporary clips to stay within limit of ${e}`), r))
                    try {
                        await J(t.filepath);
                    } catch (e) {
                        w.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await Y(b, t, n, s);
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e });
    } catch (e) {
        w.nx.error("Clip Failed to Save", e),
            D?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    w.nx.info(`${v.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - x)}ms`);
}
async function K(e, t) {
    let n, r;
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let i = h.A.getCurrentUserActiveStream(),
        o = null != i ? (0, u._z)(i) : void 0,
        c = e ?? o,
        _ = g.Ay.getMediaEngine(),
        f = (0, N.A)(c, t, C.nQ.SCREENSHOT),
        E = v.A.getSettings().storageLocation,
        A = "jpeg",
        I = `${(0, b.A)(f.applicationName.substring(0, 20))}_${f.id}.${A}`,
        T = s.A.fileManager.join(E, I),
        y = (null != c ? (0, u.Iy)(c).ownerId : void 0) === p.default.getId() ? w.Fv.STREAMER : w.Fv.VIEWER;
    if (
        (null != f.applicationId &&
            null != (r = l.Ay.getRunningGames().find((e) => e.id === f.applicationId)) &&
            w.nx.log("Matched application ID to running game:", f.applicationId, r.name),
        null == r &&
            null != f.applicationName &&
            null != (r = l.Ay.getRunningGames().find((e) => e.name === f.applicationName)) &&
            w.nx.log("Matched application name to running game:", f.applicationName),
        null == r && null != (r = l.Ay.getVisibleGame()) && w.nx.log("Using visible game for screenshot:", r.name),
        r?.windowHandle != null)
    )
        (n = parseInt(r.windowHandle, 10)), w.nx.log("Using window handle for full resolution screenshot:", n);
    else {
        w.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: y,
        streamKey: c,
        thumbnail: void 0,
        clipMethod: t ?? "manual",
    });
    let S = (0, d.Ak)("clip_save", 0.5),
        R = performance.now();
    try {
        let e = { ...f, filepath: T, length: 0, thumbnail: "" },
            t = JSON.stringify(e),
            r = (await _.saveScreenshot(T, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            w.nx.info(`Screenshot save took ${Math.round(performance.now() - R)}ms`),
            w.nx.log("Successfully saved screenshot to:", T);
    } catch (e) {
        throw (
            (w.nx.error("Failed to save screenshot:", e),
            S?.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function $(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function z(e, t) {
    let n = v.A.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, O.q)(r)) &&
        (await g.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        T.default.track(x.HAw.CLIP_EDITED, { clip_id: r.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function q(e) {
    await z(e.id, { isFavorite: !e.isFavorite });
}
function X() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function Z() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function Q(e) {
    if (!(0, y.isDesktop)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, O.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
async function J(e) {
    (0, y.isDesktop)() &&
        s.A.clips?.deleteClip != null &&
        (await s.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", filepath: e }));
}
async function ee(e) {
    let t = g.Ay.getMediaEngine(),
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
    return e.type === C.nQ.SCREENSHOT ? n : (0, D.A)(n);
}
function et(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function er(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...v.A.getSettings().clipSignals, ...e } },
    });
}
function ei(e) {
    let t = g.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        a.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...v.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function ea(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function es(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eo() {
    es({ type: C.Gy.MANUAL });
}
async function el(e) {
    await z(e, { isTemporary: !1 });
}
