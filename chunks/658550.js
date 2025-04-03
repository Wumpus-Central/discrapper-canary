r.d(t, {
    Gz: () => o,
    P0: () => c,
    gH: () => i,
    tL: () => s,
    th: () => l
}),
    r(411104);
var n = r(544891);
let l = 8,
    s = 11,
    i = 6,
    o = 6;
async function a(e) {
    let { ticket: t, mfaType: r, data: l } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await n.tn.post({
                url: '/mfa/finish',
                body: {
                    ticket: t,
                    mfa_type: r,
                    data: l
                },
                retries: s,
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        var i;
        if (null == (i = e.body) ? void 0 : i.message) throw Error(e.body.message);
        throw e;
    }
}
async function c(e, t) {
    let { token: r } = await a(e);
    return new Promise((e, n) => {
        t({ 'X-Discord-MFA-Authorization': r }, (t) => {
            var r, l;
            return (null == (r = t.body) ? void 0 : r.code) === 60008 || (null == (l = t.body) ? void 0 : l.code) === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1);
        });
    });
}
