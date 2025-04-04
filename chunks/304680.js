n.d(t, {
    MS: () => f,
    TC: () => d,
    bA: () => s,
    gl: () => _,
    xv: () => l,
    z4: () => c,
    zc: () => u
});
var r = n(570140),
    i = n(579806),
    o = n(569550),
    a = n(226961);
function s(e) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_OPEN',
        section: e
    }),
        r.Z.dispatch({ type: 'RTC_DEBUG_POPOUT_WINDOW_OPEN' });
}
function l() {
    r.Z.dispatch({ type: 'RTC_DEBUG_MODAL_CLOSE' });
}
function c() {
    r.Z.dispatch({ type: 'RTC_DEBUG_MODAL_OPEN_REPLAY' });
}
function u(e) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_SET_SECTION',
        section: e
    });
}
function d(e) {
    (0, o.Z)('connection_replay_log_enabled', e, a.ZP.shouldRecordNextConnection()),
        r.Z.dispatch({
            type: 'RTC_DEBUG_SET_RECORDING_FLAG',
            value: e
        });
}
function f(e, t, n) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_SET_SIMULCAST_OVERRIDE',
        userId: e,
        context: t,
        quality: n
    });
}
function _() {
    i.Z.fileManager
        .showOpenDialog({
            filters: [
                {
                    name: 'All Files',
                    extensions: ['*']
                }
            ]
        })
        .then((e) => {
            let t = 0 === e.length ? '' : e[0];
            r.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH',
                path: t
            });
        });
}
