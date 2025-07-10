(n.d(t, {
    Gz: () => a,
    P0: () => d,
    gH: () => s,
    tL: () => i,
    th: () => r
}),
    n(415506));
var l = n(544891);
let r = 8,
    i = 11,
    s = 6,
    a = 6;
async function o(e) {
    let { ticket: t, mfaType: n, data: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await l.tn.post({
                url: '/mfa/finish',
                body: {
                    ticket: t,
                    mfa_type: n,
                    data: r
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
async function d(e, t) {
    let { token: n } = await o(e);
    return new Promise((e, l) => {
        t({ 'X-Discord-MFA-Authorization': n }, (t) => {
            var n, r;
            return (null == (n = t.body) ? void 0 : n.code) === 60008 || (null == (r = t.body) ? void 0 : r.code) === 60003 ? (l(Error(t.body.message)), !0) : (e(), !1);
        });
    });
}
