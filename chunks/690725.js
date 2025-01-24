n.d(t, {
    f: function () {
        return l;
    }
}),
    n(411104);
var r = n(4646),
    i = n(665672);
async function l(e) {
    let { assetsToLoad: t, drawImage: l, exportConfigs: o } = e,
        a = await (0, r.k2)(t);
    await a.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            r = document.createElement('canvas'),
            u = new e(r, a),
            s = new t(),
            c = new i.Z(u, s);
        l(c.canvas);
        let d = await c.export(o);
        return r.remove(), d;
    }
}
