n.d(t, { P: () => h, x: () => y });
var r = n(118356),
    i = n(31436);
let a = null,
    l = new r.Vy("libdiscore");
function o(e) {
    l.error(e);
}
function s(e) {
    l.warn(e);
}
function u(e) {
    l.info(e);
}
function d(e) {
    l.verbose(e);
}
function c(e) {
    l.trace(e);
}
function h() {
    return (
        null == a &&
            (a = (async () => {
                await i.Bf();
                let e = i.vZ();
                e.installLogCallback(o, s, u, d, c), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        a
    );
}
function y() {
    return !0 === window._libdiscoreInitialized;
}
