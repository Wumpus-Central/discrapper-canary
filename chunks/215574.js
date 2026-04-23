let n, a, o;
t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162);
var i = t(118356),
    l = t(206607),
    s = t(267411);
let u = new i.Vy("EncryptionWorker");
(0, i.$o)(i.gZ);
let d = "uninitialized",
    f = new Map(),
    c = new Map(),
    p = [];
(self.onmessage = (e) => {
    g(e);
}),
    (self.onrtctransform = (e) => {
        h({ type: l.lA.RTC_TRANSFORM, readable: e.transformer.readable, writable: e.transformer.writable });
    });
let g = (e) => {
        let { data: r } = e;
        if ("initialized" !== d && r.type !== l.lA.INITIALIZE) return void p.push(e);
        switch (r.type) {
            case l.lA.INITIALIZE:
                y();
                break;
            case l.lA.RTC_TRANSFORM:
                h(r);
                break;
            case l.lA.SET_KEY_RATCHET:
                m(r);
                break;
            case l.lA.UPDATE_SSRC:
                v(r);
                break;
            case l.lA.UPDATE_CODECS:
                E(r);
                break;
            case l.lA.DESTROY_USER:
                b(r);
                break;
            default:
                throw (u.error("DAVE worker unknown message type"), Error("Unsupported message type"));
        }
    },
    y = async () => {
        if ("uninitialized" === d)
            for (let e of ((d = "initializing"), (n = await (0, s.zs)()), (d = "initialized"), p)) g(e);
    },
    h = (e) => {
        let { readable: r, writable: t } = e,
            n = new TransformStream({ transform: C });
        r.pipeThrough(n).pipeTo(t);
    },
    m = (e) => {
        let { userId: r, operation: t, protocolVersion: a, keyRatchet: o } = e,
            i = c.get(r);
        null == i && ((i = { audioSSRC: 0, videoSSRCs: [], cryptor: null }), c.set(r, i));
        let s = i.cryptor;
        if (null == s) {
            if (t === l.jU.ENCRYPT) {
                let e = new n.Encryptor();
                e.SetProtocolVersionChangedCallback(() => {
                    A(e.GetProtocolVersion());
                }),
                    A(e.GetProtocolVersion()),
                    (s = e);
            } else s = new n.Decryptor();
            i.cryptor = s;
        }
        if (t === l.jU.ENCRYPT) {
            let e = s;
            e.SetPassthroughMode(!o && a === n.kDisabledVersion), e.SetKeyRatchet(o);
        } else {
            let e = s;
            e.TransitionToPassthroughMode(!o && a === n.kDisabledVersion), e.TransitionToKeyRatchet(o);
        }
    },
    v = (e) => {
        let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
            a = [t, ...n],
            o = c.get(r);
        for (let e of (null == o && ((o = { audioSSRC: t, videoSSRCs: n, cryptor: null }), c.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || f.get(e) !== r || f.delete(e);
        for (let e of a) e > 0 && f.set(e, r);
        (o.audioSSRC = t), (o.videoSSRCs = n);
    },
    E = (e) => {
        let { audioCodec: r, videoCodec: t } = e;
        (a = R(r)), (o = R(t));
    },
    b = (e) => {
        let { userId: r } = e,
            t = c.get(r);
        if (null == t) return;
        c.delete(r);
        let { audioSSRC: n, videoSSRCs: a } = t;
        for (let e of [n, ...a]) f.get(e) === r && f.delete(e);
    },
    A = (e) => {
        postMessage({ type: l.h5.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
    },
    C = (e, r) => {
        try {
            let t,
                a = e.getMetadata().synchronizationSource;
            if (null == a) return void u.warn("no ssrc found in frame metadata");
            let o = f.get(a);
            if (null == o) return void u.warn("no userId found for ssrc", a);
            let i = c.get(o);
            if (null == i) return void u.warn("no user found for userId", o);
            let l = i.cryptor;
            if (null == l) {
                1 !== c.size && u.warn("no cryptor found for userId", o);
                return;
            }
            if (l instanceof n.Encryptor) t = T(e, a, l);
            else {
                if (!(l instanceof n.Decryptor)) return void u.warn("unsupported cryptor type", l);
                t = S(e, l);
            }
            if (null == t) return;
            r.enqueue(t);
        } catch (e) {
            u.warn("error transforming frame", e);
        }
    },
    T = (e, r, t) => {
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
    },
    S = (e, r) => {
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
    };
function R(e) {
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
