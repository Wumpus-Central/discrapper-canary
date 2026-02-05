"use strict";
n.d(t, { Q5: () => d, RQ: () => u, ZF: () => l }), n(321073);
var r = n(178636),
    i = n.n(r),
    a = n(731854);
let s = [
    { name: "H264", encode: !0, decode: !0 },
    { name: "VP8", encode: !0, decode: !0 },
];
function o(e, t) {
    let n = t.concat(s),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.name);
            null != n && r.push({ name: n.name, encode: n.encode && t.encode, decode: n.decode && t.decode });
        }),
        r
    );
}
function l(e) {
    let t = [];
    return (
        e.has(a.fd.SIGNAL_AV1_DECODE)
            ? t.push({ name: "AV1", encode: !1, decode: !0 })
            : e.has(a.fd.SIGNAL_AV1) && t.push({ name: "AV1", encode: !0, decode: !0 }),
        t.push({
            name: "H265",
            encode:
                "u" < typeof window ||
                window?.DiscordNative?.process.platform !== "darwin" ||
                (window?.DiscordNative?.os.arch === "arm64" && i().satisfies(window?.DiscordNative?.os.release, a.Dk)),
            decode: !e?.has(a.fd.H265_HARDWARE_ONLY) || e?.has(a.fd.H265_HARDWARE_DECODE_AVAILABLE),
        }),
        t
    );
}
function u(e, t) {
    return o(
        JSON.parse(e).map((e) => ({ name: c(e.codec), encode: e.encode, decode: e.decode })),
        t,
    );
}
function c(e) {
    return "AV1X" === e ? "AV1" : e;
}
function d(e) {
    return "AV1" === e ? "AV1X" : e;
}
