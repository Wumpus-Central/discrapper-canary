let r;
n.d(t, { f: () => o }), n(415506);
var i = n(4646),
    a = n(665672);
try {
    r = n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {
    r = null;
}
async function o(e) {
    let { assetsToLoad: t, drawImage: r, exportConfigs: o } = e,
        s = await (0, i.k2)(t);
    await s.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            i = document.createElement("canvas"),
            l = new e(i, s),
            c = new t(),
            u = new a.Z(l, c);
        r(u.canvas);
        let d = await u.export(o);
        return i.remove(), d;
    }
}
