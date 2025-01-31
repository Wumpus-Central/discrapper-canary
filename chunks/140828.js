n.d(t, { Z: () => l });
var i = n(379649),
    r = n(866960),
    a = n(981631);
function s(e, t, n) {
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class l {
    _initStats() {
        let e = {
            effectiveConnectionSpeedBuckets: {},
            connectionTypeBuckets: {}
        };
        return (
            Object.values(a.IWh).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(a.IyS).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: o(e.connectionTypeBuckets[a.IWh.WIFI]),
            duration_connection_type_cellular: o(e.connectionTypeBuckets[a.IWh.CELLULAR]),
            duration_connection_type_ethernet: o(e.connectionTypeBuckets[a.IWh.ETHERNET]),
            duration_connection_type_bluetooth: o(e.connectionTypeBuckets[a.IWh.BLUETOOTH]),
            duration_connection_type_other: o(e.connectionTypeBuckets[a.IWh.OTHER]),
            duration_connection_type_unknown: o(e.connectionTypeBuckets[a.IWh.UNKNOWN]),
            duration_connection_type_none: o(e.connectionTypeBuckets[a.IWh.NONE]),
            duration_effective_connection_speed_2g: o(e.effectiveConnectionSpeedBuckets[a.IyS.TWO_G]),
            duration_effective_connection_speed_3g: o(e.effectiveConnectionSpeedBuckets[a.IyS.THREE_G]),
            duration_effective_connection_speed_4g: o(e.effectiveConnectionSpeedBuckets[a.IyS.FOUR_G]),
            duration_effective_connection_speed_5g: o(e.effectiveConnectionSpeedBuckets[a.IyS.FIVE_G]),
            duration_effective_connection_speed_unknown: o(e.effectiveConnectionSpeedBuckets[a.IyS.UNKNOWN])
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1000,
            n = r.Z.getEffectiveConnectionSpeed();
        n === a.IyS.SLOW_TWO_G && (n = a.IyS.TWO_G);
        let i = r.Z.getType();
        i === a.IWh.WIMAX && (i = a.IWh.WIFI), (this._networkStats.effectiveConnectionSpeedBuckets[n] += t), (this._networkStats.connectionTypeBuckets[i] += t), (this._lastSampleTimestamp = e);
    }
    constructor() {
        s(this, '_networkStats', void 0), s(this, '_lastSampleTimestamp', void 0), (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, i.zO)());
    }
}
