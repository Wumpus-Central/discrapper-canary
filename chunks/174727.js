t.d(n, {
    MN: () => s,
    XG: () => d,
    ao: () => i,
    kD: () => u,
    lj: () => c,
    my: () => r,
    pN: () => o
}),
    t(415506),
    t(190126),
    t(368063),
    t(65234),
    t(111804),
    t(490233),
    t(97749),
    t(388685);
var l = t(943351),
    a = t(388032);
let i = (e, n, t) => (-1 === e ? 0 : e - (n * e) / t);
function r(e) {
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
