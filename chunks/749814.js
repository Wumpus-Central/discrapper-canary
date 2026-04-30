let n, a, o;
t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162);
var i,
    l,
    s,
    d = t(941426),
    u =
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
let S = new d.Vy("LibDaveManager"),
    E = null,
    R = {
        onRuntimeInitialized: () => {
            S.info("DAVE loaded");
        },
    },
    m = new d.Vy("EncryptionWorker");
(0, d.$o)(d.gZ);
let h = "uninitialized",
    b = new Map(),
    A = new Map(),
    w = [];
(self.onmessage = (e) => {
    O(e);
}),
    (self.onrtctransform = (e) => {
        g({ type: u.RTC_TRANSFORM, readable: e.transformer.readable, writable: e.transformer.writable });
    });
let O = (e) => {
        let { data: r } = e;
        if ("initialized" !== h && r.type !== u.INITIALIZE) return void w.push(e);
        switch (r.type) {
            case u.INITIALIZE:
                P();
                break;
            case u.RTC_TRANSFORM:
                g(r);
                break;
            case u.SET_KEY_RATCHET:
                _(r);
                break;
            case u.UPDATE_SSRC:
                v(r);
                break;
            case u.UPDATE_CODECS:
                D(r);
                break;
            case u.DESTROY_USER:
                I(r);
                break;
            default:
                throw (m.error("DAVE worker unknown message type"), Error("Unsupported message type"));
        }
    },
    P = async () => {
        if ("uninitialized" === h)
            for (let e of ((h = "initializing"),
            (n = await (null != E
                ? E
                : (E = new Promise((e, r) => {
                      Promise.all([t.e("95625"), t.e("74086"), t.e("63197"), t.e("18269"), t.e("16566")])
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
            (h = "initialized"),
            w))
                O(e);
    },
    g = (e) => {
        let { readable: r, writable: t } = e,
            n = new TransformStream({ transform: k });
        r.pipeThrough(n).pipeTo(t);
    },
    _ = (e) => {
        let { userId: r, operation: t, protocolVersion: a, keyRatchet: o } = e,
            i = A.get(r);
        null == i && ((i = { audioSSRC: 0, videoSSRCs: [], cryptor: null }), A.set(r, i));
        let l = i.cryptor;
        if (null == l) {
            if (t === c.ENCRYPT) {
                let e = new n.Encryptor();
                e.SetProtocolVersionChangedCallback(() => {
                    V(e.GetProtocolVersion());
                }),
                    V(e.GetProtocolVersion()),
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
    },
    v = (e) => {
        let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
            a = [t, ...n],
            o = A.get(r);
        for (let e of (null == o && ((o = { audioSSRC: t, videoSSRCs: n, cryptor: null }), A.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || b.get(e) !== r || b.delete(e);
        for (let e of a) e > 0 && b.set(e, r);
        (o.audioSSRC = t), (o.videoSSRCs = n);
    },
    D = (e) => {
        let { audioCodec: r, videoCodec: t } = e;
        (a = U(r)), (o = U(t));
    },
    I = (e) => {
        let { userId: r } = e,
            t = A.get(r);
        if (null == t) return;
        A.delete(r);
        let { audioSSRC: n, videoSSRCs: a } = t;
        for (let e of [n, ...a]) b.get(e) === r && b.delete(e);
    },
    V = (e) => {
        postMessage({ type: f.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
    },
    k = (e, r) => {
        try {
            let t,
                a = e.getMetadata().synchronizationSource;
            if (null == a) return void m.warn("no ssrc found in frame metadata");
            let o = b.get(a);
            if (null == o) return void m.warn("no userId found for ssrc", a);
            let i = A.get(o);
            if (null == i) return void m.warn("no user found for userId", o);
            let l = i.cryptor;
            if (null == l) {
                1 !== A.size && m.warn("no cryptor found for userId", o);
                return;
            }
            if (l instanceof n.Encryptor) t = M(e, a, l);
            else {
                if (!(l instanceof n.Decryptor)) return void m.warn("unsupported cryptor type", l);
                t = N(e, l);
            }
            if (null == t) return;
            r.enqueue(t);
        } catch (e) {
            m.warn("error transforming frame", e);
        }
    },
    M = (e, r, t) => {
        if (0 === e.data.byteLength) return e;
        let i = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
            l = i === n.MediaType.Audio ? a : o;
        t.AssignSsrcToCodec(r, l);
        let s = t.GetMaxCiphertextByteSize(i, e.data.byteLength),
            d = n._malloc(s);
        try {
            let a = new Uint8Array(e.data);
            n.HEAPU8.set(a, d);
            let o = t.Encrypt(i, r, d, e.data.byteLength, s);
            if (0 === o) return null;
            let l = n.HEAPU8.subarray(d, d + o),
                u = new Uint8Array(o);
            u.set(l), (e.data = u.buffer);
        } finally {
            n._free(d);
        }
        return e;
    },
    N = (e, r) => {
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
                d = new Uint8Array(l);
            return d.set(s), (e.data = d.buffer), e;
        } finally {
            n._free(o);
        }
    };
function U(e) {
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
