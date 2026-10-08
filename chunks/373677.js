n.d(t, { Hc: () => d, Jq: () => a, PH: () => s, YF: () => i, hR: () => c });
var r = n(991690),
    u = n(164892);
let l = [
        { type: r.U.APP_CHANNEL, declaredBy: u.q7.APP_CHANNEL },
        { type: r.U.VOICE_CHANNEL, declaredBy: u.q7.VOICE_CHANNEL },
    ],
    i = l.map((e) => {
        let { type: t } = e;
        return t;
    }),
    o = [r.U.APP_CHANNEL];
function a(e) {
    return i.includes(e);
}
function d(e) {
    return l.some((t) => {
        let { declaredBy: n } = t;
        return e.includes(n);
    });
}
function c(e) {
    let t = l
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
