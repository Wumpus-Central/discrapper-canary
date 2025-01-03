t.d(n, {
    f: function () {
        return r;
    }
}),
    t(411104);
var l = t(4646),
    i = t(665672);
async function r(e) {
    let { assetsToLoad: n, drawImage: r, exportConfigs: o } = e,
        a = await (0, l.k2)(n);
    await a.loadFonts();
    {
        let e = t(503082).Z,
            n = t(97008).Z,
            l = document.createElement('canvas'),
            u = new e(l, a),
            s = new n(),
            d = new i.Z(u, s);
        r(d.canvas);
        let c = await d.export(o);
        return l.remove(), c;
    }
}
