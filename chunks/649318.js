r.d(n, {
    $6: function () {
        return k;
    },
    MP: function () {
        return L;
    },
    Mg: function () {
        return N;
    },
    Nl: function () {
        return P;
    },
    Ns: function () {
        return a;
    },
    Rx: function () {
        return x;
    },
    nX: function () {
        return U;
    },
    sc: function () {
        return M;
    }
});
var i,
    a,
    o = r(47120);
var s = r(536091);
var l = r(411104);
var u = r(653041);
var c = r(724458);
var d = r(852437);
var f = r(403644),
    p = r.n(f),
    h = r(565925),
    _ = r.n(h),
    m = r(21690),
    g = r.n(m),
    E = r(264344),
    v = r.n(E),
    y = r(988367),
    b = r(259443),
    I = r(65154),
    T = r(436620);
let S = 4,
    A = new b.Yd('SDP');
!(function (e) {
    (e.AUDIO = 'a'), (e.VIDEO = 'v');
})(i || (i = {})),
    !(function (e) {
        (e.SENDRECV = 'sendrecv'), (e.SENDONLY = 'sendonly'), (e.RECVONLY = 'recvonly'), (e.INACTIVE = 'inactive');
    })(a || (a = {}));
let C = 'UDP/TLS/RTP/SAVPF';
function N(e) {
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
function R(e, n, r) {
    let i = ''.concat(e, '-').concat(n),
        a = ''.concat(r).concat(i);
    return [
        {
            attribute: 'cname',
            id: n,
            value: i
        },
        {
            attribute: 'msid',
            id: n,
            value: ''.concat(i, ' ').concat(a)
        },
        {
            attribute: 'mslabel',
            id: n,
            value: i
        },
        {
            attribute: 'label',
            id: n,
            value: a
        }
    ];
}
function O(e) {
    return y.write({
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
function D(e) {
    let { mid: n, type: r, setup: i, direction: a, baseSDP: o, codec: s, payload: l, bitrate: u, ssrcs: c, extensions: d, rtxPayload: f, sendingVideo: h } = e;
    if ('inactive' === a && !T.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: C,
            rtp: [
                {
                    codec: 'NULL',
                    payload: l,
                    rate: 0
                }
            ],
            mid: void 0,
            type: r
        };
    let {
        media: [_]
    } = y.parse(o);
    if (
        ((_.type = r),
        (_.protocol = C),
        (_.payloads = l),
        (_.setup = i),
        (_.mid = n),
        (_.rtcpMux = 'rtcp-mux'),
        (_.direction = a),
        (_.ssrcs = c),
        c.length > 0 &&
            (null != f &&
                ((_.ssrcGroups = p()(c, S).map((e) => {
                    let n = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(n, ' ').concat(n + 1)
                    };
                })),
                (_.ssrcs = p()(c, S)
                    .map((e) => {
                        let n = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...n];
                    })
                    .flat())),
            T.WS || 'Firefox' === v().name))
    ) {
        let e = c.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (_.msid = e.value), (_.ssrcs = _.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (r) {
        case 'audio':
            'Firefox' === v().name
                ? (_.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((_.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (_.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: l
                      }
                  ])),
                _.rtp.push({
                    codec: s,
                    encoding: 2,
                    payload: l,
                    rate: 48000
                }),
                s === I.ad.OPUS &&
                    _.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(h ? '0' : '1'),
                        payload: l
                    }),
                (_.maxptime = 60);
            break;
        case 'video':
            (_.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                _.rtp.push({
                    codec: s,
                    payload: l,
                    rate: 90000
                });
            let m = 'x-google-max-bitrate='.concat(u);
            s === I.ad.H264 && (m += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                _.fmtp.push({
                    config: m,
                    payload: l
                }),
                (_.rtcpFb = [
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
                null != f &&
                    (_.rtp.push({
                        codec: 'rtx',
                        payload: f,
                        rate: 90000
                    }),
                    _.fmtp.push({
                        config: 'apt='.concat(l),
                        payload: f
                    }),
                    (_.payloads = ''.concat(_.payloads, ' ').concat(f)));
    }
    return _;
}
function L(e) {
    let { type: n, baseSDP: r, direction: i, audioCodec: a, audioPayloadType: o, audioBitRate: s, videoCodec: l, videoPayloadType: u, videoBitRate: c, rtxPayloadType: d, ssrcs: f, extensions: p } = e,
        h = [];
    if ((A.info('generateSessionDescription: '.concat(JSON.stringify(f))), 'Firefox' === v().name)) {
        let e = 'answer' === n ? 'passive' : 'active';
        f.forEach((n) => {
            let [i, f, _, m, g] = n;
            if ('video' === _ && (0 === u || 0 === d)) return;
            let E = 'audio' === _ ? a : l,
                v = 'audio' === _ ? o : u,
                y = 'audio' === _ ? s : c;
            h.push(
                D({
                    mid: g,
                    type: _,
                    setup: e,
                    direction: m,
                    baseSDP: r,
                    codec: E,
                    payload: v,
                    bitrate: y,
                    ssrcs: R(f, i, 'audio' === _ ? 'a' : 'v'),
                    extensions: p
                })
            );
        });
    } else {
        let e = 'answer' === n ? 'passive' : 'actpass',
            _ = f
                .filter((e) => {
                    let [n, r, i, a, o] = e;
                    return 'inactive' !== a && 'audio' === i;
                })
                .map((e) => {
                    let [n, r] = e;
                    return R(r, n, 'a');
                });
        if (
            (h.push(
                D({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: i,
                    baseSDP: r,
                    codec: a,
                    payload: o,
                    bitrate: s,
                    ssrcs: _.flat(),
                    extensions: p
                })
            ),
            u > 0)
        ) {
            let n = f
                .filter((e) => {
                    let [n, r, i, a, o] = e;
                    return 'inactive' !== a && 'video' === i;
                })
                .map((e) => {
                    let [n, r] = e;
                    return R(r, n, 'v');
                });
            h.push(
                D({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: i,
                    baseSDP: r,
                    codec: l,
                    payload: u,
                    bitrate: c,
                    ssrcs: n.flat(),
                    extensions: p,
                    rtxPayload: d
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: n,
        sdp: O(h)
    });
}
function x(e) {
    let { type: n, baseSDP: r, audioCodec: i, audioPayloadType: a, audioBitRate: o, videoCodec: s, videoPayloadType: l, videoBitRate: u, sendingVideo: c, rtxPayloadType: d, ssrcs: f, extensions: p } = e,
        h = [],
        _ = 'answer' === n ? 'passive' : 'actpass';
    return (
        f.forEach((e) => {
            let n,
                { ssrc: f, cname: m, type: g, direction: E, mid: v } = e;
            '' !== m ? (n = R(m, f, 'audio' === g ? 'a' : 'v')) : ((n = []), 'sendonly' === E ? (E = 'inactive') : 'sendrecv' === E && (E = 'recvonly'));
            let y = 'audio' === g ? i : s,
                b = 'audio' === g ? a : l,
                I = 'audio' === g ? null : d,
                T = 'audio' === g ? o : u;
            h.push(
                D({
                    mid: v,
                    type: g,
                    setup: _,
                    direction: E,
                    baseSDP: r,
                    codec: y,
                    payload: b,
                    bitrate: T,
                    ssrcs: n,
                    extensions: p,
                    rtxPayload: I,
                    sendingVideo: c
                })
            );
        }),
        new RTCSessionDescription({
            type: n,
            sdp: O(h)
        })
    );
}
function w(e, n, r, i, a) {
    let o = e.find((e) => e.codec === i);
    if (null == o) return null;
    let s = n.find((e) => RegExp('^apt='.concat(o.payload)).test(e.config)),
        l = null;
    if (null != s) {
        let n = e.find((e) => e.codec === I.ad.RTX && e.payload === s.payload);
        null != n && (l = n.payload);
    }
    return {
        type: r,
        name: i,
        priority: a + 1,
        payloadType: o.payload,
        rtxPayloadType: l
    };
}
function P(e) {
    let n = y.parse(e).media.reduce(
        (e, n) => {
            let r,
                { type: i, rtp: a, ssrcs: o, fmtp: s, direction: l, mid: u } = n;
            switch (
                (e.outboundStreams.push({
                    type: i,
                    direction: l,
                    mid: u
                }),
                i)
            ) {
                case 'audio':
                    [I.ad.OPUS].forEach((n, r) => {
                        let o = w(a, s, i, n, r);
                        null != o && e.codecs.push(o);
                    }),
                        'sendrecv' === l && null != (r = null == o ? void 0 : o.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = r.id);
                    break;
                case 'video':
                    [I.ad.H264, I.ad.VP8, I.ad.VP9].forEach((n, r) => {
                        let o = w(a, s, i, n, r);
                        null != o && e.codecs.push(o);
                    }),
                        'sendrecv' === l && (null != (r = null == o ? void 0 : o.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = r.id), null != (r = null == o ? void 0 : o.findLast((e) => 'cname' === e.attribute)) && (r.id === e.videoSSRC && A.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = r.id)));
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
    return (n.codecs = g()(n.codecs, _())), n;
}
function M(e) {
    var n;
    let { codecs: r } = P(e),
        i = r.find((e) => e.name === I.ad.VP8),
        a = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (n = null == i ? void 0 : i.rtxPayloadType) && void 0 !== n ? n : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => a.test(e)))].join('\n'),
        codecs: r
    };
}
function k(e) {
    if (!e.includes('a=fingerprint')) return A.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return A.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return A.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return A.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return A.error('Remote SDP does not include c-line!'), !1;
    let n = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(n.split(' ').length < 3) || (A.error('Incorrect c-line: '.concat(n)), !1);
}
function U(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let n = e.split(' ');
        return {
            value: parseInt(n[0].split('/')[0].substr(9), 10),
            uri: n[1]
        };
    });
}
