n.d(t, {
    X: () => _,
    e: () => f
}),
    n(415506);
var r = n(259443),
    i = n(128813);
let o = null,
    a = new r.Yd('libdiscore');
function s(e) {
    a.error(e);
}
function l(e) {
    a.warn(e);
}
function c(e) {
    a.info(e);
}
function u(e) {
    a.verbose(e);
}
function d(e) {
    a.trace(e);
}
function f() {
    if (null == o)
        return (o = (async () => {
            await i.mX();
            let e = i.Qw();
            e.installLogCallback(s, l, c, u, d), await e.initLibdiscore();
        })());
    throw Error('initLibdiscore called multiple times');
}
function _() {
    return void 0 !== window._libdiscoreWasm;
}
