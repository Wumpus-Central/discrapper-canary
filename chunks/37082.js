let i;
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    R: function () {
        return l;
    },
    y: function () {
        return u;
    }
});
try {
    i = window.localStorage;
} catch (e) {}
try {
    delete window.localStorage;
} catch (e) {}
function o() {
    let e = 'test';
    try {
        return i.setItem(e, e), i.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class s {
    get(e, n) {
        let r = i.getItem(e);
        if (null != r)
            try {
                r = JSON.parse(r);
            } catch (e) {
                r = n;
            }
        else r = n;
        return r;
    }
    set(e, n) {
        i.setItem(e, JSON.stringify(n));
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
    asyncGetRaw(e, n) {
        return Promise.resolve(i.getItem(e));
    }
    setRaw(e, n) {
        i.setItem(e, n);
    }
    getAfterRefresh(e) {
        return Promise.resolve(this.get(e));
    }
}
class l {
    get(e, n) {
        return this.storage.hasOwnProperty(e) ? this.storage[e] : n;
    }
    set(e, n) {
        this.storage[e] = n;
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
    asyncGetRaw(e, n) {
        return Promise.resolve(i.getItem(e));
    }
    setRaw(e, n) {
        i.setItem(e, n);
    }
    getAfterRefresh(e) {
        return Promise.resolve(this.get(e));
    }
    constructor() {
        a(this, 'storage', void 0), (this.storage = {});
    }
}
let u = o() ? new s() : new l();
