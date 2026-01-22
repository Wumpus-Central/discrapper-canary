n.d(t, {
    $k: () => N,
    AK: () => T,
    An: () => R,
    HO: () => b,
    IJ: () => w,
    aC: () => I,
    u6: () => O,
    v5: () => P,
}),
    n(896048),
    n(864466),
    n(443073),
    n(65821),
    n(321073),
    n(457529),
    n(591487),
    n(727858),
    n(747238),
    n(775443),
    n(733351);
var r = n(267721),
    i = n.n(r),
    a = n(128080),
    s = n.n(a),
    o = n(909203),
    l = n.n(o),
    c = n(214958),
    u = n.n(c),
    d = n(316179),
    f = n(118356),
    p = n(731854),
    _ = n(396574);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 4,
    E = new f.Vy("SDP");
var b = (function (e) {
    return (
        (e.SENDRECV = "sendrecv"), (e.SENDONLY = "sendonly"), (e.RECVONLY = "recvonly"), (e.INACTIVE = "inactive"), e
    );
})({});
let y = "UDP/TLS/RTP/SAVPF";

function O(e) {
    switch (e) {
        case "recvonly":
            return "sendonly";
        case "sendonly":
            return "recvonly";
        case "sendrecv":
            return "sendrecv";
        default:
            return "inactive";
    }
}

function A(e, t, n) {
    let r = "".concat(e, "-").concat(t),
        i = "".concat(n).concat(r);
    return [
        {
            attribute: "cname",
            id: t,
            value: r,
        },
        {
            attribute: "msid",
            id: t,
            value: "".concat(r, " ").concat(i),
        },
        {
            attribute: "mslabel",
            id: t,
            value: r,
        },
        {
            attribute: "label",
            id: t,
            value: i,
        },
    ];
}

function v(e) {
    return d.write({
        version: 0,
        timing: {
            start: 0,
            stop: 0,
        },
        origin: {
            address: "127.0.0.1",
            ipVer: 4,
            netType: "IN",
            sessionId: "1420070400000",
            sessionVersion: 0,
            username: "-",
        },
        name: "-",
        msidSemantic: {
            semantic: "WMS",
            token: "*",
        },
        groups: [
            {
                type: "BUNDLE",
                mids: e
                    .filter((e) => null != e.mid)
                    .map((e) => e.mid)
                    .join(" "),
            },
        ],
        media: e,
    });
}

function S(e) {
    let {
        mid: t,
        type: n,
        setup: r,
        direction: a,
        baseSDP: s,
        codec: o,
        payload: l,
        bitrate: c,
        ssrcs: f,
        extensions: h,
        rtxPayload: E,
        sendingVideo: b,
        enableAudioNack: O,
    } = e;
    if ("inactive" === a && !_.PF)
        return {
            connection: {
                ip: "0.0.0.0",
                version: 4,
            },
            direction: "inactive",
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: y,
            rtp: [
                {
                    codec: "NULL",
                    payload: l,
                    rate: 0,
                },
            ],
            mid: void 0,
            type: n,
        };
    let {
        media: [A],
    } = d.parse(s);
    if (
        ((A.type = n),
        (A.protocol = y),
        (A.payloads = l),
        (A.setup = r),
        (A.mid = t),
        (A.rtcpMux = "rtcp-mux"),
        (A.direction = a),
        (A.ssrcs = f),
        f.length > 0 &&
            (null != E &&
                ((A.ssrcGroups = i()(f, g).map((e) => {
                    let t = e[0].id;
                    return {
                        semantics: "FID",
                        ssrcs: "".concat(t, " ").concat(t + 1),
                    };
                })),
                (A.ssrcs = i()(f, g)
                    .map((e) => {
                        let t = e.map((e) => ((e = m({}, e)), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            _.PF || "Firefox" === u().name))
    ) {
        let e = f.find((e) => "msid" === e.attribute);
        if (null == e) throw Error("msid missing");
        (A.msid = e.value), (A.ssrcs = A.ssrcs.filter((e) => "cname" === e.attribute));
    }
    switch (n) {
        case "audio":
            if ("Firefox" === u().name)
                A.ext = h.filter((e) => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri);
            else if (
                ((A.ext = h.filter(
                    (e) =>
                        "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri ||
                        "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri,
                )),
                (A.rtcpFb = [
                    {
                        type: "transport-cc",
                        payload: l,
                    },
                ]),
                !0 === O)
            ) {
                var v;
                null == (v = A.rtcpFb) ||
                    v.push({
                        type: "nack",
                        payload: l,
                    });
            }
            A.rtp.push({
                codec: o,
                encoding: 2,
                payload: l,
                rate: 48e3,
            }),
                o === p.UK.OPUS &&
                    A.fmtp.push({
                        config: "minptime=10;useinbandfec=1;usedtx=".concat(b ? "0" : "1"),
                        payload: l,
                    }),
                (A.maxptime = 60);
            break;
        case "video":
            (A.ext = h.filter(
                (e) =>
                    "urn:ietf:params:rtp-hdrext:toffset" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri ||
                    "urn:3gpp:video-orientation" === e.uri ||
                    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri,
            )),
                A.rtp.push({
                    codec: o,
                    payload: l,
                    rate: 9e4,
                });
            let S = "x-google-max-bitrate=".concat(c);
            o === p.UK.H264
                ? (S += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f")
                : o === p.UK.H265 && (S += ";level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST"),
                A.fmtp.push({
                    config: S,
                    payload: l,
                }),
                (A.rtcpFb = [
                    {
                        type: "ccm",
                        subtype: "fir",
                        payload: l,
                    },
                    {
                        type: "nack",
                        payload: l,
                    },
                    {
                        type: "nack",
                        subtype: "pli",
                        payload: l,
                    },
                    {
                        type: "goog-remb",
                        payload: l,
                    },
                    {
                        type: "transport-cc",
                        payload: l,
                    },
                ]),
                null != E &&
                    (A.rtp.push({
                        codec: "rtx",
                        payload: E,
                        rate: 9e4,
                    }),
                    A.fmtp.push({
                        config: "apt=".concat(l),
                        payload: E,
                    }),
                    (A.payloads = "".concat(A.payloads, " ").concat(E)));
    }
    return A;
}

function I(e) {
    let {
            type: t,
            baseSDP: n,
            direction: r,
            audioCodec: i,
            audioPayloadType: a,
            audioBitRate: s,
            videoCodec: o,
            videoPayloadType: l,
            videoBitRate: c,
            rtxPayloadType: d,
            ssrcs: f,
            extensions: p,
        } = e,
        _ = [];
    if ((E.info("generateSessionDescription: ".concat(JSON.stringify(f))), "Firefox" === u().name)) {
        let e = "answer" === t ? "passive" : "active";
        f.forEach((t) => {
            let [r, u, f, h, m] = t;
            if ("video" === f && (0 === l || 0 === d)) return;
            let g = "audio" === f ? i : o,
                E = "audio" === f ? a : l,
                b = "audio" === f ? s : c;
            _.push(
                S({
                    mid: m,
                    type: f,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: g,
                    payload: E,
                    bitrate: b,
                    ssrcs: A(u, r, "audio" === f ? "a" : "v"),
                    extensions: p,
                }),
            );
        });
    } else {
        let e = "answer" === t ? "passive" : "actpass",
            u = f
                .filter((e) => {
                    let [t, n, r, i, a] = e;
                    return "inactive" !== i && "audio" === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return A(n, t, "a");
                });
        if (
            (_.push(
                S({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: a,
                    bitrate: s,
                    ssrcs: u.flat(),
                    extensions: p,
                }),
            ),
            l > 0)
        ) {
            let t = f
                .filter((e) => {
                    let [t, n, r, i, a] = e;
                    return "inactive" !== i && "video" === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return A(n, t, "v");
                });
            _.push(
                S({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: c,
                    ssrcs: t.flat(),
                    extensions: p,
                    rtxPayload: d,
                }),
            );
        }
    }
    return new RTCSessionDescription({
        type: t,
        sdp: v(_),
    });
}

function T(e) {
    let {
            type: t,
            baseSDP: n,
            audioCodec: r,
            audioPayloadType: i,
            audioBitRate: a,
            videoCodec: s,
            videoPayloadType: o,
            videoBitRate: l,
            sendingVideo: c,
            rtxPayloadType: u,
            ssrcs: d,
            extensions: f,
            enableAudioNack: p,
        } = e,
        _ = [],
        h = "answer" === t ? "passive" : "actpass";
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: m, type: g, direction: E, mid: b } = e;
            "" !== m
                ? (t = A(m, d, "audio" === g ? "a" : "v"))
                : ((t = []), "sendonly" === E ? (E = "inactive") : "sendrecv" === E && (E = "recvonly"));
            let y = "audio" === g ? r : s,
                O = "audio" === g ? i : o,
                v = "audio" === g ? null : u,
                I = "audio" === g ? a : l;
            _.push(
                S({
                    mid: b,
                    type: g,
                    setup: h,
                    direction: E,
                    baseSDP: n,
                    codec: y,
                    payload: O,
                    bitrate: I,
                    ssrcs: t,
                    extensions: f,
                    rtxPayload: v,
                    sendingVideo: c,
                    enableAudioNack: p,
                }),
            );
        }),
        new RTCSessionDescription({
            type: t,
            sdp: v(_),
        })
    );
}

function C(e, t, n, r, i) {
    let a = e.find((e) => e.codec === r);
    if (null == a) return null;
    let s = t.find((e) => RegExp("^apt=".concat(a.payload)).test(e.config)),
        o = null;
    if (null != s) {
        let t = e.find((e) => e.codec === p.UK.RTX && e.payload === s.payload);
        null != t && (o = t.payload);
    }
    return {
        type: n,
        name: r,
        priority: i + 1,
        payloadType: a.payload,
        rtxPayloadType: o,
    };
}

function N(e, t) {
    let n = d.parse(e).media.reduce(
        (e, n) => {
            let r,
                { type: i, rtp: a, ssrcs: s, fmtp: o, direction: l, mid: c } = n;
            switch (
                (e.outboundStreams.push({
                    type: i,
                    direction: l,
                    mid: c,
                }),
                i)
            ) {
                case "audio":
                    [p.UK.OPUS].forEach((t, n) => {
                        let r = C(a, o, i, t, n);
                        null != r && e.codecs.push(r);
                    }),
                        "sendrecv" === l &&
                            null != (r = null == s ? void 0 : s.find((e) => "cname" === e.attribute)) &&
                            (e.audioSSRC = r.id);
                    break;
                case "video":
                    (t ? [p.UK.H265, p.UK.H264, p.UK.VP8, p.UK.VP9] : [p.UK.H264, p.UK.VP8, p.UK.VP9]).forEach(
                        (t, n) => {
                            let r = C(a, o, i, t, n);
                            null != r && e.codecs.push(r);
                        },
                    ),
                        "sendrecv" === l &&
                            (null != (r = null == s ? void 0 : s.find((e) => "cname" === e.attribute)) &&
                                (e.videoSSRC = r.id),
                            null != (r = null == s ? void 0 : s.findLast((e) => "cname" === e.attribute)) &&
                                (r.id === e.videoSSRC && E.warn("Unable to find a unique rtx SSRC!"),
                                (e.rtxSSRC = r.id)));
            }
            return e;
        },
        {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0,
        },
    );
    return (n.codecs = l()(n.codecs, s())), n;
}

function R(e, t) {
    var n;
    let { codecs: r } = N(e, t),
        i = r.find((e) => e.name === p.UK.VP8),
        a = RegExp(
            "^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(
                null != (n = null == i ? void 0 : i.rtxPayloadType) ? n : 0,
                " rtx",
            ),
            "i",
        );
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => a.test(e)))].join("\n"),
        codecs: r,
    };
}

function w(e) {
    if (!e.includes("a=fingerprint")) return E.error("Remote SDP does not include fingerprint!"), !1;
    if (!e.includes("a=ice-ufrag")) return E.error("Remote SDP does not include ICE user name!"), !1;
    if (!e.includes("a=ice-pwd")) return E.error("Remote SDP does not include ICE password!"), !1;
    if (!e.includes("a=candidate")) return E.error("Remote SDP does not include ICE candidate!"), !1;
    if (!e.includes("c=")) return E.error("Remote SDP does not include c-line!"), !1;
    let t = e
        .split("\n")
        .filter((e) => e.startsWith("c="))
        .join()
        .trim();
    return !(t.split(" ").length < 3) || (E.error("Incorrect c-line: ".concat(t)), !1);
}

function P(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith("a=extmap:")))].map((e) => {
        let t = e.split(" ");
        return {
            value: parseInt(t[0].split("/")[0].substr(9), 10),
            uri: t[1],
        };
    });
}
