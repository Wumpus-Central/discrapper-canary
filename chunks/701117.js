let r;
n.d(t, { y: () => s }), n(26686);
var i = n(37082);
try {
    r = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
function o() {
    let e = 'test';
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class a {
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
let s = o() ? new a() : new i.R();
