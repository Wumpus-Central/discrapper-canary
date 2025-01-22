r.d(n, {
    MS: function () {
        return p;
    },
    TC: function () {
        return f;
    },
    bA: function () {
        return l;
    },
    gl: function () {
        return h;
    },
    xv: function () {
        return u;
    },
    z4: function () {
        return c;
    },
    zc: function () {
        return d;
    }
});
var i = r(570140),
    a = r(579806),
    o = r(569550),
    s = r(226961);
function l(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_OPEN',
        section: e
    }),
        i.Z.dispatch({ type: 'RTC_DEBUG_POPOUT_WINDOW_OPEN' });
}
function u() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_CLOSE' });
}
function c() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_OPEN_REPLAY' });
}
function d(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_SET_SECTION',
        section: e
    });
}
function f(e) {
    (0, o.Z)('connection_replay_log_enabled', e, s.ZP.shouldRecordNextConnection()),
        i.Z.dispatch({
            type: 'RTC_DEBUG_SET_RECORDING_FLAG',
            value: e
        });
}
function p(e, n, r) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_SET_SIMULCAST_OVERRIDE',
        userId: e,
        context: n,
        quality: r
    });
}
function h() {
    a.Z.fileManager
        .showOpenDialog({
            filters: [
                {
                    name: 'All Files',
                    extensions: ['*']
                }
            ]
        })
        .then((e) => {
            let n = 0 === e.length ? '' : e[0];
            i.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH',
                path: n
            });
        });
}
