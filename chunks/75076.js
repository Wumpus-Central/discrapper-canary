"use strict";
let r, i;
n.d(t, { A: () => l, I: () => u });
var a = n(738586),
    s = n(954571),
    o = n(652215);
function l(e, t, n) {
    let {
        featureEnabled: l,
        windowLength: u,
        allowedPoorFpsRatio: c,
        fpsThreshold: d,
        backoffTimeSec: _,
    } = a.V.defaultConfig;
    s.default.track(o.HAw.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: r?.(),
        media_session_id: i?.(),
        video_health_manager_window_length: l ? u : null,
        video_health_manager_poor_fps_ratio: l ? c : null,
        video_health_manager_fps_threshold: l ? d : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: l ? _ : null,
    });
}
function u(e, t) {
    (r = e), (i = t);
}
