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
    em: () => L,
    jv: () => q,
    rO: () => X,
    sS: () => Q,
    yg: () => x,
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
    p = n(361291),
    _ = n(199902),
    h = n(314897),
    m = n(131951),
    g = n(959457),
    E = n(33039),
    v = n(626135),
    b = n(358085),
    y = n(435064),
    O = n(61994),
    S = n(550351),
    I = n(659487),
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
async function x(e) {
    let { allowVoiceRecording: t } = e;
    await f.tU.updateSetting(t), v.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }), o.Z.dispatch({ type: 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE' });
}
async function L(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: P({ clipsEnabled: t }, !t && { decoupledClipsEnabled: !1 })
    }),
        r &&
            v.default.track(
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
        n && v.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, D(P({}, t && { clips_enabled: !0 }), { decoupled_clips_enabled: t }));
}
function k(e) {
    o.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        v.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
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
        n && v.default.track(C.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function Z(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? g.Z.getRTCConnection(e) : null;
        let t = (0, c.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = h.default.getId(),
            t = _.Z.getActiveStreamForUser(e, null);
        (n = null != t ? g.Z.getRTCConnection((0, c.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
    }
    let o = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
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
function F(e, t) {
    var n, r, i, o, a, l, c, u, d, f;
    let _ = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, s.lG)(e),
            o = null !== (n = _.get(i)) && void 0 !== n ? n : 0;
        _.set(i, o + r);
    }
    return D(P({}, e), {
        frames_encoded_nvidia_cuda: null !== (r = _.get(s.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
        frames_encoded_nvidia_direct3d: null !== (i = _.get(s.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
        frames_encoded_openh264: null !== (o = _.get(s.Su.OPENH264)) && void 0 !== o ? o : 0,
        frames_encoded_videotoolbox: null !== (a = _.get(s.Su.VIDEOTOOLBOX)) && void 0 !== a ? a : 0,
        frames_encoded_amd_direct3d: null !== (l = _.get(s.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
        frames_encoded_intel: null !== (c = _.get(s.Su.INTEL)) && void 0 !== c ? c : 0,
        frames_encoded_intel_direct3d: null !== (u = _.get(s.Su.INTEL_DIRECT_3D)) && void 0 !== u ? u : 0,
        frames_encoded_uncategorized: null !== (d = _.get(s.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (f = _.get(s.Su.UNKNOWN)) && void 0 !== f ? f : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: y.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: p.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    });
}
async function V(e) {
    let t = y.Z.getSettings().storageLocation,
        n = (0, S.Z)(e),
        r = ''.concat((0, O.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = a.Z.fileManager.join(t, r),
        s = m.Z.getMediaEngine(),
        l = JSON.stringify(n),
        u = null != e ? (0, c.my)(e).ownerId : void 0,
        d = Z(e);
    null != e &&
        o.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: D(P({}, n), { filepath: i })
        });
    try {
        var f;
        let { duration: e, clipStats: t } = await (null != u ? s.saveClipForUser(u, i, l) : s.saveClip(i, l)),
            r = F(d, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), v.default.track(C.rMx.CLIP_SAVED, r);
        let o = await (0, N.R)(a.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (n.thumbnail = o), (n.length = e), A.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (f = null == o ? void 0 : o.length) && void 0 !== f ? f : 0, ' bytes thumbnail.')), await s.updateClipMetadata(i, JSON.stringify(n)), D(P({}, n), { filepath: i });
    } catch (i) {
        if (
            (null != e &&
                o.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in i))
        )
            throw (v.default.track(C.rMx.CLIP_SAVE_FAILURE, d), i);
        let t = i,
            r = F(d, t);
        throw ((r.error_at = t.errorAt), (r.error_message = t.errorMessage), v.default.track(C.rMx.CLIP_SAVE_FAILURE, r), t.errorMessage);
    }
}
async function H(e) {
    var t;
    let n = y.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: a } = u.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (y.Z.getIsAtMaxSaveClipOperations()) return;
    let s = y.Z.getSettings().clipsEnabled && null != _.Z.getCurrentUserActiveStream(),
        f = n && y.Z.getSettings().decoupledClipsEnabled && (null === (t = l.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.Z.hasClipsSource(),
        p = null != e && null != _.Z.getActiveStreamForStreamKey(e) && a;
    if (!s && !f && !p) return;
    let g = _.Z.getCurrentUserActiveStream(),
        v = null != g ? (0, c.V9)(g) : void 0,
        b = null != e ? e : v,
        O = (() => {
            let e = null != b ? (0, c.my)(b).ownerId : void 0;
            return e === h.default.getId() ? A.X9.STREAMER : null != e ? A.X9.VIEWER : A.X9.DECOUPLED;
        })(),
        S = await (async () => {
            if (null == b) return;
            let { ownerId: e, guildId: t } = (0, c.my)(b),
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
        streamKey: b,
        thumbnail: S
    });
    let I = (0, d.GN)('clip_save', 0.5),
        T = performance.now();
    try {
        let e = await V(b);
        o.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        A.jF.error('Clip Failed to Save', e), null == I || I.stop(), (0, d.GN)('clip_error', 0.5), o.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    A.jF.info(''.concat(y.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - T), 'ms'));
}
function W(e, t) {
    o.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function Y(e, t) {
    let n = y.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = P({}, n, t);
    null != (await (0, I.w)(r)) &&
        (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        v.default.track(C.rMx.CLIP_EDITED, { clip_id: r.id }),
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
    if (!(0, b.isDesktop)() || (null === (t = a.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await a.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, I.w)(D(P({}, e.metadata), { filepath: e.filepath }));
        null != t && r.push(t);
    }
    o.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function Q(e) {
    var t;
    (0, b.isDesktop)() &&
        (null === (t = a.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null &&
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
