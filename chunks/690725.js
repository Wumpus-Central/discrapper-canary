n.d(t, { f: () => r }), n(411104);
var l = n(4646),
    i = n(665672);
async function r(e) {
    let { assetsToLoad: t, drawImage: r, exportConfigs: a } = e,
        o = await (0, l.k2)(t);
    await o.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            l = document.createElement('canvas'),
            s = new e(l, o),
            d = new t(),
            c = new i.Z(s, d);
        r(c.canvas);
        let u = await c.export(a);
        return l.remove(), u;
    }
}
