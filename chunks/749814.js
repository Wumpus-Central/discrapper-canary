let n, a, o;
t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162);
var i,
    l,
    s,
    u = t(941426),
    d =
        (((i = {})[(i.INITIALIZE = 0)] = "INITIALIZE"),
        (i[(i.RTC_TRANSFORM = 1)] = "RTC_TRANSFORM"),
        (i[(i.SET_KEY_RATCHET = 2)] = "SET_KEY_RATCHET"),
        (i[(i.UPDATE_SSRC = 3)] = "UPDATE_SSRC"),
        (i[(i.UPDATE_CODECS = 4)] = "UPDATE_CODECS"),
        (i[(i.DESTROY_USER = 5)] = "DESTROY_USER"),
        i),
    c = (((l = {})[(l.ENCRYPT = 0)] = "ENCRYPT"), (l[(l.DECRYPT = 1)] = "DECRYPT"), l),
    f = (((s = {})[(s.PROTOCOL_VERSION_CHANGED = 0)] = "PROTOCOL_VERSION_CHANGED"), s),
    p = t(214958),
    y = t.n(p);
let C = parseInt(y().version ?? "0", 10),
    T = null != y().ua && y().ua.indexOf("OculusBrowser") > -1;
(() => {
    if (!("u" > typeof window) || null != window.WebSocket) return y().name;
})(),
    T ||
        ("Firefox" === y().name && C >= 80) ||
        ("Chrome" === y().name && C >= 37) ||
        ("Opera" === y().name && C >= 66) ||
        ("Node.js" === y().name && C >= 6) ||
        ("Electron" === y().name && C >= 1) ||
        ("Safari" === y().name && C >= 13) ||
        y().name,
    "Chrome" === y().name ||
        "Safari" === y().name ||
        ("Firefox" === y().name && C >= 80) ||
        "Opera" === y().name ||
        y().name,
    "u" > typeof RTCPeerConnection && RTCPeerConnection.prototype.addTransceiver,
    "u" > typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || RTCRtpSender.prototype),
    ("Chrome" === y().name && C >= 58) || ("Safari" === y().name && C >= 15) || y().name,
    ("Chrome" === y().name && C >= 72) ||
        ("Safari" === y().name && C >= 11) ||
        ("Opera" === y().name && C >= 60) ||
        y().name;
let S = new u.Vy("LibDaveManager"),
    E = null,
    R = {
        onRuntimeInitialized: () => {
            S.info("DAVE loaded");
        },
    },
    m = new u.Vy("EncryptionWorker");
(0, u.$o)(u.gZ);
let b = "uninitialized",
    h = new Map(),
    A = new Map(),
    w = [];
function O(e) {
    let { data: r } = e;
    if ("initialized" !== b && r.type !== d.INITIALIZE) return void w.push(e);
    switch (r.type) {
        case d.INITIALIZE:
            P();
            break;
        case d.RTC_TRANSFORM:
            g(r);
            break;
        case d.SET_KEY_RATCHET:
            !(function (e) {
                let { userId: r, operation: t, protocolVersion: a, keyRatchet: o } = e,
                    i = A.get(r);
                null == i && ((i = { audioSSRC: 0, videoSSRCs: [], cryptor: null }), A.set(r, i));
                let l = i.cryptor;
                if (null == l) {
                    if (t === c.ENCRYPT) {
                        let e = new n.Encryptor();
                        e.SetProtocolVersionChangedCallback(() => {
                            _(e.GetProtocolVersion());
                        }),
                            _(e.GetProtocolVersion()),
                            (l = e);
                    } else l = new n.Decryptor();
                    i.cryptor = l;
                }
                if (t === c.ENCRYPT) {
                    let e = l;
                    e.SetPassthroughMode(!o && a === n.kDisabledVersion), e.SetKeyRatchet(o);
                } else {
                    let e = l;
                    e.TransitionToPassthroughMode(!o && a === n.kDisabledVersion), e.TransitionToKeyRatchet(o);
                }
            })(r);
            break;
        case d.UPDATE_SSRC:
            !(function (e) {
                let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
                    a = [t, ...n],
                    o = A.get(r);
                for (let e of (null == o && ((o = { audioSSRC: t, videoSSRCs: n, cryptor: null }), A.set(r, o)),
                [o.audioSSRC, ...o.videoSSRCs]))
                    a.includes(e) || h.get(e) !== r || h.delete(e);
                for (let e of a) e > 0 && h.set(e, r);
                (o.audioSSRC = t), (o.videoSSRCs = n);
            })(r);
            break;
        case d.UPDATE_CODECS:
            !(function (e) {
                let { audioCodec: r, videoCodec: t } = e;
                (a = D(r)), (o = D(t));
            })(r);
            break;
        case d.DESTROY_USER:
            !(function (e) {
                let { userId: r } = e,
                    t = A.get(r);
                if (null == t) return;
                A.delete(r);
                let { audioSSRC: n, videoSSRCs: a } = t;
                for (let e of [n, ...a]) h.get(e) === r && h.delete(e);
            })(r);
            break;
        default:
            throw (m.error("DAVE worker unknown message type"), Error("Unsupported message type"));
    }
}
async function P() {
    if ("uninitialized" === b)
        for (let e of ((b = "initializing"),
        (n = await (null != E
            ? E
            : (E = new Promise((e, r) => {
                  Promise.all([t.e("95625"), t.e("174086"), t.e("563197"), t.e("218269"), t.e("116566")])
                      .then(t.bind(t, 22389))
                      .then((t) => {
                          let { DaveModuleFactory: n } = t;
                          n(R)
                              .then((r) => {
                                  S.info("Successfully initialized DAVE"), e(r);
                              })
                              .catch((e) => {
                                  S.error("Failed to initialize DAVE", e), r(e);
                              });
                      })
                      .catch((e) => {
                          S.error("Failed to load DAVE module", e), r(e);
                      });
              })))),
        (b = "initialized"),
        w))
            O(e);
}
function g(e) {
    let { readable: r, writable: t } = e,
        n = new TransformStream({ transform: v });
    r.pipeThrough(n).pipeTo(t);
}
function _(e) {
    postMessage({ type: f.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
}
function v(e, r) {
    try {
        let t,
            i = e.getMetadata().synchronizationSource;
        if (null == i) return void m.warn("no ssrc found in frame metadata");
        let l = h.get(i);
        if (null == l) return void m.warn("no userId found for ssrc", i);
        let s = A.get(l);
        if (null == s) return void m.warn("no user found for userId", l);
        let u = s.cryptor;
        if (null == u) {
            1 !== A.size && m.warn("no cryptor found for userId", l);
            return;
        }
        if (u instanceof n.Encryptor)
            t = (function (e, r, t) {
                if (0 === e.data.byteLength) return e;
                let i = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
                    l = i === n.MediaType.Audio ? a : o;
                t.AssignSsrcToCodec(r, l);
                let s = t.GetMaxCiphertextByteSize(i, e.data.byteLength),
                    u = n._malloc(s);
                try {
                    let a = new Uint8Array(e.data);
                    n.HEAPU8.set(a, u);
                    let o = t.Encrypt(i, r, u, e.data.byteLength, s);
                    if (0 === o) return null;
                    let l = n.HEAPU8.subarray(u, u + o),
                        d = new Uint8Array(o);
                    d.set(l), (e.data = d.buffer);
                } finally {
                    n._free(u);
                }
                return e;
            })(e, i, u);
        else {
            if (!(u instanceof n.Decryptor)) return void m.warn("unsupported cryptor type", u);
            t = (function (e, r) {
                if (0 === e.data.byteLength) return e;
                let t = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
                    a = r.GetMaxPlaintextByteSize(t, e.data.byteLength),
                    o = n._malloc(a);
                try {
                    let i = new Uint8Array(e.data);
                    n.HEAPU8.set(i, o);
                    let l = r.Decrypt(t, o, e.data.byteLength, a);
                    if (0 === l) return null;
                    let s = n.HEAPU8.subarray(o, o + l),
                        u = new Uint8Array(l);
                    return u.set(s), (e.data = u.buffer), e;
                } finally {
                    n._free(o);
                }
            })(e, u);
        }
        if (null == t) return;
        r.enqueue(t);
    } catch (e) {
        m.warn("error transforming frame", e);
    }
}
function D(e) {
    switch (e) {
        case "opus":
            return n.Codec.Opus;
        case "VP8":
            return n.Codec.VP8;
        case "VP9":
            return n.Codec.VP9;
        case "H264":
            return n.Codec.H264;
        case "H265":
            return n.Codec.H265;
        case "AV1":
            return n.Codec.AV1;
        default:
            return n.Codec.Unknown;
    }
}
(self.onmessage = (e) => {
    O(e);
}),
    (self.onrtctransform = (e) => {
        g({ type: d.RTC_TRANSFORM, readable: e.transformer.readable, writable: e.transformer.writable });
    });
