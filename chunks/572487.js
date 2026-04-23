n.d(t, { A: () => d });
var i = n(311907),
    l = n(73153),
    a = n(652215);
let s = {};
function r(e) {
    let t = s[(e = e ?? "null")];
    return (
        null == t &&
            (t = s[e] =
                { state: a.S7L.DISCONNECTED, quality: a.bFR.UNKNOWN, pings: [], hostname: null, lossRate: null }),
        t
    );
}
function o(e, t, n) {
    let i = s[(e = e ?? "null")];
    return null != i ? t(i) : n;
}
class c extends i.Ay.Store {
    static displayName = "OverlayRTCConnectionStore";
    getConnectionState(e) {
        return o(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            a.S7L.DISCONNECTED,
        );
    }
    getQuality(e) {
        return o(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            a.bFR.UNKNOWN,
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
let d = new c(l.h, {
    OVERLAY_INITIALIZE: function (e) {
        s = e.rtcConnectionStates;
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
