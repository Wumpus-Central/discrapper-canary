"use strict";
n.d(t, { $k: () => b, AK: () => v, An: () => N, HO: () => g, IJ: () => R, aC: () => S, u6: () => A, v5: () => O }),
    n(321073),
    n(775443);
var r = n(267721),
    i = n.n(r),
    a = n(128080),
    s = n.n(a),
    o = n(909203),
    l = n.n(o),
    u = n(214958),
    c = n.n(u),
    d = n(316179),
    _ = n(118356),
    f = n(731854),
    p = n(396574);
let h = 4,
    m = new _.Vy("SDP");
var g = (function (e) {
    return (
        (e.SENDRECV = "sendrecv"), (e.SENDONLY = "sendonly"), (e.RECVONLY = "recvonly"), (e.INACTIVE = "inactive"), e
    );
})({});
let E = "UDP/TLS/RTP/SAVPF";
function A(e) {
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
function I(e, t, n) {
    let r = `${e}-${t}`,
        i = `${n}${r}`;
    return [
        { attribute: "cname", id: t, value: r },
        { attribute: "msid", id: t, value: `${r} ${i}` },
        { attribute: "mslabel", id: t, value: r },
        { attribute: "label", id: t, value: i },
    ];
}
function T(e) {
    return d.write({
        version: 0,
        timing: { start: 0, stop: 0 },
        origin: {
            address: "127.0.0.1",
            ipVer: 4,
            netType: "IN",
            sessionId: "1420070400000",
            sessionVersion: 0,
            username: "-",
        },
        name: "-",
        msidSemantic: { semantic: "WMS", token: "*" },
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
function y(e) {
    let {
        mid: t,
        type: n,
        setup: r,
        direction: a,
        baseSDP: s,
        codec: o,
        payload: l,
        bitrate: u,
        ssrcs: _,
        extensions: m,
        rtxPayload: g,
        sendingVideo: A,
        enableAudioNack: I,
    } = e;
    if ("inactive" === a && !p.PF)
        return {
            connection: { ip: "0.0.0.0", version: 4 },
            direction: "inactive",
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: E,
            rtp: [{ codec: "NULL", payload: l, rate: 0 }],
            mid: void 0,
            type: n,
        };
    let {
        media: [T],
    } = d.parse(s);
    if (
        ((T.type = n),
        (T.protocol = E),
        (T.payloads = l),
        (T.setup = r),
        (T.mid = t),
        (T.rtcpMux = "rtcp-mux"),
        (T.direction = a),
        (T.ssrcs = _),
        _.length > 0 &&
            (null != g &&
                ((T.ssrcGroups = i()(_, h).map((e) => {
                    let t = e[0].id;
                    return { semantics: "FID", ssrcs: `${t} ${t + 1}` };
                })),
                (T.ssrcs = i()(_, h)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            p.PF || "Firefox" === c().name))
    ) {
        let e = _.find((e) => "msid" === e.attribute);
        if (null == e) throw Error("msid missing");
        (T.msid = e.value), (T.ssrcs = T.ssrcs.filter((e) => "cname" === e.attribute));
    }
    switch (n) {
        case "audio":
            "Firefox" === c().name
                ? (T.ext = m.filter((e) => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri))
                : ((T.ext = m.filter(
                      (e) =>
                          "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri ||
                          "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri,
                  )),
                  (T.rtcpFb = [{ type: "transport-cc", payload: l }]),
                  !0 === I && T.rtcpFb?.push({ type: "nack", payload: l })),
                T.rtp.push({ codec: o, encoding: 2, payload: l, rate: 48e3 }),
                o === f.UK.OPUS &&
                    T.fmtp.push({ config: `minptime=10;useinbandfec=1;usedtx=${A ? "0" : "1"}`, payload: l }),
                (T.maxptime = 60);
            break;
        case "video":
            (T.ext = m.filter(
                (e) =>
                    "urn:ietf:params:rtp-hdrext:toffset" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri ||
                    "urn:3gpp:video-orientation" === e.uri ||
                    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri,
            )),
                T.rtp.push({ codec: o, payload: l, rate: 9e4 });
            let y = `x-google-max-bitrate=${u}`;
            o === f.UK.H264
                ? (y += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f")
                : o === f.UK.H265 && (y += ";level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST"),
                T.fmtp.push({ config: y, payload: l }),
                (T.rtcpFb = [
                    { type: "ccm", subtype: "fir", payload: l },
                    { type: "nack", payload: l },
                    { type: "nack", subtype: "pli", payload: l },
                    { type: "goog-remb", payload: l },
                    { type: "transport-cc", payload: l },
                ]),
                null != g &&
                    (T.rtp.push({ codec: "rtx", payload: g, rate: 9e4 }),
                    T.fmtp.push({ config: `apt=${l}`, payload: g }),
                    (T.payloads = `${T.payloads} ${g}`));
    }
    return T;
}
function S(e) {
    let {
            type: t,
            baseSDP: n,
            direction: r,
            audioCodec: i,
            audioPayloadType: a,
            audioBitRate: s,
            videoCodec: o,
            videoPayloadType: l,
            videoBitRate: u,
            rtxPayloadType: d,
            ssrcs: _,
            extensions: f,
        } = e,
        p = [];
    if ((m.info(`generateSessionDescription: ${JSON.stringify(_)}`), "Firefox" === c().name)) {
        let e = "answer" === t ? "passive" : "active";
        _.forEach((t) => {
            let [r, c, _, h, m] = t;
            if ("video" === _ && (0 === l || 0 === d)) return;
            let g = "audio" === _ ? i : o,
                E = "audio" === _ ? a : l,
                A = "audio" === _ ? s : u;
            p.push(
                y({
                    mid: m,
                    type: _,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: g,
                    payload: E,
                    bitrate: A,
                    ssrcs: I(c, r, "audio" === _ ? "a" : "v"),
                    extensions: f,
                }),
            );
        });
    } else {
        let e = "answer" === t ? "passive" : "actpass",
            c = _.filter((e) => {
                let [t, n, r, i, a] = e;
                return "inactive" !== i && "audio" === r;
            }).map((e) => {
                let [t, n] = e;
                return I(n, t, "a");
            });
        if (
            (p.push(
                y({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: a,
                    bitrate: s,
                    ssrcs: c.flat(),
                    extensions: f,
                }),
            ),
            l > 0)
        ) {
            let t = _.filter((e) => {
                let [t, n, r, i, a] = e;
                return "inactive" !== i && "video" === r;
            }).map((e) => {
                let [t, n] = e;
                return I(n, t, "v");
            });
            p.push(
                y({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: f,
                    rtxPayload: d,
                }),
            );
        }
    }
    return new RTCSessionDescription({ type: t, sdp: T(p) });
}
function v(e) {
    let {
            type: t,
            baseSDP: n,
            audioCodec: r,
            audioPayloadType: i,
            audioBitRate: a,
            videoCodec: s,
            videoPayloadType: o,
            videoBitRate: l,
            sendingVideo: u,
            rtxPayloadType: c,
            ssrcs: d,
            extensions: _,
            enableAudioNack: f,
        } = e,
        p = [],
        h = "answer" === t ? "passive" : "actpass";
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: m, type: g, direction: E, mid: A } = e;
            "" !== m
                ? (t = I(m, d, "audio" === g ? "a" : "v"))
                : ((t = []), "sendonly" === E ? (E = "inactive") : "sendrecv" === E && (E = "recvonly"));
            let T = "audio" === g ? r : s,
                S = "audio" === g ? i : o,
                v = "audio" === g ? null : c,
                C = "audio" === g ? a : l;
            p.push(
                y({
                    mid: A,
                    type: g,
                    setup: h,
                    direction: E,
                    baseSDP: n,
                    codec: T,
                    payload: S,
                    bitrate: C,
                    ssrcs: t,
                    extensions: _,
                    rtxPayload: v,
                    sendingVideo: u,
                    enableAudioNack: f,
                }),
            );
        }),
        new RTCSessionDescription({ type: t, sdp: T(p) })
    );
}
function C(e, t, n, r, i) {
    let a = e.find((e) => e.codec === r);
    if (null == a) return null;
    let s = t.find((e) => RegExp(`^apt=${a.payload}`).test(e.config)),
        o = null;
    if (null != s) {
        let t = e.find((e) => e.codec === f.UK.RTX && e.payload === s.payload);
        null != t && (o = t.payload);
    }
    return { type: n, name: r, priority: i + 1, payloadType: a.payload, rtxPayloadType: o };
}
function b(e, t) {
    let n = d.parse(e).media.reduce(
        (e, n) => {
            let r,
                { type: i, rtp: a, ssrcs: s, fmtp: o, direction: l, mid: u } = n;
            switch ((e.outboundStreams.push({ type: i, direction: l, mid: u }), i)) {
                case "audio":
                    [f.UK.OPUS].forEach((t, n) => {
                        let r = C(a, o, i, t, n);
                        null != r && e.codecs.push(r);
                    }),
                        "sendrecv" === l &&
                            null != (r = s?.find((e) => "cname" === e.attribute)) &&
                            (e.audioSSRC = r.id);
                    break;
                case "video":
                    (t ? [f.UK.H265, f.UK.H264, f.UK.VP8, f.UK.VP9] : [f.UK.H264, f.UK.VP8, f.UK.VP9]).forEach(
                        (t, n) => {
                            let r = C(a, o, i, t, n);
                            null != r && e.codecs.push(r);
                        },
                    ),
                        "sendrecv" === l &&
                            (null != (r = s?.find((e) => "cname" === e.attribute)) && (e.videoSSRC = r.id),
                            null != (r = s?.findLast((e) => "cname" === e.attribute)) &&
                                (r.id === e.videoSSRC && m.warn("Unable to find a unique rtx SSRC!"),
                                (e.rtxSSRC = r.id)));
            }
            return e;
        },
        { outboundStreams: [], codecs: [], audioSSRC: 0, videoSSRC: 0, rtxSSRC: 0 },
    );
    return (n.codecs = l()(n.codecs, s())), n;
}
function N(e, t) {
    let { codecs: n } = b(e, t),
        r = n.find((e) => e.name === f.UK.VP8),
        i = RegExp(`^a=ice|a=extmap|a=fingerprint|opus|VP8|${r?.rtxPayloadType ?? 0} rtx`, "i");
    return { sdp: [...new Set(e.split(/\r\n/).filter((e) => i.test(e)))].join("\n"), codecs: n };
}
function R(e) {
    if (!e.includes("a=fingerprint")) return m.error("Remote SDP does not include fingerprint!"), !1;
    if (!e.includes("a=ice-ufrag")) return m.error("Remote SDP does not include ICE user name!"), !1;
    if (!e.includes("a=ice-pwd")) return m.error("Remote SDP does not include ICE password!"), !1;
    if (!e.includes("a=candidate")) return m.error("Remote SDP does not include ICE candidate!"), !1;
    if (!e.includes("c=")) return m.error("Remote SDP does not include c-line!"), !1;
    let t = e
        .split("\n")
        .filter((e) => e.startsWith("c="))
        .join()
        .trim();
    return !(t.split(" ").length < 3) || (m.error(`Incorrect c-line: ${t}`), !1);
}
function O(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith("a=extmap:")))].map((e) => {
        let t = e.split(" ");
        return { value: parseInt(t[0].split("/")[0].substr(9), 10), uri: t[1] };
    });
}
