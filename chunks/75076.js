"use strict";
let i, r;
n.d(t, { A: () => o, I: () => d });
var a = n(681813),
    s = n(174459),
    l = n(652215);
function o(e, t, n) {
    let {
        featureEnabled: o,
        windowLength: d,
        allowedPoorFpsRatio: c,
        fpsThreshold: u,
        backoffTimeSec: _,
    } = a.V.defaultConfig;
    s.default.track(l.HAw.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: i?.(),
        media_session_id: r?.(),
        video_health_manager_window_length: o ? d : null,
        video_health_manager_poor_fps_ratio: o ? c : null,
        video_health_manager_fps_threshold: o ? u : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: o ? _ : null,
    });
}
function d(e, t) {
    (i = e), (r = t);
}
