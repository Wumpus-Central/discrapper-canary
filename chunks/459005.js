n.d(t, {
    JV: () => s,
    aA: () => l,
    mA: () => _,
    ug: () => a
}),
    n(47120);
var r = n(392711);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
var a = (function (e) {
        return (e.LONGER_DISPATCH = 'longer_dispatch'), (e.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = 'exceeded_max_consecutive_flushes'), (e.FIRED_DUE_TO_MAX_TIMEOUT = 'fired_due_to_max_timeout'), (e.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = 'skip_idle_callback_due_to_backgrounded'), e;
    })({}),
    s = (function (e) {
        return (e.TIME_TO_FIRE_IDLE_CALLBACK = 'time_to_fire_idle_callback'), (e.TIME_TO_QUEUE_EMPTY = 'time_to_flush_all_work'), (e.TIME_OVER_DEADLINE = 'time_over_deadline'), (e.DEADLINE_INITIAL_TIME_REMAINING = 'initial_time_of_deadline'), e;
    })({}),
    l = (function (e) {
        return (e.COUNT_DISPATCHES_LEFT_AFTER_YIELD = 'count_dispatches_left_after_yield'), (e.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = 'count_flush_before_queue_empty'), (e.COUNT_INITIAL_DISPATCHS_LENGTH = 'count_initial_dispatches_length'), e;
    })({});
let c = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null
    }),
    u = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0]
    }),
    d = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0]
    }),
    f = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0
    });
class _ {
    reset() {
        (this._timeTracking = (0, r.cloneDeep)(c)), (this._timingStats = (0, r.cloneDeep)(u)), (this._measurements = (0, r.cloneDeep)(d)), (this._eventCounts = (0, r.cloneDeep)(f));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, t) {
        let [n, r] = this._timingStats[e];
        this._timingStats[e] = [(n * r + t) / (r + 1), r + 1];
    }
    time(e) {
        this._enabled && (this._timeTracking[e] = performance.now());
    }
    timeEnd(e) {
        if (!this._enabled) return;
        let t = this._timeTracking[e];
        if (null == t) return;
        let n = performance.now() - t;
        this._storeTimeValue(e, n), (this._timeTracking[e] = null);
    }
    timeTrack(e, t) {
        this._enabled && this._storeTimeValue(e, t);
    }
    measure(e, t) {
        if (!this._enabled) return;
        let [n, r] = this._measurements[e];
        this._measurements[e] = [(n * r + t) / (r + 1), r + 1];
    }
    track(e) {
        this._enabled && (this._eventCounts[e] += 1);
    }
    toggleTelemetry(e) {
        this._enabled = e;
    }
    get isTelemetryEnabled() {
        return this._enabled;
    }
    generateTelemetry() {
        let e = Object.entries(this._timingStats).reduce((e, t) => {
                let [n, [r]] = t;
                return (e['avg_'.concat(n)] = ''.concat(r.toFixed(2), 'ms')), e;
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [r]] = t;
                return (e['avg_'.concat(n)] = ''.concat(r.toFixed(2))), e;
            }, {});
        return o(
            {},
            Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, r] = t;
                return (e['count_'.concat(n)] = ''.concat(r)), e;
            }, {}),
            e,
            t
        );
    }
    constructor() {
        i(this, '_timeTracking', (0, r.cloneDeep)(c)), i(this, '_timingStats', (0, r.cloneDeep)(u)), i(this, '_measurements', (0, r.cloneDeep)(d)), i(this, '_eventCounts', (0, r.cloneDeep)(f)), i(this, '_enabled', !1);
    }
}
