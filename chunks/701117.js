let r;
n.d(t, { y: () => s }), n(49124);
var i = n(37082);
try {
    r = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
function a() {
    let e = 'test';
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class o {
    get(e, t) {
        let n = r.getItem(e);
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
        r.setItem(e, JSON.stringify(t));
    }
    remove(e) {
        r.removeItem(e);
    }
    clear() {
        r.clear();
    }
}
let s = a() ? new o() : new i.R();
