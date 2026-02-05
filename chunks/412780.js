"use strict";
n.d(t, { Ay: () => B, Bz: () => v, Xi: () => S, iA: () => h }), n(321073);
var r = n(311907),
    i = n(205693),
    a = n(73153),
    s = n(233545),
    o = n(430452),
    l = n(287809),
    u = n(652215),
    c = n(731854);
let d = S(c.x.DEFAULT, u.zWA.TRANSPORT, 0),
    _ = d,
    f = {},
    p = new Map(),
    h = {
        availableOutgoingBitrate: !0,
        bitrate: !0,
        bitrateTarget: !0,
        bytesReceived: !0,
        bytesSent: !0,
        encoderQualityPsnr: !0,
        encoderQualityVmaf: !0,
        encodeUsage: !0,
        frameRateDecode: !0,
        frameRateEncode: !0,
        frameRateInput: !0,
        frameRateNetwork: !0,
        frameRateRender: !0,
        keyFramesEncoded: !0,
        keyFramesDecoded: !0,
        inboundBitrateEstimate: !0,
        packetsLost: !0,
        packetsReceived: !0,
        packetsSent: !0,
        ping: !0,
        qpSum: !0,
        videoEntropy: !0,
        audioLevel: !0,
    },
    m = 600;
function g(e, t, n) {
    return `${e}:${t}:${n}`;
}
function E(e, t) {
    return `${e}:${t}`;
}
class A {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new A({});
    }
    put(e, t, n, r) {
        if ("" === r) {
            let r = { ...this.state };
            return delete r[g(e, t, n)], new A(r);
        }
        return new A({ [g(e, t, n)]: r, ...this.state });
    }
    get(e, t, n) {
        let r = this.state[g(e, t, n)];
        return null != r ? r : null;
    }
}
let I = A.empty(),
    T = !1,
    y = null;
function S(e, t, n) {
    return `${e}:${t}:${n}`;
}
function v(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function C() {
    Object.values(c.x).forEach((e) => {
        f[e] = {};
    });
}
function b() {
    null != y && (y.destroy(), (y = null));
}
function N(e) {
    _ = e.section ?? d;
}
function R() {
    b();
}
function O(e) {
    null != e.channelId && (C(), p.clear());
}
function D(e) {
    if (null === e.streamId) {
        let t = E(e.userId, e.context);
        p.set(t, c.r8.NO_OVERRIDE);
    }
}
function L(e) {
    _ = e.section;
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        r = {};
    for (let [i, a] of Object.entries(e)) {
        let e = t[i];
        if (Array.isArray(a))
            if ("object" == typeof a[0]) {
                let t = Array.isArray(e) ? e : [],
                    s = (r[i] = []);
                for (let e = 0; e < a.length; e++) {
                    let r = t[e],
                        i = "object" == typeof r ? r : {};
                    s.push(w(a[e], i, n));
                }
            } else r[i] = a;
        else if ("object" == typeof a && null !== a) {
            let t = "object" == typeof e && null !== e ? e : {};
            r[i] = w(a, t, n);
        } else if (i in h && "number" == typeof a) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({ value: a, time: n }), t.length > m && t.shift();
        } else r[i] = a;
    }
    return r;
}
function x(e) {
    let { connectionStats: t } = e;
    Object.values(c.x).forEach((e) => {
        t.filter((t) => {
            let { context: n } = t;
            return n === e;
        }).forEach((t, n) => {
            P({ context: e, stats: t.stats, index: n });
        });
    });
}
function P(e) {
    let { context: t, stats: n, index: r } = e,
        i = f[t];
    if (null != n) {
        let [e, a, s] = _.split(":");
        if (e === t && parseInt(s) === r && null != l.default.getUser(a)) {
            let {
                rtp: { inbound: e },
            } = n;
            Object.keys(e).includes(a) || (_ = d);
        }
        i[r] = w(n, i[r]);
    } else delete i[r];
}
function M(e) {
    s._w();
}
function k(e) {
    let { path: t } = e,
        n = o.A.getMediaEngine();
    if ((b(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
    let r = n.createReplayConnection(c.x.DEFAULT, t);
    null != r &&
        ((y = r),
        r.on(i.yq.Video, (e, t, n, i, s) => {
            a.h.dispatch({
                type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                mediaEngineConnectionId: r.mediaEngineConnectionId,
                userId: e,
                videoSsrc: i ?? 0,
                streamId: t ?? "",
            });
        }),
        a.h.wait(() => s.ho()));
}
function U(e) {
    I = I.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function G(e) {
    let { value: t } = e;
    T = t;
}
function V(e) {
    let { userId: t, context: n, quality: r } = e;
    p.set(E(t, n), r);
}
C();
class F extends r.Ay.Store {
    initialize() {
        this.waitFor(o.A, l.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return _;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            r = n[0]?.rtp?.inbound[e],
            i = r?.find((e) => "video" === e.type);
        return { codec: i?.codec.name, resolution: i?.resolution, bitrateEstimate: void 0 };
    }
    getOutboundStats(e) {
        let t,
            n = this.getAllStats(e),
            r = n[0]?.transport,
            i = n[0]?.rtp?.outbound,
            a = i?.find((e) => "video" === e.type);
        return (
            Array.isArray(r?.availableOutgoingBitrate) &&
                r.availableOutgoingBitrate.length > 0 &&
                (t = r.availableOutgoingBitrate[r.availableOutgoingBitrate.length - 1].value),
            { codec: a?.codec.name, resolution: a?.resolution, bitrateEstimate: t }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return Object.values(f[e]);
    }
    getVideoStreams() {
        return I;
    }
    shouldRecordNextConnection() {
        return T;
    }
    getSimulcastDebugOverride(e, t) {
        let n = E(e, t);
        return p.has(n) ? p.get(n) : c.r8.NO_OVERRIDE;
    }
}
let B = new F(a.h, {
    RTC_DEBUG_MODAL_OPEN: N,
    RTC_DEBUG_MODAL_CLOSE: R,
    RTC_DEBUG_MODAL_SET_SECTION: L,
    RTC_DEBUG_MODAL_OPEN_REPLAY: M,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: k,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: U,
    RTC_DEBUG_SET_RECORDING_FLAG: G,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: V,
    VOICE_CHANNEL_SELECT: O,
    RTC_CONNECTION_VIDEO: D,
    MEDIA_ENGINE_CONNECTION_STATS: x,
});
