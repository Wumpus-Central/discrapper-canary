d.d(t, { n: () => n, r: () => Z, t: () => s });
var i = d(768672),
    e = d(288052);
let c = [];
async function a(l) {
    try {
        await i.t.post(e.t.deviceStats, l);
    } catch {
        return;
    }
}
async function s(l) {
    (0, i.r)() ? await a(l) : c.push(l);
}
function n() {
    if ((0, i.r)()) for (let l of c.splice(0)) a(l);
}
function Z() {
    c.length = 0;
}
