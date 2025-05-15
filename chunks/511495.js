n.d(t, {
    X: () => _,
    e: () => f
}),
    n(415506);
var r = n(259443),
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
function f() {
    if (null == a)
        return (a = (async () => {
            await i.mX();
            let e = i.Qw();
            e.installLogCallback(s, l, c, u, d), await e.initLibdiscore();
        })());
    throw Error('initLibdiscore called multiple times');
}
function _() {
    return void 0 !== window._libdiscoreWasm;
}
