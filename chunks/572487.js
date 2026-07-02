"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(652215);
let a = {};
function o(e) {
    let t = a[(e = e ?? "null")];
    return (
        null == t &&
            (t = a[e] =
                { state: s.S7L.DISCONNECTED, quality: s.bFR.UNKNOWN, pings: [], hostname: null, lossRate: null }),
        t
    );
}
function l(e, t, n) {
    let i = a[(e = e ?? "null")];
    return null != i ? t(i) : n;
}
class u extends i.Ay.Store {
    static displayName = "OverlayRTCConnectionStore";
    getConnectionState(e) {
        return l(
            e,
            (e) => {
                let { state: t } = e;
                return t;
            },
            s.S7L.DISCONNECTED,
        );
    }
    getQuality(e) {
        return l(
            e,
            (e) => {
                let { quality: t } = e;
                return t;
            },
            s.bFR.UNKNOWN,
        );
    }
    getHostname(e) {
        return l(
            e,
            (e) => {
                let { hostname: t } = e;
                return t;
            },
            null,
        );
    }
    getPings(e) {
        return l(
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
        return l(
            e,
            (e) => {
                let { lossRate: t } = e;
                return t;
            },
            null,
        );
    }
}
let c = new u(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        a = e.rtcConnectionStates;
    },
    RTC_CONNECTION_STATE: function (e) {
        if (null != e.streamKey) return !1;
        let t = o(e.lobbyId);
        (t.state = e.state), (t.hostname = e.hostname);
    },
    RTC_CONNECTION_PING: function (e) {
        let t = o(e.lobbyId);
        (t.pings = e.pings), (t.quality = e.quality);
    },
    RTC_CONNECTION_LOSS_RATE: function (e) {
        o(e.lobbyId).lossRate = e.lossRate;
    },
});
