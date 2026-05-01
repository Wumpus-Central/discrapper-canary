n.d(t, {
    $N: () => ed,
    Fb: () => J,
    GS: () => F,
    H1: () => ei,
    HU: () => B,
    K7: () => ee,
    MI: () => $,
    Mt: () => V,
    PW: () => er,
    Su: () => z,
    Ts: () => eo,
    VO: () => en,
    XK: () => q,
    YK: () => X,
    Yy: () => Z,
    dR: () => es,
    e6: () => ea,
    eQ: () => G,
    fd: () => x,
    h$: () => k,
    jA: () => Q,
    l0: () => ec,
    oH: () => et,
    pM: () => el,
    w7: () => e_,
    yO: () => w,
    yT: () => K,
    yd: () => W,
}),
    n(321073);
var i = n(636537),
    a = n(205693),
    r = n(823598),
    s = n(228366),
    l = n(77729),
    o = n(166929),
    d = n(142828),
    c = n(328153),
    _ = n(652896),
    E = n(400492),
    u = n(253932),
    A = n(929921),
    I = n(616356),
    T = n(495544),
    h = n(734057),
    S = n(51760),
    N = n(763827),
    f = n(116956),
    p = n(803301),
    m = n(954571),
    O = n(723702),
    C = n(734066),
    R = n(274372),
    g = n(372684),
    L = n(439818),
    D = n(520165),
    b = n(572164),
    M = n(142135),
    P = n(93532),
    U = n(956050),
    v = n(696016),
    y = n(652215);
async function G(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        m.default.track(y.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        s.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function w(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            m.default.track(y.HAw.CLIPS_SETTINGS_UPDATED, {
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
            m.default.track(y.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function V(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(y.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function B(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        J(e).catch((e) => {
            v.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function F(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function k(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function H(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            a = (0, o.kZ)(e),
            r = n.get(a) ?? 0;
        n.set(a, r + i);
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
        clip_duration_setting: R.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: A.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function j(e) {
    if (!(0, C.J)() || e.isCandidate || null == e.applicationId || e.decision?.signal.type !== g.Gy.MANUAL) return;
    let t = N.A.getChannelId(),
        n = h.A.getChannel(t);
    if (null != n && (0, d.A)(n))
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: y.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await Z(e.id, { remoteClipId: t }));
        } catch (e) {
            v.nx.warn("Failed to send remote clip trigger", e);
        }
}
async function Y() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        o = R.A.getSettings().storageLocation,
        d = (0, D.A)(n, g.nQ.CLIP, i, a);
    d.isCandidate = r ?? !1;
    let c = `${(0, L.A)(d.applicationName.substring(0, 20))}_${d.id}.mp4`,
        E = l.A.fileManager.join(o, c),
        u = S.Ay.getMediaEngine(),
        A = JSON.stringify(d),
        h =
            ((t = null != (e = I.A.getCurrentUserActiveStream()) ? f.A.getRTCConnection((0, _._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: d.guildId,
                channel_id: d.channelId,
                application_id: d.applicationId,
                application_name: d.applicationName,
            });
    r && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...d, pending: !0, filepath: E } });
    try {
        let { duration: e, clipStats: t } = await (null != I.A.getCurrentUserActiveStream()
                ? u.saveClipForUser(T.default.getId(), E, A)
                : u.saveClip(E, A)),
            n = H(h, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let i = "";
        try {
            i = await (0, U.m)(l.A.clips.getClipProtocolURLFromPath(E), 0);
        } catch (e) {
            v.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (d.thumbnail = i),
            (d.length = e),
            m.default.track(y.HAw.CLIP_SAVED, n),
            v.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await u.updateClipMetadata(E, JSON.stringify(d)),
            { ...d, filepath: E }
        );
    } catch (t) {
        if ((r && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: d.id }), !("errorMessage" in t)))
            throw (m.default.track(y.HAw.CLIP_SAVE_FAILURE, h), t);
        let e = H(h, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            m.default.track(y.HAw.CLIP_SAVE_FAILURE, e),
            t.errorMessage)
        );
    }
}
async function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (R.A.getIsAtMaxSaveClipOperations()) return;
    let l = (0, b.TD)() && null != I.A.getCurrentUserActiveStream(),
        o = (0, b.Ao)() && c.Ay.getVisibleGame()?.windowHandle != null && S.Ay.hasClipsSource(),
        d = (0, C.Vr)() && (0, b.TD)() && null == I.A.getCurrentUserActiveStream() && null != N.A.getChannelId();
    if (!l && !o && !d) return;
    let u = I.A.getCurrentUserActiveStream(),
        A = null != u ? (0, _._z)(u) : void 0,
        T = null != u ? v.Fv.STREAMER : o ? v.Fv.DECOUPLED : v.Fv.VOICE,
        h = await (async () => {
            if (null == A) return;
            let { ownerId: e, guildId: t } = (0, _.Iy)(A),
                n = p.A.getStreamId(e, t, a.x.STREAM);
            if (null != n)
                try {
                    let e = (0, r.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, U.n)(t);
                } catch (e) {
                    return;
                }
        })();
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: A,
        thumbnail: i ? void 0 : h,
        clipMethod: e,
    });
    let f = "manual" === e ? (0, E.Ak)("clip_save", 0.5) : null,
        m = performance.now();
    try {
        if ("auto" === e && !i) {
            let e = R.A.getSettings().maxAutoClips,
                t = R.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (v.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await et(t.filepath, t.id);
                    } catch (e) {
                        v.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let a = await Y(e, t, n, i);
        if (
            i &&
            !R.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === a.id;
            })
        ) {
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), et(a.filepath, a.id);
            return;
        }
        s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: a }), j(a);
    } catch (e) {
        v.nx.error("Clip Failed to Save", e),
            f?.stop(),
            i || (0, E.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    v.nx.info(`${R.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - m)}ms`);
}
async function K(e) {
    let t, n;
    if (R.A.getIsAtMaxSaveClipOperations()) return;
    let i = I.A.getCurrentUserActiveStream(),
        a = S.Ay.getMediaEngine(),
        r = (0, D.A)(e, g.nQ.SCREENSHOT),
        o = R.A.getSettings().storageLocation,
        d = `${(0, L.A)(r.applicationName.substring(0, 20))}_${r.id}.jpeg`,
        u = l.A.fileManager.join(o, d);
    if (
        (null != r.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === r.applicationId)) &&
            v.nx.log("Matched application ID to running game:", r.applicationId, n.name),
        null == n &&
            null != r.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === r.applicationName)) &&
            v.nx.log("Matched application name to running game:", r.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && v.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), v.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        v.nx.error("Failed to save screenshot: No window handle available"), (0, E.Ak)("clip_error", 0.5);
        return;
    }
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: v.Fv.STREAMER,
        streamKey: null != i ? (0, _._z)(i) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let A = (0, E.Ak)("clip_save", 0.5),
        T = performance.now();
    try {
        let e = { ...r, filepath: u, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            i = (await a.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${i}`),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            v.nx.info(`Screenshot save took ${Math.round(performance.now() - T)}ms`),
            v.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (v.nx.error("Failed to save screenshot:", e),
            A?.stop(),
            (0, E.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function $(e, t) {
    s.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function Z(e, t) {
    let n = R.A.getClipById(e) ?? R.A.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await (0, M.q)(i)) &&
        (await S.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        m.default.track(y.HAw.CLIP_EDITED, { clip_uuid: i.id }),
        s.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function q(e) {
    await Z(e.id, { isFavorite: !e.isFavorite });
}
function Q() {
    s.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function z() {
    s.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function X(e) {
    s.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function J(e) {
    if (!(0, O.isDesktop)() || l.A.clips?.loadClipsDirectory == null) return;
    let t = await l.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, M.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    s.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function ee(e) {
    Z(e.id, { isCandidate: !1 }),
        s.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function et(e, t) {
    (0, O.isDesktop)() &&
        l.A.clips?.deleteClip != null &&
        (await l.A.clips.deleteClip(e), s.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function en(e) {
    let t = S.Ay.getMediaEngine(),
        { filepath: n, ...i } = e;
    await Z(e.id, i);
    let a = await t.exportClip(
        e.filepath,
        e.editMetadata ?? { start: 0, end: e.length / 1e3, applicationAudio: !0, voiceAudio: !0, soundboardAudio: !0 },
    );
    return e.type === g.nQ.SCREENSHOT ? a : (0, P.A)(a);
}
function ei(e) {
    s.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ea(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function er(e) {
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...R.A.getSettings().clipSignals, ...e } },
    });
}
function es(e) {
    let t = S.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        s.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...R.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function el(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function eo(e, t) {
    s.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ed(e) {
    s.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function ec() {
    eo({ type: g.Gy.MANUAL });
}
async function e_(e) {
    await Z(e, { isTemporary: !1 });
}
