n.d(t, {
    X: () => f,
    e: () => _
});
var r = n(579092),
    i = n(128813);
let a = null,
    o = new r.Yd('libdiscore');
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
function _() {
    return (
        null == a &&
            (a = (async () => {
                await i.mX();
                let e = i.Qw();
                (e.installLogCallback(s, l, c, u, d), await e.initLibdiscore());
            })()),
        a
    );
}
function f() {
    return void 0 !== window._libdiscoreWasm;
}
