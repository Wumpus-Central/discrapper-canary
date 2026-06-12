"use strict";
let i, r;
n.d(t, { A: () => l, I: () => u });
var s = n(681813),
    a = n(174459),
    o = n(652215);
function l(e, t, n) {
    let {
        featureEnabled: l,
        windowLength: u,
        allowedPoorFpsRatio: c,
        fpsThreshold: d,
        backoffTimeSec: _,
    } = s.V.defaultConfig;
    a.default.track(o.HAw.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: i?.(),
        media_session_id: r?.(),
        video_health_manager_window_length: l ? u : null,
        video_health_manager_poor_fps_ratio: l ? c : null,
        video_health_manager_fps_threshold: l ? d : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: l ? _ : null,
    });
}
function u(e, t) {
    (i = e), (r = t);
}
