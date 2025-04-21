n.d(t, {
    Gz: () => o,
    P0: () => c,
    gH: () => s,
    tL: () => i,
    th: () => l
}),
    n(415506);
var r = n(544891);
let l = 8,
    i = 11,
    s = 6,
    o = 6;
async function a(e) {
    let { ticket: t, mfaType: n, data: l } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await r.tn.post({
                url: '/mfa/finish',
                body: {
                    ticket: t,
                    mfa_type: n,
                    data: l
                },
                retries: i,
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        var s;
        if (null == (s = e.body) ? void 0 : s.message) throw Error(e.body.message);
        throw e;
    }
}
async function c(e, t) {
    let { token: n } = await a(e);
    return new Promise((e, r) => {
        t({ 'X-Discord-MFA-Authorization': n }, (t) => {
            var n, l;
            return (null == (n = t.body) ? void 0 : n.code) === 60008 || (null == (l = t.body) ? void 0 : l.code) === 60003 ? (r(Error(t.body.message)), !0) : (e(), !1);
        });
    });
}
