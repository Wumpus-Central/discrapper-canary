n.d(t, { Z: () => c }), n(411104);
var r = n(570140),
    i = n(51025),
    l = n(314897),
    a = n(804739);
function o() {
    if (!(0, a.Q)()) return;
    let e = l.default.getToken(),
        t = l.default.getId();
    if (null == e) throw Error('missing user token');
    i.S1(e, t);
}
function s() {
    i.ob();
}
let c = {
    init() {
        r.Z.subscribe('CONNECTION_OPEN', o), r.Z.subscribe('LOGOUT', s);
    }
};
