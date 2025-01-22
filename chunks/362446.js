n(724458);
var l,
    s,
    r,
    i,
    o = n(442837),
    a = n(570140),
    c = n(981631);
let u = {};
function d(e) {
    let t = u[(e = null != e ? e : 'null')];
    return (
        null == t &&
            (t = u[e] =
                {
                    state: c.hes.DISCONNECTED,
                    quality: c.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                }),
        t
    );
}
function h(e, t, n) {
    let l = u[(e = null != e ? e : 'null')];
    return null != l ? t(l) : n;
}
class x extends (l = o.ZP.Store) {
    getConnectionState(e) {
        return h(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            c.hes.DISCONNECTED
        );
    }
    getQuality(e) {
        return h(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            c.IE4.UNKNOWN
        );
    }
    getHostname(e) {
        return h(
            e,
            (e) => {
                let { hostname: t } = e;
                return t;
            },
            null
        );
    }
    getPings(e) {
        return h(
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
        if (0 === n.length) return 0;
        return null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value;
    }
    getOutboundLossRate(e) {
        return h(
            e,
            (e) => {
                let { lossRate: t } = e;
                return t;
            },
            null
        );
    }
}
(i = 'OverlayRTCConnectionStore'),
    (r = 'displayName') in (s = x)
        ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = i),
    (t.Z = new x(a.Z, {
        OVERLAY_INITIALIZE: function (e) {
            u = e.rtcConnectionStates;
        },
        RTC_CONNECTION_STATE: function (e) {
            if (null != e.streamKey) return !1;
            let t = d(e.lobbyId);
            (t.state = e.state), (t.hostname = e.hostname);
        },
        RTC_CONNECTION_PING: function (e) {
            let t = d(e.lobbyId);
            (t.pings = e.pings), (t.quality = e.quality);
        },
        RTC_CONNECTION_LOSS_RATE: function (e) {
            d(e.lobbyId).lossRate = e.lossRate;
        }
    }));
