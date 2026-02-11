"use strict";
n.d(t, { Ay: () => j, Bz: () => C, Xi: () => v, iA: () => p }), n(321073);
var r = n(311907),
    i = n(205693),
    a = n(73153),
    s = n(233545),
    o = n(430452),
    l = n(287809),
    u = n(652215),
    c = n(731854);
let d = v(c.x.DEFAULT, u.zWA.TRANSPORT, 0),
    _ = d,
    f = {},
    h = new Map(),
    p = {
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
    g = 600;
function E(e, t, n) {
    return `${e}:${t}:${n}`;
}
function A(e, t) {
    return `${e}:${t}`;
}
class I {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new I({});
    }
    put(e, t, n, r) {
        if ("" === r) {
            let r = { ...this.state };
            return delete r[E(e, t, n)], new I(r);
        }
        return new I({ [E(e, t, n)]: r, ...this.state });
    }
    get(e, t, n) {
        let r = this.state[E(e, t, n)];
        return null != r ? r : null;
    }
}
let T = I.empty(),
    y = !1,
    S = null;
function v(e, t, n) {
    return `${e}:${t}:${n}`;
}
function C(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function b() {
    Object.values(c.x).forEach((e) => {
        f[e] = {};
    });
}
function N() {
    null != S && (S.destroy(), (S = null));
}
function R(e) {
    _ = e.section ?? d;
}
function O() {
    N();
}
function D(e) {
    null != e.channelId && (b(), h.clear());
}
function L(e) {
    if (null === e.streamId) {
        let t = A(e.userId, e.context);
        h.set(t, c.r8.NO_OVERRIDE);
    }
}
function w(e) {
    _ = e.section;
}
function x(e) {
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
                    s.push(x(a[e], i, n));
                }
            } else r[i] = a;
        else if ("object" == typeof a && null !== a) {
            let t = "object" == typeof e && null !== e ? e : {};
            r[i] = x(a, t, n);
        } else if (i in p && "number" == typeof a) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({ value: a, time: n }), t.length > g && t.shift();
        } else r[i] = a;
    }
    return r;
}
function P(e) {
    let { connectionStats: t } = e;
    Object.values(c.x).forEach((e) => {
        t.filter((t) => {
            let { context: n } = t;
            return n === e;
        }).forEach((t, n) => {
            M({ context: e, stats: t.stats, index: n });
        });
    });
}
function M(e) {
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
        i[r] = x(n, i[r]);
    } else delete i[r];
}
function k(e) {
    s._w();
}
function U(e) {
    let { path: t } = e,
        n = o.Ay.getMediaEngine();
    if ((N(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
    let r = n.createReplayConnection(c.x.DEFAULT, t);
    null != r &&
        ((S = r),
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
function G(e) {
    T = T.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function F(e) {
    let { value: t } = e;
    y = t;
}
function V(e) {
    let { userId: t, context: n, quality: r } = e;
    h.set(A(t, n), r);
}
b();
class B extends r.Ay.Store {
    initialize() {
        this.waitFor(o.Ay, l.default);
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
        return T;
    }
    shouldRecordNextConnection() {
        return y;
    }
    getSimulcastDebugOverride(e, t) {
        let n = A(e, t);
        return h.has(n) ? h.get(n) : c.r8.NO_OVERRIDE;
    }
}
let j = new B(a.h, {
    RTC_DEBUG_MODAL_OPEN: R,
    RTC_DEBUG_MODAL_CLOSE: O,
    RTC_DEBUG_MODAL_SET_SECTION: w,
    RTC_DEBUG_MODAL_OPEN_REPLAY: k,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: U,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: G,
    RTC_DEBUG_SET_RECORDING_FLAG: F,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: V,
    VOICE_CHANNEL_SELECT: D,
    RTC_CONNECTION_VIDEO: L,
    MEDIA_ENGINE_CONNECTION_STATS: P,
});
