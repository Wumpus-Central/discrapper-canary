function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    ZP: () => s,
    k2: () => a
}),
    n(388685);
let i = new (n(259443).Yd)('AssetMap');
async function a(e) {
    let t = new o(),
        n = Object.entries(e).map((e) => {
            let [n, r] = e;
            return t.loadRemoteImage(n, r).catch((e) => i.warn('Failed to load canvas asset', e, n, r));
        });
    return await Promise.all(n), t;
}
class o {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(e, t) {
        let n = new Image();
        return (n.src = t), (n.crossOrigin = 'anonymous'), await n.decode(), (this.assets[e] = n), Promise.resolve();
    }
    get(e) {
        return this.assets[e];
    }
    has(e) {
        return null != this.assets[e];
    }
    constructor() {
        r(this, 'assets', {}), r(this, 'fontManager', void 0);
    }
}
let s = o;
