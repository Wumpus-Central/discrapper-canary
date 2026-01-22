n.d(t, {
    A: () => u,
});
var r,
    i = n(311907),
    a = n(73153);

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
let o = {
    matureAgree: !1,
};

function l() {
    o.matureAgree = !0;
}
class c extends (r = i.Ay.Store) {
    get didMatureAgree() {
        return o.matureAgree;
    }
}
s(c, "displayName", "ApplicationStoreSettingsStore");
let u = new c(a.h, {
    APPLICATION_STORE_MATURE_AGREE: l,
});
