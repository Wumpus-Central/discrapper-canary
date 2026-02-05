n.d(t, { $A: () => a, XZ: () => i, Zp: () => s, pu: () => r, s0: () => d });
var l = n(562465);
let s = 8,
    r = 11,
    i = 6,
    a = 6;
async function o(e) {
    let { ticket: t, mfaType: n, data: s } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await l.Bo.post({
                url: "/mfa/finish",
                body: { ticket: t, mfa_type: n, data: s },
                retries: r,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        if (e.body?.message) throw Error(e.body.message);
        throw e;
    }
}
async function d(e, t) {
    let { token: n } = await o(e);
    return new Promise((e, l) => {
        t({ "X-Discord-MFA-Authorization": n }, (t) =>
            t.body?.code === 60008 || t.body?.code === 60003 ? (l(Error(t.body.message)), !0) : (e(), !1),
        );
    });
}
