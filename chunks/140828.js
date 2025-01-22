r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(379649),
    a = r(866960),
    o = r(981631);
function s(e, n, r) {
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
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : n;
}
class u {
    _initStats() {
        let e = {
            effectiveConnectionSpeedBuckets: {},
            connectionTypeBuckets: {}
        };
        return (
            Object.values(o.IWh).forEach((n) => {
                e.connectionTypeBuckets[n] = 0;
            }),
            Object.values(o.IyS).forEach((n) => {
                e.effectiveConnectionSpeedBuckets[n] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: l(e.connectionTypeBuckets[o.IWh.WIFI]),
            duration_connection_type_cellular: l(e.connectionTypeBuckets[o.IWh.CELLULAR]),
            duration_connection_type_ethernet: l(e.connectionTypeBuckets[o.IWh.ETHERNET]),
            duration_connection_type_bluetooth: l(e.connectionTypeBuckets[o.IWh.BLUETOOTH]),
            duration_connection_type_other: l(e.connectionTypeBuckets[o.IWh.OTHER]),
            duration_connection_type_unknown: l(e.connectionTypeBuckets[o.IWh.UNKNOWN]),
            duration_connection_type_none: l(e.connectionTypeBuckets[o.IWh.NONE]),
            duration_effective_connection_speed_2g: l(e.effectiveConnectionSpeedBuckets[o.IyS.TWO_G]),
            duration_effective_connection_speed_3g: l(e.effectiveConnectionSpeedBuckets[o.IyS.THREE_G]),
            duration_effective_connection_speed_4g: l(e.effectiveConnectionSpeedBuckets[o.IyS.FOUR_G]),
            duration_effective_connection_speed_5g: l(e.effectiveConnectionSpeedBuckets[o.IyS.FIVE_G]),
            duration_effective_connection_speed_unknown: l(e.effectiveConnectionSpeedBuckets[o.IyS.UNKNOWN])
        };
    }
    incrementNetworkStats(e) {
        let n = (e - this._lastSampleTimestamp) / 1000,
            r = a.Z.getEffectiveConnectionSpeed();
        r === o.IyS.SLOW_TWO_G && (r = o.IyS.TWO_G);
        let i = a.Z.getType();
        i === o.IWh.WIMAX && (i = o.IWh.WIFI), (this._networkStats.effectiveConnectionSpeedBuckets[r] += n), (this._networkStats.connectionTypeBuckets[i] += n), (this._lastSampleTimestamp = e);
    }
    constructor() {
        s(this, '_networkStats', void 0), s(this, '_lastSampleTimestamp', void 0), (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, i.zO)());
    }
}
