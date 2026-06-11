"use strict";
n.d(t, { Gb: () => f, NM: () => d, TX: () => p, Zy: () => _, kY: () => E, lc: () => h }), n(321073);
var i = n(166929),
    r = n(652896),
    s = n(929921),
    a = n(616356),
    o = n(116956),
    l = n(274372),
    u = n(372684),
    c = n(974293);
function d(e) {
    switch (e.decision?.signal?.type) {
        case u.Gy.MANUAL:
            return "manual";
        case u.Gy.DISTRIBUTED:
            return "distributed";
        case u.Gy.LAUGHTER:
        case u.Gy.GAME_EVENT:
            return "auto_ml";
        default:
            return "unknown";
    }
}
function _(e) {
    return {
        clip_type: d(e),
        num_clip_participants: e.users.length,
        clip_session_id: e.gameSessionId,
        is_candidate: e.isCandidate,
    };
}
function h() {
    return { clip_runtime: (0, c.GN)(), current_clip_session_id: l.Ay.getCurrentClipsSessionId() };
}
function f(e) {
    let t = [];
    for (let n of e.timeline)
        switch (n.signal.type) {
            case u.Gy.MANUAL:
                t.push("manual");
                break;
            case u.Gy.DISTRIBUTED:
                t.push("distributed");
                break;
            case u.Gy.LAUGHTER:
                t.push("laughter");
                break;
            case u.Gy.GAME_EVENT:
                t.push(`game_event:${n.signal.eventType}`);
        }
    return t;
}
function p(e) {
    let t = a.A.getCurrentUserActiveStream(),
        n = null != t ? o.A.getRTCConnection((0, r._z)(t)) : null;
    return {
        ..._(e),
        ...h(),
        rtc_connection_id: n?.getRTCConnectionId(),
        media_session_id: n?.getMediaSessionId(),
        parent_media_session_id: n?.parentMediaSessionId,
        guild_id: e.guildId,
        channel_id: e.channelId,
        application_id: e.applicationId,
        application_name: e.applicationName,
        clip_uuid: e.id,
        clip_event_timeline_size: e.timeline.length,
    };
}
function E(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            s = (0, i.kZ)(e),
            a = n.get(s) ?? 0;
        n.set(s, a + r);
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
        clip_duration_setting: l.Ay.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: s.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
