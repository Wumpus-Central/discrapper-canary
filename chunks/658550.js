(n.d(t, {
    Gz: () => a,
    P0: () => d,
    gH: () => i,
    tL: () => s,
    th: () => r
}),
    n(415506));
var l = n(544891);
let r = 8,
    s = 11,
    i = 6,
    a = 6;
async function o(e) {
    let { ticket: t, mfaType: n, data: r } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await l.tn.post({
                url: '/mfa/finish',
                body: {
                    ticket: t,
                    mfa_type: n,
                    data: r
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
async function d(e, t) {
    let { token: n } = await o(e);
    return new Promise((e, l) => {
        t({ 'X-Discord-MFA-Authorization': n }, (t) => {
            var n, r;
            return (null == (n = t.body) ? void 0 : n.code) === 60008 || (null == (r = t.body) ? void 0 : r.code) === 60003 ? (l(Error(t.body.message)), !0) : (e(), !1);
        });
    });
}
