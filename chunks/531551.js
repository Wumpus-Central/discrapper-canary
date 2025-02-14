n.d(t, { Z: () => d }), n(411104);
var i = n(570140),
    l = n(51025),
    r = n(314897),
    a = n(804739);
function s() {
    if (!(0, a.Q)()) return;
    let e = r.default.getToken(),
        t = r.default.getId();
    if (null == e) throw Error('missing user token');
    l.S1(e, t);
}
function o() {
    l.ob();
}
let d = {
    init() {
        i.Z.subscribe('CONNECTION_OPEN', s), i.Z.subscribe('LOGOUT', o);
    }
};
