function n(t, e, i) {
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
        return o;
    }
}),
    i(47120);
let s = new (i(259443).Yd)('AssetMap');
async function o(t) {
    let e = new r(),
        i = Object.entries(t).map((t) => {
            let [i, n] = t;
            return e.loadRemoteImage(i, n).catch((t) => s.warn('Failed to load canvas asset', t, i, n));
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
        n(this, 'assets', {}), n(this, 'fontManager', void 0);
    }
}
e.ZP = r;
