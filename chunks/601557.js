n.d(e, { _: () => u }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(510036),
    i = n(495142);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    l = { N: 16384, r: 8, p: 2, dkLen: 64 };
function o(t, e) {
    for (let n = 0; n < t.length && n < e.length; n++) if (t[n] != e[n]) return t[n] - e[n];
    return t.length - e.length;
}
async function u(t, e, n, u, s) {
    let c = await Promise.all([(0, r.X)(t, e, n), (0, r.X)(t, u, s)]);
    c.sort(o);
    let E = new Uint8Array(c[0].byteLength + c[1].byteLength);
    return E.set(c[0], 0), E.set(c[1], c[0].byteLength), new Uint8Array(await (0, i.Q)(E, a, l));
}
