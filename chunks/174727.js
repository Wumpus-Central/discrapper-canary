t.d(n, {
    MN: () => s,
    XG: () => d,
    ao: () => r,
    kD: () => u,
    lj: () => c,
    my: () => i,
    pN: () => o
}),
    t(411104),
    t(315314),
    t(309749),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var l = t(943351),
    a = t(388032);
let r = (e, n, t) => (-1 === e ? 0 : e - (n * e) / t);
function i(e) {
    return e / 1000;
}
let s = (e, n, t) => (-1 === e ? t : e + (n * (t - e)) / t),
    o = (e, n, t, l) => {
        let a = 0;
        return (n >= 0 && t > 0 ? ((e - (n - (t * n) / l)) * 100) / t : (100 * e) / l).toFixed(4);
    },
    u = (e, n, t, l) => {
        let a = 0;
        return (n >= 0 && t > 0 ? -((e - (n + (t * (l - n)) / l)) * 100) / t : -(100 * e * 1) / l + 100).toFixed(4);
    };
async function c(e) {
    if (!(e.type.startsWith('audio') || e.type.startsWith('video')) || !l.bp.has(e.type)) throw Error(a.NW.formatToPlainString(a.t['2y3xGR'], { fileType: e.type }));
    let n = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let t = () => {
                e(), n.removeEventListener('canplaythrough', t);
            };
            n.addEventListener('canplaythrough', t), n.load();
        }),
        n
    );
}
async function d(e, n) {
    let t = await fetch(e);
    return new File([await t.blob()], n, { type: 'audio/mp3' });
}
