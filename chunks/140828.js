n.d(t, { Z: () => l });
var r = n(379649),
    i = n(866960),
    o = n(981631);
function a(e, t, n) {
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
function s(e) {
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
            Object.values(o.IWh).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(o.IyS).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: s(e.connectionTypeBuckets[o.IWh.WIFI]),
            duration_connection_type_cellular: s(e.connectionTypeBuckets[o.IWh.CELLULAR]),
            duration_connection_type_ethernet: s(e.connectionTypeBuckets[o.IWh.ETHERNET]),
            duration_connection_type_bluetooth: s(e.connectionTypeBuckets[o.IWh.BLUETOOTH]),
            duration_connection_type_other: s(e.connectionTypeBuckets[o.IWh.OTHER]),
            duration_connection_type_unknown: s(e.connectionTypeBuckets[o.IWh.UNKNOWN]),
            duration_connection_type_none: s(e.connectionTypeBuckets[o.IWh.NONE]),
            duration_effective_connection_speed_2g: s(e.effectiveConnectionSpeedBuckets[o.IyS.TWO_G]),
            duration_effective_connection_speed_3g: s(e.effectiveConnectionSpeedBuckets[o.IyS.THREE_G]),
            duration_effective_connection_speed_4g: s(e.effectiveConnectionSpeedBuckets[o.IyS.FOUR_G]),
            duration_effective_connection_speed_5g: s(e.effectiveConnectionSpeedBuckets[o.IyS.FIVE_G]),
            duration_effective_connection_speed_unknown: s(e.effectiveConnectionSpeedBuckets[o.IyS.UNKNOWN])
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1000,
            n = i.Z.getEffectiveConnectionSpeed();
        n === o.IyS.SLOW_TWO_G && (n = o.IyS.TWO_G);
        let r = i.Z.getType();
        r === o.IWh.WIMAX && (r = o.IWh.WIFI), (this._networkStats.effectiveConnectionSpeedBuckets[n] += t), (this._networkStats.connectionTypeBuckets[r] += t), (this._lastSampleTimestamp = e);
    }
    constructor() {
        a(this, '_networkStats', void 0), a(this, '_lastSampleTimestamp', void 0), (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, r.zO)());
    }
}
