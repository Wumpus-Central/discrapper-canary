n.d(t, { Z: () => N }), n(724458);
var l,
    i,
    s,
    o = n(442837),
    a = n(570140),
    r = n(981631);
let c = {};
function u(e) {
    let t = c[(e = null != e ? e : 'null')];
    return (
        null == t &&
            (t = c[e] =
                {
                    state: r.hes.DISCONNECTED,
                    quality: r.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                }),
        t
    );
}
function d(e, t, n) {
    let l = c[(e = null != e ? e : 'null')];
    return null != l ? t(l) : n;
}
class h extends (l = o.ZP.Store) {
    getConnectionState(e) {
        return d(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            r.hes.DISCONNECTED
        );
    }
    getQuality(e) {
        return d(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            r.IE4.UNKNOWN
        );
    }
    getHostname(e) {
        return d(
            e,
            (e) => {
                let { hostname: t } = e;
                return t;
            },
            null
        );
    }
    getPings(e) {
        return d(
            e,
            (e) => {
                let { pings: t } = e;
                return t;
            },
            []
        );
    }
    getAveragePing(e) {
        let t = this.getPings(e);
        return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length;
    }
    getLastPing(e) {
        var t;
        let n = this.getPings(e);
        return 0 === n.length ? 0 : null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value;
    }
    getOutboundLossRate(e) {
        return d(
            e,
            (e) => {
                let { lossRate: t } = e;
                return t;
            },
            null
        );
    }
}
(s = 'OverlayRTCConnectionStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = s);
let N = new h(a.Z, {
    OVERLAY_INITIALIZE: function (e) {
        c = e.rtcConnectionStates;
    },
    RTC_CONNECTION_STATE: function (e) {
        if (null != e.streamKey) return !1;
        let t = u(e.lobbyId);
        (t.state = e.state), (t.hostname = e.hostname);
    },
    RTC_CONNECTION_PING: function (e) {
        let t = u(e.lobbyId);
        (t.pings = e.pings), (t.quality = e.quality);
    },
    RTC_CONNECTION_LOSS_RATE: function (e) {
        u(e.lobbyId).lossRate = e.lossRate;
    }
});
