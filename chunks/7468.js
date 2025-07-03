let t, a, o;
(n(388685), n(539854), n(415506), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733));
var i = n(579092),
    l = n(625612),
    u = n(586021);
let d = new i.Yd('EncryptionWorker');
(0, i._n)(i.Sm);
let s = 'uninitialized',
    f = new Map(),
    c = new Map(),
    g = [];
((self.onmessage = (e) => {
    p(e);
}),
    (self.onrtctransform = (e) => {
        y({
            type: l.u.RTC_TRANSFORM,
            readable: e.transformer.readable,
            writable: e.transformer.writable
        });
    }));
let p = (e) => {
        let { data: r } = e;
        if ('initialized' !== s && r.type !== l.u.INITIALIZE) return void g.push(e);
        switch (r.type) {
            case l.u.INITIALIZE:
                m();
                break;
            case l.u.RTC_TRANSFORM:
                y(r);
                break;
            case l.u.SET_KEY_RATCHET:
                h(r);
                break;
            case l.u.UPDATE_SSRC:
                b(r);
                break;
            case l.u.UPDATE_CODECS:
                v(r);
                break;
            case l.u.DESTROY_USER:
                E(r);
                break;
            default:
                throw (d.error('DAVE worker unknown message type'), Error('Unsupported message type'));
        }
    },
    m = async () => {
        if ('uninitialized' === s) for (let e of ((s = 'initializing'), (t = await (0, u.D5)()), (s = 'initialized'), g)) p(e);
    },
    y = (e) => {
        let { readable: r, writable: n } = e,
            t = new TransformStream({ transform: T });
        r.pipeThrough(t).pipeTo(n);
    },
    h = (e) => {
        let { userId: r, operation: n, protocolVersion: a, keyRatchet: o } = e,
            i = c.get(r);
        null == i &&
            ((i = {
                audioSSRC: 0,
                videoSSRCs: [],
                cryptor: null
            }),
            c.set(r, i));
        let u = i.cryptor;
        if (null == u) {
            if (n === l.Bp.ENCRYPT) {
                let e = new t.Encryptor();
                (e.SetProtocolVersionChangedCallback(() => {
                    S(e.GetProtocolVersion());
                }),
                    S(e.GetProtocolVersion()),
                    (u = e));
            } else u = new t.Decryptor();
            i.cryptor = u;
        }
        if (n === l.Bp.ENCRYPT) {
            let e = u;
            (e.SetPassthroughMode(!o && a === t.kDisabledVersion), e.SetKeyRatchet(o));
        } else {
            let e = u;
            (e.TransitionToPassthroughMode(!o && a === t.kDisabledVersion), e.TransitionToKeyRatchet(o));
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
                cryptor: null
            }),
            c.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || f.get(e) !== r || f.delete(e);
        for (let e of a) e > 0 && f.set(e, r);
        ((o.audioSSRC = n), (o.videoSSRCs = t));
    },
    v = (e) => {
        let { audioCodec: r, videoCodec: n } = e;
        ((a = R(r)), (o = R(n)));
    },
    E = (e) => {
        let { userId: r } = e,
            n = c.get(r);
        if (null == n) return;
        c.delete(r);
        let { audioSSRC: t, videoSSRCs: a } = n;
        for (let e of [t, ...a]) f.get(e) === r && f.delete(e);
    },
    S = (e) => {
        postMessage({
            type: l.r7.PROTOCOL_VERSION_CHANGED,
            protocolVersion: e
        });
    },
    T = (e, r) => {
        try {
            let n,
                a = e.getMetadata().synchronizationSource;
            if (null == a) return void d.warn('no ssrc found in frame metadata');
            let o = f.get(a);
            if (null == o) return void d.warn('no userId found for ssrc', a);
            let i = c.get(o);
            if (null == i) return void d.warn('no user found for userId', o);
            let l = i.cryptor;
            if (null == l) {
                1 !== c.size && d.warn('no cryptor found for userId', o);
                return;
            }
            if (l instanceof t.Encryptor) n = C(e, a, l);
            else {
                if (!(l instanceof t.Decryptor)) return void d.warn('unsupported cryptor type', l);
                n = A(e, l);
            }
            if (null == n) return;
            r.enqueue(n);
        } catch (e) {
            d.warn('error transforming frame', e);
        }
    },
    C = (e, r, n) => {
        if (0 === e.data.byteLength) return e;
        let i = e instanceof RTCEncodedAudioFrame ? t.MediaType.Audio : t.MediaType.Video,
            l = i === t.MediaType.Audio ? a : o;
        n.AssignSsrcToCodec(r, l);
        let u = n.GetMaxCiphertextByteSize(i, e.data.byteLength),
            d = t._malloc(u);
        try {
            let a = new Uint8Array(e.data);
            t.HEAPU8.set(a, d);
            let o = n.Encrypt(i, r, d, e.data.byteLength, u);
            if (0 === o) return null;
            let l = t.HEAPU8.subarray(d, d + o),
                s = new Uint8Array(o);
            (s.set(l), (e.data = s.buffer));
        } finally {
            t._free(d);
        }
        return e;
    },
    A = (e, r) => {
        if (0 === e.data.byteLength) return e;
        let n = e instanceof RTCEncodedAudioFrame ? t.MediaType.Audio : t.MediaType.Video,
            a = r.GetMaxPlaintextByteSize(n, e.data.byteLength),
            o = t._malloc(a);
        try {
            let i = new Uint8Array(e.data);
            t.HEAPU8.set(i, o);
            let l = r.Decrypt(n, o, e.data.byteLength, a);
            if (0 === l) return null;
            let u = t.HEAPU8.subarray(o, o + l),
                d = new Uint8Array(l);
            return (d.set(u), (e.data = d.buffer), e);
        } finally {
            t._free(o);
        }
    };
function R(e) {
    switch (e) {
        case 'opus':
            return t.Codec.Opus;
        case 'VP8':
            return t.Codec.VP8;
        case 'VP9':
            return t.Codec.VP9;
        case 'H264':
            return t.Codec.H264;
        case 'H265':
            return t.Codec.H265;
        case 'AV1':
            return t.Codec.AV1;
        default:
            return t.Codec.Unknown;
    }
}
