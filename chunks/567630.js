a.d(t, { A: () => u });
var n = a(71393),
    i = a(246338);
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
let r = /^(?:[^/]+\/)?\.discord\/manifest\.json$/;
async function l(e) {
    try {
        let t = await new Promise((t, a) => {
            let n = new FileReader();
            ((n.onload = () => t(new Uint8Array(n.result))), (n.onerror = () => a(n.error)), n.readAsArrayBuffer(e));
        });
        if (80 !== t[0] || 75 !== t[1]) return null;
        let { unzipSync: n, strFromU8: i } = await a.e("494822").then(a.bind(a, 687813)),
            l = Object.values(n(t, { filter: (e) => r.test(e.name) }));
        if (1 !== l.length) return null;
        let u = JSON.parse(i(l[0])).install_scope;
        return "user" === u || "guild" === u ? u : null;
    } catch {
        return null;
    }
}
async function u(e, t) {
    var a, r;
    let u = n.A.getGuild(t);
    return ((a = await l(e)), (r = null != u && (0, i.sM)(u, "ConjureImport")), "guild" !== a || r ? a : null);
}
