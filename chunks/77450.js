function i(e, t, n) {
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
n.d(t, { h: () => r });
class r {
    getCPUCoreCount() {
        return this.cpuCoreCount;
    }
    constructor() {
        i(this, 'cpuCoreCount', void 0);
    }
}
