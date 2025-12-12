n.d(t, {
    Bg: () => E,
    Ic: () => i,
    M: () => a,
    OC: () => _,
    s3: () => s,
    uv: () => o,
});
var r = n(886649);
function i(e, t, n, i) {
    let a = Object.entries((0, r.Jr)(i)).sort((e, t) => e[0].localeCompare(t[0]));
    return `${e}${t}${n}${a}`;
}
function a(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
    return t >>> 0;
}
function o(e) {
    let t = "";
    for (let n of e) {
        let e = Object.entries(n.tags),
            r = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(",")}` : "";
        t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`;
    }
    return t;
}
function _(e) {
    return e.replace(/[^\w]+/gi, "_");
}
function s(e) {
    return e.replace(/[^\w\-.]+/gi, "_");
}
let c = [
    ["\n", "\\n"],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\\", "\\\\"],
    ["|", "\\u{7c}"],
    [",", "\\u{2c}"],
];
function E(e) {
    let t = {};
    for (let n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
            (t[n.replace(/[^\w\-./]+/gi, "")] = [...String(e[n])].reduce(
                (e, t) =>
                    e +
                    (function (e) {
                        for (let [t, n] of c) if (e === t) return n;
                        return e;
                    })(t),
                "",
            ));
    return t;
}
