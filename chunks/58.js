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
n.d(t, { Z: () => o }), n(539854);
let i = 5;
class a {
    recordStartHeadlessTask(e) {
        this.headlessTasks.length >= i && this.headlessTasks.shift(), this.headlessTasks.push(e), (this.latestHeadlessTaskRunOn = Date.now());
    }
    getLatestTaskRunOn() {
        return this.latestHeadlessTaskRunOn;
    }
    getHeadlessTasks() {
        return this.headlessTasks;
    }
    clear() {
        (this.headlessTasks = []), (this.latestHeadlessTaskRunOn = null);
    }
    constructor() {
        r(this, 'headlessTasks', []), r(this, 'latestHeadlessTaskRunOn', null);
    }
}
let o = new a();
