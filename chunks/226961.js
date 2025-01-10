r.d(n, {
    J$: function () {
        return R;
    },
    Pz: function () {
        return I;
    },
    fZ: function () {
        return O;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(46973),
    u = r(570140),
    c = r(304680),
    d = r(131951),
    f = r(594174),
    _ = r(981631),
    h = r(65154);
function p(e, n, r) {
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
let m = R(h.Yn.DEFAULT, _._s_.TRANSPORT, 0),
    g = m,
    E = {},
    v = new Map(),
    I = {
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
        inboundBitrateEstimate: !0,
        packetsLost: !0,
        packetsReceived: !0,
        packetsSent: !0,
        ping: !0
    },
    T = 600;
function b(e, n, r) {
    return ''.concat(e, ':').concat(n, ':').concat(r);
}
function y(e, n) {
    return ''.concat(e, ':').concat(n);
}
class S {
    static empty() {
        return new S({});
    }
    put(e, n, r, i) {
        if ('' === i) {
            let i = { ...this.state };
            return delete i[b(e, n, r)], new S(i);
        }
        return new S({
            [b(e, n, r)]: i,
            ...this.state
        });
    }
    get(e, n, r) {
        let i = this.state[b(e, n, r)];
        return null != i ? i : null;
    }
    constructor(e) {
        p(this, 'state', void 0), (this.state = e);
    }
}
let A = S.empty(),
    N = !1,
    C = null;
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
function L(e) {
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
function x() {
    null != C && (C.destroy(), (C = null));
}
function w(e) {
    var n;
    g = null !== (n = e.section) && void 0 !== n ? n : m;
}
function P() {
    x();
}
function M(e) {
    null != e.channelId && (D(), v.clear());
}
function k(e) {
    if (null === e.streamId) {
        let n = y(e.userId, e.context);
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
    for (let [a, s] of Object.entries(e)) {
        let e = n[a];
        if (Array.isArray(s)) {
            if ('object' == typeof s[0]) {
                let n = Array.isArray(e) ? e : [],
                    o = (i[a] = []);
                for (let e = 0; e < s.length; e++) {
                    let i = n[e],
                        a = 'object' == typeof i ? i : {};
                    o.push(B(s[e], a, r));
                }
            } else i[a] = s;
        } else if ('object' == typeof s && null !== s) {
            let n = 'object' == typeof e && null !== e ? e : {};
            i[a] = B(s, n, r);
        } else if (a in I && 'number' == typeof s) {
            let n = (i[a] = Array.isArray(e) ? e : []);
            n.push({
                value: s,
                time: r
            }),
                n.length > T && n.shift();
        } else i[a] = s;
    }
    return i;
}
function G(e) {
    let { context: n, stats: r, index: i } = e,
        a = E[n];
    if (null != r) {
        let [e, s, o] = g.split(':');
        if (e === n && parseInt(o) === i && null != f.default.getUser(s)) {
            let {
                rtp: { inbound: e }
            } = r;
            !Object.keys(e).includes(s) && (g = m);
        }
        a[i] = B(r, a[i]);
    } else delete a[i];
}
function F(e) {
    c.gl();
}
function Z(e) {
    let { path: n } = e,
        r = d.Z.getMediaEngine();
    if ((x(), !r.supports(h.AN.CONNECTION_REPLAY) || 0 === n.length)) return;
    let i = r.createReplayConnection(h.Yn.DEFAULT, n);
    null != i &&
        ((C = i),
        i.on(l.Sh.Video, (e, n, r, a, s) => {
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
    N = n;
}
function H(e) {
    let { userId: n, context: r, quality: i } = e;
    v.set(y(n, r), i);
}
D();
class Y extends (i = o.ZP.Store) {
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
            s = null == a ? void 0 : a.find((e) => 'video' === e.type);
        return {
            codec: null == s ? void 0 : s.codec.name,
            resolution: null == s ? void 0 : s.resolution,
            bitrateEstimate: void 0
        };
    }
    getOutboundStats(e) {
        var n, r, i;
        let a;
        let s = this.getAllStats(e),
            o = null === (n = s[0]) || void 0 === n ? void 0 : n.transport,
            l = null === (i = s[0]) || void 0 === i ? void 0 : null === (r = i.rtp) || void 0 === r ? void 0 : r.outbound,
            u = null == l ? void 0 : l.find((e) => 'video' === e.type);
        return (
            Array.isArray(null == o ? void 0 : o.availableOutgoingBitrate) && o.availableOutgoingBitrate.length > 0 && (a = o.availableOutgoingBitrate[o.availableOutgoingBitrate.length - 1].value),
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
        return N;
    }
    getSimulcastDebugOverride(e, n) {
        let r = y(e, n);
        return v.has(r) ? v.get(r) : h.Z.NO_OVERRIDE;
    }
}
p(Y, 'displayName', 'RTCDebugStore'),
    (n.ZP = new Y(u.Z, {
        RTC_DEBUG_MODAL_OPEN: w,
        RTC_DEBUG_MODAL_CLOSE: P,
        RTC_DEBUG_MODAL_SET_SECTION: U,
        RTC_DEBUG_MODAL_UPDATE: G,
        RTC_DEBUG_MODAL_OPEN_REPLAY: F,
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: Z,
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: V,
        RTC_DEBUG_SET_RECORDING_FLAG: j,
        RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
        VOICE_CHANNEL_SELECT: M,
        RTC_CONNECTION_VIDEO: k
    })),
    d.Z.getMediaEngine().on(l.aB.ConnectionStats, L);
