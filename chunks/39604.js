n.d(t, {
    C1: () => Z,
    Gh: () => F,
    N0: () => L,
    T1: () => P,
    Tm: () => V,
    UW: () => z,
    _Q: () => x,
    eL: () => j,
    eU: () => M,
    em: () => D,
    jv: () => Y,
    rO: () => K,
    sS: () => W,
    yg: () => O,
    yi: () => w,
    yl: () => k,
    zq: () => H
}),
    n(47120),
    n(653041);
var i = n(46973),
    r = n(992774),
    a = n(570140),
    s = n(579806),
    o = n(255914),
    l = n(594190),
    u = n(569545),
    c = n(441167),
    d = n(460181),
    f = n(695346),
    _ = n(361291),
    p = n(199902),
    h = n(314897),
    m = n(131951),
    g = n(959457),
    E = n(33039),
    v = n(626135),
    y = n(358085),
    I = n(435064),
    T = n(61994),
    b = n(550351),
    S = n(659487),
    A = n(711644),
    N = n(259612),
    C = n(356659),
    R = n(981631);
async function O(e) {
    let { allowVoiceRecording: t } = e;
    await f.tU.updateSetting(t), v.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }), a.Z.dispatch({ type: 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE' });
}
async function D(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 })
        }
    }),
        i &&
            v.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 })
            });
}
function x(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t
        }
    }),
        n &&
            v.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t
            });
}
function L(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        v.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function P(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function w(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function M(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function k(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && v.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function U(e) {
    var t;
    let n, i, r;
    if (null != e) {
        n = null != e ? g.Z.getRTCConnection(e) : null;
        let t = (0, u.my)(e);
        (i = t.guildId), (r = t.channelId);
    } else {
        let e = h.default.getId(),
            t = p.Z.getActiveStreamForUser(e, null);
        (n = null != t ? g.Z.getRTCConnection((0, u.V9)(t)) : null), (i = null == t ? void 0 : t.guildId), (r = null == t ? void 0 : t.channelId);
    }
    let a = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
    return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: i,
        channel_id: r,
        application_id: null == a ? void 0 : a.id,
        application_name: null == a ? void 0 : a.name
    };
}
function G(e, t) {
    var n, i, r, a, s, l, u, c, d, f;
    let p = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            r = (0, o.lG)(e),
            a = null !== (n = p.get(r)) && void 0 !== n ? n : 0;
        p.set(r, a + i);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (i = p.get(o.Su.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
        frames_encoded_nvidia_direct3d: null !== (r = p.get(o.Su.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
        frames_encoded_openh264: null !== (a = p.get(o.Su.OPENH264)) && void 0 !== a ? a : 0,
        frames_encoded_videotoolbox: null !== (s = p.get(o.Su.VIDEOTOOLBOX)) && void 0 !== s ? s : 0,
        frames_encoded_amd_direct3d: null !== (l = p.get(o.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
        frames_encoded_intel: null !== (u = p.get(o.Su.INTEL)) && void 0 !== u ? u : 0,
        frames_encoded_intel_direct3d: null !== (c = p.get(o.Su.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
        frames_encoded_uncategorized: null !== (d = p.get(o.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (f = p.get(o.Su.UNKNOWN)) && void 0 !== f ? f : 0,
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
        saved_at: t.savedAt
    };
}
async function B(e) {
    let t = I.Z.getSettings().storageLocation,
        n = (0, b.Z)(e),
        i = ''.concat((0, T.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        r = s.Z.fileManager.join(t, i),
        o = m.Z.getMediaEngine(),
        l = JSON.stringify(n),
        c = null != e ? (0, u.my)(e).ownerId : void 0,
        d = U(e);
    null != e &&
        a.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...n,
                filepath: r
            }
        });
    try {
        var f;
        let { duration: e, clipStats: t } = await (null != c ? o.saveClipForUser(c, r, l) : o.saveClip(r, l)),
            i = G(d, t);
        (i.clip_save_time_ms = t.clipSaveTimeMs), (i.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((i.decode_fps_during_clip = t.viewerDecodeFps), (i.encode_fps_during_clip = t.viewerEncodeFps), (i.target_fps = null)), v.default.track(R.rMx.CLIP_SAVED, i);
        let a = await (0, N.R)(s.Z.clips.getClipProtocolURLFromPath(r), 0);
        return (
            (n.thumbnail = a),
            (n.length = e),
            C.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (f = null == a ? void 0 : a.length) && void 0 !== f ? f : 0, ' bytes thumbnail.')),
            await o.updateClipMetadata(r, JSON.stringify(n)),
            {
                ...n,
                filepath: r
            }
        );
    } catch (r) {
        if (
            (null != e &&
                a.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in r))
        )
            throw (v.default.track(R.rMx.CLIP_SAVE_FAILURE, d), r);
        let t = r,
            i = G(d, t);
        throw ((i.error_at = t.errorAt), (i.error_message = t.errorMessage), v.default.track(R.rMx.CLIP_SAVE_FAILURE, i), t.errorMessage);
    }
}
async function Z(e) {
    var t;
    let n = I.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: s } = c.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (I.Z.getIsAtMaxSaveClipOperations()) return;
    let o = I.Z.getSettings().clipsEnabled && null != p.Z.getCurrentUserActiveStream(),
        f = n && I.Z.getSettings().decoupledClipsEnabled && (null === (t = l.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.Z.hasClipsSource(),
        _ = null != e && null != p.Z.getActiveStreamForStreamKey(e) && s;
    if (!o && !f && !_) return;
    let g = p.Z.getCurrentUserActiveStream(),
        v = null != g ? (0, u.V9)(g) : void 0,
        y = null != e ? e : v,
        T = (() => {
            let e = null != y ? (0, u.my)(y).ownerId : void 0;
            return e === h.default.getId() ? C.X9.STREAMER : null != e ? C.X9.VIEWER : C.X9.DECOUPLED;
        })(),
        b = await (async () => {
            if (null == y) return;
            let { ownerId: e, guildId: t } = (0, u.my)(y),
                n = E.Z.getStreamId(e, t, i.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, r.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, N.W)(t);
                } catch (e) {
                    return;
                }
        })();
    a.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: T,
        streamKey: y,
        thumbnail: b
    });
    let S = (0, d.GN)('clip_save', 0.5),
        A = performance.now();
    try {
        let e = await B(y);
        a.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        C.jF.error('Clip Failed to Save', e), null == S || S.stop(), (0, d.GN)('clip_error', 0.5), a.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    C.jF.info(''.concat(I.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - A), 'ms'));
}
function F(e, t) {
    a.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function V(e, t) {
    let n = I.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let i = {
        ...n,
        ...t
    };
    null != (await (0, S.w)(i)) &&
        (await m.Z.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        v.default.track(R.rMx.CLIP_EDITED, { clip_id: i.id }),
        a.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: i
        }));
}
function j() {
    a.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function H() {
    a.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function Y(e) {
    var t;
    if (!(0, y.isDesktop)() || (null === (t = s.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await s.Z.clips.loadClipsDirectory(e),
        i = [];
    for (let e of n) {
        let t = await (0, S.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != t && i.push(t);
    }
    a.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: i
    });
}
async function W(e) {
    var t;
    (0, y.isDesktop)() &&
        (null === (t = s.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null &&
        (await s.Z.clips.deleteClip(e),
        a.Z.dispatch({
            type: 'CLIPS_DELETE_CLIP',
            filepath: e
        }));
}
async function K(e, t) {
    let n = m.Z.getMediaEngine(),
        i = await n.exportClip(e.filepath, t);
    return (0, A.Z)(i);
}
function z(e) {
    a.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
