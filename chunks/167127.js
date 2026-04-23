"use strict";
n.d(t, { A: () => o });
var r = n(499979),
    i = n(544180),
    s = n(652215);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class o {
    _networkStats;
    _lastSampleTimestamp;
    constructor() {
        (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, r.tB)());
    }
    _initStats() {
        let e = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
        return (
            Object.values(s.wY_).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(s.NKC).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: a(e.connectionTypeBuckets[s.wY_.WIFI]),
            duration_connection_type_cellular: a(e.connectionTypeBuckets[s.wY_.CELLULAR]),
            duration_connection_type_ethernet: a(e.connectionTypeBuckets[s.wY_.ETHERNET]),
            duration_connection_type_bluetooth: a(e.connectionTypeBuckets[s.wY_.BLUETOOTH]),
            duration_connection_type_other: a(e.connectionTypeBuckets[s.wY_.OTHER]),
            duration_connection_type_unknown: a(e.connectionTypeBuckets[s.wY_.UNKNOWN]),
            duration_connection_type_none: a(e.connectionTypeBuckets[s.wY_.NONE]),
            duration_effective_connection_speed_2g: a(e.effectiveConnectionSpeedBuckets[s.NKC.TWO_G]),
            duration_effective_connection_speed_3g: a(e.effectiveConnectionSpeedBuckets[s.NKC.THREE_G]),
            duration_effective_connection_speed_4g: a(e.effectiveConnectionSpeedBuckets[s.NKC.FOUR_G]),
            duration_effective_connection_speed_5g: a(e.effectiveConnectionSpeedBuckets[s.NKC.FIVE_G]),
            duration_effective_connection_speed_unknown: a(e.effectiveConnectionSpeedBuckets[s.NKC.UNKNOWN]),
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1e3,
            n = i.A.getEffectiveConnectionSpeed();
        n === s.NKC.SLOW_TWO_G && (n = s.NKC.TWO_G);
        let r = i.A.getType();
        r === s.wY_.WIMAX && (r = s.wY_.WIFI),
            (this._networkStats.effectiveConnectionSpeedBuckets[n] += t),
            (this._networkStats.connectionTypeBuckets[r] += t),
            (this._lastSampleTimestamp = e);
    }
}
