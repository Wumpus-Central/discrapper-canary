n.d(t, { f: () => o }), n(411104);
var r = n(4646),
    l = n(665672);
async function o(e) {
    let { assetsToLoad: t, drawImage: o, exportConfigs: i } = e,
        a = await (0, r.k2)(t);
    await a.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            r = document.createElement('canvas'),
            s = new e(r, a),
            c = new t(),
            u = new l.Z(s, c);
        o(u.canvas);
        let d = await u.export(i);
        return r.remove(), d;
    }
}
