n.d(t, {
    MS: () => f,
    TC: () => d,
    bA: () => o,
    gl: () => _,
    xv: () => l,
    z4: () => u,
    zc: () => c
});
var i = n(570140),
    r = n(579806),
    a = n(569550),
    s = n(226961);
function o(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_OPEN',
        section: e
    }),
        i.Z.dispatch({ type: 'RTC_DEBUG_POPOUT_WINDOW_OPEN' });
}
function l() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_CLOSE' });
}
function u() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_OPEN_REPLAY' });
}
function c(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_SET_SECTION',
        section: e
    });
}
function d(e) {
    (0, a.Z)('connection_replay_log_enabled', e, s.ZP.shouldRecordNextConnection()),
        i.Z.dispatch({
            type: 'RTC_DEBUG_SET_RECORDING_FLAG',
            value: e
        });
}
function f(e, t, n) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_SET_SIMULCAST_OVERRIDE',
        userId: e,
        context: t,
        quality: n
    });
}
function _() {
    r.Z.fileManager
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
            i.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH',
                path: t
            });
        });
}
