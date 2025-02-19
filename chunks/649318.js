n.d(t, {
    $6: () => P,
    MP: () => T,
    Mg: () => y,
    Nl: () => C,
    Ns: () => v,
    Rx: () => N,
    nX: () => w,
    sc: () => R
}),
    n(47120),
    n(86693),
    n(536091),
    n(411104),
    n(653041),
    n(26686),
    n(474991),
    n(398202),
    n(301563),
    n(852437),
    n(566702);
var r = n(403644),
    i = n.n(r),
    o = n(565925),
    a = n.n(o),
    s = n(21690),
    l = n.n(s),
    c = n(264344),
    u = n.n(c),
    d = n(988367),
    f = n(259443),
    p = n(65154),
    _ = n(436620);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 4,
    E = new f.Yd('SDP');
var v = (function (e) {
    return (e.SENDRECV = 'sendrecv'), (e.SENDONLY = 'sendonly'), (e.RECVONLY = 'recvonly'), (e.INACTIVE = 'inactive'), e;
})({});
let b = 'UDP/TLS/RTP/SAVPF';
function y(e) {
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
function O(e, t, n) {
    let r = ''.concat(e, '-').concat(t),
        i = ''.concat(n).concat(r);
    return [
        {
            attribute: 'cname',
            id: t,
            value: r
        },
        {
            attribute: 'msid',
            id: t,
            value: ''.concat(r, ' ').concat(i)
        },
        {
            attribute: 'mslabel',
            id: t,
            value: r
        },
        {
            attribute: 'label',
            id: t,
            value: i
        }
    ];
}
function S(e) {
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
function I(e) {
    let { mid: t, type: n, setup: r, direction: o, baseSDP: a, codec: s, payload: l, bitrate: c, ssrcs: f, extensions: h, rtxPayload: E, sendingVideo: v } = e;
    if ('inactive' === o && !_.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: b,
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
    } = d.parse(a);
    if (
        ((y.type = n),
        (y.protocol = b),
        (y.payloads = l),
        (y.setup = r),
        (y.mid = t),
        (y.rtcpMux = 'rtcp-mux'),
        (y.direction = o),
        (y.ssrcs = f),
        f.length > 0 &&
            (null != E &&
                ((y.ssrcGroups = i()(f, g).map((e) => {
                    let t = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(t, ' ').concat(t + 1)
                    };
                })),
                (y.ssrcs = i()(f, g)
                    .map((e) => {
                        let t = e.map((e) => ((e = m({}, e)), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            _.WS || 'Firefox' === u().name))
    ) {
        let e = f.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (y.msid = e.value), (y.ssrcs = y.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (n) {
        case 'audio':
            'Firefox' === u().name
                ? (y.ext = h.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((y.ext = h.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (y.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: l
                      }
                  ])),
                y.rtp.push({
                    codec: s,
                    encoding: 2,
                    payload: l,
                    rate: 48000
                }),
                s === p.ad.OPUS &&
                    y.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(v ? '0' : '1'),
                        payload: l
                    }),
                (y.maxptime = 60);
            break;
        case 'video':
            (y.ext = h.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                y.rtp.push({
                    codec: s,
                    payload: l,
                    rate: 90000
                });
            let O = 'x-google-max-bitrate='.concat(c);
            s === p.ad.H264 && (O += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                y.fmtp.push({
                    config: O,
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
                null != E &&
                    (y.rtp.push({
                        codec: 'rtx',
                        payload: E,
                        rate: 90000
                    }),
                    y.fmtp.push({
                        config: 'apt='.concat(l),
                        payload: E
                    }),
                    (y.payloads = ''.concat(y.payloads, ' ').concat(E)));
    }
    return y;
}
function T(e) {
    let { type: t, baseSDP: n, direction: r, audioCodec: i, audioPayloadType: o, audioBitRate: a, videoCodec: s, videoPayloadType: l, videoBitRate: c, rtxPayloadType: d, ssrcs: f, extensions: p } = e,
        _ = [];
    if ((E.info('generateSessionDescription: '.concat(JSON.stringify(f))), 'Firefox' === u().name)) {
        let e = 'answer' === t ? 'passive' : 'active';
        f.forEach((t) => {
            let [r, u, f, h, m] = t;
            if ('video' === f && (0 === l || 0 === d)) return;
            let g = 'audio' === f ? i : s,
                E = 'audio' === f ? o : l,
                v = 'audio' === f ? a : c;
            _.push(
                I({
                    mid: m,
                    type: f,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: g,
                    payload: E,
                    bitrate: v,
                    ssrcs: O(u, r, 'audio' === f ? 'a' : 'v'),
                    extensions: p
                })
            );
        });
    } else {
        let e = 'answer' === t ? 'passive' : 'actpass',
            u = f
                .filter((e) => {
                    let [t, n, r, i, o] = e;
                    return 'inactive' !== i && 'audio' === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return O(n, t, 'a');
                });
        if (
            (_.push(
                I({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: o,
                    bitrate: a,
                    ssrcs: u.flat(),
                    extensions: p
                })
            ),
            l > 0)
        ) {
            let t = f
                .filter((e) => {
                    let [t, n, r, i, o] = e;
                    return 'inactive' !== i && 'video' === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return O(n, t, 'v');
                });
            _.push(
                I({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: s,
                    payload: l,
                    bitrate: c,
                    ssrcs: t.flat(),
                    extensions: p,
                    rtxPayload: d
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: t,
        sdp: S(_)
    });
}
function N(e) {
    let { type: t, baseSDP: n, audioCodec: r, audioPayloadType: i, audioBitRate: o, videoCodec: a, videoPayloadType: s, videoBitRate: l, sendingVideo: c, rtxPayloadType: u, ssrcs: d, extensions: f } = e,
        p = [],
        _ = 'answer' === t ? 'passive' : 'actpass';
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: h, type: m, direction: g, mid: E } = e;
            '' !== h ? (t = O(h, d, 'audio' === m ? 'a' : 'v')) : ((t = []), 'sendonly' === g ? (g = 'inactive') : 'sendrecv' === g && (g = 'recvonly'));
            let v = 'audio' === m ? r : a,
                b = 'audio' === m ? i : s,
                y = 'audio' === m ? null : u,
                S = 'audio' === m ? o : l;
            p.push(
                I({
                    mid: E,
                    type: m,
                    setup: _,
                    direction: g,
                    baseSDP: n,
                    codec: v,
                    payload: b,
                    bitrate: S,
                    ssrcs: t,
                    extensions: f,
                    rtxPayload: y,
                    sendingVideo: c
                })
            );
        }),
        new RTCSessionDescription({
            type: t,
            sdp: S(p)
        })
    );
}
function A(e, t, n, r, i) {
    let o = e.find((e) => e.codec === r);
    if (null == o) return null;
    let a = t.find((e) => RegExp('^apt='.concat(o.payload)).test(e.config)),
        s = null;
    if (null != a) {
        let t = e.find((e) => e.codec === p.ad.RTX && e.payload === a.payload);
        null != t && (s = t.payload);
    }
    return {
        type: n,
        name: r,
        priority: i + 1,
        payloadType: o.payload,
        rtxPayloadType: s
    };
}
function C(e) {
    let t = d.parse(e).media.reduce(
        (e, t) => {
            let n,
                { type: r, rtp: i, ssrcs: o, fmtp: a, direction: s, mid: l } = t;
            switch (
                (e.outboundStreams.push({
                    type: r,
                    direction: s,
                    mid: l
                }),
                r)
            ) {
                case 'audio':
                    [p.ad.OPUS].forEach((t, n) => {
                        let o = A(i, a, r, t, n);
                        null != o && e.codecs.push(o);
                    }),
                        'sendrecv' === s && null != (n = null == o ? void 0 : o.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case 'video':
                    [p.ad.H264, p.ad.VP8, p.ad.VP9].forEach((t, n) => {
                        let o = A(i, a, r, t, n);
                        null != o && e.codecs.push(o);
                    }),
                        'sendrecv' === s && (null != (n = null == o ? void 0 : o.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == o ? void 0 : o.findLast((e) => 'cname' === e.attribute)) && (n.id === e.videoSSRC && E.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = n.id)));
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
    return (t.codecs = l()(t.codecs, a())), t;
}
function R(e) {
    var t;
    let { codecs: n } = C(e),
        r = n.find((e) => e.name === p.ad.VP8),
        i = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (t = null == r ? void 0 : r.rtxPayloadType) && void 0 !== t ? t : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => i.test(e)))].join('\n'),
        codecs: n
    };
}
function P(e) {
    if (!e.includes('a=fingerprint')) return E.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return E.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return E.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return E.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return E.error('Remote SDP does not include c-line!'), !1;
    let t = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(t.split(' ').length < 3) || (E.error('Incorrect c-line: '.concat(t)), !1);
}
function w(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let t = e.split(' ');
        return {
            value: parseInt(t[0].split('/')[0].substr(9), 10),
            uri: t[1]
        };
    });
}
