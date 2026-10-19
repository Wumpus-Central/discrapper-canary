n.d(t, { BR: () => l, Eb: () => s, Hc: () => d, PH: () => u, hR: () => c });
var i = n(991690),
    r = n(951178);
let a = [
    { type: i.U.APP_CHANNEL, declaredBy: r.q7.APP_CHANNEL },
    { type: i.U.VOICE_CHANNEL, declaredBy: r.q7.VOICE_CHANNEL },
    { type: i.U.MAIN, declaredBy: r.q7.ACTIVITY },
];
a.map((e) => {
    let { type: t } = e;
    return t;
});
let s = [i.U.APP_CHANNEL, i.U.VOICE_CHANNEL];
function l(e) {
    return e === i.U.MAIN ? i.U.APP_CHANNEL : e;
}
let o = [i.U.APP_CHANNEL];
function d(e) {
    return a.some((t) => {
        let { declaredBy: n } = t;
        return e.includes(n);
    });
}
function c(e) {
    let t = a
        .filter((t) => {
            let { declaredBy: n } = t;
            return e?.includes(n) === !0;
        })
        .map((e) => {
            let { type: t } = e;
            return t;
        });
    return t.length > 0 ? t : o;
}
function u(e, t) {
    return null != e && t.includes(e) ? e : (t[0] ?? i.U.APP_CHANNEL);
}
