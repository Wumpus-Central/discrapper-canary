"use strict";
n.d(t, { El: () => c, Fd: () => o, nK: () => f, sJ: () => l });
var r = n(998218);
let i = ["͏", "឴", "឵", "ᅠ", "ㅤ", "ﾠ"],
    s = RegExp(`${/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source}|${i.join("|")}`, "gu"),
    a = RegExp(`${/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n\t]|[^\P{Zs} ]/gu.source}|${i.join("|")}`, "gu");
function o(e) {
    return e.replace(s, "");
}
function l(e) {
    return e.replace(a, "");
}
let u = [
    {
        character: "h",
        matcher: d([
            "H",
            "һ",
            "հ",
            "Ꮒ",
            "ℎ",
            "\uD835\uDC21",
            "\uD835\uDC89",
            "\uD835\uDCBD",
            "\uD835\uDCF1",
            "\uD835\uDD25",
            "\uD835\uDD59",
            "\uD835\uDD8D",
            "\uD835\uDDC1",
            "\uD835\uDDF5",
            "\uD835\uDE29",
            "\uD835\uDE5D",
            "\uD835\uDE91",
            "ｈ",
        ]),
    },
    {
        character: "t",
        matcher: d([
            "T",
            "\uD835\uDC2D",
            "\uD835\uDC61",
            "\uD835\uDC95",
            "\uD835\uDCC9",
            "\uD835\uDCFD",
            "\uD835\uDD31",
            "\uD835\uDD65",
            "\uD835\uDD99",
            "\uD835\uDDCD",
            "\uD835\uDE01",
            "\uD835\uDE35",
            "\uD835\uDE69",
            "\uD835\uDE9D",
        ]),
    },
    {
        character: "p",
        matcher: d([
            "P",
            "ρ",
            "ϱ",
            "р",
            "⍴",
            "ⲣ",
            "\uD835\uDC29",
            "\uD835\uDC5D",
            "\uD835\uDC91",
            "\uD835\uDCC5",
            "\uD835\uDCF9",
            "\uD835\uDD2D",
            "\uD835\uDD61",
            "\uD835\uDD95",
            "\uD835\uDDC9",
            "\uD835\uDDFD",
            "\uD835\uDE31",
            "\uD835\uDE65",
            "\uD835\uDE99",
            "\uD835\uDED2",
            "\uD835\uDEE0",
            "\uD835\uDF0C",
            "\uD835\uDF1A",
            "\uD835\uDF46",
            "\uD835\uDF54",
            "\uD835\uDF80",
            "\uD835\uDF8E",
            "\uD835\uDFBA",
            "\uD835\uDFC8",
            "ｐ",
            "ҏ",
        ]),
    },
    {
        character: "s",
        matcher: d([
            "S",
            "ƽ",
            "ѕ",
            "ꜱ",
            "ꮪ",
            "\uD801\uDC48",
            "\uD806\uDCC1",
            "\uD835\uDC2C",
            "\uD835\uDC60",
            "\uD835\uDC94",
            "\uD835\uDCC8",
            "\uD835\uDCFC",
            "\uD835\uDD30",
            "\uD835\uDD64",
            "\uD835\uDD98",
            "\uD835\uDDCC",
            "\uD835\uDE00",
            "\uD835\uDE34",
            "\uD835\uDE68",
            "\uD835\uDE9C",
            "ｓ",
        ]),
    },
    {
        character: ":",
        matcher: d(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"]),
    },
    {
        character: "/",
        matcher: d(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"]),
    },
];
function d(e) {
    return RegExp(e.join("|"), "gu");
}
function c(e) {
    let t = e;
    return (
        u.forEach((e) => {
            t = t.replace(e.matcher, e.character);
        }),
        t
    );
}
let _ = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
];
function f(e) {
    let t = (function (e) {
        if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
        let t = "";
        "" !== e.username && (t += e.username), "" !== e.password && (t += ":" + e.password), "" !== t && (t += "@");
        let n = "//" === e.href.substr(e.protocol.length, 2);
        return `${e.protocol}${n ? "//" : ""}${t}${e.host}`;
    })(e);
    return (t += E(e.pathname)), (t += E(e.search)), (t += E(e.hash));
}
function E(e) {
    let t = r.A.safeDecodeURIComponent(e);
    if (null == t) return e;
    let n = "",
        i = e,
        s = t;
    for (; i.length > 0; ) {
        let e = i.codePointAt(0),
            t = s.codePointAt(0);
        if (e === t) {
            let t = String.fromCodePoint(e);
            (n += t), (i = i.substring(t.length)), (s = s.substring(t.length));
            continue;
        }
        let r = String.fromCodePoint(t),
            a = encodeURIComponent(r),
            o = a === r ? 3 : a.length;
        (n += (
            t >= 0 && t < 128
                ? 1 !== _[t]
                : 8206 === t ||
                  8207 === t ||
                  8234 === t ||
                  8235 === t ||
                  8236 === t ||
                  8237 === t ||
                  8238 === t ||
                  1564 === t ||
                  8294 === t ||
                  8295 === t ||
                  8296 === t ||
                  8297 === t ||
                  128271 === t ||
                  128272 === t ||
                  128274 === t ||
                  128275 === t ||
                  133 === t ||
                  160 === t ||
                  5760 === t ||
                  8192 === t ||
                  8193 === t ||
                  8194 === t ||
                  8195 === t ||
                  8196 === t ||
                  8197 === t ||
                  8198 === t ||
                  8199 === t ||
                  8200 === t ||
                  8201 === t ||
                  8202 === t ||
                  8232 === t ||
                  8233 === t ||
                  8239 === t ||
                  8287 === t ||
                  12288 === t ||
                  10240 === t ||
                  173 === t ||
                  847 === t ||
                  (t >= 1536 && t <= 1541) ||
                  1757 === t ||
                  1807 === t ||
                  2274 === t ||
                  4447 === t ||
                  4448 === t ||
                  6068 === t ||
                  6069 === t ||
                  6155 === t ||
                  6156 === t ||
                  6157 === t ||
                  6158 === t ||
                  8203 === t ||
                  8204 === t ||
                  8205 === t ||
                  8288 === t ||
                  8289 === t ||
                  8290 === t ||
                  8291 === t ||
                  8292 === t ||
                  8293 === t ||
                  (t >= 8298 && t <= 8303) ||
                  12644 === t ||
                  (t >= 65520 && t <= 65528) ||
                  (t >= 65024 && t <= 65039) ||
                  65279 === t ||
                  65440 === t ||
                  65529 === t ||
                  65530 === t ||
                  65531 === t ||
                  69821 === t ||
                  69837 === t ||
                  (t >= 78896 && t <= 78904) ||
                  (t >= 113824 && t <= 113827) ||
                  (t >= 119155 && t <= 119162) ||
                  (t >= 917504 && t <= 921599)
        )
            ? a
            : r),
            (i = i.substring(o)),
            (s = s.substring(r.length));
    }
    return n;
}
