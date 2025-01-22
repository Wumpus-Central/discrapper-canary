r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    traceEvent(e, n) {
        let r;
        let i = this._report,
            a = ['detached', 'waiting', 'attached', 'started', 'playing', 'silence'];
        void 0 !== i[(r = 'soundshare_state_transition' === n.type ? 'soundshare_state_transition_'.concat(a[n.newState], '_count') : ''.concat(n.type, '_count'))] ? i[r] < 32767 && i[r]++ : i.soundshare_unknown_event_count++, 'pid' in n && (0 === i.soundshare_first_pid && (i.soundshare_first_pid = n.pid), (i.soundshare_last_pid = n.pid), this._pids.add(n.pid)), null != e && (null == i.soundshare_first_session && (i.soundshare_first_session = e), (i.soundshare_last_session = e));
    }
    getStats() {
        return {
            ...this._report,
            soundshare_unique_pids: this._pids.size
        };
    }
    constructor() {
        a(this, '_report', void 0),
            a(this, '_pids', void 0),
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
                soundshare_last_session: null
            }),
            (this._pids = new Set());
    }
}
