n.d(t, {
    C1: () => J,
    Gh: () => ee,
    N0: () => V,
    Pr: () => en,
    Rr: () => eu,
    So: () => ed,
    T1: () => H,
    Tm: () => et,
    UY: () => el,
    W6: () => ec,
    WY: () => eh,
    XK: () => e_,
    ZW: () => $,
    _Q: () => F,
    a2: () => ef,
    br: () => ep,
    eL: () => er,
    eU: () => W,
    em: () => Z,
    jv: () => ea,
    rO: () => es,
    sS: () => eo,
    yg: () => B,
    yi: () => Y,
    yl: () => K,
    zq: () => ei,
}),
    n(388685),
    n(49124),
    n(642613),
    n(539854);
var r = n(46973),
    i = n(992774),
    a = n(570140),
    o = n(904245),
    s = n(579806),
    l = n(674466),
    c = n(594190),
    u = n(569545),
    d = n(441167),
    f = n(957730),
    _ = n(460181),
    p = n(695346),
    h = n(361291),
    m = n(199902),
    g = n(314897),
    E = n(592125),
    b = n(131951),
    y = n(19780),
    O = n(959457),
    v = n(33039),
    I = n(626135),
    T = n(358085),
    S = n(924557),
    A = n(435064),
    C = n(894694),
    N = n(61994),
    R = n(550351),
    P = n(659487),
    D = n(711644),
    w = n(259612),
    x = n(356659),
    L = n(981631),
    M = n(959517);
function j(e, t, n) {
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
function k(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function B(e) {
    let { allowVoiceRecording: t } = e;
    await p.tU.updateSetting(t),
        I.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.Z.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function Z(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: k({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 }),
    }),
        r &&
            I.default.track(
                L.rMx.CLIPS_SETTINGS_UPDATED,
                k(
                    {
                        clips_enabled: t,
                        guild_id: n,
                    },
                    !t && { decoupled_clips_enabled: !1 },
                ),
            );
}
function F(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: G(k({}, t && { clipsEnabled: !0 }), { decoupledClipsEnabled: t }),
    }),
        n &&
            I.default.track(
                L.rMx.CLIPS_SETTINGS_UPDATED,
                G(k({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }),
            );
}
function V(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { remindersEnabled: e },
    }),
        I.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function H(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { storageLocation: e },
    });
}
function Y(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsQuality: e },
    });
}
function W(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsLength: e },
    });
}
function K(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { viewerClipsEnabled: t },
    }),
        n && I.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function z(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? O.Z.getRTCConnection(e) : null;
        let t = (0, u.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = g.default.getId(),
            t = m.Z.getActiveStreamForUser(e, null);
        (n = null != t ? O.Z.getRTCConnection((0, u.V9)(t)) : null),
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
function q(e, t) {
    var n, r, i, a, o, s, c, u, d, f, _;
    let p = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, l.lG)(e),
            a = null != (n = p.get(i)) ? n : 0;
        p.set(i, a + r);
    }
    return G(k({}, e), {
        frames_encoded_nvidia_cuda: null != (r = p.get(l.Su.NVIDIA_CUDA)) ? r : 0,
        frames_encoded_nvidia_direct3d: null != (i = p.get(l.Su.NVIDIA_DIRECT_3D)) ? i : 0,
        frames_encoded_openh264: null != (a = p.get(l.Su.OPENH264)) ? a : 0,
        frames_encoded_videotoolbox: null != (o = p.get(l.Su.VIDEOTOOLBOX)) ? o : 0,
        frames_encoded_amd_direct3d: null != (s = p.get(l.Su.AMD_DIRECT_3D)) ? s : 0,
        frames_encoded_amd_vaapi: null != (c = p.get(l.Su.AMD_VAAPI)) ? c : 0,
        frames_encoded_intel: null != (u = p.get(l.Su.INTEL)) ? u : 0,
        frames_encoded_intel_direct3d: null != (d = p.get(l.Su.INTEL_DIRECT_3D)) ? d : 0,
        frames_encoded_uncategorized: null != (f = p.get(l.Su.UNCATEGORIZED)) ? f : 0,
        frames_encoded_unknown: null != (_ = p.get(l.Su.UNKNOWN)) ? _ : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: A.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: h.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    });
}
function X(e) {
    var t, n, r;
    let i = y.Z.getChannelId();
    if (null == i) return void x.jF.info("[ClipsActionCreators] No voice channel, skipping remote trigger message");
    let a = E.Z.getChannel(i);
    if (null == a) return;
    let s = {
            applicationId: e.applicationId,
            activityPartyId: null != (r = null == (n = e.activity) || null == (t = n.party) ? void 0 : t.id) ? r : null,
            triggerClipId: e.id,
        },
        l = "__REMOTE_CLIP_TRIGGER__",
        c = "".concat(l).concat(JSON.stringify(s)),
        u = f.ZP.parse(a, c);
    o.Z.sendMessage(i, u, !1, {
        flags: L.iLy.SUPPRESS_NOTIFICATIONS,
        location: M.dy.OTHER,
    });
}
async function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = A.Z.getSettings().storageLocation,
        o = (0, R.Z)(e, t, C.NJ.CLIP, n, r),
        l = "".concat((0, N.Z)(o.applicationName.substring(0, 20)), "_").concat(o.id, ".mp4"),
        c = s.Z.fileManager.join(i, l),
        d = b.Z.getMediaEngine(),
        f = JSON.stringify(o),
        _ = null != e ? (0, u.my)(e).ownerId : void 0,
        p = z(e);
    null != e &&
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: G(k({}, o), {
                pending: !0,
                filepath: c,
            }),
        });
    try {
        let { duration: e, clipStats: t } = await (null != _ ? d.saveClipForUser(_, c, f) : d.saveClip(c, f)),
            n = q(p, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null)),
            I.default.track(L.rMx.CLIP_SAVED, n);
        let r = "";
        try {
            r = await (0, w.R)(s.Z.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            x.jF.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (o.thumbnail = r),
            (o.length = e),
            x.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")),
            await d.updateClipMetadata(c, JSON.stringify(o)),
            G(k({}, o), { filepath: c })
        );
    } catch (r) {
        if (
            (null != e &&
                a.Z.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: o.id,
                }),
            !("errorMessage" in r))
        )
            throw (I.default.track(L.rMx.CLIP_SAVE_FAILURE, p), r);
        let t = r,
            n = q(p, t);
        throw (
            ((n.error_at = t.errorAt),
            (n.error_message = t.errorMessage),
            I.default.track(L.rMx.CLIP_SAVE_FAILURE, n),
            t.errorMessage)
        );
    }
}
async function J(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        o = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = A.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: f } = d.Z.getCurrentConfig({ location: "SaveClip" }, { autoTrackExposure: !1 });
    if (A.Z.getIsAtMaxSaveClipOperations()) return;
    let p = A.Z.getSettings().clipsEnabled && null != m.Z.getCurrentUserActiveStream(),
        h =
            l &&
            A.Z.getSettings().decoupledClipsEnabled &&
            (null == (t = c.ZP.getVisibleGame()) ? void 0 : t.windowHandle) != null &&
            b.Z.hasClipsSource(),
        E = null != e && null != m.Z.getActiveStreamForStreamKey(e) && f,
        O =
            (0, S.n7)() &&
            A.Z.getSettings().clipsEnabled &&
            null == m.Z.getCurrentUserActiveStream() &&
            null != y.Z.getChannelId();
    if (!p && !h && !E && !O) return;
    let I = m.Z.getCurrentUserActiveStream(),
        T = null != I ? (0, u.V9)(I) : void 0,
        C = null != e ? e : T,
        N = (() => {
            let e = null != C ? (0, u.my)(C).ownerId : void 0;
            return e === g.default.getId() ? x.X9.STREAMER : null != e ? x.X9.VIEWER : h ? x.X9.DECOUPLED : x.X9.VOICE;
        })(),
        R = await (async () => {
            if (null == C) return;
            let { ownerId: e, guildId: t } = (0, u.my)(C),
                n = v.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, w.W)(t);
                } catch (e) {
                    return;
                }
        })();
    a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: N,
        streamKey: C,
        thumbnail: R,
        clipMethod: n,
    });
    let P = "manual" === n ? (0, _.GN)("clip_save", 0.5) : null,
        D = performance.now();
    try {
        if ("auto" === n) {
            let e = A.Z.getSettings().maxAutoClips,
                t = A.Z.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let r = t
                    .sort((e, t) => {
                        let n = parseInt(e.id, 10),
                            r = parseInt(t.id, 10);
                        return n - r;
                    })
                    .slice(0, n);
                for (let t of (x.jF.info(
                    "Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e),
                ),
                r))
                    try {
                        await eo(t.filepath);
                    } catch (e) {
                        x.jF.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await Q(C, n, o, s);
        a.Z.dispatch({
            type: "CLIPS_SAVE_CLIP",
            clip: e,
        }),
            "manual" === n && (0, S.NS)() && X(e);
    } catch (e) {
        x.jF.error("Clip Failed to Save", e),
            null == P || P.stop(),
            (0, _.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    x.jF.info(
        ""
            .concat(A.Z.getSettings().clipsLength / 1000, "s clip save took ")
            .concat(Math.round(performance.now() - D), "ms"),
    );
}
async function $(e, t) {
    let n, r;
    if (A.Z.getIsAtMaxSaveClipOperations()) return;
    let i = m.Z.getCurrentUserActiveStream(),
        o = null != i ? (0, u.V9)(i) : void 0,
        l = null != e ? e : o,
        d = b.Z.getMediaEngine(),
        f = (0, R.Z)(l, t, C.NJ.SCREENSHOT),
        p = A.Z.getSettings().storageLocation,
        h = "jpeg",
        E = ""
            .concat((0, N.Z)(f.applicationName.substring(0, 20)), "_")
            .concat(f.id, ".")
            .concat(h),
        y = s.Z.fileManager.join(p, E),
        O = (null != l ? (0, u.my)(l).ownerId : void 0) === g.default.getId() ? x.X9.STREAMER : x.X9.VIEWER;
    if (
        (null != f.applicationId &&
            null != (r = c.ZP.getRunningGames().find((e) => e.id === f.applicationId)) &&
            x.jF.log("Matched application ID to running game:", f.applicationId, r.name),
        null == r &&
            null != f.applicationName &&
            null != (r = c.ZP.getRunningGames().find((e) => e.name === f.applicationName)) &&
            x.jF.log("Matched application name to running game:", f.applicationName),
        null == r && null != (r = c.ZP.getVisibleGame()) && x.jF.log("Using visible game for screenshot:", r.name),
        (null == r ? void 0 : r.windowHandle) != null)
    )
        (n = parseInt(r.windowHandle, 10)), x.jF.log("Using window handle for full resolution screenshot:", n);
    else {
        x.jF.error("Failed to save screenshot: No window handle available"), (0, _.GN)("clip_error", 0.5);
        return;
    }
    a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: O,
        streamKey: l,
        thumbnail: void 0,
        clipMethod: null != t ? t : "manual",
    });
    let v = (0, _.GN)("clip_save", 0.5),
        I = performance.now();
    try {
        let e = G(k({}, f), {
                filepath: y,
                length: 0,
                thumbnail: "",
            }),
            t = JSON.stringify(e),
            r = (await d.saveScreenshot(y, t, 90, void 0, n)).toString("base64");
        (e.thumbnail = "data:image/jpeg;base64,".concat(r)),
            a.Z.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e,
            }),
            x.jF.info("Screenshot save took ".concat(Math.round(performance.now() - I), "ms")),
            x.jF.log("Successfully saved screenshot to:", y);
    } catch (e) {
        throw (
            (x.jF.error("Failed to save screenshot:", e),
            null == v || v.stop(),
            (0, _.GN)("clip_error", 0.5),
            a.Z.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function ee(e, t) {
    a.Z.dispatch({
        type: "CLIPS_SAVE_ANIMATION_END",
        streamKey: e,
        timestamp: t,
    });
}
async function et(e, t) {
    let n = A.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = k({}, n, t);
    null != (await (0, P.w)(r)) &&
        (await b.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        I.default.track(L.rMx.CLIP_EDITED, { clip_id: r.id }),
        a.Z.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: r,
        }));
}
async function en(e) {
    await et(e.id, { isFavorite: !e.isFavorite });
}
function er() {
    a.Z.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function ei() {
    a.Z.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
async function ea(e) {
    var t;
    if (!(0, T.isDesktop)() || (null == (t = s.Z.clips) ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await s.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, P.w)(G(k({}, e.metadata), { filepath: e.filepath }));
        null != t && r.push(t);
    }
    a.Z.dispatch({
        type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
        clips: r,
    });
}
async function eo(e) {
    var t;
    (0, T.isDesktop)() &&
        (null == (t = s.Z.clips) ? void 0 : t.deleteClip) != null &&
        (await s.Z.clips.deleteClip(e),
        a.Z.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e,
        }));
}
async function es(e) {
    var t;
    let n = b.Z.getMediaEngine(),
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
    return e.type === C.NJ.SCREENSHOT ? r : (0, D.Z)(r);
}
function el(e) {
    a.Z.dispatch({
        type: "CLIPS_SET_EXPORTING",
        clipIds: e,
    });
}
function ec(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { maxAutoClips: e },
    });
}
function eu(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: k({}, A.Z.getSettings().clipSignals, e) },
    });
}
function ed(e) {
    let t = b.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription)),
        a.Z.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: k({}, A.Z.getSettings().mlPipelinesEnabled, e) },
        });
}
function ef(e) {
    a.Z.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { autoClipPhrases: e },
    });
}
function e_(e, t) {
    a.Z.dispatch({
        type: "CLIPS_SIGNAL_CREATED",
        signal: e,
        timestamp: t,
    });
}
function ep() {
    e_({ type: C.Bs.MANUAL });
}
async function eh(e) {
    await et(e, { isTemporary: !1 });
}
