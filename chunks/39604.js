r.d(n, {
    C1: function () {
        return j;
    },
    Gh: function () {
        return H;
    },
    N0: function () {
        return M;
    },
    T1: function () {
        return k;
    },
    Tm: function () {
        return Y;
    },
    UW: function () {
        return X;
    },
    _Q: function () {
        return P;
    },
    eL: function () {
        return W;
    },
    eU: function () {
        return B;
    },
    em: function () {
        return w;
    },
    jv: function () {
        return z;
    },
    rO: function () {
        return Q;
    },
    sS: function () {
        return q;
    },
    yg: function () {
        return x;
    },
    yi: function () {
        return U;
    },
    yl: function () {
        return G;
    },
    zq: function () {
        return K;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(46973),
    o = r(992774),
    l = r(570140),
    u = r(579806),
    c = r(255914),
    d = r(594190),
    f = r(569545),
    _ = r(441167),
    h = r(695346),
    p = r(361291),
    m = r(199902),
    g = r(314897),
    E = r(131951),
    v = r(959457),
    I = r(33039),
    T = r(626135),
    b = r(358085),
    y = r(557177),
    S = r(435064),
    A = r(61994),
    N = r(550351),
    C = r(659487),
    R = r(711644),
    O = r(259612),
    D = r(356659),
    L = r(981631);
async function x(e) {
    let { allowVoiceRecording: n } = e;
    await h.tU.updateSetting(n), T.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: n }), l.Z.dispatch({ type: 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE' });
}
async function w(e) {
    let { clipsEnabled: n, guildId: r, trackAnalytics: i = !1 } = e;
    await l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: n,
            ...(!n && { decoupledClipsEnabled: !1 })
        }
    }),
        i &&
            T.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: n,
                guild_id: r,
                ...(!n && { decoupled_clips_enabled: !1 })
            });
}
function P(e) {
    let { enabled: n, trackAnalytics: r = !1 } = e;
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(n && { clipsEnabled: !0 }),
            decoupledClipsEnabled: n
        }
    }),
        r &&
            T.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(n && { clips_enabled: !0 }),
                decoupled_clips_enabled: n
            });
}
function M(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        T.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function k(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function U(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function B(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function G(e) {
    let { enabled: n, trackAnalytics: r = !1 } = e;
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: n }
    }),
        r && T.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: n });
}
function Z(e) {
    var n;
    let r, i, a;
    if (null != e) {
        r = null != e ? v.Z.getRTCConnection(e) : null;
        let n = (0, f.my)(e);
        (i = n.guildId), (a = n.channelId);
    } else {
        let e = g.default.getId(),
            n = m.Z.getActiveStreamForUser(e, null);
        (r = null != n ? v.Z.getRTCConnection((0, f.V9)(n)) : null), (i = null == n ? void 0 : n.guildId), (a = null == n ? void 0 : n.channelId);
    }
    let s = null == r ? void 0 : null === (n = r.analyticsContext) || void 0 === n ? void 0 : n.streamApplication;
    return {
        rtc_connection_id: null == r ? void 0 : r.getRTCConnectionId(),
        media_session_id: null == r ? void 0 : r.getMediaSessionId(),
        parent_media_session_id: null == r ? void 0 : r.parentMediaSessionId,
        guild_id: i,
        channel_id: a,
        application_id: null == s ? void 0 : s.id,
        application_name: null == s ? void 0 : s.name
    };
}
function F(e, n) {
    var r, i, a, s, o, l, u, d, f, _;
    let h = new Map();
    for (let e in n.framesEncodedByEncoder) {
        let i = n.framesEncodedByEncoder[e],
            a = (0, c.lG)(e),
            s = null !== (r = h.get(a)) && void 0 !== r ? r : 0;
        h.set(a, s + i);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (i = h.get(c.Su.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
        frames_encoded_nvidia_direct3d: null !== (a = h.get(c.Su.NVIDIA_DIRECT_3D)) && void 0 !== a ? a : 0,
        frames_encoded_openh264: null !== (s = h.get(c.Su.OPENH264)) && void 0 !== s ? s : 0,
        frames_encoded_videotoolbox: null !== (o = h.get(c.Su.VIDEOTOOLBOX)) && void 0 !== o ? o : 0,
        frames_encoded_amd_direct3d: null !== (l = h.get(c.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
        frames_encoded_intel: null !== (u = h.get(c.Su.INTEL)) && void 0 !== u ? u : 0,
        frames_encoded_intel_direct3d: null !== (d = h.get(c.Su.INTEL_DIRECT_3D)) && void 0 !== d ? d : 0,
        frames_encoded_uncategorized: null !== (f = h.get(c.Su.UNCATEGORIZED)) && void 0 !== f ? f : 0,
        frames_encoded_unknown: null !== (_ = h.get(c.Su.UNKNOWN)) && void 0 !== _ ? _ : 0,
        frames_submitted: n.framesSubmitted,
        frames_submitted_during_clip: n.framesSubmittedDuringClip,
        frames_encoded: n.framesEncoded,
        frames_encoded_during_clip: n.framesEncodedDuringClip,
        frames_dropped: n.framesDropped,
        frames_dropped_during_clip: n.framesDroppedDuringClip,
        clip_duration_setting: S.Z.getSettings().clipsLength,
        clip_duration: n.clipDuration,
        clip_resolution_width: n.clipResolutionWidth,
        clip_resolution_height: n.clipResolutionHeight,
        min_fps: n.minFps,
        max_fps: n.maxFps,
        submitted_fps: n.submittedFps,
        target_fps: p.Z.getState().fps,
        audio_track_count: n.audioTrackCount,
        saved_at: n.savedAt
    };
}
async function V(e) {
    let n = S.Z.getSettings().storageLocation,
        r = (0, N.Z)(e),
        i = ''.concat((0, A.Z)(r.applicationName.substring(0, 20)), '_').concat(r.id, '.mp4'),
        a = u.Z.fileManager.join(n, i),
        s = E.Z.getMediaEngine(),
        o = JSON.stringify(r),
        c = null != e ? (0, f.my)(e).ownerId : void 0,
        d = Z(e);
    null != e &&
        l.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...r,
                filepath: a
            }
        });
    try {
        var _;
        let { duration: e, clipStats: n } = await (null != c ? s.saveClipForUser(c, a, o) : s.saveClip(a, o)),
            i = F(d, n);
        (i.clip_save_time_ms = n.clipSaveTimeMs), (i.clip_size_bytes = n.clipSizeBytes), null != n.viewerDecodeFps && ((i.decode_fps_during_clip = n.viewerDecodeFps), (i.encode_fps_during_clip = n.viewerEncodeFps), (i.target_fps = null)), T.default.track(L.rMx.CLIP_SAVED, i);
        let l = await (0, O.R)(u.Z.clips.getClipProtocolURLFromPath(a), 0);
        return (
            (r.thumbnail = l),
            (r.length = e),
            D.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (_ = null == l ? void 0 : l.length) && void 0 !== _ ? _ : 0, ' bytes thumbnail.')),
            await s.updateClipMetadata(a, JSON.stringify(r)),
            {
                ...r,
                filepath: a
            }
        );
    } catch (a) {
        if (
            (null != e &&
                l.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: r.id
                }),
            !('errorMessage' in a))
        )
            throw (T.default.track(L.rMx.CLIP_SAVE_FAILURE, d), a);
        let n = a,
            i = F(d, n);
        throw ((i.error_at = n.errorAt), (i.error_message = n.errorMessage), T.default.track(L.rMx.CLIP_SAVE_FAILURE, i), n.errorMessage);
    }
}
async function j(e) {
    var n;
    let r = S.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: i } = _.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (S.Z.getIsAtMaxSaveClipOperations()) return;
    let a = S.Z.getSettings().clipsEnabled && null != m.Z.getCurrentUserActiveStream(),
        u = r && S.Z.getSettings().decoupledClipsEnabled && (null === (n = d.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && E.Z.hasClipsSource(),
        c = null != e && null != m.Z.getActiveStreamForStreamKey(e) && i;
    if (!a && !u && !c) return;
    let h = m.Z.getCurrentUserActiveStream(),
        p = null != h ? (0, f.V9)(h) : void 0,
        v = null != e ? e : p,
        T = (() => {
            let e = null != v ? (0, f.my)(v).ownerId : void 0;
            return e === g.default.getId() ? D.X9.STREAMER : null != e ? D.X9.VIEWER : D.X9.DECOUPLED;
        })(),
        b = await (async () => {
            if (null == v) return;
            let { ownerId: e, guildId: n } = (0, f.my)(v),
                r = I.Z.getStreamId(e, n, s.Yn.STREAM);
            if (null != r)
                try {
                    let e = (0, o.zS)(),
                        n = await e.getNextVideoOutputFrame(r);
                    return (0, O.W)(n);
                } catch (e) {
                    return;
                }
        })();
    l.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: T,
        streamKey: v,
        thumbnail: b
    });
    let A = (0, y.GN)('clip_save', 0.5),
        N = performance.now();
    try {
        let e = await V(v);
        l.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        D.jF.error('Clip Failed to Save', e), null == A || A.stop(), (0, y.GN)('clip_error', 0.5), l.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    D.jF.info(''.concat(S.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - N), 'ms'));
}
function H(e, n) {
    l.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: n
    });
}
async function Y(e, n) {
    let r = S.Z.getClips().find((n) => n.id === e);
    if (null == r) return;
    let i = {
        ...r,
        ...n
    };
    null != (await (0, C.w)(i)) &&
        (await E.Z.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        T.default.track(L.rMx.CLIP_EDITED, { clip_id: i.id }),
        l.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: i
        }));
}
function W() {
    l.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function K() {
    l.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function z(e) {
    var n;
    if (!(0, b.isDesktop)() || (null === (n = u.Z.clips) || void 0 === n ? void 0 : n.loadClipsDirectory) == null) return;
    let r = await u.Z.clips.loadClipsDirectory(e),
        i = [];
    for (let e of r) {
        let n = await (0, C.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != n && i.push(n);
    }
    l.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: i
    });
}
async function q(e) {
    var n;
    if (!!(0, b.isDesktop)() && (null === (n = u.Z.clips) || void 0 === n ? void 0 : n.deleteClip) != null)
        await u.Z.clips.deleteClip(e),
            l.Z.dispatch({
                type: 'CLIPS_DELETE_CLIP',
                filepath: e
            });
}
async function Q(e, n) {
    let r = E.Z.getMediaEngine(),
        i = await r.exportClip(e.filepath, n);
    return (0, R.Z)(i);
}
function X(e) {
    l.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
