n.d(t, {
    N7: () => o,
    Xi: () => c,
    Y0: () => a,
    a: () => d,
    fP: () => r,
    gP: () => s,
    y: () => u,
}),
    n(65821),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var l = n(335416),
    i = n(985018);
let a = (e, t, n) => (-1 === e ? 0 : e - (t * e) / n);
function r(e) {
    return e / 1000;
}
let s = (e, t, n) => (-1 === e ? n : e + (t * (n - e)) / n),
    u = (e, t, n, l) => (t >= 0 && n > 0 ? ((e - (t - (n * t) / l)) * 100) / n : (100 * e) / l).toFixed(4),
    o = (e, t, n, l) =>
        (t >= 0 && n > 0 ? -((e - (t + (n * (l - t)) / l)) * 100) / n : -(100 * e * 1) / l + 100).toFixed(4);
async function c(e) {
    if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !l.VM.has(e.type))
        throw Error(i.intl.formatToPlainString(i.t["2y3xGU"], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let n = () => {
                e(), t.removeEventListener("canplaythrough", n);
            };
            t.addEventListener("canplaythrough", n), t.load();
        }),
        t
    );
}
async function d(e, t) {
    let n = await fetch(e);
    return new File([await n.blob()], t, { type: "audio/mp3" });
}
