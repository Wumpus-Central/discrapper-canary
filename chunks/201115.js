"use strict";
n.d(t, { DP: () => o, E5: () => s, II: () => l });
let i = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]),
    r = new Set([".heic", ".heif", ".hif"]),
    a = /\.(heic|heif|hif)$/i;
function s(e) {
    if (i.has(e.type)) return !0;
    let t = e.name.lastIndexOf(".");
    return !(t < 0) && r.has(e.name.slice(t).toLowerCase());
}
function l(e) {
    return "" !== e.type ? e.type : e.name.toLowerCase().endsWith(".heic") ? "image/heic" : "image/heif";
}
function o(e) {
    return a.test(e) ? e.replace(a, ".jpg") : `${e}.jpg`;
}
