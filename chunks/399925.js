n.d(t, {
    Fb: () => et,
    GS: () => B,
    H1: () => ei,
    HU: () => F,
    MI: () => Z,
    Mt: () => V,
    PW: () => es,
    Su: () => ee,
    Ts: () => ec,
    VO: () => er,
    Wn: () => Y,
    XK: () => $,
    Yy: () => Q,
    dR: () => eo,
    e6: () => ea,
    eQ: () => k,
    fd: () => G,
    h$: () => H,
    jA: () => J,
    l0: () => eu,
    oH: () => en,
    pM: () => el,
    w7: () => ed,
    yO: () => U,
    yT: () => X,
    yd: () => q,
}),
    n(896048),
    n(457529),
    n(638769),
    n(321073);
var r = n(205693),
    i = n(823598),
    a = n(73153),
    s = n(77729),
    o = n(166929),
    l = n(15285),
    c = n(652896),
    u = n(670470),
    d = n(400492),
    f = n(253932),
    p = n(929921),
    _ = n(616356),
    h = n(961350),
    m = n(430452),
    g = n(383501),
    E = n(162605),
    b = n(803301),
    y = n(954571),
    O = n(723702),
    A = n(734066),
    v = n(274372),
    S = n(372684),
    I = n(439818),
    T = n(520165),
    C = n(572164),
    N = n(142135),
    R = n(93532),
    w = n(956050),
    P = n(696016),
    D = n(652215);
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
    await f.Q$.updateSetting(t),
        y.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function U(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: L({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 }),
    }),
        r &&
            y.default.track(
                D.HAw.CLIPS_SETTINGS_UPDATED,
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
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: M(L({}, t && { clipsEnabled: !0 }), { decoupledClipsEnabled: t }),
    }),
        n &&
            y.default.track(
                D.HAw.CLIPS_SETTINGS_UPDATED,
                M(L({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }),
            );
}
function V(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { remindersEnabled: e },
    }),
        y.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function F(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { storageLocation: e },
    });
}
function B(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsQuality: e },
    });
}
function H(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsLength: e },
    });
}
function Y(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { viewerClipsEnabled: t },
    }),
        n && y.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function W(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? E.A.getRTCConnection(e) : null;
        let t = (0, c.Iy)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = h.default.getId(),
            t = _.A.getActiveStreamForUser(e, null);
        (n = null != t ? E.A.getRTCConnection((0, c._z)(t)) : null),
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
function K(e, t) {
    var n, r, i, a, s, l, c, u, d, f, _;
    let h = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let n = t.framesEncodedByEncoder[e],
            r = (0, o.kZ)(e),
            i = null != (_ = h.get(r)) ? _ : 0;
        h.set(r, i + n);
    }
    return M(L({}, e), {
        frames_encoded_nvidia_cuda: null != (n = h.get(o.yo.NVIDIA_CUDA)) ? n : 0,
        frames_encoded_nvidia_direct3d: null != (r = h.get(o.yo.NVIDIA_DIRECT_3D)) ? r : 0,
        frames_encoded_openh264: null != (i = h.get(o.yo.OPENH264)) ? i : 0,
        frames_encoded_videotoolbox: null != (a = h.get(o.yo.VIDEOTOOLBOX)) ? a : 0,
        frames_encoded_amd_direct3d: null != (s = h.get(o.yo.AMD_DIRECT_3D)) ? s : 0,
        frames_encoded_amd_vaapi: null != (l = h.get(o.yo.AMD_VAAPI)) ? l : 0,
        frames_encoded_intel: null != (c = h.get(o.yo.INTEL)) ? c : 0,
        frames_encoded_intel_direct3d: null != (u = h.get(o.yo.INTEL_DIRECT_3D)) ? u : 0,
        frames_encoded_uncategorized: null != (d = h.get(o.yo.UNCATEGORIZED)) ? d : 0,
        frames_encoded_unknown: null != (f = h.get(o.yo.UNKNOWN)) ? f : 0,
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
    });
}
async function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = v.A.getSettings().storageLocation,
        o = (0, T.A)(e, t, S.nQ.CLIP, n, r),
        l = "".concat((0, I.A)(o.applicationName.substring(0, 20)), "_").concat(o.id, ".mp4"),
        u = s.A.fileManager.join(i, l),
        d = m.A.getMediaEngine(),
        f = JSON.stringify(o),
        p = null != e ? (0, c.Iy)(e).ownerId : void 0,
        _ = W(e);
    null != e &&
        a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: M(L({}, o), {
                pending: !0,
                filepath: u,
            }),
        });
    try {
        let { duration: e, clipStats: t } = await (null != p ? d.saveClipForUser(p, u, f) : d.saveClip(u, f)),
            n = K(_, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            y.default.track(D.HAw.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, w.m)(s.A.clips.getClipProtocolURLFromPath(u), 0);
        } catch (e) {
            P.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = r),
            (o.length = e),
            P.nx.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")),
            await d.updateClipMetadata(u, JSON.stringify(o)),
            M(L({}, o), { filepath: u })
        );
    } catch (r) {
        if (
            (null != e &&
                a.h.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: o.id,
                }),
            !("errorMessage" in r))
        )
            throw (y.default.track(D.HAw.CLIP_SAVE_FAILURE, _), r);
        let t = r,
            n = K(_, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            y.default.track(D.HAw.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function q(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        s = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 ? arguments[3] : void 0,
        { enableViewerClipping: f } = u.A.getCurrentConfig({ location: "SaveClip" }, { autoTrackExposure: !1 });
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let p = (0, C.TD)() && null != _.A.getCurrentUserActiveStream(),
        E =
            (0, C.Ao)() &&
            (null == (t = l.Ay.getVisibleGame()) ? void 0 : t.windowHandle) != null &&
            m.A.hasClipsSource(),
        y = null != e && null != _.A.getActiveStreamForStreamKey(e) && f,
        O = (0, A.Vr)() && (0, C.TD)() && null == _.A.getCurrentUserActiveStream() && null != g.A.getChannelId();
    if (!p && !E && !y && !O) return;
    let S = _.A.getCurrentUserActiveStream(),
        I = null != S ? (0, c._z)(S) : void 0,
        T = null != e ? e : I,
        N = (() => {
            let e = null != T ? (0, c.Iy)(T).ownerId : void 0;
            return e === h.default.getId() ? P.Fv.STREAMER : null != e ? P.Fv.VIEWER : E ? P.Fv.DECOUPLED : P.Fv.VOICE;
        })(),
        R = await (async () => {
            if (null == T) return;
            let { ownerId: e, guildId: t } = (0, c.Iy)(T),
                n = b.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, i.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, w.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: N,
        streamKey: T,
        thumbnail: R,
        clipMethod: n,
    });
    let D = "manual" === n ? (0, d.Ak)("clip_save", 0.5) : null,
        x = performance.now();
    try {
        if ("auto" === n) {
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
                for (let t of (P.nx.info(
                    "Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e),
                ),
                r))
                    try {
                        await en(t.filepath);
                    } catch (e) {
                        P.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await z(T, n, s, o);
        a.h.dispatch({
            type: "CLIPS_SAVE_CLIP",
            clip: e,
        });
    } catch (e) {
        P.nx.error("Clip Failed to Save", e),
            null == D || D.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    P.nx.info(
        ""
            .concat(v.A.getSettings().clipsLength / 1000, "s clip save took ")
            .concat(Math.round(performance.now() - x), "ms"),
    );
}
async function X(e, t) {
    let n, r;
    if (v.A.getIsAtMaxSaveClipOperations()) return;
    let i = _.A.getCurrentUserActiveStream(),
        o = null != i ? (0, c._z)(i) : void 0,
        u = null != e ? e : o,
        f = m.A.getMediaEngine(),
        p = (0, T.A)(u, t, S.nQ.SCREENSHOT),
        g = v.A.getSettings().storageLocation,
        E = "jpeg",
        b = ""
            .concat((0, I.A)(p.applicationName.substring(0, 20)), "_")
            .concat(p.id, ".")
            .concat(E),
        y = s.A.fileManager.join(g, b),
        O = (null != u ? (0, c.Iy)(u).ownerId : void 0) === h.default.getId() ? P.Fv.STREAMER : P.Fv.VIEWER;
    if (
        (null != p.applicationId &&
            null != (r = l.Ay.getRunningGames().find((e) => e.id === p.applicationId)) &&
            P.nx.log("Matched application ID to running game:", p.applicationId, r.name),
        null == r &&
            null != p.applicationName &&
            null != (r = l.Ay.getRunningGames().find((e) => e.name === p.applicationName)) &&
            P.nx.log("Matched application name to running game:", p.applicationName),
        null == r && null != (r = l.Ay.getVisibleGame()) && P.nx.log("Using visible game for screenshot:", r.name),
        (null == r ? void 0 : r.windowHandle) != null)
    )
        (n = parseInt(r.windowHandle, 10)), P.nx.log("Using window handle for full resolution screenshot:", n);
    else {
        P.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: O,
        streamKey: u,
        thumbnail: void 0,
        clipMethod: null != t ? t : "manual",
    });
    let A = (0, d.Ak)("clip_save", 0.5),
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
            a.h.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e,
            }),
            P.nx.info("Screenshot save took ".concat(Math.round(performance.now() - C), "ms")),
            P.nx.log("Successfully saved screenshot to:", y);
    } catch (e) {
        throw (
            (P.nx.error("Failed to save screenshot:", e),
            null == A || A.stop(),
            (0, d.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function Z(e, t) {
    a.h.dispatch({
        type: "CLIPS_SAVE_ANIMATION_END",
        streamKey: e,
        timestamp: t,
    });
}
async function Q(e, t) {
    let n = v.A.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = L({}, n, t);
    null != (await (0, N.q)(r)) &&
        (await m.A.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        y.default.track(D.HAw.CLIP_EDITED, { clip_id: r.id }),
        a.h.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: r,
        }));
}
async function $(e) {
    await Q(e.id, { isFavorite: !e.isFavorite });
}
function J() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function ee() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function et(e) {
    var t;
    if (!(0, O.isDesktop)() || (null == (t = s.A.clips) ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await s.A.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, N.q)(M(L({}, e.metadata), { filepath: e.filepath }));
        null != t && r.push(t);
    }
    a.h.dispatch({
        type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
        clips: r,
    });
}
async function en(e) {
    var t;
    (0, O.isDesktop)() &&
        (null == (t = s.A.clips) ? void 0 : t.deleteClip) != null &&
        (await s.A.clips.deleteClip(e),
        a.h.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e,
        }));
}
async function er(e) {
    var t;
    let n = m.A.getMediaEngine(),
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
    return e.type === S.nQ.SCREENSHOT ? r : (0, R.A)(r);
}
function ei(e) {
    a.h.dispatch({
        type: "CLIPS_SET_EXPORTING",
        clipIds: e,
    });
}
function ea(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { maxAutoClips: e },
    });
}
function es(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: L({}, v.A.getSettings().clipSignals, e) },
    });
}
function eo(e) {
    let t = m.A.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        a.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: L({}, v.A.getSettings().mlPipelinesEnabled, e) },
        });
}
function el(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { autoClipPhrases: e },
    });
}
function ec(e, t) {
    a.h.dispatch({
        type: "CLIPS_SIGNAL_CREATED",
        signal: e,
        timestamp: t,
    });
}
function eu() {
    ec({ type: S.Gy.MANUAL });
}
async function ed(e) {
    await Q(e, { isTemporary: !1 });
}
