t.d(n, {
    f: function () {
        return r;
    }
}),
    t(411104);
var i = t(4646),
    l = t(665672);
async function r(e) {
    let { assetsToLoad: n, drawImage: r, exportConfigs: o } = e,
        a = await (0, i.k2)(n);
    await a.loadFonts();
    {
        let e = t(503082).Z,
            n = t(97008).Z,
            i = document.createElement('canvas'),
            u = new e(i, a),
            s = new n(),
            d = new l.Z(u, s);
        r(d.canvas);
        let c = await d.export(o);
        return i.remove(), c;
    }
}
