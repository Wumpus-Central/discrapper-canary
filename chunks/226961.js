n.d(t, {
    J$: () => C,
    Pz: () => E,
    ZP: () => H,
    fZ: () => A,
}),
    n(388685),
    n(35282),
    n(539854);
var r,
    i = n(442837),
    a = n(46973),
    o = n(570140),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = C(d.Yn.DEFAULT, u._s_.TRANSPORT, 0),
    m = _,
    h = {},
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
        videoEntropy: !0,
        audioLevel: !0,
    },
    b = 600;
function y(e, t, n) {
    return "".concat(e, ":").concat(t, ":").concat(n);
}
function O(e, t) {
    return "".concat(e, ":").concat(t);
}
class v {
    static empty() {
        return new v({});
    }
    put(e, t, n, r) {
        if ("" === r) {
            let r = p({}, this.state);
            return delete r[y(e, t, n)], new v(r);
        }
        return new v(p({ [y(e, t, n)]: r }, this.state));
    }
    get(e, t, n) {
        let r = this.state[y(e, t, n)];
        return null != r ? r : null;
    }
    constructor(e) {
        f(this, "state", void 0), (this.state = e);
    }
}
let S = v.empty(),
    I = !1,
    T = null;
function C(e, t, n) {
    return "".concat(e, ":").concat(t, ":").concat(n);
}
function A(e) {
    let [t, n] = e.split(":");
    return {
        context: t,
        section: n,
    };
}
function N() {
    Object.values(d.Yn).forEach((e) => {
        h[e] = {};
    });
}
function P() {
    null != T && (T.destroy(), (T = null));
}
function R(e) {
    var t;
    m = null != (t = e.section) ? t : _;
}
function w() {
    P();
}
function D(e) {
    null != e.channelId && (N(), g.clear());
}
function x(e) {
    if (null === e.streamId) {
        let t = O(e.userId, e.context);
        g.set(t, d.Z.NO_OVERRIDE);
    }
}
function L(e) {
    m = e.section;
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        r = {};
    for (let [i, a] of Object.entries(e)) {
        let e = t[i];
        if (Array.isArray(a))
            if ("object" == typeof a[0]) {
                let t = Array.isArray(e) ? e : [],
                    o = (r[i] = []);
                for (let e = 0; e < a.length; e++) {
                    let r = t[e],
                        i = "object" == typeof r ? r : {};
                    o.push(j(a[e], i, n));
                }
            } else r[i] = a;
        else if ("object" == typeof a && null !== a) {
            let t = "object" == typeof e && null !== e ? e : {};
            r[i] = j(a, t, n);
        } else if (i in E && "number" == typeof a) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({
                value: a,
                time: n,
            }),
                t.length > b && t.shift();
        } else r[i] = a;
    }
    return r;
}
function M(e) {
    let { connectionStats: t } = e;
    Object.values(d.Yn).forEach((e) => {
        t.filter((t) => {
            let { context: n } = t;
            return n === e;
        }).forEach((t, n) => {
            k({
                context: e,
                stats: t.stats,
                index: n,
            });
        });
    });
}
function k(e) {
    let { context: t, stats: n, index: r } = e,
        i = h[t];
    if (null != n) {
        let [e, a, o] = m.split(":");
        if (e === t && parseInt(o) === r && null != c.default.getUser(a)) {
            let {
                rtp: { inbound: e },
            } = n;
            Object.keys(e).includes(a) || (m = _);
        }
        i[r] = j(n, i[r]);
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
        r.on(a.Sh.Video, (e, t, n, i, a) => {
            o.Z.dispatch({
                type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                mediaEngineConnectionId: r.mediaEngineConnectionId,
                userId: e,
                videoSsrc: null != i ? i : 0,
                streamId: null != t ? t : "",
            });
        }),
        o.Z.wait(() => s.bA()));
}
function Z(e) {
    S = S.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function F(e) {
    let { value: t } = e;
    I = t;
}
function B(e) {
    let { userId: t, context: n, quality: r } = e;
    g.set(O(t, n), r);
}
N();
class V extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.default);
    }
    getSection() {
        return m;
    }
    getInboundStats(e, t) {
        var n, r;
        let i = null == (r = this.getAllStats(t)[0]) || null == (n = r.rtp) ? void 0 : n.inbound[e],
            a = null == i ? void 0 : i.find((e) => "video" === e.type);
        return {
            codec: null == a ? void 0 : a.codec.name,
            resolution: null == a ? void 0 : a.resolution,
            bitrateEstimate: void 0,
        };
    }
    getOutboundStats(e) {
        var t, n, r;
        let i,
            a = this.getAllStats(e),
            o = null == (t = a[0]) ? void 0 : t.transport,
            s = null == (r = a[0]) || null == (n = r.rtp) ? void 0 : n.outbound,
            l = null == s ? void 0 : s.find((e) => "video" === e.type);
        return (
            Array.isArray(null == o ? void 0 : o.availableOutgoingBitrate) &&
                o.availableOutgoingBitrate.length > 0 &&
                (i = o.availableOutgoingBitrate[o.availableOutgoingBitrate.length - 1].value),
            {
                codec: null == l ? void 0 : l.codec.name,
                resolution: null == l ? void 0 : l.resolution,
                bitrateEstimate: i,
            }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
        return Object.values(h[e]);
    }
    getVideoStreams() {
        return S;
    }
    shouldRecordNextConnection() {
        return I;
    }
    getSimulcastDebugOverride(e, t) {
        let n = O(e, t);
        return g.has(n) ? g.get(n) : d.Z.NO_OVERRIDE;
    }
}
f(V, "displayName", "RTCDebugStore");
let H = new V(o.Z, {
    RTC_DEBUG_MODAL_OPEN: R,
    RTC_DEBUG_MODAL_CLOSE: w,
    RTC_DEBUG_MODAL_SET_SECTION: L,
    RTC_DEBUG_MODAL_OPEN_REPLAY: U,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: G,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: Z,
    RTC_DEBUG_SET_RECORDING_FLAG: F,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: B,
    VOICE_CHANNEL_SELECT: D,
    RTC_CONNECTION_VIDEO: x,
    MEDIA_ENGINE_CONNECTION_STATS: M,
});
