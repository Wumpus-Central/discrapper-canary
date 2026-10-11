r.d(t, { BR: () => A, Eb: () => l, Hc: () => C, PH: () => i, hR: () => d });
var n = r(991690),
    u = r(951178);
let N = [
    { type: n.U.APP_CHANNEL, declaredBy: u.q7.APP_CHANNEL },
    { type: n.U.VOICE_CHANNEL, declaredBy: u.q7.VOICE_CHANNEL },
    { type: n.U.MAIN, declaredBy: u.q7.ACTIVITY },
];
N.map((e) => {
    let { type: t } = e;
    return t;
});
let l = [n.U.APP_CHANNEL, n.U.VOICE_CHANNEL];
function A(e) {
    return e === n.U.MAIN ? n.U.APP_CHANNEL : e;
}
let c = [n.U.APP_CHANNEL];
function C(e) {
    return N.some((t) => {
        let { declaredBy: r } = t;
        return e.includes(r);
    });
}
function d(e) {
    let t = N.filter((t) => {
        let { declaredBy: r } = t;
        return e?.includes(r) === !0;
    }).map((e) => {
        let { type: t } = e;
        return t;
    });
    return t.length > 0 ? t : c;
}
function i(e, t) {
    return null != e && t.includes(e) ? e : (t[0] ?? n.U.APP_CHANNEL);
}
