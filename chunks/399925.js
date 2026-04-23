"use strict";
n.d(t, {
    $N: () => el,
    Fb: () => Z,
    GS: () => V,
    H1: () => en,
    HU: () => F,
    K7: () => J,
    MI: () => $,
    Mt: () => G,
    PW: () => ei,
    Su: () => Q,
    Ts: () => eo,
    VO: () => et,
    XK: () => q,
    Yy: () => z,
    dR: () => es,
    e6: () => er,
    eQ: () => x,
    fd: () => U,
    h$: () => B,
    jA: () => X,
    l0: () => eu,
    oH: () => ee,
    pM: () => ea,
    w7: () => ec,
    yO: () => k,
    yT: () => K,
    yd: () => W,
}),
    n(321073);
var r = n(562465),
    i = n(205693),
    s = n(823598),
    a = n(73153),
    o = n(77729),
    l = n(166929),
    u = n(142828),
    c = n(15285),
    d = n(652896),
    _ = n(400492),
    f = n(253932),
    p = n(929921),
    h = n(616356),
    E = n(961350),
    m = n(734057),
    g = n(430452),
    A = n(383501),
    I = n(162605),
    T = n(803301),
    S = n(954571),
    y = n(723702),
    N = n(734066),
    v = n(274372),
    C = n(372684),
    O = n(439818),
    R = n(520165),
    b = n(572164),
    D = n(142135),
    L = n(93532),
    w = n(956050),
    M = n(696016),
    P = n(652215);
async function x(e) {
    let { allowVoiceRecording: t } = e;
    await f.Q$.updateSetting(t),
        S.default.track(P.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function k(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        r &&
            S.default.track(P.HAw.CLIPS_SETTINGS_UPDATED, {
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
            S.default.track(P.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function G(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        S.default.track(P.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function F(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function V(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function B(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function H(e, t) {
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
        clip_duration_setting: v.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: p.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function j(e) {
    if (!(0, N.J)() || e.isCandidate || null == e.applicationId || e.decision?.signal.type !== C.Gy.MANUAL) return;
    let t = A.A.getChannelId(),
        n = m.A.getChannel(t);
    if (null != n && (0, u.A)(n))
        try {
            let {
                body: { remote_clip_id: t },
            } = await r.Bo.post({
                url: P.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await z(e.id, { remoteClipId: t }));
        } catch (e) {
            M.nx.warn("Failed to send remote clip trigger", e);
        }
}
async function Y() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        r = arguments.length > 1 ? arguments[1] : void 0,
        i = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = v.A.getSettings().storageLocation,
        u = (0, R.A)(n, C.nQ.CLIP, r, i);
    u.isCandidate = s ?? !1;
    let c = `${(0, O.A)(u.applicationName.substring(0, 20))}_${u.id}.mp4`,
        _ = o.A.fileManager.join(l, c),
        f = g.Ay.getMediaEngine(),
        p = JSON.stringify(u),
        m =
            ((t = null != (e = h.A.getCurrentUserActiveStream()) ? I.A.getRTCConnection((0, d._z)(e)) : null),
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
        let { duration: e, clipStats: t } = await (null != h.A.getCurrentUserActiveStream()
                ? f.saveClipForUser(E.default.getId(), _, p)
                : f.saveClip(_, p)),
            n = H(m, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let r = "";
        try {
            r = await (0, w.m)(o.A.clips.getClipProtocolURLFromPath(_), 0);
        } catch (e) {
            M.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (u.thumbnail = r),
            (u.length = e),
            S.default.track(P.HAw.CLIP_SAVED, n),
            M.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${r.length} bytes thumbnail.`),
            await f.updateClipMetadata(_, JSON.stringify(u)),
            { ...u, filepath: _ }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: u.id }), !("errorMessage" in t)))
            throw (S.default.track(P.HAw.CLIP_SAVE_FAILURE, m), t);
        let e = H(m, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            S.default.track(P.HAw.CLIP_SAVE_FAILURE, e),
            t.errorMessage)
        );
    }
}
async function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let o = (0, b.TD)() && null != h.A.getCurrentUserActiveStream(),
        l = (0, b.Ao)() && c.Ay.getVisibleGame()?.windowHandle != null && g.Ay.hasClipsSource(),
        u = (0, N.Vr)() && (0, b.TD)() && null == h.A.getCurrentUserActiveStream() && null != A.A.getChannelId();
    if (!o && !l && !u) return;
    let f = h.A.getCurrentUserActiveStream(),
        p = null != f ? (0, d._z)(f) : void 0,
        E = null != f ? M.Fv.STREAMER : l ? M.Fv.DECOUPLED : M.Fv.VOICE,
        m = await (async () => {
            if (null == p) return;
            let { ownerId: e, guildId: t } = (0, d.Iy)(p),
                n = T.A.getStreamId(e, t, i.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, w.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: E,
        streamKey: p,
        thumbnail: r ? void 0 : m,
        clipMethod: e,
    });
    let I = "manual" === e ? (0, _.Ak)("clip_save", 0.5) : null,
        S = performance.now();
    try {
        if ("auto" === e && !r) {
            let e = v.A.getSettings().maxAutoClips,
                t = v.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (M.nx.info(`Deleting ${r.length} temporary clips to stay within limit of ${e}`), r))
                    try {
                        await ee(t.filepath, t.id);
                    } catch (e) {
                        M.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let i = await Y(e, t, n, r);
        if (
            r &&
            !v.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === i.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), ee(i.filepath, i.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: i }), j(i);
    } catch (e) {
        M.nx.error("Clip Failed to Save", e),
            I?.stop(),
            r || (0, _.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    M.nx.info(`${v.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - S)}ms`);
}
async function K(e) {
    let t, n;
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let r = h.A.getCurrentUserActiveStream(),
        i = g.Ay.getMediaEngine(),
        s = (0, R.A)(e, C.nQ.SCREENSHOT),
        l = v.A.getSettings().storageLocation,
        u = `${(0, O.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        f = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            M.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            M.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && M.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), M.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        M.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: M.Fv.STREAMER,
        streamKey: null != r ? (0, d._z)(r) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let p = (0, _.Ak)("clip_save", 0.5),
        E = performance.now();
    try {
        let e = { ...s, filepath: f, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            r = (await i.saveScreenshot(f, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${r}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            M.nx.info(`Screenshot save took ${Math.round(performance.now() - E)}ms`),
            M.nx.log("Successfully saved screenshot to:", f);
    } catch (e) {
        throw (
            (M.nx.error("Failed to save screenshot:", e),
            p?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function $(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function z(e, t) {
    let n = v.A.getClipById(e) ?? v.A.getClipCandidateById(e);
    if (null == n) return;
    let r = { ...n, ...t };
    null != (await (0, D.q)(r)) &&
        (await g.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        S.default.track(P.HAw.CLIP_EDITED, { clip_id: r.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function q(e) {
    await z(e.id, { isFavorite: !e.isFavorite });
}
function X() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function Q() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function Z(e) {
    if (!(0, y.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, D.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function J(e) {
    z(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function ee(e, t) {
    (0, y.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function et(e) {
    let t = g.Ay.getMediaEngine(),
        { filepath: n, ...r } = e;
    await z(e.id, r);
    let i = await t.exportClip(
        e.filepath,
        e.editMetadata ?? { start: 0, end: e.length / 1e3, applicationAudio: !0, voiceAudio: !0, soundboardAudio: !0 },
    );
    return e.type === C.nQ.SCREENSHOT ? i : (0, L.A)(i);
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function er(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function ei(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...v.A.getSettings().clipSignals, ...e } },
    });
}
function es(e) {
    let t = g.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        a.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...v.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function ea(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function eo(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function el(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eu() {
    eo({ type: C.Gy.MANUAL });
}
async function ec(e) {
    await z(e, { isTemporary: !1 });
}
