n.d(t, {
    J$: () => N,
    Pz: () => E,
    ZP: () => H,
    fZ: () => A
}),
    n(47120),
    n(301563),
    n(653041);
var r,
    i = n(442837),
    o = n(46973),
    a = n(570140),
    s = n(304680),
    l = n(131951),
    c = n(594174),
    u = n(981631),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = N(d.Yn.DEFAULT, u._s_.TRANSPORT, 0),
    h = _,
    m = {},
    g = new Map(),
    E = {
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
    v = 600;
function b(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function y(e, t) {
    return ''.concat(e, ':').concat(t);
}
class O {
    static empty() {
        return new O({});
    }
    put(e, t, n, r) {
        if ('' === r) {
            let r = p({}, this.state);
            return delete r[b(e, t, n)], new O(r);
        }
        return new O(p({ [b(e, t, n)]: r }, this.state));
    }
    get(e, t, n) {
        let r = this.state[b(e, t, n)];
        return null != r ? r : null;
    }
    constructor(e) {
        f(this, 'state', void 0), (this.state = e);
    }
}
let S = O.empty(),
    I = !1,
    T = null;
function N(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function A(e) {
    let [t, n] = e.split(':');
    return {
        context: t,
        section: n
    };
}
function C() {
    Object.values(d.Yn).forEach((e) => {
        m[e] = {};
    });
}
function R(e) {
    Object.values(d.Yn).forEach((t) => {
        let n = t;
        e.filter((e) => {
            let { connection: t } = e;
            return t.context === n;
        }).forEach((e, t) => {
            a.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE',
                stats: e.stats,
                context: n,
                index: t,
                mediaEngineConnectionId: e.connection.mediaEngineConnectionId
            });
        });
    });
}
function P() {
    null != T && (T.destroy(), (T = null));
}
function w(e) {
    var t;
    h = null !== (t = e.section) && void 0 !== t ? t : _;
}
function D() {
    P();
}
function x(e) {
    null != e.channelId && (C(), g.clear());
}
function L(e) {
    if (null === e.streamId) {
        let t = y(e.userId, e.context);
        g.set(t, d.Z.NO_OVERRIDE);
    }
}
function M(e) {
    h = e.section;
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        r = {};
    for (let [i, o] of Object.entries(e)) {
        let e = t[i];
        if (Array.isArray(o)) {
            if ('object' == typeof o[0]) {
                let t = Array.isArray(e) ? e : [],
                    a = (r[i] = []);
                for (let e = 0; e < o.length; e++) {
                    let r = t[e],
                        i = 'object' == typeof r ? r : {};
                    a.push(k(o[e], i, n));
                }
            } else r[i] = o;
        } else if ('object' == typeof o && null !== o) {
            let t = 'object' == typeof e && null !== e ? e : {};
            r[i] = k(o, t, n);
        } else if (i in E && 'number' == typeof o) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({
                value: o,
                time: n
            }),
                t.length > v && t.shift();
        } else r[i] = o;
    }
    return r;
}
function j(e) {
    let { context: t, stats: n, index: r } = e,
        i = m[t];
    if (null != n) {
        let [e, o, a] = h.split(':');
        if (e === t && parseInt(a) === r && null != c.default.getUser(o)) {
            let {
                rtp: { inbound: e }
            } = n;
            Object.keys(e).includes(o) || (h = _);
        }
        i[r] = k(n, i[r]);
    } else delete i[r];
}
function U(e) {
    s.gl();
}
function G(e) {
    let { path: t } = e,
        n = l.Z.getMediaEngine();
    if ((P(), !n.supports(d.AN.CONNECTION_REPLAY) || 0 === t.length)) return;
    let r = n.createReplayConnection(d.Yn.DEFAULT, t);
    null != r &&
        ((T = r),
        r.on(o.Sh.Video, (e, t, n, i, o) => {
            a.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT',
                mediaEngineConnectionId: r.mediaEngineConnectionId,
                userId: e,
                videoSsrc: null != i ? i : 0,
                streamId: null != t ? t : ''
            });
        }),
        a.Z.wait(() => s.bA()));
}
function B(e) {
    S = S.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function Z(e) {
    let { value: t } = e;
    I = t;
}
function F(e) {
    let { userId: t, context: n, quality: r } = e;
    g.set(y(t, n), r);
}
C();
class V extends (r = i.ZP.Store) {
    getSection() {
        return h;
    }
    getStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
        return m[e][0];
    }
    getInboundStats(e, t) {
        var n, r;
        let i = null === (r = this.getAllStats(t)[0]) || void 0 === r ? void 0 : null === (n = r.rtp) || void 0 === n ? void 0 : n.inbound[e],
            o = null == i ? void 0 : i.find((e) => 'video' === e.type);
        return {
            codec: null == o ? void 0 : o.codec.name,
            resolution: null == o ? void 0 : o.resolution,
            bitrateEstimate: void 0
        };
    }
    getOutboundStats(e) {
        var t, n, r;
        let i;
        let o = this.getAllStats(e),
            a = null === (t = o[0]) || void 0 === t ? void 0 : t.transport,
            s = null === (r = o[0]) || void 0 === r ? void 0 : null === (n = r.rtp) || void 0 === n ? void 0 : n.outbound,
            l = null == s ? void 0 : s.find((e) => 'video' === e.type);
        return (
            Array.isArray(null == a ? void 0 : a.availableOutgoingBitrate) && a.availableOutgoingBitrate.length > 0 && (i = a.availableOutgoingBitrate[a.availableOutgoingBitrate.length - 1].value),
            {
                codec: null == l ? void 0 : l.codec.name,
                resolution: null == l ? void 0 : l.resolution,
                bitrateEstimate: i
            }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
        return Object.values(m[e]);
    }
    getVideoStreams() {
        return S;
    }
    shouldRecordNextConnection() {
        return I;
    }
    getSimulcastDebugOverride(e, t) {
        let n = y(e, t);
        return g.has(n) ? g.get(n) : d.Z.NO_OVERRIDE;
    }
}
f(V, 'displayName', 'RTCDebugStore');
let H = new V(a.Z, {
    RTC_DEBUG_MODAL_OPEN: w,
    RTC_DEBUG_MODAL_CLOSE: D,
    RTC_DEBUG_MODAL_SET_SECTION: M,
    RTC_DEBUG_MODAL_UPDATE: j,
    RTC_DEBUG_MODAL_OPEN_REPLAY: U,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: G,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: B,
    RTC_DEBUG_SET_RECORDING_FLAG: Z,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: F,
    VOICE_CHANNEL_SELECT: x,
    RTC_CONNECTION_VIDEO: L
});
l.Z.getMediaEngine().on(o.aB.ConnectionStats, R);
