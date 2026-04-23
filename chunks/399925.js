n.d(t, {
    $N: () => el,
    Fb: () => J,
    GS: () => H,
    H1: () => en,
    HU: () => V,
    K7: () => Z,
    MI: () => $,
    Mt: () => F,
    PW: () => er,
    Su: () => z,
    Ts: () => e_,
    VO: () => et,
    XK: () => q,
    Yy: () => Q,
    dR: () => ea,
    e6: () => ei,
    eQ: () => v,
    fd: () => w,
    h$: () => k,
    jA: () => X,
    l0: () => eo,
    oH: () => ee,
    pM: () => es,
    w7: () => eE,
    yO: () => B,
    yT: () => K,
    yd: () => j,
}),
    n(321073);
var i = n(636537),
    r = n(205693),
    a = n(823598),
    s = n(228366),
    _ = n(77729),
    l = n(166929),
    o = n(142828),
    E = n(328153),
    d = n(652896),
    c = n(400492),
    u = n(253932),
    I = n(929921),
    A = n(616356),
    T = n(495544),
    S = n(734057),
    N = n(969341),
    O = n(763827),
    R = n(116956),
    f = n(803301),
    C = n(954571),
    p = n(723702),
    m = n(734066),
    L = n(274372),
    D = n(372684),
    h = n(439818),
    g = n(520165),
    b = n(572164),
    U = n(142135),
    P = n(93532),
    M = n(956050),
    y = n(696016),
    G = n(652215);
async function v(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        C.default.track(G.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        s.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function B(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            C.default.track(G.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function w(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            C.default.track(G.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function F(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        C.default.track(G.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function V(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } });
}
function H(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function k(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function x(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            r = (0, l.kZ)(e),
            a = n.get(r) ?? 0;
        n.set(r, a + i);
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
        clip_duration_setting: L.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: I.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function W(e) {
    if (!(0, m.J)() || e.isCandidate || null == e.applicationId || e.decision?.signal.type !== D.Gy.MANUAL) return;
    let t = O.A.getChannelId(),
        n = S.A.getChannel(t);
    if (null != n && (0, o.A)(n))
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: G.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await Q(e.id, { remoteClipId: t }));
        } catch (e) {
            y.nx.warn("Failed to send remote clip trigger", e);
        }
}
async function Y() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = arguments.length > 3 ? arguments[3] : void 0,
        l = L.A.getSettings().storageLocation,
        o = (0, g.A)(n, D.nQ.CLIP, i, r);
    o.isCandidate = a ?? !1;
    let E = `${(0, h.A)(o.applicationName.substring(0, 20))}_${o.id}.mp4`,
        c = _.A.fileManager.join(l, E),
        u = N.Ay.getMediaEngine(),
        I = JSON.stringify(o),
        S =
            ((t = null != (e = A.A.getCurrentUserActiveStream()) ? R.A.getRTCConnection((0, d._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: o.guildId,
                channel_id: o.channelId,
                application_id: o.applicationId,
                application_name: o.applicationName,
            });
    a && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...o, pending: !0, filepath: c } });
    try {
        let { duration: e, clipStats: t } = await (null != A.A.getCurrentUserActiveStream()
                ? u.saveClipForUser(T.default.getId(), c, I)
                : u.saveClip(c, I)),
            n = x(S, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let i = "";
        try {
            i = await (0, M.m)(_.A.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            y.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = i),
            (o.length = e),
            C.default.track(G.HAw.CLIP_SAVED, n),
            y.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await u.updateClipMetadata(c, JSON.stringify(o)),
            { ...o, filepath: c }
        );
    } catch (t) {
        if ((a && s.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: o.id }), !("errorMessage" in t)))
            throw (C.default.track(G.HAw.CLIP_SAVE_FAILURE, S), t);
        let e = x(S, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            C.default.track(G.HAw.CLIP_SAVE_FAILURE, e),
            t.errorMessage)
        );
    }
}
async function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (L.A.getIsAtMaxSaveClipOperations()) return;
    let _ = (0, b.TD)() && null != A.A.getCurrentUserActiveStream(),
        l = (0, b.Ao)() && E.Ay.getVisibleGame()?.windowHandle != null && N.Ay.hasClipsSource(),
        o = (0, m.Vr)() && (0, b.TD)() && null == A.A.getCurrentUserActiveStream() && null != O.A.getChannelId();
    if (!_ && !l && !o) return;
    let u = A.A.getCurrentUserActiveStream(),
        I = null != u ? (0, d._z)(u) : void 0,
        T = null != u ? y.Fv.STREAMER : l ? y.Fv.DECOUPLED : y.Fv.VOICE,
        S = await (async () => {
            if (null == I) return;
            let { ownerId: e, guildId: t } = (0, d.Iy)(I),
                n = f.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, a.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, M.n)(t);
                } catch (e) {
                    return;
                }
        })();
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: T,
        streamKey: I,
        thumbnail: i ? void 0 : S,
        clipMethod: e,
    });
    let R = "manual" === e ? (0, c.Ak)("clip_save", 0.5) : null,
        C = performance.now();
    try {
        if ("auto" === e && !i) {
            let e = L.A.getSettings().maxAutoClips,
                t = L.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (y.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await ee(t.filepath, t.id);
                    } catch (e) {
                        y.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await Y(e, t, n, i);
        if (
            i &&
            !L.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), ee(r.filepath, r.id);
            return;
        }
        s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), W(r);
    } catch (e) {
        y.nx.error("Clip Failed to Save", e),
            R?.stop(),
            i || (0, c.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    y.nx.info(`${L.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - C)}ms`);
}
async function K(e) {
    let t, n;
    if (L.A.getIsAtMaxSaveClipOperations()) return;
    let i = A.A.getCurrentUserActiveStream(),
        r = N.Ay.getMediaEngine(),
        a = (0, g.A)(e, D.nQ.SCREENSHOT),
        l = L.A.getSettings().storageLocation,
        o = `${(0, h.A)(a.applicationName.substring(0, 20))}_${a.id}.jpeg`,
        u = _.A.fileManager.join(l, o);
    if (
        (null != a.applicationId &&
            null != (n = E.Ay.getRunningGames().find((e) => e.id === a.applicationId)) &&
            y.nx.log("Matched application ID to running game:", a.applicationId, n.name),
        null == n &&
            null != a.applicationName &&
            null != (n = E.Ay.getRunningGames().find((e) => e.name === a.applicationName)) &&
            y.nx.log("Matched application name to running game:", a.applicationName),
        null == n && null != (n = E.Ay.getVisibleGame()) && y.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), y.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        y.nx.error("Failed to save screenshot: No window handle available"), (0, c.Ak)("clip_error", 0.5);
        return;
    }
    s.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: y.Fv.STREAMER,
        streamKey: null != i ? (0, d._z)(i) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let I = (0, c.Ak)("clip_save", 0.5),
        T = performance.now();
    try {
        let e = { ...a, filepath: u, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            i = (await r.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${i}`),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            y.nx.info(`Screenshot save took ${Math.round(performance.now() - T)}ms`),
            y.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (y.nx.error("Failed to save screenshot:", e),
            I?.stop(),
            (0, c.Ak)("clip_error", 0.5),
            s.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function $(e, t) {
    s.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function Q(e, t) {
    let n = L.A.getClipById(e) ?? L.A.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await (0, U.q)(i)) &&
        (await N.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        C.default.track(G.HAw.CLIP_EDITED, { clip_id: i.id }),
        s.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function q(e) {
    await Q(e.id, { isFavorite: !e.isFavorite });
}
function X() {
    s.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function z() {
    s.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function J(e) {
    if (!(0, p.isDesktop)() || _.A.clips?.loadClipsDirectory == null) return;
    let t = await _.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await (0, U.q)({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    s.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function Z(e) {
    Q(e.id, { isCandidate: !1 }),
        s.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function ee(e, t) {
    (0, p.isDesktop)() &&
        _.A.clips?.deleteClip != null &&
        (await _.A.clips.deleteClip(e), s.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function et(e) {
    let t = N.Ay.getMediaEngine(),
        { filepath: n, ...i } = e;
    await Q(e.id, i);
    let r = await t.exportClip(
        e.filepath,
        e.editMetadata ?? { start: 0, end: e.length / 1e3, applicationAudio: !0, voiceAudio: !0, soundboardAudio: !0 },
    );
    return e.type === D.nQ.SCREENSHOT ? r : (0, P.A)(r);
}
function en(e) {
    s.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ei(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function er(e) {
    s.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...L.A.getSettings().clipSignals, ...e } },
    });
}
function ea(e) {
    let t = N.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        s.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...L.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function es(e) {
    s.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function e_(e, t) {
    s.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function el(e) {
    s.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eo() {
    e_({ type: D.Gy.MANUAL });
}
async function eE(e) {
    await Q(e, { isTemporary: !1 });
}
