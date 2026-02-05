"use strict";
n.d(t, { A: () => o });
var r = n(499979),
    i = n(544180),
    a = n(652215);
function s(e) {
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
            Object.values(a.wY_).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(a.NKC).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: s(e.connectionTypeBuckets[a.wY_.WIFI]),
            duration_connection_type_cellular: s(e.connectionTypeBuckets[a.wY_.CELLULAR]),
            duration_connection_type_ethernet: s(e.connectionTypeBuckets[a.wY_.ETHERNET]),
            duration_connection_type_bluetooth: s(e.connectionTypeBuckets[a.wY_.BLUETOOTH]),
            duration_connection_type_other: s(e.connectionTypeBuckets[a.wY_.OTHER]),
            duration_connection_type_unknown: s(e.connectionTypeBuckets[a.wY_.UNKNOWN]),
            duration_connection_type_none: s(e.connectionTypeBuckets[a.wY_.NONE]),
            duration_effective_connection_speed_2g: s(e.effectiveConnectionSpeedBuckets[a.NKC.TWO_G]),
            duration_effective_connection_speed_3g: s(e.effectiveConnectionSpeedBuckets[a.NKC.THREE_G]),
            duration_effective_connection_speed_4g: s(e.effectiveConnectionSpeedBuckets[a.NKC.FOUR_G]),
            duration_effective_connection_speed_5g: s(e.effectiveConnectionSpeedBuckets[a.NKC.FIVE_G]),
            duration_effective_connection_speed_unknown: s(e.effectiveConnectionSpeedBuckets[a.NKC.UNKNOWN]),
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1e3,
            n = i.A.getEffectiveConnectionSpeed();
        n === a.NKC.SLOW_TWO_G && (n = a.NKC.TWO_G);
        let r = i.A.getType();
        r === a.wY_.WIMAX && (r = a.wY_.WIFI),
            (this._networkStats.effectiveConnectionSpeedBuckets[n] += t),
            (this._networkStats.connectionTypeBuckets[r] += t),
            (this._lastSampleTimestamp = e);
    }
}
