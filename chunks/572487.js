n.d(t, { A: () => f });
var l,
    r,
    i = n(311907),
    a = n(73153),
    s = n(652215);
let o = {};
function c(e) {
    let t = o[(e = null != e ? e : "null")];
    return (
        null == t &&
            (t = o[e] =
                {
                    state: s.S7L.DISCONNECTED,
                    quality: s.bFR.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null,
                }),
        t
    );
}
function u(e, t, n) {
    let l = o[(e = null != e ? e : "null")];
    return null != l ? t(l) : n;
}
class d extends (r = i.Ay.Store) {
    getConnectionState(e) {
        return u(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            s.S7L.DISCONNECTED,
        );
    }
    getQuality(e) {
        return u(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            s.bFR.UNKNOWN,
        );
    }
    getHostname(e) {
        return u(
            e,
            (e) => {
                let { hostname: t } = e;
                return t;
            },
            null,
        );
    }
    getPings(e) {
        return u(
            e,
            (e) => {
                let { pings: t } = e;
                return t;
            },
            [],
        );
    }
    getAveragePing(e) {
        let t = this.getPings(e);
        return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length;
    }
    getLastPing(e) {
        var t;
        let n = this.getPings(e);
        return 0 === n.length ? 0 : null == (t = n[n.length - 1]) ? void 0 : t.value;
    }
    getOutboundLossRate(e) {
        return u(
            e,
            (e) => {
                let { lossRate: t } = e;
                return t;
            },
            null,
        );
    }
}
(l = "displayName") in d
    ? Object.defineProperty(d, l, {
          value: "OverlayRTCConnectionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[l] = "OverlayRTCConnectionStore");
let f = new d(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        o = e.rtcConnectionStates;
    },
    RTC_CONNECTION_STATE: function (e) {
        if (null != e.streamKey) return !1;
        let t = c(e.lobbyId);
        (t.state = e.state), (t.hostname = e.hostname);
    },
    RTC_CONNECTION_PING: function (e) {
        let t = c(e.lobbyId);
        (t.pings = e.pings), (t.quality = e.quality);
    },
    RTC_CONNECTION_LOSS_RATE: function (e) {
        c(e.lobbyId).lossRate = e.lossRate;
    },
});
