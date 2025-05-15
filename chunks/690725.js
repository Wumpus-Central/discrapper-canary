n.d(t, { f: () => a }), n(415506);
var r = n(4646),
    i = n(665672);
async function a(e) {
    let { assetsToLoad: t, drawImage: a, exportConfigs: o } = e,
        s = await (0, r.k2)(t);
    await s.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            r = document.createElement('canvas'),
            l = new e(r, s),
            c = new t(),
            u = new i.Z(l, c);
        a(u.canvas);
        let d = await u.export(o);
        return r.remove(), d;
    }
}
