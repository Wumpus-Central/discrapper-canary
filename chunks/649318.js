n.d(t, {
    $6: () => R,
    MP: () => T,
    Mg: () => v,
    Nl: () => N,
    Ns: () => g,
    Rx: () => S,
    nX: () => O,
    sc: () => C
}),
    n(47120),
    n(536091),
    n(411104),
    n(653041),
    n(724458),
    n(852437);
var i = n(403644),
    r = n.n(i),
    a = n(565925),
    s = n.n(a),
    o = n(21690),
    l = n.n(o),
    u = n(264344),
    c = n.n(u),
    d = n(988367),
    f = n(259443),
    _ = n(65154),
    p = n(436620);
let h = 4,
    m = new f.Yd('SDP');
var g = (function (e) {
    return (e.SENDRECV = 'sendrecv'), (e.SENDONLY = 'sendonly'), (e.RECVONLY = 'recvonly'), (e.INACTIVE = 'inactive'), e;
})({});
let E = 'UDP/TLS/RTP/SAVPF';
function v(e) {
    switch (e) {
        case 'recvonly':
            return 'sendonly';
        case 'sendonly':
            return 'recvonly';
        case 'sendrecv':
            return 'sendrecv';
        default:
            return 'inactive';
    }
}
function y(e, t, n) {
    let i = ''.concat(e, '-').concat(t),
        r = ''.concat(n).concat(i);
    return [
        {
            attribute: 'cname',
            id: t,
            value: i
        },
        {
            attribute: 'msid',
            id: t,
            value: ''.concat(i, ' ').concat(r)
        },
        {
            attribute: 'mslabel',
            id: t,
            value: i
        },
        {
            attribute: 'label',
            id: t,
            value: r
        }
    ];
}
function I(e) {
    return d.write({
        version: 0,
        timing: {
            start: 0,
            stop: 0
        },
        origin: {
            address: '127.0.0.1',
            ipVer: 4,
            netType: 'IN',
            sessionId: '1420070400000',
            sessionVersion: 0,
            username: '-'
        },
        name: '-',
        msidSemantic: {
            semantic: 'WMS',
            token: '*'
        },
        groups: [
            {
                type: 'BUNDLE',
                mids: e
                    .filter((e) => null != e.mid)
                    .map((e) => e.mid)
                    .join(' ')
            }
        ],
        media: e
    });
}
function b(e) {
    let { mid: t, type: n, setup: i, direction: a, baseSDP: s, codec: o, payload: l, bitrate: u, ssrcs: f, extensions: m, rtxPayload: g, sendingVideo: v } = e;
    if ('inactive' === a && !p.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: E,
            rtp: [
                {
                    codec: 'NULL',
                    payload: l,
                    rate: 0
                }
            ],
            mid: void 0,
            type: n
        };
    let {
        media: [y]
    } = d.parse(s);
    if (
        ((y.type = n),
        (y.protocol = E),
        (y.payloads = l),
        (y.setup = i),
        (y.mid = t),
        (y.rtcpMux = 'rtcp-mux'),
        (y.direction = a),
        (y.ssrcs = f),
        f.length > 0 &&
            (null != g &&
                ((y.ssrcGroups = r()(f, h).map((e) => {
                    let t = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(t, ' ').concat(t + 1)
                    };
                })),
                (y.ssrcs = r()(f, h)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            p.WS || 'Firefox' === c().name))
    ) {
        let e = f.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (y.msid = e.value), (y.ssrcs = y.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (n) {
        case 'audio':
            'Firefox' === c().name
                ? (y.ext = m.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((y.ext = m.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (y.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: l
                      }
                  ])),
                y.rtp.push({
                    codec: o,
                    encoding: 2,
                    payload: l,
                    rate: 48000
                }),
                o === _.ad.OPUS &&
                    y.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(v ? '0' : '1'),
                        payload: l
                    }),
                (y.maxptime = 60);
            break;
        case 'video':
            (y.ext = m.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                y.rtp.push({
                    codec: o,
                    payload: l,
                    rate: 90000
                });
            let I = 'x-google-max-bitrate='.concat(u);
            o === _.ad.H264 && (I += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                y.fmtp.push({
                    config: I,
                    payload: l
                }),
                (y.rtcpFb = [
                    {
                        type: 'ccm',
                        subtype: 'fir',
                        payload: l
                    },
                    {
                        type: 'nack',
                        payload: l
                    },
                    {
                        type: 'nack',
                        subtype: 'pli',
                        payload: l
                    },
                    {
                        type: 'goog-remb',
                        payload: l
                    },
                    {
                        type: 'transport-cc',
                        payload: l
                    }
                ]),
                null != g &&
                    (y.rtp.push({
                        codec: 'rtx',
                        payload: g,
                        rate: 90000
                    }),
                    y.fmtp.push({
                        config: 'apt='.concat(l),
                        payload: g
                    }),
                    (y.payloads = ''.concat(y.payloads, ' ').concat(g)));
    }
    return y;
}
function T(e) {
    let { type: t, baseSDP: n, direction: i, audioCodec: r, audioPayloadType: a, audioBitRate: s, videoCodec: o, videoPayloadType: l, videoBitRate: u, rtxPayloadType: d, ssrcs: f, extensions: _ } = e,
        p = [];
    if ((m.info('generateSessionDescription: '.concat(JSON.stringify(f))), 'Firefox' === c().name)) {
        let e = 'answer' === t ? 'passive' : 'active';
        f.forEach((t) => {
            let [i, c, f, h, m] = t;
            if ('video' === f && (0 === l || 0 === d)) return;
            let g = 'audio' === f ? r : o,
                E = 'audio' === f ? a : l,
                v = 'audio' === f ? s : u;
            p.push(
                b({
                    mid: m,
                    type: f,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: g,
                    payload: E,
                    bitrate: v,
                    ssrcs: y(c, i, 'audio' === f ? 'a' : 'v'),
                    extensions: _
                })
            );
        });
    } else {
        let e = 'answer' === t ? 'passive' : 'actpass',
            c = f
                .filter((e) => {
                    let [t, n, i, r, a] = e;
                    return 'inactive' !== r && 'audio' === i;
                })
                .map((e) => {
                    let [t, n] = e;
                    return y(n, t, 'a');
                });
        if (
            (p.push(
                b({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: r,
                    payload: a,
                    bitrate: s,
                    ssrcs: c.flat(),
                    extensions: _
                })
            ),
            l > 0)
        ) {
            let t = f
                .filter((e) => {
                    let [t, n, i, r, a] = e;
                    return 'inactive' !== r && 'video' === i;
                })
                .map((e) => {
                    let [t, n] = e;
                    return y(n, t, 'v');
                });
            p.push(
                b({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: _,
                    rtxPayload: d
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: t,
        sdp: I(p)
    });
}
function S(e) {
    let { type: t, baseSDP: n, audioCodec: i, audioPayloadType: r, audioBitRate: a, videoCodec: s, videoPayloadType: o, videoBitRate: l, sendingVideo: u, rtxPayloadType: c, ssrcs: d, extensions: f } = e,
        _ = [],
        p = 'answer' === t ? 'passive' : 'actpass';
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: h, type: m, direction: g, mid: E } = e;
            '' !== h ? (t = y(h, d, 'audio' === m ? 'a' : 'v')) : ((t = []), 'sendonly' === g ? (g = 'inactive') : 'sendrecv' === g && (g = 'recvonly'));
            let v = 'audio' === m ? i : s,
                I = 'audio' === m ? r : o,
                T = 'audio' === m ? null : c,
                S = 'audio' === m ? a : l;
            _.push(
                b({
                    mid: E,
                    type: m,
                    setup: p,
                    direction: g,
                    baseSDP: n,
                    codec: v,
                    payload: I,
                    bitrate: S,
                    ssrcs: t,
                    extensions: f,
                    rtxPayload: T,
                    sendingVideo: u
                })
            );
        }),
        new RTCSessionDescription({
            type: t,
            sdp: I(_)
        })
    );
}
function A(e, t, n, i, r) {
    let a = e.find((e) => e.codec === i);
    if (null == a) return null;
    let s = t.find((e) => RegExp('^apt='.concat(a.payload)).test(e.config)),
        o = null;
    if (null != s) {
        let t = e.find((e) => e.codec === _.ad.RTX && e.payload === s.payload);
        null != t && (o = t.payload);
    }
    return {
        type: n,
        name: i,
        priority: r + 1,
        payloadType: a.payload,
        rtxPayloadType: o
    };
}
function N(e) {
    let t = d.parse(e).media.reduce(
        (e, t) => {
            let n,
                { type: i, rtp: r, ssrcs: a, fmtp: s, direction: o, mid: l } = t;
            switch (
                (e.outboundStreams.push({
                    type: i,
                    direction: o,
                    mid: l
                }),
                i)
            ) {
                case 'audio':
                    [_.ad.OPUS].forEach((t, n) => {
                        let a = A(r, s, i, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === o && null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case 'video':
                    [_.ad.H264, _.ad.VP8, _.ad.VP9].forEach((t, n) => {
                        let a = A(r, s, i, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === o && (null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == a ? void 0 : a.findLast((e) => 'cname' === e.attribute)) && (n.id === e.videoSSRC && m.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = n.id)));
            }
            return e;
        },
        {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        }
    );
    return (t.codecs = l()(t.codecs, s())), t;
}
function C(e) {
    var t;
    let { codecs: n } = N(e),
        i = n.find((e) => e.name === _.ad.VP8),
        r = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => r.test(e)))].join('\n'),
        codecs: n
    };
}
function R(e) {
    if (!e.includes('a=fingerprint')) return m.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return m.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return m.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return m.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return m.error('Remote SDP does not include c-line!'), !1;
    let t = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(t.split(' ').length < 3) || (m.error('Incorrect c-line: '.concat(t)), !1);
}
function O(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let t = e.split(' ');
        return {
            value: parseInt(t[0].split('/')[0].substr(9), 10),
            uri: t[1]
        };
    });
}
