n.d(e, { A: () => u });
var a = n(71393),
    i = n(246338);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
let r = /^(?:[^/]+\/)?\.discord\/manifest\.json$/;
async function l(t) {
    try {
        let e = await new Promise((e, n) => {
            let a = new FileReader();
            ((a.onload = () => e(new Uint8Array(a.result))), (a.onerror = () => n(a.error)), a.readAsArrayBuffer(t));
        });
        if (80 !== e[0] || 75 !== e[1]) return null;
        let { unzipSync: a, strFromU8: i } = await n.e("494822").then(n.bind(n, 687813)),
            l = Object.values(a(e, { filter: (t) => r.test(t.name) }));
        if (1 !== l.length) return null;
        let u = JSON.parse(i(l[0])).install_scope;
        return "user" === u || "guild" === u ? u : null;
    } catch {
        return null;
    }
}
async function u(t, e) {
    var n, r;
    let u = a.A.getGuild(e);
    return ((n = await l(t)), (r = null != u && (0, i.sM)(u, "ConjureImport")), "guild" !== n || r ? n : null);
}
