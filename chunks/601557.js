n.d(t, { _: () => s }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(510036),
    i = n(74234);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    l = { N: 16384, r: 8, p: 2, dkLen: 64 };
function o(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function s(e, t, n, s, c) {
    let u = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, s, c)]);
    u.sort(o);
    let d = new Uint8Array(u[0].byteLength + u[1].byteLength);
    return d.set(u[0], 0), d.set(u[1], u[0].byteLength), new Uint8Array(await (0, i.Q)(d, a, l));
}
