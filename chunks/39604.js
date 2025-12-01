n.d(t, {
    C1: () => z,
    Gh: () => Q,
    N0: () => Z,
    Pr: () => J,
    Rr: () => eo,
    So: () => es,
    T1: () => B,
    Tm: () => X,
    UY: () => ei,
    W6: () => ea,
    WY: () => ed,
    XK: () => ec,
    ZW: () => q,
    _Q: () => G,
    a2: () => el,
    br: () => eu,
    eL: () => $,
    eU: () => V,
    em: () => U,
    jv: () => et,
    rO: () => er,
    sS: () => en,
    yg: () => k,
    yi: () => F,
    yl: () => H,
    zq: () => ee,
}),
    n(388685),
    n(49124),
    n(642613),
    n(539854);
var r = n(46973),
    i = n(992774),
    a = n(570140),
    o = n(579806),
    s = n(674466),
    l = n(594190),
    c = n(569545),
    u = n(441167),
    d = n(460181),
    f = n(695346),
    p = n(361291),
    _ = n(199902),
    m = n(314897),
    h = n(131951),
    g = n(19780),
    E = n(959457),
    b = n(33039),
    y = n(626135),
    O = n(358085),
    v = n(924557),
    S = n(435064),
    I = n(894694),
    T = n(61994),
    A = n(550351),
    C = n(341569),
    N = n(659487),
    P = n(711644),
    R = n(259612),
    w = n(356659),
    D = n(981631);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function k(e) {
    let { allowVoiceRecording: t } = e;
    await f.tU.updateSetting(t),
        y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.Z.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function U(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: L({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 }),
    }),
        r &&
            y.default.track(
                D.rMx.CLIPS_SETTINGS_UPDATED,
                L(
                    {
                        clips_enabled: t,
                        guild_id: n,
                    },
                    !t && { decoupled_clips_enabled: !1 },
                ),
            );
}
function G(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: M(L({}, t && { clipsEnabled: !0 }), { decoupledClipsEnabled: t }),
    }),
        n &&
            y.default.track(
                D.rMx.CLIPS_SETTINGS_UPDATED,
                M(L({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }),
            );
}
function Z(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { remindersEnabled: e },
    }),
        y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function B(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { storageLocation: e },
    });
}
function F(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsQuality: e },
    });
}
function V(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsLength: e },
    });
}
function H(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { viewerClipsEnabled: t },
    }),
        n && y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function Y(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? E.Z.getRTCConnection(e) : null;
        let t = (0, c.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = m.default.getId(),
            t = _.Z.getActiveStreamForUser(e, null);
        (n = null != t ? E.Z.getRTCConnection((0, c.V9)(t)) : null),
            (r = null == t ? void 0 : t.guildId),
            (i = null == t ? void 0 : t.channelId);
    }
    let a = null == n || null == (t = n.analyticsContext) ? void 0 : t.streamApplication;
    return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: r,
        channel_id: i,
        application_id: null == a ? void 0 : a.id,
        application_name: null == a ? void 0 : a.name,
    };
}
function W(e, t) {
    var n, r, i, a, o, l, c, u, d, f, _;
    let m = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, s.lG)(e),
            a = null != (n = m.get(i)) ? n : 0;
        m.set(i, a + r);
    }
    return M(L({}, e), {
        frames_encoded_nvidia_cuda: null != (r = m.get(s.Su.NVIDIA_CUDA)) ? r : 0,
        frames_encoded_nvidia_direct3d: null != (i = m.get(s.Su.NVIDIA_DIRECT_3D)) ? i : 0,
        frames_encoded_openh264: null != (a = m.get(s.Su.OPENH264)) ? a : 0,
        frames_encoded_videotoolbox: null != (o = m.get(s.Su.VIDEOTOOLBOX)) ? o : 0,
        frames_encoded_amd_direct3d: null != (l = m.get(s.Su.AMD_DIRECT_3D)) ? l : 0,
        frames_encoded_amd_vaapi: null != (c = m.get(s.Su.AMD_VAAPI)) ? c : 0,
        frames_encoded_intel: null != (u = m.get(s.Su.INTEL)) ? u : 0,
        frames_encoded_intel_direct3d: null != (d = m.get(s.Su.INTEL_DIRECT_3D)) ? d : 0,
        frames_encoded_uncategorized: null != (f = m.get(s.Su.UNCATEGORIZED)) ? f : 0,
        frames_encoded_unknown: null != (_ = m.get(s.Su.UNKNOWN)) ? _ : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: S.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: p.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    });
}
async function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = S.Z.getSettings().storageLocation,
        s = (0, A.Z)(e, t, I.NJ.CLIP, n, r),
        l = "".concat((0, T.Z)(s.applicationName.substring(0, 20)), "_").concat(s.id, ".mp4"),
        u = o.Z.fileManager.join(i, l),
        d = h.Z.getMediaEngine(),
        f = JSON.stringify(s),
        p = null != e ? (0, c.my)(e).ownerId : void 0,
        _ = Y(e);
    null != e &&
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: M(L({}, s), {
                pending: !0,
                filepath: u,
            }),
        });
    try {
        let { duration: e, clipStats: t } = await (null != p ? d.saveClipForUser(p, u, f) : d.saveClip(u, f)),
            n = W(_, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            y.default.track(D.rMx.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, R.R)(o.Z.clips.getClipProtocolURLFromPath(u), 0);
        } catch (e) {
            w.jF.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (s.thumbnail = r),
            (s.length = e),
            w.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")),
            await d.updateClipMetadata(u, JSON.stringify(s)),
            M(L({}, s), { filepath: u })
        );
    } catch (r) {
        if (
            (null != e &&
                a.Z.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: s.id,
                }),
            !("errorMessage" in r))
        )
            throw (y.default.track(D.rMx.CLIP_SAVE_FAILURE, _), r);
        let t = r,
            n = W(_, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            y.default.track(D.rMx.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function z(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        o = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        { enableViewerClipping: f } = u.Z.getCurrentConfig({ location: "SaveClip" }, { autoTrackExposure: !1 });
    if (S.Z.getIsAtMaxSaveClipOperations()) return;
    let p = (0, C.LI)() && null != _.Z.getCurrentUserActiveStream(),
        E =
            (0, C.CY)() &&
            (null == (t = l.ZP.getVisibleGame()) ? void 0 : t.windowHandle) != null &&
            h.Z.hasClipsSource(),
        y = null != e && null != _.Z.getActiveStreamForStreamKey(e) && f,
        O = (0, v.n7)() && (0, C.LI)() && null == _.Z.getCurrentUserActiveStream() && null != g.Z.getChannelId();
    if (!p && !E && !y && !O) return;
    let I = _.Z.getCurrentUserActiveStream(),
        T = null != I ? (0, c.V9)(I) : void 0,
        A = null != e ? e : T,
        N = (() => {
            let e = null != A ? (0, c.my)(A).ownerId : void 0;
            return e === m.default.getId() ? w.X9.STREAMER : null != e ? w.X9.VIEWER : E ? w.X9.DECOUPLED : w.X9.VOICE;
        })(),
        P = await (async () => {
            if (null == A) return;
            let { ownerId: e, guildId: t } = (0, c.my)(A),
                n = b.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, R.W)(t);
                } catch (e) {
                    return;
                }
        })();
    a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: N,
        streamKey: A,
        thumbnail: P,
        clipMethod: n,
    });
    let D = "manual" === n ? (0, d.GN)("clip_save", 0.5) : null,
        x = performance.now();
    try {
        if ("auto" === n) {
            let e = S.Z.getSettings().maxAutoClips,
                t = S.Z.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (w.jF.info(
                    "Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e),
                ),
                r))
                    try {
                        await en(t.filepath);
                    } catch (e) {
                        w.jF.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await K(A, n, o, s);
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP",
            clip: e,
        });
    } catch (e) {
        w.jF.error("Clip Failed to Save", e),
            null == D || D.stop(),
            (0, d.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    w.jF.info(
        ""
            .concat(S.Z.getSettings().clipsLength / 1000, "s clip save took ")
            .concat(Math.round(performance.now() - x), "ms"),
    );
}
async function q(e, t) {
    let n, r;
    if (S.Z.getIsAtMaxSaveClipOperations()) return;
    let i = _.Z.getCurrentUserActiveStream(),
        s = null != i ? (0, c.V9)(i) : void 0,
        u = null != e ? e : s,
        f = h.Z.getMediaEngine(),
        p = (0, A.Z)(u, t, I.NJ.SCREENSHOT),
        g = S.Z.getSettings().storageLocation,
        E = "jpeg",
        b = ""
            .concat((0, T.Z)(p.applicationName.substring(0, 20)), "_")
            .concat(p.id, ".")
            .concat(E),
        y = o.Z.fileManager.join(g, b),
        O = (null != u ? (0, c.my)(u).ownerId : void 0) === m.default.getId() ? w.X9.STREAMER : w.X9.VIEWER;
    if (
        (null != p.applicationId &&
            null != (r = l.ZP.getRunningGames().find((e) => e.id === p.applicationId)) &&
            w.jF.log("Matched application ID to running game:", p.applicationId, r.name),
        null == r &&
            null != p.applicationName &&
            null != (r = l.ZP.getRunningGames().find((e) => e.name === p.applicationName)) &&
            w.jF.log("Matched application name to running game:", p.applicationName),
        null == r && null != (r = l.ZP.getVisibleGame()) && w.jF.log("Using visible game for screenshot:", r.name),
        (null == r ? void 0 : r.windowHandle) != null)
    )
        (n = parseInt(r.windowHandle, 10)), w.jF.log("Using window handle for full resolution screenshot:", n);
    else {
        w.jF.error("Failed to save screenshot: No window handle available"), (0, d.GN)("clip_error", 0.5);
        return;
    }
    a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: O,
        streamKey: u,
        thumbnail: void 0,
        clipMethod: null != t ? t : "manual",
    });
    let v = (0, d.GN)("clip_save", 0.5),
        C = performance.now();
    try {
        let e = M(L({}, p), {
                filepath: y,
                length: 0,
                thumbnail: "",
            }),
            t = JSON.stringify(e),
            r = (await f.saveScreenshot(y, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = "data:image/jpeg;base64,".concat(r)),
            a.Z.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e,
            }),
            w.jF.info("Screenshot save took ".concat(Math.round(performance.now() - C), "ms")),
            w.jF.log("Successfully saved screenshot to:", y);
    } catch (e) {
        throw (
            (w.jF.error("Failed to save screenshot:", e),
            null == v || v.stop(),
            (0, d.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function Q(e, t) {
    a.Z.dispatch({
        type: "CLIPS_SAVE_ANIMATION_END",
        streamKey: e,
        timestamp: t,
    });
}
async function X(e, t) {
    let n = S.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = L({}, n, t);
    null != (await (0, N.w)(r)) &&
        (await h.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        y.default.track(D.rMx.CLIP_EDITED, { clip_id: r.id }),
        a.Z.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: r,
        }));
}
async function J(e) {
    await X(e.id, { isFavorite: !e.isFavorite });
}
function $() {
    a.Z.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function ee() {
    a.Z.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function et(e) {
    var t;
    if (!(0, O.isDesktop)() || (null == (t = o.Z.clips) ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await o.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, N.w)(M(L({}, e.metadata), { filepath: e.filepath }));
        null != t && r.push(t);
    }
    a.Z.dispatch({
        type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
        clips: r,
    });
}
async function en(e) {
    var t;
    (0, O.isDesktop)() &&
        (null == (t = o.Z.clips) ? void 0 : t.deleteClip) != null &&
        (await o.Z.clips.deleteClip(e),
        a.Z.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e,
        }));
}
async function er(e) {
    var t;
    let n = h.Z.getMediaEngine(),
        r = await n.exportClip(
            e.filepath,
            null != (t = e.editMetadata)
                ? t
                : {
                      start: 0,
                      end: e.length / 1000,
                      applicationAudio: !0,
                      voiceAudio: !0,
                      soundboardAudio: !0,
                  },
        );
    return e.type === I.NJ.SCREENSHOT ? r : (0, P.Z)(r);
}
function ei(e) {
    a.Z.dispatch({
        type: "CLIPS_SET_EXPORTING",
        clipIds: e,
    });
}
function ea(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { maxAutoClips: e },
    });
}
function eo(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: L({}, S.Z.getSettings().clipSignals, e) },
    });
}
function es(e) {
    let t = h.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        a.Z.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: L({}, S.Z.getSettings().mlPipelinesEnabled, e) },
        });
}
function el(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { autoClipPhrases: e },
    });
}
function ec(e, t) {
    a.Z.dispatch({
        type: "CLIPS_SIGNAL_CREATED",
        signal: e,
        timestamp: t,
    });
}
function eu() {
    ec({ type: I.Bs.MANUAL });
}
async function ed(e) {
    await X(e, { isTemporary: !1 });
}
