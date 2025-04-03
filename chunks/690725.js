n.d(t, { f: () => l }), n(411104);
var r = n(4646),
    a = n(665672);
async function l(e) {
    let { assetsToLoad: t, drawImage: l, exportConfigs: i } = e,
        o = await (0, r.k2)(t);
    await o.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            r = document.createElement('canvas'),
            s = new e(r, o),
            c = new t(),
            u = new a.Z(s, c);
        l(u.canvas);
        let d = await u.export(i);
        return r.remove(), d;
    }
}
