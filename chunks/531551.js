n.d(t, { Z: () => c }), n(411104);
var r = n(570140),
    i = n(51025),
    l = n(314897),
    o = n(804739);
function a() {
    if (!(0, o.Q)()) return;
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
        r.Z.subscribe('CONNECTION_OPEN', a), r.Z.subscribe('LOGOUT', s);
    }
};
