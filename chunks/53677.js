"use strict";
n.d(t, { NM: () => _, TX: () => h, WR: () => p, Zy: () => E, lc: () => A, u2: () => f }), n(321073);
var i = n(166929),
    r = n(652896),
    a = n(929921),
    s = n(616356),
    l = n(763827),
    o = n(116956),
    d = n(915725),
    c = n(372684),
    u = n(974293);
function _(e) {
    switch (e.decision?.signal?.type) {
        case c.Gy.MANUAL:
            return "manual";
        case c.Gy.DISTRIBUTED:
            return "distributed";
        case c.Gy.LAUGHTER:
        case c.Gy.SHOUTING:
        case c.Gy.GAME_EVENT:
            return "auto_ml";
        default:
            return "unknown";
    }
}
function E(e) {
    return {
        clip_type: _(e),
        num_clip_participants: e.users.length,
        clip_session_id: e.gameSessionId,
        is_candidate: e.isCandidate,
    };
}
function A(e) {
    return { clip_runtime: (0, u.GN)(e), current_clip_session_id: d.Ay.getCurrentClipsSession()?.id };
}
function h(e) {
    let t = s.A.getCurrentUserActiveStream(),
        n = null != t ? o.A.getRTCConnection((0, r._z)(t)) : null;
    return {
        ...E(e),
        ...A("getPreSaveClipAnalytics"),
        rtc_connection_id: n?.getRTCConnectionId(),
        media_session_id: n?.getMediaSessionId(),
        parent_media_session_id: l.A.getMediaSessionId(),
        guild_id: e.guildId,
        channel_id: e.channelId,
        application_id: e.applicationId,
        application_name: e.applicationName,
        clip_uuid: e.id,
        clip_event_timeline_size: e.timeline.length,
    };
}
function I(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            a = (0, i.kZ)(e),
            s = n.get(a) ?? 0;
        n.set(a, s + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: n.get(i.yo.NVIDIA_CUDA) ?? 0,
        frames_encoded_nvidia_direct3d: n.get(i.yo.NVIDIA_DIRECT_3D) ?? 0,
        frames_encoded_openh264: n.get(i.yo.OPENH264) ?? 0,
        frames_encoded_videotoolbox: n.get(i.yo.VIDEOTOOLBOX) ?? 0,
        frames_encoded_amd_direct3d: n.get(i.yo.AMD_DIRECT_3D) ?? 0,
        frames_encoded_amd_vaapi: n.get(i.yo.AMD_VAAPI) ?? 0,
        frames_encoded_intel: n.get(i.yo.INTEL) ?? 0,
        frames_encoded_intel_direct3d: n.get(i.yo.INTEL_DIRECT_3D) ?? 0,
        frames_encoded_wmf_direct3d_intel: n.get(i.yo.WMF_DIRECT_3D_INTEL) ?? 0,
        frames_encoded_wmf_direct3d_nvidia: n.get(i.yo.WMF_DIRECT_3D_NVIDIA) ?? 0,
        frames_encoded_wmf_direct3d_amd: n.get(i.yo.WMF_DIRECT_3D_AMD) ?? 0,
        frames_encoded_wmf_direct3d:
            (n.get(i.yo.WMF_DIRECT_3D) ?? 0) +
            (n.get(i.yo.WMF_DIRECT_3D_INTEL) ?? 0) +
            (n.get(i.yo.WMF_DIRECT_3D_NVIDIA) ?? 0) +
            (n.get(i.yo.WMF_DIRECT_3D_AMD) ?? 0),
        frames_encoded_uncategorized: n.get(i.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(i.yo.UNKNOWN) ?? 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: d.Ay.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: a.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
function f(e, t, n, i) {
    let r = I(e, t);
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
                    case c.Gy.MANUAL:
                        t.push("manual");
                        break;
                    case c.Gy.DISTRIBUTED:
                        t.push("distributed");
                        break;
                    case c.Gy.LAUGHTER:
                        t.push("laughter");
                        break;
                    case c.Gy.SHOUTING:
                        t.push("shouting");
                        break;
                    case c.Gy.GAME_EVENT:
                        t.push(`game_event:${n.signal.eventType}`);
                }
            return t;
        })(n)),
        null != i && Object.assign(r, i),
        r
    );
}
function p(e, t) {
    let n = I(e, t);
    return (n.error_at = t.errorAt), (n.error_message = t.errorMessage), n;
}
