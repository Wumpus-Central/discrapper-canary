n.d(t, { A: () => d });
var i = n(73153),
    a = n(92077),
    r = n(961350),
    l = n(144914);
function s() {
    if (!(0, l.S)()) return;
    let e = r.default.getToken(),
        t = r.default.getId();
    if (null == e) throw Error("missing user token");
    a.Ts(e, t);
}
function o() {
    a.zr();
}
let d = {
    init() {
        i.h.subscribe("CONNECTION_OPEN", s), i.h.subscribe("LOGOUT", o);
    },
};
