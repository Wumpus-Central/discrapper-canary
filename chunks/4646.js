function s(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
i.d(e, {
    k2: function () {
        return a;
    }
}),
    i(47120);
let n = new (i(259443).Yd)('AssetMap');
async function a(t) {
    let e = new r(),
        i = Object.entries(t).map((t) => {
            let [i, s] = t;
            return e.loadRemoteImage(i, s).catch((t) => n.warn('Failed to load canvas asset', t, i, s));
        });
    return await Promise.all(i), e;
}
class r {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(t, e) {
        let i = new Image();
        return (i.src = e), (i.crossOrigin = 'anonymous'), await i.decode(), (this.assets[t] = i), Promise.resolve();
    }
    get(t) {
        return this.assets[t];
    }
    has(t) {
        return null != this.assets[t];
    }
    constructor() {
        s(this, 'assets', {}), s(this, 'fontManager', void 0);
    }
}
e.ZP = r;
