"use strict";
n.d(t, { Q5: () => u, RQ: () => l, ZF: () => o }), n(321073);
var r = n(178636),
    i = n.n(r),
    s = n(731854);
let a = [
    { name: "H264", encode: !0, decode: !0 },
    { name: "VP8", encode: !0, decode: !0 },
];
function o(e) {
    let t = [];
    return (
        e.has(s.fd.SIGNAL_AV1_DECODE)
            ? t.push({ name: "AV1", encode: !1, decode: !0 })
            : e.has(s.fd.SIGNAL_AV1) && t.push({ name: "AV1", encode: !0, decode: !0 }),
        t.push({
            name: "H265",
            encode:
                "u" < typeof window ||
                window?.DiscordNative?.process.platform !== "darwin" ||
                (window?.DiscordNative?.os.arch === "arm64" && i().satisfies(window?.DiscordNative?.os.release, s.Dk)),
            decode: !e?.has(s.fd.H265_HARDWARE_ONLY) || e?.has(s.fd.H265_HARDWARE_DECODE_AVAILABLE),
        }),
        t
    );
}
function l(e, t) {
    var n;
    let r, i;
    return (
        (n = JSON.parse(e).map((e) => {
            var t;
            return { name: "AV1X" === (t = e.codec) ? "AV1" : t, encode: e.encode, decode: e.decode };
        })),
        (r = t.concat(a)),
        (i = []),
        r.forEach((e) => {
            let t = n.find((t) => e.name === t.name);
            null != t && i.push({ name: t.name, encode: t.encode && e.encode, decode: t.decode && e.decode });
        }),
        i
    );
}
function u(e) {
    return "AV1" === e ? "AV1X" : e;
}
