n.d(t, {
    C1: () => H,
    Gh: () => W,
    N0: () => k,
    T1: () => j,
    Tm: () => Y,
    UW: () => J,
    _Q: () => M,
    eL: () => K,
    eU: () => G,
    em: () => x,
    jv: () => q,
    rO: () => X,
    sS: () => Q,
    yg: () => L,
    yi: () => U,
    yl: () => B,
    zq: () => z
}),
    n(47120),
    n(26686),
    n(653041);
var r = n(46973),
    i = n(992774),
    o = n(570140),
    a = n(579806),
    s = n(255914),
    l = n(594190),
    c = n(569545),
    u = n(441167),
    d = n(460181),
    f = n(695346),
    _ = n(361291),
    p = n(199902),
    h = n(314897),
    m = n(131951),
    g = n(959457),
    E = n(33039),
    b = n(626135),
    y = n(358085),
    v = n(435064),
    O = n(61994),
    I = n(550351),
    S = n(659487),
    T = n(711644),
    N = n(259612),
    A = n(356659),
    C = n(981631);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function L(e) {
    let { allowVoiceRecording: t } = e;
    await f.tU.updateSetting(t), b.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }), o.Z.dispatch({ type: 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE' });
}
async function x(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: P({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 })
    }),
        r &&
            b.default.track(
                C.rMx.CLIPS_SETTINGS_UPDATED,
                P(
                    {
                        clips_enabled: t,
                        guild_id: n
                    },
                    !t && { decoupled_clips_enabled: !1 }
                )
            );
}
function M(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: D(P({}, t && { clipsEnabled: !0 }), { decoupledClipsEnabled: t })
    }),
        n && b.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, D(P({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }));
}
function k(e) {
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        b.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function j(e) {
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function U(e) {
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function G(e) {
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function B(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && b.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function F(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? g.Z.getRTCConnection(e) : null;
        let t = (0, c.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = h.default.getId(),
            t = p.Z.getActiveStreamForUser(e, null);
        (n = null != t ? g.Z.getRTCConnection((0, c.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
    }
    let o = null == n || null == (t = n.analyticsContext) ? void 0 : t.streamApplication;
    return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: r,
        channel_id: i,
        application_id: null == o ? void 0 : o.id,
        application_name: null == o ? void 0 : o.name
    };
}
function V(e, t) {
    var n, r, i, o, a, l, c, u, d, f;
    let p = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, s.lG)(e),
            o = null != (n = p.get(i)) ? n : 0;
        p.set(i, o + r);
    }
    return D(P({}, e), {
        frames_encoded_nvidia_cuda: null != (r = p.get(s.Su.NVIDIA_CUDA)) ? r : 0,
        frames_encoded_nvidia_direct3d: null != (i = p.get(s.Su.NVIDIA_DIRECT_3D)) ? i : 0,
        frames_encoded_openh264: null != (o = p.get(s.Su.OPENH264)) ? o : 0,
        frames_encoded_videotoolbox: null != (a = p.get(s.Su.VIDEOTOOLBOX)) ? a : 0,
        frames_encoded_amd_direct3d: null != (l = p.get(s.Su.AMD_DIRECT_3D)) ? l : 0,
        frames_encoded_intel: null != (c = p.get(s.Su.INTEL)) ? c : 0,
        frames_encoded_intel_direct3d: null != (u = p.get(s.Su.INTEL_DIRECT_3D)) ? u : 0,
        frames_encoded_uncategorized: null != (d = p.get(s.Su.UNCATEGORIZED)) ? d : 0,
        frames_encoded_unknown: null != (f = p.get(s.Su.UNKNOWN)) ? f : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: v.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: _.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    });
}
async function Z(e) {
    let t = v.Z.getSettings().storageLocation,
        n = (0, I.Z)(e),
        r = ''.concat((0, O.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = a.Z.fileManager.join(t, r),
        s = m.Z.getMediaEngine(),
        l = JSON.stringify(n),
        u = null != e ? (0, c.my)(e).ownerId : void 0,
        d = F(e);
    null != e &&
        o.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: D(P({}, n), { filepath: i })
        });
    try {
        var f;
        let { duration: e, clipStats: t } = await (null != u ? s.saveClipForUser(u, i, l) : s.saveClip(i, l)),
            r = V(d, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), b.default.track(C.rMx.CLIP_SAVED, r);
        let o = await (0, N.R)(a.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (n.thumbnail = o), (n.length = e), A.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null != (f = null == o ? void 0 : o.length) ? f : 0, ' bytes thumbnail.')), await s.updateClipMetadata(i, JSON.stringify(n)), D(P({}, n), { filepath: i });
    } catch (i) {
        if (
            (null != e &&
                o.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in i))
        )
            throw (b.default.track(C.rMx.CLIP_SAVE_FAILURE, d), i);
        let t = i,
            r = V(d, t);
        throw ((r.error_at = t.errorAt), (r.error_message = t.errorMessage), b.default.track(C.rMx.CLIP_SAVE_FAILURE, r), t.errorMessage);
    }
}
async function H(e) {
    var t;
    let n = v.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: a } = u.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (v.Z.getIsAtMaxSaveClipOperations()) return;
    let s = v.Z.getSettings().clipsEnabled && null != p.Z.getCurrentUserActiveStream(),
        f = n && v.Z.getSettings().decoupledClipsEnabled && (null == (t = l.ZP.getVisibleGame()) ? void 0 : t.windowHandle) != null && m.Z.hasClipsSource(),
        _ = null != e && null != p.Z.getActiveStreamForStreamKey(e) && a;
    if (!s && !f && !_) return;
    let g = p.Z.getCurrentUserActiveStream(),
        b = null != g ? (0, c.V9)(g) : void 0,
        y = null != e ? e : b,
        O = (() => {
            let e = null != y ? (0, c.my)(y).ownerId : void 0;
            return e === h.default.getId() ? A.X9.STREAMER : null != e ? A.X9.VIEWER : A.X9.DECOUPLED;
        })(),
        I = await (async () => {
            if (null == y) return;
            let { ownerId: e, guildId: t } = (0, c.my)(y),
                n = E.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, N.W)(t);
                } catch (e) {
                    return;
                }
        })();
    o.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: O,
        streamKey: y,
        thumbnail: I
    });
    let S = (0, d.GN)('clip_save', 0.5),
        T = performance.now();
    try {
        let e = await Z(y);
        o.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        A.jF.error('Clip Failed to Save', e), null == S || S.stop(), (0, d.GN)('clip_error', 0.5), o.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    A.jF.info(''.concat(v.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - T), 'ms'));
}
function W(e, t) {
    o.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function Y(e, t) {
    let n = v.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = P({}, n, t);
    null != (await (0, S.w)(r)) &&
        (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        b.default.track(C.rMx.CLIP_EDITED, { clip_id: r.id }),
        o.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: r
        }));
}
function K() {
    o.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function z() {
    o.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function q(e) {
    var t;
    if (!(0, y.isDesktop)() || (null == (t = a.Z.clips) ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await a.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, S.w)(D(P({}, e.metadata), { filepath: e.filepath }));
        null != t && r.push(t);
    }
    o.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function Q(e) {
    var t;
    (0, y.isDesktop)() &&
        (null == (t = a.Z.clips) ? void 0 : t.deleteClip) != null &&
        (await a.Z.clips.deleteClip(e),
        o.Z.dispatch({
            type: 'CLIPS_DELETE_CLIP',
            filepath: e
        }));
}
async function X(e, t) {
    let n = m.Z.getMediaEngine(),
        r = await n.exportClip(e.filepath, t);
    return (0, T.Z)(r);
}
function J(e) {
    o.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
