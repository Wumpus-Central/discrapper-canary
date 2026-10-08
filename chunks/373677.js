n.d(t, { BR: () => a, Eb: () => i, Hc: () => d, PH: () => s, hR: () => c });
var r = n(991690),
    l = n(164892);
let u = [
    { type: r.U.APP_CHANNEL, declaredBy: l.q7.APP_CHANNEL },
    { type: r.U.VOICE_CHANNEL, declaredBy: l.q7.VOICE_CHANNEL },
    { type: r.U.MAIN, declaredBy: l.q7.ACTIVITY },
];
u.map((e) => {
    let { type: t } = e;
    return t;
});
let i = [r.U.APP_CHANNEL, r.U.VOICE_CHANNEL];
function a(e) {
    return e === r.U.MAIN ? r.U.APP_CHANNEL : e;
}
let o = [r.U.APP_CHANNEL];
function d(e) {
    return u.some((t) => {
        let { declaredBy: n } = t;
        return e.includes(n);
    });
}
function c(e) {
    let t = u
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
function s(e, t) {
    return null != e && t.includes(e) ? e : (t[0] ?? r.U.APP_CHANNEL);
}
