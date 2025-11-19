n.d(t, {
    C1: () => z,
    Gh: () => X,
    N0: () => B,
    Pr: () => J,
    Rr: () => eo,
    So: () => es,
    T1: () => Z,
    Tm: () => Q,
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
    yg: () => j,
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
    _ = n(361291),
    p = n(199902),
    h = n(314897),
    m = n(131951),
    g = n(19780),
    E = n(959457),
    b = n(33039),
    y = n(626135),
    O = n(358085),
    v = n(924557),
    I = n(435064),
    T = n(894694),
    S = n(61994),
    A = n(550351),
    C = n(341569),
    N = n(659487),
    R = n(711644),
    P = n(259612),
    D = n(356659),
    w = n(981631);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function j(e) {
    let { allowVoiceRecording: t } = e;
    await f.tU.updateSetting(t),
        y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.Z.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function U(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: x({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 }),
    }),
        r &&
            y.default.track(
                w.rMx.CLIPS_SETTINGS_UPDATED,
                x(
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
        settings: k(x({}, t && { clipsEnabled: !0 }), { decoupledClipsEnabled: t }),
    }),
        n &&
            y.default.track(
                w.rMx.CLIPS_SETTINGS_UPDATED,
                k(x({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }),
            );
}
function B(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { remindersEnabled: e },
    }),
        y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function Z(e) {
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
        n && y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function Y(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? E.Z.getRTCConnection(e) : null;
        let t = (0, c.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = h.default.getId(),
            t = p.Z.getActiveStreamForUser(e, null);
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
    var n, r, i, a, o, l, c, u, d, f, p;
    let h = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, s.lG)(e),
            a = null != (n = h.get(i)) ? n : 0;
        h.set(i, a + r);
    }
    return k(x({}, e), {
        frames_encoded_nvidia_cuda: null != (r = h.get(s.Su.NVIDIA_CUDA)) ? r : 0,
        frames_encoded_nvidia_direct3d: null != (i = h.get(s.Su.NVIDIA_DIRECT_3D)) ? i : 0,
        frames_encoded_openh264: null != (a = h.get(s.Su.OPENH264)) ? a : 0,
        frames_encoded_videotoolbox: null != (o = h.get(s.Su.VIDEOTOOLBOX)) ? o : 0,
        frames_encoded_amd_direct3d: null != (l = h.get(s.Su.AMD_DIRECT_3D)) ? l : 0,
        frames_encoded_amd_vaapi: null != (c = h.get(s.Su.AMD_VAAPI)) ? c : 0,
        frames_encoded_intel: null != (u = h.get(s.Su.INTEL)) ? u : 0,
        frames_encoded_intel_direct3d: null != (d = h.get(s.Su.INTEL_DIRECT_3D)) ? d : 0,
        frames_encoded_uncategorized: null != (f = h.get(s.Su.UNCATEGORIZED)) ? f : 0,
        frames_encoded_unknown: null != (p = h.get(s.Su.UNKNOWN)) ? p : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: I.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: _.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    });
}
async function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = I.Z.getSettings().storageLocation,
        s = (0, A.Z)(e, t, T.NJ.CLIP, n, r),
        l = "".concat((0, S.Z)(s.applicationName.substring(0, 20)), "_").concat(s.id, ".mp4"),
        u = o.Z.fileManager.join(i, l),
        d = m.Z.getMediaEngine(),
        f = JSON.stringify(s),
        _ = null != e ? (0, c.my)(e).ownerId : void 0,
        p = Y(e);
    null != e &&
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: k(x({}, s), {
                pending: !0,
                filepath: u,
            }),
        });
    try {
        let { duration: e, clipStats: t } = await (null != _ ? d.saveClipForUser(_, u, f) : d.saveClip(u, f)),
            n = W(p, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            y.default.track(w.rMx.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, P.R)(o.Z.clips.getClipProtocolURLFromPath(u), 0);
        } catch (e) {
            D.jF.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (s.thumbnail = r),
            (s.length = e),
            D.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")),
            await d.updateClipMetadata(u, JSON.stringify(s)),
            k(x({}, s), { filepath: u })
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
            throw (y.default.track(w.rMx.CLIP_SAVE_FAILURE, p), r);
        let t = r,
            n = W(p, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            y.default.track(w.rMx.CLIP_SAVE_FAILURE, n),
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
    if (I.Z.getIsAtMaxSaveClipOperations()) return;
    let _ = (0, C.LI)() && null != p.Z.getCurrentUserActiveStream(),
        E =
            (0, C.CY)() &&
            (null == (t = l.ZP.getVisibleGame()) ? void 0 : t.windowHandle) != null &&
            m.Z.hasClipsSource(),
        y = null != e && null != p.Z.getActiveStreamForStreamKey(e) && f,
        O = (0, v.n7)() && (0, C.LI)() && null == p.Z.getCurrentUserActiveStream() && null != g.Z.getChannelId();
    if (!_ && !E && !y && !O) return;
    let T = p.Z.getCurrentUserActiveStream(),
        S = null != T ? (0, c.V9)(T) : void 0,
        A = null != e ? e : S,
        N = (() => {
            let e = null != A ? (0, c.my)(A).ownerId : void 0;
            return e === h.default.getId() ? D.X9.STREAMER : null != e ? D.X9.VIEWER : E ? D.X9.DECOUPLED : D.X9.VOICE;
        })(),
        R = await (async () => {
            if (null == A) return;
            let { ownerId: e, guildId: t } = (0, c.my)(A),
                n = b.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, P.W)(t);
                } catch (e) {
                    return;
                }
        })();
    a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: N,
        streamKey: A,
        thumbnail: R,
        clipMethod: n,
    });
    let w = "manual" === n ? (0, d.GN)("clip_save", 0.5) : null,
        L = performance.now();
    try {
        if ("auto" === n) {
            let e = I.Z.getSettings().maxAutoClips,
                t = I.Z.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (D.jF.info(
                    "Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e),
                ),
                r))
                    try {
                        await en(t.filepath);
                    } catch (e) {
                        D.jF.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await K(A, n, o, s);
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP",
            clip: e,
        });
    } catch (e) {
        D.jF.error("Clip Failed to Save", e),
            null == w || w.stop(),
            (0, d.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    D.jF.info(
        ""
            .concat(I.Z.getSettings().clipsLength / 1000, "s clip save took ")
            .concat(Math.round(performance.now() - L), "ms"),
    );
}
async function q(e, t) {
    let n, r;
    if (I.Z.getIsAtMaxSaveClipOperations()) return;
    let i = p.Z.getCurrentUserActiveStream(),
        s = null != i ? (0, c.V9)(i) : void 0,
        u = null != e ? e : s,
        f = m.Z.getMediaEngine(),
        _ = (0, A.Z)(u, t, T.NJ.SCREENSHOT),
        g = I.Z.getSettings().storageLocation,
        E = "jpeg",
        b = ""
            .concat((0, S.Z)(_.applicationName.substring(0, 20)), "_")
            .concat(_.id, ".")
            .concat(E),
        y = o.Z.fileManager.join(g, b),
        O = (null != u ? (0, c.my)(u).ownerId : void 0) === h.default.getId() ? D.X9.STREAMER : D.X9.VIEWER;
    if (
        (null != _.applicationId &&
            null != (r = l.ZP.getRunningGames().find((e) => e.id === _.applicationId)) &&
            D.jF.log("Matched application ID to running game:", _.applicationId, r.name),
        null == r &&
            null != _.applicationName &&
            null != (r = l.ZP.getRunningGames().find((e) => e.name === _.applicationName)) &&
            D.jF.log("Matched application name to running game:", _.applicationName),
        null == r && null != (r = l.ZP.getVisibleGame()) && D.jF.log("Using visible game for screenshot:", r.name),
        (null == r ? void 0 : r.windowHandle) != null)
    )
        (n = parseInt(r.windowHandle, 10)), D.jF.log("Using window handle for full resolution screenshot:", n);
    else {
        D.jF.error("Failed to save screenshot: No window handle available"), (0, d.GN)("clip_error", 0.5);
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
        let e = k(x({}, _), {
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
            D.jF.info("Screenshot save took ".concat(Math.round(performance.now() - C), "ms")),
            D.jF.log("Successfully saved screenshot to:", y);
    } catch (e) {
        throw (
            (D.jF.error("Failed to save screenshot:", e),
            null == v || v.stop(),
            (0, d.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function X(e, t) {
    a.Z.dispatch({
        type: "CLIPS_SAVE_ANIMATION_END",
        streamKey: e,
        timestamp: t,
    });
}
async function Q(e, t) {
    let n = I.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = x({}, n, t);
    null != (await (0, N.w)(r)) &&
        (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        y.default.track(w.rMx.CLIP_EDITED, { clip_id: r.id }),
        a.Z.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: r,
        }));
}
async function J(e) {
    await Q(e.id, { isFavorite: !e.isFavorite });
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
        let t = await (0, N.w)(k(x({}, e.metadata), { filepath: e.filepath }));
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
    let n = m.Z.getMediaEngine(),
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
    return e.type === T.NJ.SCREENSHOT ? r : (0, R.Z)(r);
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
        settings: { clipSignals: x({}, I.Z.getSettings().clipSignals, e) },
    });
}
function es(e) {
    let t = m.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        a.Z.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: x({}, I.Z.getSettings().mlPipelinesEnabled, e) },
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
    ec({ type: T.Bs.MANUAL });
}
async function ed(e) {
    await Q(e, { isTemporary: !1 });
}
