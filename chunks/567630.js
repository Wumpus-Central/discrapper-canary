t.d(n, { A: () => u });
var i = t(71393),
    r = t(246338);
(t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162));
let l = /^(?:[^/]+\/)?\.discord\/manifest\.json$/;
async function a(e) {
    try {
        let n = await new Promise((n, t) => {
            let i = new FileReader();
            ((i.onload = () => n(new Uint8Array(i.result))), (i.onerror = () => t(i.error)), i.readAsArrayBuffer(e));
        });
        if (80 !== n[0] || 75 !== n[1]) return null;
        let { unzipSync: i, strFromU8: r } = await t.e("494822").then(t.bind(t, 687813)),
            a = Object.values(i(n, { filter: (e) => l.test(e.name) }));
        if (1 !== a.length) return null;
        let u = JSON.parse(r(a[0])).install_scope;
        return "user" === u || "guild" === u ? u : null;
    } catch {
        return null;
    }
}
async function u(e, n) {
    var t, l;
    let u = i.A.getGuild(n);
    return ((t = await a(e)), (l = null != u && (0, r.sM)(u, "ConjureImport")), "guild" !== t || l ? t : null);
}
