r.d(n, {
    J$: function () {
        return R;
    },
    Pz: function () {
        return y;
    },
    fZ: function () {
        return O;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(442837),
    l = r(46973),
    u = r(570140),
    c = r(304680),
    d = r(131951),
    f = r(594174),
    p = r(981631),
    h = r(65154);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = R(h.Yn.DEFAULT, p._s_.TRANSPORT, 0),
    g = m,
    E = {},
    v = new Map(),
    y = {
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
        qpSum: !0
    },
    b = 600;
function I(e, n, r) {
    return ''.concat(e, ':').concat(n, ':').concat(r);
}
function T(e, n) {
    return ''.concat(e, ':').concat(n);
}
class S {
    static empty() {
        return new S({});
    }
    put(e, n, r, i) {
        if ('' === i) {
            let i = { ...this.state };
            return delete i[I(e, n, r)], new S(i);
        }
        return new S({
            [I(e, n, r)]: i,
            ...this.state
        });
    }
    get(e, n, r) {
        let i = this.state[I(e, n, r)];
        return null != i ? i : null;
    }
    constructor(e) {
        _(this, 'state', void 0), (this.state = e);
    }
}
let A = S.empty(),
    C = !1,
    N = null;
function R(e, n, r) {
    return ''.concat(e, ':').concat(n, ':').concat(r);
}
function O(e) {
    let [n, r] = e.split(':');
    return {
        context: n,
        section: r
    };
}
function D() {
    Object.values(h.Yn).forEach((e) => {
        E[e] = {};
    });
}
function x(e) {
    Object.values(h.Yn).forEach((n) => {
        let r = n;
        e.filter((e) => {
            let { connection: n } = e;
            return n.context === r;
        }).forEach((e, n) => {
            u.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE',
                stats: e.stats,
                context: r,
                index: n,
                mediaEngineConnectionId: e.connection.mediaEngineConnectionId
            });
        });
    });
}
function L() {
    null != N && (N.destroy(), (N = null));
}
function w(e) {
    var n;
    g = null !== (n = e.section) && void 0 !== n ? n : m;
}
function P() {
    L();
}
function M(e) {
    null != e.channelId && (D(), v.clear());
}
function k(e) {
    if (null === e.streamId) {
        let n = T(e.userId, e.context);
        v.set(n, h.Z.NO_OVERRIDE);
    }
}
function U(e) {
    g = e.section;
}
function B(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        i = {};
    for (let [a, o] of Object.entries(e)) {
        let e = n[a];
        if (Array.isArray(o)) {
            if ('object' == typeof o[0]) {
                let n = Array.isArray(e) ? e : [],
                    s = (i[a] = []);
                for (let e = 0; e < o.length; e++) {
                    let i = n[e],
                        a = 'object' == typeof i ? i : {};
                    s.push(B(o[e], a, r));
                }
            } else i[a] = o;
        } else if ('object' == typeof o && null !== o) {
            let n = 'object' == typeof e && null !== e ? e : {};
            i[a] = B(o, n, r);
        } else if (a in y && 'number' == typeof o) {
            let n = (i[a] = Array.isArray(e) ? e : []);
            n.push({
                value: o,
                time: r
            }),
                n.length > b && n.shift();
        } else i[a] = o;
    }
    return i;
}
function G(e) {
    let { context: n, stats: r, index: i } = e,
        a = E[n];
    if (null != r) {
        let [e, o, s] = g.split(':');
        if (e === n && parseInt(s) === i && null != f.default.getUser(o)) {
            let {
                rtp: { inbound: e }
            } = r;
            !Object.keys(e).includes(o) && (g = m);
        }
        a[i] = B(r, a[i]);
    } else delete a[i];
}
function Z(e) {
    c.gl();
}
function F(e) {
    let { path: n } = e,
        r = d.Z.getMediaEngine();
    if ((L(), !r.supports(h.AN.CONNECTION_REPLAY) || 0 === n.length)) return;
    let i = r.createReplayConnection(h.Yn.DEFAULT, n);
    null != i &&
        ((N = i),
        i.on(l.Sh.Video, (e, n, r, a, o) => {
            u.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT',
                mediaEngineConnectionId: i.mediaEngineConnectionId,
                userId: e,
                videoSsrc: null != a ? a : 0,
                streamId: null != n ? n : ''
            });
        }),
        u.Z.wait(() => c.bA()));
}
function V(e) {
    A = A.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function j(e) {
    let { value: n } = e;
    C = n;
}
function H(e) {
    let { userId: n, context: r, quality: i } = e;
    v.set(T(n, r), i);
}
D();
class Y extends (i = s.ZP.Store) {
    getSection() {
        return g;
    }
    getStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return E[e][0];
    }
    getInboundStats(e, n) {
        var r, i;
        let a = null === (i = this.getAllStats(n)[0]) || void 0 === i ? void 0 : null === (r = i.rtp) || void 0 === r ? void 0 : r.inbound[e],
            o = null == a ? void 0 : a.find((e) => 'video' === e.type);
        return {
            codec: null == o ? void 0 : o.codec.name,
            resolution: null == o ? void 0 : o.resolution,
            bitrateEstimate: void 0
        };
    }
    getOutboundStats(e) {
        var n, r, i;
        let a;
        let o = this.getAllStats(e),
            s = null === (n = o[0]) || void 0 === n ? void 0 : n.transport,
            l = null === (i = o[0]) || void 0 === i ? void 0 : null === (r = i.rtp) || void 0 === r ? void 0 : r.outbound,
            u = null == l ? void 0 : l.find((e) => 'video' === e.type);
        return (
            Array.isArray(null == s ? void 0 : s.availableOutgoingBitrate) && s.availableOutgoingBitrate.length > 0 && (a = s.availableOutgoingBitrate[s.availableOutgoingBitrate.length - 1].value),
            {
                codec: null == u ? void 0 : u.codec.name,
                resolution: null == u ? void 0 : u.resolution,
                bitrateEstimate: a
            }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return Object.values(E[e]);
    }
    getVideoStreams() {
        return A;
    }
    shouldRecordNextConnection() {
        return C;
    }
    getSimulcastDebugOverride(e, n) {
        let r = T(e, n);
        return v.has(r) ? v.get(r) : h.Z.NO_OVERRIDE;
    }
}
_(Y, 'displayName', 'RTCDebugStore'),
    (n.ZP = new Y(u.Z, {
        RTC_DEBUG_MODAL_OPEN: w,
        RTC_DEBUG_MODAL_CLOSE: P,
        RTC_DEBUG_MODAL_SET_SECTION: U,
        RTC_DEBUG_MODAL_UPDATE: G,
        RTC_DEBUG_MODAL_OPEN_REPLAY: Z,
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: F,
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: V,
        RTC_DEBUG_SET_RECORDING_FLAG: j,
        RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
        VOICE_CHANNEL_SELECT: M,
        RTC_CONNECTION_VIDEO: k
    })),
    d.Z.getMediaEngine().on(l.aB.ConnectionStats, x);
