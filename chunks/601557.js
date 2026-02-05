n.d(t, { _: () => c }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(510036),
    i = n(74234);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    o = { N: 16384, r: 8, p: 2, dkLen: 64 };
function l(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function c(e, t, n, c, E) {
    let u = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, c, E)]);
    u.sort(l);
    let s = new Uint8Array(u[0].byteLength + u[1].byteLength);
    return s.set(u[0], 0), s.set(u[1], u[0].byteLength), new Uint8Array(await (0, i.Q)(s, a, o));
}
