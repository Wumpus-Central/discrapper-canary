"use strict";
n.d(t, { A: () => r });
class r {
    _report;
    _pids;
    constructor() {
        (this._report = {
            soundshare_attach_requested_count: 0,
            soundshare_capturing_count: 0,
            soundshare_capture_stopped_count: 0,
            soundshare_hooked_count: 0,
            soundshare_recv_connect_count: 0,
            soundshare_recv_disconnect_count: 0,
            soundshare_recv_started_count: 0,
            soundshare_recv_stopped_count: 0,
            soundshare_recv_failed_count: 0,
            soundshare_recv_format_count: 0,
            soundshare_send_announce_count: 0,
            soundshare_send_start_count: 0,
            soundshare_send_stop_count: 0,
            soundshare_malformed_trace_count: 0,
            soundshare_audio_detected_count: 0,
            soundshare_state_transition_detached_count: 0,
            soundshare_state_transition_waiting_count: 0,
            soundshare_state_transition_attached_count: 0,
            soundshare_state_transition_started_count: 0,
            soundshare_state_transition_playing_count: 0,
            soundshare_state_transition_silence_count: 0,
            soundshare_unknown_event_count: 0,
            soundshare_first_pid: 0,
            soundshare_last_pid: 0,
            soundshare_unique_pids: 0,
            soundshare_first_session: null,
            soundshare_last_session: null,
        }),
            (this._pids = new Set());
    }
    traceEvent(e, t) {
        let n,
            r = this._report;
        void 0 !==
        r[
            (n =
                "soundshare_state_transition" === t.type
                    ? `soundshare_state_transition_${["detached", "waiting", "attached", "started", "playing", "silence"][t.newState]}_count`
                    : `${t.type}_count`)
        ]
            ? r[n] < 32767 && r[n]++
            : r.soundshare_unknown_event_count++,
            "pid" in t &&
                (0 === r.soundshare_first_pid && (r.soundshare_first_pid = t.pid),
                (r.soundshare_last_pid = t.pid),
                this._pids.add(t.pid)),
            null != e &&
                (null == r.soundshare_first_session && (r.soundshare_first_session = e),
                (r.soundshare_last_session = e));
    }
    getStats() {
        return { ...this._report, soundshare_unique_pids: this._pids.size };
    }
}
