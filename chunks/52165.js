(n.d(t, {
    BC: () => s,
    gb: () => u,
    iB: () => l,
    kK: () => o,
    kr: () => a
}),
    n(415506),
    n(388685));
let r = !1,
    i = {
        createContext() {
            r = !0;
        },
        enterContext(e) {},
        exitContext(e) {},
        destroyContext(e) {}
    };
function a() {
    return i.createContext();
}
function o(e) {
    return i.enterContext(e);
}
function s(e, t) {
    return i.exitContext(e, t);
}
function l(e) {
    return (c.delete(e), i.destroyContext(e));
}
let c = new Map();
function u(e, t) {
    c.set(e, t);
}
