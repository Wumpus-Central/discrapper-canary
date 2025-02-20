let r, i;
n.d(t, {
    Z: () => l,
    r: () => c
});
var o = n(626135),
    a = n(307320),
    s = n(981631);
function l(e, t, n) {
    let { featureEnabled: l, windowLength: c, allowedPoorFpsRatio: u, fpsThreshold: d, backoffTimeSec: f } = a.Z.getConfig(!1);
    o.default.track(s.rMx.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: null == r ? void 0 : r(),
        media_session_id: null == i ? void 0 : i(),
        video_health_manager_window_length: l ? c : null,
        video_health_manager_poor_fps_ratio: l ? u : null,
        video_health_manager_fps_threshold: l ? d : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: l ? f : null
    });
}
function c(e, t) {
    (r = e), (i = t);
}
