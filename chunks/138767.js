n.d(t, {
    Q5: () => d,
    RQ: () => c,
    ZF: () => l,
}),
    n(321073);
var r = n(178636),
    i = n.n(r),
    a = n(731854);
let s = [
    {
        name: "H264",
        encode: !0,
        decode: !0,
    },
    {
        name: "VP8",
        encode: !0,
        decode: !0,
    },
];

function o(e, t) {
    let n = t.concat(s),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.name);
            null != n &&
                r.push({
                    name: n.name,
                    encode: n.encode && t.encode,
                    decode: n.decode && t.decode,
                });
        }),
        r
    );
}

function l(e) {
    var t, n, r, s, o, l;
    let c = [];
    return (
        e.has(a.fd.SIGNAL_AV1_DECODE)
            ? c.push({
                  name: "AV1",
                  encode: !1,
                  decode: !0,
              })
            : e.has(a.fd.SIGNAL_AV1) &&
              c.push({
                  name: "AV1",
                  encode: !0,
                  decode: !0,
              }),
        c.push({
            name: "H265",
            encode:
                "u" < typeof window ||
                (null == (n = window) || null == (t = n.DiscordNative) ? void 0 : t.process.platform) !== "darwin" ||
                ((null == (s = window) || null == (r = s.DiscordNative) ? void 0 : r.os.arch) === "arm64" &&
                    i().satisfies(null == (l = window) || null == (o = l.DiscordNative) ? void 0 : o.os.release, a.Dk)),
            decode:
                !(null == e ? void 0 : e.has(a.fd.H265_HARDWARE_ONLY)) ||
                (null == e ? void 0 : e.has(a.fd.H265_HARDWARE_DECODE_AVAILABLE)),
        }),
        c
    );
}

function c(e, t) {
    return o(
        JSON.parse(e).map((e) => ({
            name: u(e.codec),
            encode: e.encode,
            decode: e.decode,
        })),
        t,
    );
}

function u(e) {
    return "AV1X" === e ? "AV1" : e;
}

function d(e) {
    return "AV1" === e ? "AV1X" : e;
}
