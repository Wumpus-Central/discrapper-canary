s.d(t, { $A: () => r, XZ: () => a, Zp: () => l, pu: () => i, s0: () => c });
var n = s(636537);
let l = 8,
    i = 11,
    a = 6,
    r = 6;
async function o(e) {
    let { ticket: t, mfaType: s, data: l } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await n.Bo.post({
                url: "/mfa/finish",
                body: { ticket: t, mfa_type: s, data: l },
                retries: i,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        if (e.body?.message) throw Error(e.body.message);
        throw e;
    }
}
async function c(e, t) {
    let { token: s } = await o(e);
    return new Promise((e, n) => {
        t({ "X-Discord-MFA-Authorization": s }, (t) =>
            t.body?.code === 60008 || t.body?.code === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1),
        );
    });
}
