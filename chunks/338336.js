let i, a;
r.d(n, {
    Z: function () {
        return u;
    },
    r: function () {
        return c;
    }
});
var o = r(626135),
    s = r(307320),
    l = r(981631);
function u(e, n, r) {
    let { featureEnabled: u, windowLength: c, allowedPoorFpsRatio: d, fpsThreshold: f, backoffTimeSec: p } = s.Z.getConfig(!1);
    o.default.track(l.rMx.VIDEO_TOGGLED, {
        video_toggle_reason: n,
        toggled_user_id: e,
        rtc_connection_id: null == i ? void 0 : i(),
        media_session_id: null == a ? void 0 : a(),
        video_health_manager_window_length: u ? c : null,
        video_health_manager_poor_fps_ratio: u ? d : null,
        video_health_manager_fps_threshold: u ? f : null,
        is_video_shown: r,
        video_health_manager_backoff_time_seconds: u ? p : null
    });
}
function c(e, n) {
    (i = e), (a = n);
}
