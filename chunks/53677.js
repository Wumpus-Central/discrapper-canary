"use strict";
n.d(t, { NM: () => I, PQ: () => C, TX: () => T, WR: () => S, Zy: () => f, lc: () => p, u2: () => g }), n(321073);
var i = n(811315),
    r = n.n(i),
    a = n(166929),
    s = n(652896),
    l = n(929921),
    o = n(616356),
    d = n(763827),
    c = n(116956),
    u = n(174459),
    _ = n(915725),
    E = n(974293),
    A = n(696016),
    h = n(652215);
function I(e) {
    switch (e.decision?.signal?.type) {
        case A.Gy.MANUAL:
            return "manual";
        case A.Gy.DISTRIBUTED:
            return "distributed";
        case A.Gy.LAUGHTER:
        case A.Gy.SHOUTING:
        case A.Gy.GAME_EVENT:
            return "auto_ml";
        default:
            return "unknown";
    }
}
function f(e) {
    return {
        clip_type: I(e),
        num_clip_participants: e.users.length,
        clip_session_id: e.gameSessionId,
        is_candidate: e.isCandidate,
    };
}
function p(e) {
    return { clip_runtime: (0, E.GN)(e), current_clip_session_id: _.Ay.getCurrentClipsSession()?.id };
}
function T(e) {
    let t = o.A.getCurrentUserActiveStream(),
        n = null != t ? c.A.getRTCConnection((0, s._z)(t)) : null;
    return {
        ...f(e),
        ...p("getPreSaveClipAnalytics"),
        rtc_connection_id: n?.getRTCConnectionId(),
        media_session_id: n?.getMediaSessionId(),
        parent_media_session_id: d.A.getMediaSessionId(),
        guild_id: e.guildId,
        channel_id: e.channelId,
        application_id: e.applicationId,
        application_name: e.applicationName,
        clip_uuid: e.id,
        clip_event_timeline_size: e.timeline.length,
    };
}
function m(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            r = (0, a.kZ)(e),
            s = n.get(r) ?? 0;
        n.set(r, s + i);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: n.get(a.yo.NVIDIA_CUDA) ?? 0,
        frames_encoded_nvidia_direct3d: n.get(a.yo.NVIDIA_DIRECT_3D) ?? 0,
        frames_encoded_openh264: n.get(a.yo.OPENH264) ?? 0,
        frames_encoded_videotoolbox: n.get(a.yo.VIDEOTOOLBOX) ?? 0,
        frames_encoded_amd_direct3d: n.get(a.yo.AMD_DIRECT_3D) ?? 0,
        frames_encoded_amd_vaapi: n.get(a.yo.AMD_VAAPI) ?? 0,
        frames_encoded_intel: n.get(a.yo.INTEL) ?? 0,
        frames_encoded_intel_direct3d: n.get(a.yo.INTEL_DIRECT_3D) ?? 0,
        frames_encoded_wmf_direct3d_intel: n.get(a.yo.WMF_DIRECT_3D_INTEL) ?? 0,
        frames_encoded_wmf_direct3d_nvidia: n.get(a.yo.WMF_DIRECT_3D_NVIDIA) ?? 0,
        frames_encoded_wmf_direct3d_amd: n.get(a.yo.WMF_DIRECT_3D_AMD) ?? 0,
        frames_encoded_wmf_direct3d:
            (n.get(a.yo.WMF_DIRECT_3D) ?? 0) +
            (n.get(a.yo.WMF_DIRECT_3D_INTEL) ?? 0) +
            (n.get(a.yo.WMF_DIRECT_3D_NVIDIA) ?? 0) +
            (n.get(a.yo.WMF_DIRECT_3D_AMD) ?? 0),
        frames_encoded_uncategorized: n.get(a.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(a.yo.UNKNOWN) ?? 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: _.Ay.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: l.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
function g(e, t, n, i) {
    let r = m(e, t);
    return (
        (r.clip_save_time_ms = t.clipSaveTimeMs),
        (r.clip_size_bytes = t.clipSizeBytes),
        null != t.viewerDecodeFps &&
            ((r.decode_fps_during_clip = t.viewerDecodeFps),
            (r.encode_fps_during_clip = t.viewerEncodeFps),
            (r.target_fps = null),
            (r.remote_clip_id = n.remoteClipId)),
        (r.clip_signal_types = (function (e) {
            let t = [];
            for (let n of e.timeline)
                switch (n.signal.type) {
                    case A.Gy.MANUAL:
                        t.push("manual");
                        break;
                    case A.Gy.DISTRIBUTED:
                        t.push("distributed");
                        break;
                    case A.Gy.LAUGHTER:
                        t.push("laughter");
                        break;
                    case A.Gy.SHOUTING:
                        t.push("shouting");
                        break;
                    case A.Gy.GAME_EVENT:
                        t.push(`game_event:${n.signal.eventType}`);
                }
            return t;
        })(n)),
        null != i && Object.assign(r, i),
        r
    );
}
function S(e, t) {
    let n = m(e, t);
    return (n.error_at = t.errorAt), (n.error_message = t.errorMessage), n;
}
function N(e, t) {
    if (null != t && !r()(t, e)) return t;
}
function C(e, t) {
    let n = {
        is_favorite: N(e.isFavorite, t.isFavorite),
        title_length: N(e.name, t.name)?.length,
        edit_start_time: N(e.editMetadata?.start, t.editMetadata?.start),
        edit_end_time: N(e.editMetadata?.end, t.editMetadata?.end),
        application_audio_enabled: N(e.editMetadata?.applicationAudio, t.editMetadata?.applicationAudio),
        voice_audio_enabled: N(e.editMetadata?.voiceAudio, t.editMetadata?.voiceAudio),
        soundboard_audio_enabled: N(e.editMetadata?.soundboardAudio, t.editMetadata?.soundboardAudio),
        crop: N(e.editMetadata?.crop?.preset, t.editMetadata?.crop?.preset),
    };
    Object.values(n).every((e) => null == e) ||
        u.default.track(h.HAw.CLIP_EDITED, { ...p("updateClipMetadata"), clip_uuid: e.id, ...n });
}
