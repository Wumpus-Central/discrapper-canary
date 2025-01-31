let i;
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
    R: () => o,
    y: () => l
});
try {
    i = window.localStorage;
} catch (e) {}
try {
    delete window.localStorage;
} catch (e) {}
function a() {
    let e = 'test';
    try {
        return i.setItem(e, e), i.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class s {
    get(e, t) {
        let n = i.getItem(e);
        if (null != n)
            try {
                n = JSON.parse(n);
            } catch (e) {
                n = t;
            }
        else n = t;
        return n;
    }
    set(e, t) {
        i.setItem(e, JSON.stringify(t));
    }
    remove(e) {
        i.removeItem(e);
    }
    clear() {
        i.clear();
    }
    stringify() {
        return JSON.stringify(i || {});
    }
    asyncGetRaw(e, t) {
        return Promise.resolve(i.getItem(e));
    }
    setRaw(e, t) {
        i.setItem(e, t);
    }
    getAfterRefresh(e) {
        return Promise.resolve(this.get(e));
    }
}
class o {
    get(e, t) {
        return this.storage.hasOwnProperty(e) ? this.storage[e] : t;
    }
    set(e, t) {
        this.storage[e] = t;
    }
    remove(e) {
        delete this.storage[e];
    }
    clear() {
        this.storage = {};
    }
    stringify() {
        return JSON.stringify(this.storage);
    }
    asyncGetRaw(e, t) {
        return Promise.resolve(i.getItem(e));
    }
    setRaw(e, t) {
        i.setItem(e, t);
    }
    getAfterRefresh(e) {
        return Promise.resolve(this.get(e));
    }
    constructor() {
        r(this, 'storage', void 0), (this.storage = {});
    }
}
let l = a() ? new s() : new o();
