"use strict";
n.d(t, { $k: () => C, AK: () => N, An: () => O, HO: () => m, IJ: () => R, aC: () => y, u6: () => A, v5: () => b }),
    n(321073),
    n(775443);
var r,
    i = n(267721),
    s = n.n(i),
    a = n(128080),
    o = n.n(a),
    l = n(909203),
    u = n.n(l),
    c = n(214958),
    d = n.n(c),
    _ = n(316179),
    f = n(118356),
    p = n(731854),
    h = n(396574);
let E = new f.Vy("SDP");
var m =
    (((r = {}).SENDRECV = "sendrecv"),
    (r.SENDONLY = "sendonly"),
    (r.RECVONLY = "recvonly"),
    (r.INACTIVE = "inactive"),
    r);
let g = "UDP/TLS/RTP/SAVPF";
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
    return _.write({
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
function S(e) {
    let {
        mid: t,
        type: n,
        setup: r,
        direction: i,
        baseSDP: a,
        codec: o,
        payload: l,
        bitrate: u,
        ssrcs: c,
        extensions: f,
        rtxPayload: E,
        sendingVideo: m,
        enableAudioNack: A,
    } = e;
    if ("inactive" === i && !h.PF)
        return {
            connection: { ip: "0.0.0.0", version: 4 },
            direction: "inactive",
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: g,
            rtp: [{ codec: "NULL", payload: l, rate: 0 }],
            mid: void 0,
            type: n,
        };
    let {
        media: [I],
    } = _.parse(a);
    if (
        ((I.type = n),
        (I.protocol = g),
        (I.payloads = l),
        (I.setup = r),
        (I.mid = t),
        (I.rtcpMux = "rtcp-mux"),
        (I.direction = i),
        (I.ssrcs = c),
        c.length > 0 &&
            (null != E &&
                ((I.ssrcGroups = s()(c, 4).map((e) => {
                    let t = e[0].id;
                    return { semantics: "FID", ssrcs: `${t} ${t + 1}` };
                })),
                (I.ssrcs = s()(c, 4)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            h.PF || "Firefox" === d().name))
    ) {
        let e = c.find((e) => "msid" === e.attribute);
        if (null == e) throw Error("msid missing");
        (I.msid = e.value), (I.ssrcs = I.ssrcs.filter((e) => "cname" === e.attribute));
    }
    switch (n) {
        case "audio":
            "Firefox" === d().name
                ? (I.ext = f.filter((e) => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri))
                : ((I.ext = f.filter(
                      (e) =>
                          "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri ||
                          "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri,
                  )),
                  (I.rtcpFb = [{ type: "transport-cc", payload: l }]),
                  !0 === A && I.rtcpFb?.push({ type: "nack", payload: l })),
                I.rtp.push({ codec: o, encoding: 2, payload: l, rate: 48e3 }),
                o === p.UK.OPUS &&
                    I.fmtp.push({ config: `minptime=10;useinbandfec=1;usedtx=${m ? "0" : "1"}`, payload: l }),
                (I.maxptime = 60);
            break;
        case "video":
            (I.ext = f.filter(
                (e) =>
                    "urn:ietf:params:rtp-hdrext:toffset" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri ||
                    "urn:3gpp:video-orientation" === e.uri ||
                    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri,
            )),
                I.rtp.push({ codec: o, payload: l, rate: 9e4 });
            let T = `x-google-max-bitrate=${u}`;
            o === p.UK.H264
                ? (T += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f")
                : o === p.UK.H265 && (T += ";level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST"),
                I.fmtp.push({ config: T, payload: l }),
                (I.rtcpFb = [
                    { type: "ccm", subtype: "fir", payload: l },
                    { type: "nack", payload: l },
                    { type: "nack", subtype: "pli", payload: l },
                    { type: "goog-remb", payload: l },
                    { type: "transport-cc", payload: l },
                ]),
                null != E &&
                    (I.rtp.push({ codec: "rtx", payload: E, rate: 9e4 }),
                    I.fmtp.push({ config: `apt=${l}`, payload: E }),
                    (I.payloads = `${I.payloads} ${E}`));
    }
    return I;
}
function y(e) {
    let {
            type: t,
            baseSDP: n,
            direction: r,
            audioCodec: i,
            audioPayloadType: s,
            audioBitRate: a,
            videoCodec: o,
            videoPayloadType: l,
            videoBitRate: u,
            rtxPayloadType: c,
            ssrcs: _,
            extensions: f,
        } = e,
        p = [];
    if ((E.info(`generateSessionDescription: ${JSON.stringify(_)}`), "Firefox" === d().name)) {
        let e = "answer" === t ? "passive" : "active";
        _.forEach((t) => {
            let [r, d, _, h, E] = t;
            ("video" === _ && (0 === l || 0 === c)) ||
                p.push(
                    S({
                        mid: E,
                        type: _,
                        setup: e,
                        direction: h,
                        baseSDP: n,
                        codec: "audio" === _ ? i : o,
                        payload: "audio" === _ ? s : l,
                        bitrate: "audio" === _ ? a : u,
                        ssrcs: I(d, r, "audio" === _ ? "a" : "v"),
                        extensions: f,
                    }),
                );
        });
    } else {
        let e = "answer" === t ? "passive" : "actpass",
            d = _.filter((e) => {
                let [t, n, r, i, s] = e;
                return "inactive" !== i && "audio" === r;
            }).map((e) => {
                let [t, n] = e;
                return I(n, t, "a");
            });
        if (
            (p.push(
                S({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: s,
                    bitrate: a,
                    ssrcs: d.flat(),
                    extensions: f,
                }),
            ),
            l > 0)
        ) {
            let t = _.filter((e) => {
                let [t, n, r, i, s] = e;
                return "inactive" !== i && "video" === r;
            }).map((e) => {
                let [t, n] = e;
                return I(n, t, "v");
            });
            p.push(
                S({
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
                    rtxPayload: c,
                }),
            );
        }
    }
    return new RTCSessionDescription({ type: t, sdp: T(p) });
}
function N(e) {
    let {
            type: t,
            baseSDP: n,
            audioCodec: r,
            audioPayloadType: i,
            audioBitRate: s,
            videoCodec: a,
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
                { ssrc: d, cname: E, type: m, direction: g, mid: A } = e;
            "" !== E
                ? (t = I(E, d, "audio" === m ? "a" : "v"))
                : ((t = []), "sendonly" === g ? (g = "inactive") : "sendrecv" === g && (g = "recvonly")),
                p.push(
                    S({
                        mid: A,
                        type: m,
                        setup: h,
                        direction: g,
                        baseSDP: n,
                        codec: "audio" === m ? r : a,
                        payload: "audio" === m ? i : o,
                        bitrate: "audio" === m ? s : l,
                        ssrcs: t,
                        extensions: _,
                        rtxPayload: "audio" === m ? null : c,
                        sendingVideo: u,
                        enableAudioNack: f,
                    }),
                );
        }),
        new RTCSessionDescription({ type: t, sdp: T(p) })
    );
}
function v(e, t, n, r, i) {
    let s = e.find((e) => e.codec === r);
    if (null == s) return null;
    let a = t.find((e) => RegExp(`^apt=${s.payload}`).test(e.config)),
        o = null;
    if (null != a) {
        let t = e.find((e) => e.codec === p.UK.RTX && e.payload === a.payload);
        null != t && (o = t.payload);
    }
    return { type: n, name: r, priority: i + 1, payloadType: s.payload, rtxPayloadType: o };
}
function C(e, t) {
    let n = _.parse(e).media.reduce(
        (e, n) => {
            let r,
                { type: i, rtp: s, ssrcs: a, fmtp: o, direction: l, mid: u } = n;
            switch ((e.outboundStreams.push({ type: i, direction: l, mid: u }), i)) {
                case "audio":
                    [p.UK.OPUS].forEach((t, n) => {
                        let r = v(s, o, i, t, n);
                        null != r && e.codecs.push(r);
                    }),
                        "sendrecv" === l &&
                            null != (r = a?.find((e) => "cname" === e.attribute)) &&
                            (e.audioSSRC = r.id);
                    break;
                case "video":
                    (t ? [p.UK.H265, p.UK.H264, p.UK.VP8, p.UK.VP9] : [p.UK.H264, p.UK.VP8, p.UK.VP9]).forEach(
                        (t, n) => {
                            let r = v(s, o, i, t, n);
                            null != r && e.codecs.push(r);
                        },
                    ),
                        "sendrecv" === l &&
                            (null != (r = a?.find((e) => "cname" === e.attribute)) && (e.videoSSRC = r.id),
                            null != (r = a?.findLast((e) => "cname" === e.attribute)) &&
                                (r.id === e.videoSSRC && E.warn("Unable to find a unique rtx SSRC!"),
                                (e.rtxSSRC = r.id)));
            }
            return e;
        },
        { outboundStreams: [], codecs: [], audioSSRC: 0, videoSSRC: 0, rtxSSRC: 0 },
    );
    return (n.codecs = u()(n.codecs, o())), n;
}
function O(e, t) {
    let { codecs: n } = C(e, t),
        r = n.find((e) => e.name === p.UK.VP8),
        i = RegExp(`^a=ice|a=extmap|a=fingerprint|opus|VP8|${r?.rtxPayloadType ?? 0} rtx`, "i");
    return { sdp: [...new Set(e.split(/\r\n/).filter((e) => i.test(e)))].join("\n"), codecs: n };
}
function R(e) {
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
    return !(t.split(" ").length < 3) || (E.error(`Incorrect c-line: ${t}`), !1);
}
function b(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith("a=extmap:")))].map((e) => {
        let t = e.split(" ");
        return { value: parseInt(t[0].split("/")[0].substr(9), 10), uri: t[1] };
    });
}
