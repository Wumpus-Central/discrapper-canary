n.d(t, { Hc: () => o, PH: () => s, YF: () => i, hR: () => d });
var r = n(991690),
    l = n(164892);
let u = [
        { type: r.U.APP_CHANNEL, declaredBy: l.q7.APP_CHANNEL },
        { type: r.U.VOICE_CHANNEL, declaredBy: l.q7.VOICE_CHANNEL },
    ],
    i = u.map((e) => {
        let { type: t } = e;
        return t;
    }),
    a = [r.U.APP_CHANNEL];
function o(e) {
    return u.some((t) => {
        let { declaredBy: n } = t;
        return e.includes(n);
    });
}
function d(e) {
    let t = u
        .filter((t) => {
            let { declaredBy: n } = t;
            return e?.includes(n) === !0;
        })
        .map((e) => {
            let { type: t } = e;
            return t;
        });
    return t.length > 0 ? t : a;
}
function s(e, t) {
    return null != e && t.includes(e) ? e : (t[0] ?? r.U.APP_CHANNEL);
}
