r.d(n, {
    JV: function () {
        return a;
    },
    aA: function () {
        return o;
    },
    mA: function () {
        return _;
    },
    ug: function () {
        return i;
    }
});
var i,
    a,
    o,
    s = r(47120);
var l = r(724458);
var u = r(392711);
function c(e, n, r) {
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
!(function (e) {
    (e.LONGER_DISPATCH = 'longer_dispatch'), (e.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = 'exceeded_max_consecutive_flushes'), (e.FIRED_DUE_TO_MAX_TIMEOUT = 'fired_due_to_max_timeout'), (e.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = 'skip_idle_callback_due_to_backgrounded');
})(i || (i = {})),
    !(function (e) {
        (e.TIME_TO_FIRE_IDLE_CALLBACK = 'time_to_fire_idle_callback'), (e.TIME_TO_QUEUE_EMPTY = 'time_to_flush_all_work'), (e.TIME_OVER_DEADLINE = 'time_over_deadline'), (e.DEADLINE_INITIAL_TIME_REMAINING = 'initial_time_of_deadline');
    })(a || (a = {})),
    !(function (e) {
        (e.COUNT_DISPATCHES_LEFT_AFTER_YIELD = 'count_dispatches_left_after_yield'), (e.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = 'count_flush_before_queue_empty'), (e.COUNT_INITIAL_DISPATCHS_LENGTH = 'count_initial_dispatches_length');
    })(o || (o = {}));
let d = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null
    }),
    f = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0]
    }),
    p = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0]
    }),
    h = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0
    });
class _ {
    reset() {
        (this._timeTracking = (0, u.cloneDeep)(d)), (this._timingStats = (0, u.cloneDeep)(f)), (this._measurements = (0, u.cloneDeep)(p)), (this._eventCounts = (0, u.cloneDeep)(h));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, n) {
        let [r, i] = this._timingStats[e];
        this._timingStats[e] = [(r * i + n) / (i + 1), i + 1];
    }
    time(e) {
        if (!!this._enabled) this._timeTracking[e] = performance.now();
    }
    timeEnd(e) {
        if (!this._enabled) return;
        let n = this._timeTracking[e];
        if (null == n) return;
        let r = performance.now() - n;
        this._storeTimeValue(e, r), (this._timeTracking[e] = null);
    }
    timeTrack(e, n) {
        if (!!this._enabled) this._storeTimeValue(e, n);
    }
    measure(e, n) {
        if (!this._enabled) return;
        let [r, i] = this._measurements[e];
        this._measurements[e] = [(r * i + n) / (i + 1), i + 1];
    }
    track(e) {
        if (!!this._enabled) this._eventCounts[e] += 1;
    }
    toggleTelemetry(e) {
        this._enabled = e;
    }
    get isTelemetryEnabled() {
        return this._enabled;
    }
    generateTelemetry() {
        let e = Object.entries(this._timingStats).reduce((e, n) => {
                let [r, [i]] = n;
                return (e['avg_'.concat(r)] = ''.concat(i.toFixed(2), 'ms')), e;
            }, {}),
            n = Object.entries(this._measurements).reduce((e, n) => {
                let [r, [i]] = n;
                return (e['avg_'.concat(r)] = ''.concat(i.toFixed(2))), e;
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, n) => {
                let [r, i] = n;
                return (e['count_'.concat(r)] = ''.concat(i)), e;
            }, {}),
            ...e,
            ...n
        };
    }
    constructor() {
        c(this, '_timeTracking', (0, u.cloneDeep)(d)), c(this, '_timingStats', (0, u.cloneDeep)(f)), c(this, '_measurements', (0, u.cloneDeep)(p)), c(this, '_eventCounts', (0, u.cloneDeep)(h)), c(this, '_enabled', !1);
    }
}
