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
n.d(t, { Z: () => i });
class i {
    static fromServer(e) {
        return new i(e);
    }
    constructor(e) {
        (r(this, 'responsive', void 0), r(this, 'backgroundStyle', void 0), (this.responsive = e.responsive), (this.backgroundStyle = e.background_style));
    }
}
