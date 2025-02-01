n.d(t, {
    J$: () => A,
    Pz: () => g,
    ZP: () => j,
    fZ: () => N
}),
    n(47120),
    n(653041);
var i,
    r = n(442837),
    a = n(46973),
    s = n(570140),
    o = n(304680),
    l = n(131951),
    u = n(594174),
    c = n(981631),
    d = n(65154);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = A(d.Yn.DEFAULT, c._s_.TRANSPORT, 0),
    p = _,
    h = {},
    m = new Map(),
    g = {
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
        videoEntropy: !0
    },
    E = 600;
function v(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function y(e, t) {
    return ''.concat(e, ':').concat(t);
}
class I {
    static empty() {
        return new I({});
    }
    put(e, t, n, i) {
        if ('' === i) {
            let i = { ...this.state };
            return delete i[v(e, t, n)], new I(i);
        }
        return new I({
            [v(e, t, n)]: i,
            ...this.state
        });
    }
    get(e, t, n) {
        let i = this.state[v(e, t, n)];
        return null != i ? i : null;
    }
    constructor(e) {
        f(this, 'state', void 0), (this.state = e);
    }
}
let T = I.empty(),
    b = !1,
    S = null;
function A(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function N(e) {
    let [t, n] = e.split(':');
    return {
        context: t,
        section: n
    };
}
function C() {
    Object.values(d.Yn).forEach((e) => {
        h[e] = {};
    });
}
function R(e) {
    Object.values(d.Yn).forEach((t) => {
        let n = t;
        e.filter((e) => {
            let { connection: t } = e;
            return t.context === n;
        }).forEach((e, t) => {
            s.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE',
                stats: e.stats,
                context: n,
                index: t,
                mediaEngineConnectionId: e.connection.mediaEngineConnectionId
            });
        });
    });
}
function O() {
    null != S && (S.destroy(), (S = null));
}
function D(e) {
    var t;
    p = null !== (t = e.section) && void 0 !== t ? t : _;
}
function x() {
    O();
}
function L(e) {
    null != e.channelId && (C(), m.clear());
}
function P(e) {
    if (null === e.streamId) {
        let t = y(e.userId, e.context);
        m.set(t, d.Z.NO_OVERRIDE);
    }
}
function w(e) {
    p = e.section;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        i = {};
    for (let [r, a] of Object.entries(e)) {
        let e = t[r];
        if (Array.isArray(a)) {
            if ('object' == typeof a[0]) {
                let t = Array.isArray(e) ? e : [],
                    s = (i[r] = []);
                for (let e = 0; e < a.length; e++) {
                    let i = t[e],
                        r = 'object' == typeof i ? i : {};
                    s.push(M(a[e], r, n));
                }
            } else i[r] = a;
        } else if ('object' == typeof a && null !== a) {
            let t = 'object' == typeof e && null !== e ? e : {};
            i[r] = M(a, t, n);
        } else if (r in g && 'number' == typeof a) {
            let t = (i[r] = Array.isArray(e) ? e : []);
            t.push({
                value: a,
                time: n
            }),
                t.length > E && t.shift();
        } else i[r] = a;
    }
    return i;
}
function k(e) {
    let { context: t, stats: n, index: i } = e,
        r = h[t];
    if (null != n) {
        let [e, a, s] = p.split(':');
        if (e === t && parseInt(s) === i && null != u.default.getUser(a)) {
            let {
                rtp: { inbound: e }
            } = n;
            Object.keys(e).includes(a) || (p = _);
        }
        r[i] = M(n, r[i]);
    } else delete r[i];
}
function U(e) {
    o.gl();
}
function G(e) {
    let { path: t } = e,
        n = l.Z.getMediaEngine();
    if ((O(), !n.supports(d.AN.CONNECTION_REPLAY) || 0 === t.length)) return;
    let i = n.createReplayConnection(d.Yn.DEFAULT, t);
    null != i &&
        ((S = i),
        i.on(a.Sh.Video, (e, t, n, r, a) => {
            s.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT',
                mediaEngineConnectionId: i.mediaEngineConnectionId,
                userId: e,
                videoSsrc: null != r ? r : 0,
                streamId: null != t ? t : ''
            });
        }),
        s.Z.wait(() => o.bA()));
}
function B(e) {
    T = T.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function Z(e) {
    let { value: t } = e;
    b = t;
}
function F(e) {
    let { userId: t, context: n, quality: i } = e;
    m.set(y(t, n), i);
}
C();
class V extends (i = r.ZP.Store) {
    getSection() {
        return p;
    }
    getStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
        return h[e][0];
    }
    getInboundStats(e, t) {
        var n, i;
        let r = null === (i = this.getAllStats(t)[0]) || void 0 === i ? void 0 : null === (n = i.rtp) || void 0 === n ? void 0 : n.inbound[e],
            a = null == r ? void 0 : r.find((e) => 'video' === e.type);
        return {
            codec: null == a ? void 0 : a.codec.name,
            resolution: null == a ? void 0 : a.resolution,
            bitrateEstimate: void 0
        };
    }
    getOutboundStats(e) {
        var t, n, i;
        let r;
        let a = this.getAllStats(e),
            s = null === (t = a[0]) || void 0 === t ? void 0 : t.transport,
            o = null === (i = a[0]) || void 0 === i ? void 0 : null === (n = i.rtp) || void 0 === n ? void 0 : n.outbound,
            l = null == o ? void 0 : o.find((e) => 'video' === e.type);
        return (
            Array.isArray(null == s ? void 0 : s.availableOutgoingBitrate) && s.availableOutgoingBitrate.length > 0 && (r = s.availableOutgoingBitrate[s.availableOutgoingBitrate.length - 1].value),
            {
                codec: null == l ? void 0 : l.codec.name,
                resolution: null == l ? void 0 : l.resolution,
                bitrateEstimate: r
            }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
        return Object.values(h[e]);
    }
    getVideoStreams() {
        return T;
    }
    shouldRecordNextConnection() {
        return b;
    }
    getSimulcastDebugOverride(e, t) {
        let n = y(e, t);
        return m.has(n) ? m.get(n) : d.Z.NO_OVERRIDE;
    }
}
f(V, 'displayName', 'RTCDebugStore');
let j = new V(s.Z, {
    RTC_DEBUG_MODAL_OPEN: D,
    RTC_DEBUG_MODAL_CLOSE: x,
    RTC_DEBUG_MODAL_SET_SECTION: w,
    RTC_DEBUG_MODAL_UPDATE: k,
    RTC_DEBUG_MODAL_OPEN_REPLAY: U,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: G,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: B,
    RTC_DEBUG_SET_RECORDING_FLAG: Z,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: F,
    VOICE_CHANNEL_SELECT: L,
    RTC_CONNECTION_VIDEO: P
});
l.Z.getMediaEngine().on(a.aB.ConnectionStats, R);
