let t, a, o;
n(896048),
    n(321073),
    n(65821),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var i = n(118356),
    l = n(206607),
    s = n(267411);
let u = new i.Vy("EncryptionWorker");
(0, i.$o)(i.gZ);
let d = "uninitialized",
    f = new Map(),
    c = new Map(),
    g = [];
(self.onmessage = (e) => {
    h(e);
}),
    (self.onrtctransform = (e) => {
        m({
            type: l.lA.RTC_TRANSFORM,
            readable: e.transformer.readable,
            writable: e.transformer.writable,
        });
    });
let h = (e) => {
        let { data: r } = e;
        if ("initialized" !== d && r.type !== l.lA.INITIALIZE) return void g.push(e);
        switch (r.type) {
            case l.lA.INITIALIZE:
                y();
                break;
            case l.lA.RTC_TRANSFORM:
                m(r);
                break;
            case l.lA.SET_KEY_RATCHET:
                p(r);
                break;
            case l.lA.UPDATE_SSRC:
                b(r);
                break;
            case l.lA.UPDATE_CODECS:
                E(r);
                break;
            case l.lA.DESTROY_USER:
                v(r);
                break;
            default:
                throw (u.error("DAVE worker unknown message type"), Error("Unsupported message type"));
        }
    },
    y = async () => {
        if ("uninitialized" === d)
            for (let e of ((d = "initializing"), (t = await (0, s.zs)()), (d = "initialized"), g)) h(e);
    },
    m = (e) => {
        let { readable: r, writable: n } = e,
            t = new TransformStream({
                transform: S,
            });
        r.pipeThrough(t).pipeTo(n);
    },
    p = (e) => {
        let { userId: r, operation: n, protocolVersion: a, keyRatchet: o } = e,
            i = c.get(r);
        null == i &&
            ((i = {
                audioSSRC: 0,
                videoSSRCs: [],
                cryptor: null,
            }),
            c.set(r, i));
        let s = i.cryptor;
        if (null == s) {
            if (n === l.jU.ENCRYPT) {
                let e = new t.Encryptor();
                e.SetProtocolVersionChangedCallback(() => {
                    A(e.GetProtocolVersion());
                }),
                    A(e.GetProtocolVersion()),
                    (s = e);
            } else s = new t.Decryptor();
            i.cryptor = s;
        }
        if (n === l.jU.ENCRYPT) {
            let e = s;
            e.SetPassthroughMode(!o && a === t.kDisabledVersion), e.SetKeyRatchet(o);
        } else {
            let e = s;
            e.TransitionToPassthroughMode(!o && a === t.kDisabledVersion), e.TransitionToKeyRatchet(o);
        }
    },
    b = (e) => {
        let { userId: r, audioSsrc: n, videoSsrcs: t } = e,
            a = [n, ...t],
            o = c.get(r);
        for (let e of (null == o &&
            ((o = {
                audioSSRC: n,
                videoSSRCs: t,
                cryptor: null,
            }),
            c.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || f.get(e) !== r || f.delete(e);
        for (let e of a) e > 0 && f.set(e, r);
        (o.audioSSRC = n), (o.videoSSRCs = t);
    },
    E = (e) => {
        let { audioCodec: r, videoCodec: n } = e;
        (a = R(r)), (o = R(n));
    },
    v = (e) => {
        let { userId: r } = e,
            n = c.get(r);
        if (null == n) return;
        c.delete(r);
        let { audioSSRC: t, videoSSRCs: a } = n;
        for (let e of [t, ...a]) f.get(e) === r && f.delete(e);
    },
    A = (e) => {
        postMessage({
            type: l.h5.PROTOCOL_VERSION_CHANGED,
            protocolVersion: e,
        });
    },
    S = (e, r) => {
        try {
            let n,
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
            if (l instanceof t.Encryptor) n = C(e, a, l);
            else {
                if (!(l instanceof t.Decryptor)) return void u.warn("unsupported cryptor type", l);
                n = T(e, l);
            }
            if (null == n) return;
            r.enqueue(n);
        } catch (e) {
            u.warn("error transforming frame", e);
        }
    },
    C = (e, r, n) => {
        if (0 === e.data.byteLength) return e;
        let i = e instanceof RTCEncodedAudioFrame ? t.MediaType.Audio : t.MediaType.Video,
            l = i === t.MediaType.Audio ? a : o;
        n.AssignSsrcToCodec(r, l);
        let s = n.GetMaxCiphertextByteSize(i, e.data.byteLength),
            u = t._malloc(s);
        try {
            let a = new Uint8Array(e.data);
            t.HEAPU8.set(a, u);
            let o = n.Encrypt(i, r, u, e.data.byteLength, s);
            if (0 === o) return null;
            let l = t.HEAPU8.subarray(u, u + o),
                d = new Uint8Array(o);
            d.set(l), (e.data = d.buffer);
        } finally {
            t._free(u);
        }
        return e;
    },
    T = (e, r) => {
        if (0 === e.data.byteLength) return e;
        let n = e instanceof RTCEncodedAudioFrame ? t.MediaType.Audio : t.MediaType.Video,
            a = r.GetMaxPlaintextByteSize(n, e.data.byteLength),
            o = t._malloc(a);
        try {
            let i = new Uint8Array(e.data);
            t.HEAPU8.set(i, o);
            let l = r.Decrypt(n, o, e.data.byteLength, a);
            if (0 === l) return null;
            let s = t.HEAPU8.subarray(o, o + l),
                u = new Uint8Array(l);
            return u.set(s), (e.data = u.buffer), e;
        } finally {
            t._free(o);
        }
    };

function R(e) {
    switch (e) {
        case "opus":
            return t.Codec.Opus;
        case "VP8":
            return t.Codec.VP8;
        case "VP9":
            return t.Codec.VP9;
        case "H264":
            return t.Codec.H264;
        case "H265":
            return t.Codec.H265;
        case "AV1":
            return t.Codec.AV1;
        default:
            return t.Codec.Unknown;
    }
}
