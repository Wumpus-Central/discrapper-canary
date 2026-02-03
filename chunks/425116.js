n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(439372),
    i = n(287809),
    a = n(936926),
    o = n(390660);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = 6e4,
    c = !1,
    u = null;

function d() {
    var e, t, n;
    return (
        !!(0, a.Eq)({
            location: "RestrictedHoursManager",
        }) &&
        null !=
            (e =
                null == (n = i.default.getCurrentUser()) || null == (t = n.restrictedSchedule)
                    ? void 0
                    : t.isInRestrictedHours()) &&
        e
    );
}

function f() {
    let e = d();
    e !== c && ((c = e) ? (0, o.u)() : (0, o.k)());
}

function p() {
    f();
}
class _ extends r.A {
    _initialize() {
        (c = d()) && (0, o.u)(), (u = setInterval(f, l));
    }
    _terminate() {
        null != u && (clearInterval(u), (u = null)), (0, o.k)(), (c = !1);
    }
    constructor(...e) {
        super(...e), s(this, "stores", new Map().set(i.default, p));
    }
}
let h = new _();
