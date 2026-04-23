n.d(t, { A: () => d });
var l = n(17928),
    i = n(228366),
    s = n(652215);
let a = {};
function r(e) {
    let t = a[(e = e ?? "null")];
    return (
        null == t &&
            (t = a[e] =
                { state: s.S7L.DISCONNECTED, quality: s.bFR.UNKNOWN, pings: [], hostname: null, lossRate: null }),
        t
    );
}
function o(e, t, n) {
    let l = a[(e = e ?? "null")];
    return null != l ? t(l) : n;
}
class c extends l.Ay.Store {
    static displayName = "OverlayRTCConnectionStore";
    getConnectionState(e) {
        return o(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            s.S7L.DISCONNECTED,
        );
    }
    getQuality(e) {
        return o(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            s.bFR.UNKNOWN,
        );
    }
    getHostname(e) {
        return o(
            e,
            (e) => {
                let { hostname: t } = e;
                return t;
            },
            null,
        );
    }
    getPings(e) {
        return o(
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
        let t = this.getPings(e);
        return 0 === t.length ? 0 : t[t.length - 1]?.value;
    }
    getOutboundLossRate(e) {
        return o(
            e,
            (e) => {
                let { lossRate: t } = e;
                return t;
            },
            null,
        );
    }
}
let d = new c(i.h, {
    OVERLAY_INITIALIZE: function (e) {
        a = e.rtcConnectionStates;
    },
    RTC_CONNECTION_STATE: function (e) {
        if (null != e.streamKey) return !1;
        let t = r(e.lobbyId);
        (t.state = e.state), (t.hostname = e.hostname);
    },
    RTC_CONNECTION_PING: function (e) {
        let t = r(e.lobbyId);
        (t.pings = e.pings), (t.quality = e.quality);
    },
    RTC_CONNECTION_LOSS_RATE: function (e) {
        r(e.lobbyId).lossRate = e.lossRate;
    },
});
