let n, o, a;
(t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162));
var i,
    l,
    u,
    d = t(941426),
    c =
        (((i = {})[(i.INITIALIZE = 0)] = "INITIALIZE"),
        (i[(i.RTC_TRANSFORM = 1)] = "RTC_TRANSFORM"),
        (i[(i.SET_KEY_RATCHET = 2)] = "SET_KEY_RATCHET"),
        (i[(i.UPDATE_SSRC = 3)] = "UPDATE_SSRC"),
        (i[(i.UPDATE_CODECS = 4)] = "UPDATE_CODECS"),
        (i[(i.DESTROY_USER = 5)] = "DESTROY_USER"),
        i),
    s = (((l = {})[(l.ENCRYPT = 0)] = "ENCRYPT"), (l[(l.DECRYPT = 1)] = "DECRYPT"), l),
    f = (((u = {})[(u.PROTOCOL_VERSION_CHANGED = 0)] = "PROTOCOL_VERSION_CHANGED"), u),
    p = t(214958),
    y = t.n(p);
let C = parseInt(y().version ?? "0", 10),
    S = null != y().ua && y().ua.indexOf("OculusBrowser") > -1;
((() => {
    if (!("u" > typeof window) || null != window.WebSocket) return y().name;
})(),
    S ||
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
        y().name);
let T = new d.Vy("LibDaveManager"),
    R = null,
    E = {
        onRuntimeInitialized: () => {
            T.info("DAVE loaded");
        },
    },
    m = new d.Vy("EncryptionWorker");
(0, d.$o)(d.gZ);
let b = "uninitialized",
    h = null,
    w = new Map(),
    A = new Map(),
    g = [];
function O(e) {
    let { data: r } = e;
    if ("initialized" !== b && r.type !== c.INITIALIZE) return void g.push(e);
    switch (r.type) {
        case c.INITIALIZE:
            P();
            break;
        case c.RTC_TRANSFORM:
            _(r);
            break;
        case c.SET_KEY_RATCHET:
            !(function (e) {
                let { userId: r, operation: t, protocolVersion: o, keyRatchet: a } = e,
                    i = !a && o === n.kDisabledVersion;
                if (t === s.ENCRYPT) {
                    let e = (function () {
                        if (null == h) {
                            let e = new n.Encryptor();
                            (e.SetProtocolVersionChangedCallback(() => {
                                v(e.GetProtocolVersion());
                            }),
                                v(e.GetProtocolVersion()),
                                (h = e));
                        }
                        return h;
                    })();
                    (e.SetPassthroughMode(i), e.SetKeyRatchet(a));
                } else {
                    let e,
                        t =
                            (null == (e = A.get(r)) &&
                                ((e = { audioSSRC: 0, videoSSRCs: [], decryptor: null }), A.set(r, e)),
                            null == e.decryptor && (e.decryptor = new n.Decryptor()),
                            e.decryptor);
                    (t.TransitionToPassthroughMode(i), t.TransitionToKeyRatchet(a));
                }
            })(r);
            break;
        case c.UPDATE_SSRC:
            !(function (e) {
                let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
                    o = [t, ...n];
                for (let e of o) {
                    let t = w.get(e);
                    if (e > 0 && null != t && t !== r)
                        return void m.error(`DAVE worker refusing SSRC update for ${r}, SSRC ${e} is owned by ${t}`);
                }
                let a = A.get(r);
                for (let e of (null == a && ((a = { audioSSRC: t, videoSSRCs: n, decryptor: null }), A.set(r, a)),
                [a.audioSSRC, ...a.videoSSRCs]))
                    o.includes(e) || w.get(e) !== r || w.delete(e);
                for (let e of o) e > 0 && w.set(e, r);
                ((a.audioSSRC = t), (a.videoSSRCs = n));
            })(r);
            break;
        case c.UPDATE_CODECS:
            !(function (e) {
                let { audioCodec: r, videoCodec: t } = e;
                ((o = V(r)), (a = V(t)));
            })(r);
            break;
        case c.DESTROY_USER:
            !(function (e) {
                let { userId: r } = e,
                    t = A.get(r);
                if (null == t) return;
                A.delete(r);
                let { audioSSRC: n, videoSSRCs: o } = t;
                for (let e of [n, ...o]) w.get(e) === r && w.delete(e);
            })(r);
            break;
        default:
            throw (m.error("DAVE worker unknown message type"), Error("Unsupported message type"));
    }
}
async function P() {
    if ("uninitialized" === b)
        for (let e of ((b = "initializing"),
        (n = await (null != R
            ? R
            : (R = new Promise((e, r) => {
                  Promise.all([t.e("95625"), t.e("174086"), t.e("563197"), t.e("218269"), t.e("116566")])
                      .then(t.bind(t, 22389))
                      .then((t) => {
                          let { DaveModuleFactory: n } = t;
                          n(E)
                              .then((r) => {
                                  (T.info("Successfully initialized DAVE"), e(r));
                              })
                              .catch((e) => {
                                  (T.error("Failed to initialize DAVE", e), r(e));
                              });
                      })
                      .catch((e) => {
                          (T.error("Failed to load DAVE module", e), r(e));
                      });
              })))),
        (b = "initialized"),
        g))
            O(e);
}
function _(e) {
    let r,
        { operation: t, readable: n, writable: o } = e;
    switch (t) {
        case s.ENCRYPT:
            r = D;
            break;
        case s.DECRYPT:
            r = k;
            break;
        default:
            (m.error("DAVE worker transform with unknown operation", t), (r = () => {}));
    }
    let a = new TransformStream({ transform: r });
    n.pipeThrough(a).pipeTo(o);
}
function v(e) {
    postMessage({ type: f.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
}
function D(e, r) {
    try {
        let t = h;
        if (null == t) return;
        let i = e.getMetadata().synchronizationSource;
        if (null == i) return void m.warn("no ssrc found in frame metadata");
        let l = (function (e, r, t) {
            if (0 === e.data.byteLength) return e;
            let i = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
                l = i === n.MediaType.Audio ? o : a;
            t.AssignSsrcToCodec(r, l);
            let u = t.GetMaxCiphertextByteSize(i, e.data.byteLength),
                d = n._malloc(u);
            try {
                let o = new Uint8Array(e.data);
                n.HEAPU8.set(o, d);
                let a = t.Encrypt(i, r, d, e.data.byteLength, u);
                if (0 === a) return null;
                let l = n.HEAPU8.subarray(d, d + a),
                    c = new Uint8Array(a);
                (c.set(l), (e.data = c.buffer));
            } finally {
                n._free(d);
            }
            return e;
        })(e, i, t);
        if (null == l) return;
        r.enqueue(l);
    } catch (e) {
        m.warn("error encrypting frame", e);
    }
}
function k(e, r) {
    try {
        let t = e.getMetadata().synchronizationSource;
        if (null == t) return void m.warn("no ssrc found in frame metadata");
        let o = w.get(t);
        if (null == o) return void m.warn("no userId found for ssrc", t);
        let a = A.get(o);
        if (null == a) return void m.warn("no user found for userId", o);
        let i = a.decryptor;
        if (null == i) return void m.warn("no decryptor found for userId", o);
        let l = (function (e, r) {
            if (0 === e.data.byteLength) return e;
            let t = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
                o = r.GetMaxPlaintextByteSize(t, e.data.byteLength),
                a = n._malloc(o);
            try {
                let i = new Uint8Array(e.data);
                n.HEAPU8.set(i, a);
                let l = r.Decrypt(t, a, e.data.byteLength, o);
                if (0 === l) return null;
                let u = n.HEAPU8.subarray(a, a + l),
                    d = new Uint8Array(l);
                return (d.set(u), (e.data = d.buffer), e);
            } finally {
                n._free(a);
            }
        })(e, i);
        if (null == l) return;
        r.enqueue(l);
    } catch (e) {
        m.warn("error decrypting frame", e);
    }
}
function V(e) {
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
((self.onmessage = (e) => {
    O(e);
}),
    (self.onrtctransform = (e) => {
        let r = e.transformer.options;
        _({
            type: c.RTC_TRANSFORM,
            operation: r?.operation,
            readable: e.transformer.readable,
            writable: e.transformer.writable,
        });
    }));
