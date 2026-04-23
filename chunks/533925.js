n.d(t, { $A: () => l, XZ: () => s, Zp: () => r, pu: () => i, s0: () => d });
var a = n(562465);
let r = 8,
    i = 11,
    s = 6,
    l = 6;
async function o(e) {
    let { ticket: t, mfaType: n, data: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await a.Bo.post({
                url: "/mfa/finish",
                body: { ticket: t, mfa_type: n, data: r },
                retries: i,
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
    return new Promise((e, a) => {
        t({ "X-Discord-MFA-Authorization": n }, (t) =>
            t.body?.code === 60008 || t.body?.code === 60003 ? (a(Error(t.body.message)), !0) : (e(), !1),
        );
    });
}
