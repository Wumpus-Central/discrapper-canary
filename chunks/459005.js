n.d(t, {
    JV: () => s,
    aA: () => o,
    mA: () => f,
    ug: () => a
}),
    n(47120),
    n(724458);
var i = n(392711);
function r(e, t, n) {
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
var a = (function (e) {
        return (e.LONGER_DISPATCH = 'longer_dispatch'), (e.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = 'exceeded_max_consecutive_flushes'), (e.FIRED_DUE_TO_MAX_TIMEOUT = 'fired_due_to_max_timeout'), (e.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = 'skip_idle_callback_due_to_backgrounded'), e;
    })({}),
    s = (function (e) {
        return (e.TIME_TO_FIRE_IDLE_CALLBACK = 'time_to_fire_idle_callback'), (e.TIME_TO_QUEUE_EMPTY = 'time_to_flush_all_work'), (e.TIME_OVER_DEADLINE = 'time_over_deadline'), (e.DEADLINE_INITIAL_TIME_REMAINING = 'initial_time_of_deadline'), e;
    })({}),
    o = (function (e) {
        return (e.COUNT_DISPATCHES_LEFT_AFTER_YIELD = 'count_dispatches_left_after_yield'), (e.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = 'count_flush_before_queue_empty'), (e.COUNT_INITIAL_DISPATCHS_LENGTH = 'count_initial_dispatches_length'), e;
    })({});
let l = Object.freeze({
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
    c = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0]
    }),
    d = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0
    });
class f {
    reset() {
        (this._timeTracking = (0, i.cloneDeep)(l)), (this._timingStats = (0, i.cloneDeep)(u)), (this._measurements = (0, i.cloneDeep)(c)), (this._eventCounts = (0, i.cloneDeep)(d));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, t) {
        let [n, i] = this._timingStats[e];
        this._timingStats[e] = [(n * i + t) / (i + 1), i + 1];
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
        let [n, i] = this._measurements[e];
        this._measurements[e] = [(n * i + t) / (i + 1), i + 1];
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
                let [n, [i]] = t;
                return (e['avg_'.concat(n)] = ''.concat(i.toFixed(2), 'ms')), e;
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [i]] = t;
                return (e['avg_'.concat(n)] = ''.concat(i.toFixed(2))), e;
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, i] = t;
                return (e['count_'.concat(n)] = ''.concat(i)), e;
            }, {}),
            ...e,
            ...t
        };
    }
    constructor() {
        r(this, '_timeTracking', (0, i.cloneDeep)(l)), r(this, '_timingStats', (0, i.cloneDeep)(u)), r(this, '_measurements', (0, i.cloneDeep)(c)), r(this, '_eventCounts', (0, i.cloneDeep)(d)), r(this, '_enabled', !1);
    }
}
