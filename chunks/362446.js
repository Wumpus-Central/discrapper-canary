n.d(t, { Z: () => f });
var r,
    l,
    i = n(442837),
    o = n(570140),
    s = n(981631);
let a = {};
function c(e) {
    let t = a[(e = null != e ? e : "null")];
    return (
        null == t &&
            (t = a[e] =
                {
                    state: s.hes.DISCONNECTED,
                    quality: s.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null,
                }),
        t
    );
}
function u(e, t, n) {
    let r = a[(e = null != e ? e : "null")];
    return null != r ? t(r) : n;
}
class d extends (l = i.ZP.Store) {
    getConnectionState(e) {
        return u(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            s.hes.DISCONNECTED,
        );
    }
    getQuality(e) {
        return u(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            s.IE4.UNKNOWN,
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
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "OverlayRTCConnectionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "OverlayRTCConnectionStore");
let f = new d(o.Z, {
    OVERLAY_INITIALIZE: function (e) {
        a = e.rtcConnectionStates;
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
