n.d(t, {
    e: () => f,
    u: () => p,
});
var r = n(579092),
    i = n(128813);
let a = null,
    o = new r.Yd("libdiscore");
function s(e) {
    o.error(e);
}
function l(e) {
    o.warn(e);
}
function c(e) {
    o.info(e);
}
function u(e) {
    o.verbose(e);
}
function d(e) {
    o.trace(e);
}
function f() {
    return (
        null == a &&
            (a = (async () => {
                await i.mX();
                let e = i.Qw();
                e.installLogCallback(s, l, c, u, d), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        a
    );
}
function p() {
    return !0 === window._libdiscoreInitialized;
}
