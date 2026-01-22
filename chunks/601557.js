n.d(t, { _: () => l }),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(679055),
    n(896048),
    n(638769);
var r = n(510036),
    i = n(74234);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    s = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64,
    };
function o(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function l(e, t, n, l, c) {
    let u = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, l, c)]);
    u.sort(o);
    let d = new Uint8Array(u[0].byteLength + u[1].byteLength);
    return d.set(u[0], 0), d.set(u[1], u[0].byteLength), new Uint8Array(await (0, i.Q)(d, a, s));
}
