l.d(t, { N7: () => o, Xi: () => d, Y0: () => i, a: () => c, fP: () => s, gP: () => r, y: () => u }),
    l(323874),
    l(14289),
    l(35956);
var n = l(335416),
    a = l(985018);
let i = (e, t, l) => (-1 === e ? 0 : e - (t * e) / l);
function s(e) {
    return e / 1e3;
}
let r = (e, t, l) => (-1 === e ? l : e + (t * (l - e)) / l),
    u = (e, t, l, n) => (t >= 0 && l > 0 ? ((e - (t - (l * t) / n)) * 100) / l : (100 * e) / n).toFixed(4),
    o = (e, t, l, n) =>
        (t >= 0 && l > 0 ? -((e - (t + (l * (n - t)) / n)) * 100) / l : -(100 * e * 1) / n + 100).toFixed(4);
async function d(e) {
    if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !n.VM.has(e.type))
        throw Error(a.intl.formatToPlainString(a.t["2y3xGU"], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let l = () => {
                e(), t.removeEventListener("canplaythrough", l);
            };
            t.addEventListener("canplaythrough", l), t.load();
        }),
        t
    );
}
async function c(e, t) {
    let l = await fetch(e);
    return new File([await l.blob()], t, { type: "audio/mp3" });
}
