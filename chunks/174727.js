n.d(t, {
    MN: () => s,
    XG: () => d,
    ao: () => i,
    kD: () => u,
    lj: () => c,
    my: () => r,
    pN: () => o
}),
    n(415506),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var l = n(943351),
    a = n(388032);
let i = (e, t, n) => (-1 === e ? 0 : e - (t * e) / n);
function r(e) {
    return e / 1000;
}
let s = (e, t, n) => (-1 === e ? n : e + (t * (n - e)) / n),
    o = (e, t, n, l) => {
        let a = 0;
        return (t >= 0 && n > 0 ? ((e - (t - (n * t) / l)) * 100) / n : (100 * e) / l).toFixed(4);
    },
    u = (e, t, n, l) => {
        let a = 0;
        return (t >= 0 && n > 0 ? -((e - (t + (n * (l - t)) / l)) * 100) / n : -(100 * e * 1) / l + 100).toFixed(4);
    };
async function c(e) {
    if (!(e.type.startsWith('audio') || e.type.startsWith('video')) || !l.bp.has(e.type)) throw Error(a.intl.formatToPlainString(a.t['2y3xGR'], { fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return (
        await new Promise((e) => {
            let n = () => {
                e(), t.removeEventListener('canplaythrough', n);
            };
            t.addEventListener('canplaythrough', n), t.load();
        }),
        t
    );
}
async function d(e, t) {
    let n = await fetch(e);
    return new File([await n.blob()], t, { type: 'audio/mp3' });
}
