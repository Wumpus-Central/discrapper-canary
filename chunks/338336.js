let i, r;
n.d(t, {
    Z: () => l,
    r: () => u
});
var a = n(626135),
    s = n(307320),
    o = n(981631);
function l(e, t, n) {
    let { featureEnabled: l, windowLength: u, allowedPoorFpsRatio: c, fpsThreshold: d, backoffTimeSec: f } = s.Z.getConfig(!1);
    a.default.track(o.rMx.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: null == i ? void 0 : i(),
        media_session_id: null == r ? void 0 : r(),
        video_health_manager_window_length: l ? u : null,
        video_health_manager_poor_fps_ratio: l ? c : null,
        video_health_manager_fps_threshold: l ? d : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: l ? f : null
    });
}
function u(e, t) {
    (i = e), (r = t);
}
