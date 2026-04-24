n.d(e, { $A: () => l, XZ: () => r, Zp: () => a, pu: () => i, s0: () => c });
var s = n(636537);
let a = 8,
    i = 11,
    r = 6,
    l = 6;
async function o(t) {
    let { ticket: e, mfaType: n, data: a } = t,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await s.Bo.post({
                url: "/mfa/finish",
                body: { ticket: e, mfa_type: n, data: a },
                retries: i,
                rejectWithError: !1,
            })
        ).body;
    } catch (t) {
        if (t.body?.message) throw Error(t.body.message);
        throw t;
    }
}
async function c(t, e) {
    let { token: n } = await o(t);
    return new Promise((t, s) => {
        e({ "X-Discord-MFA-Authorization": n }, (e) =>
            e.body?.code === 60008 || e.body?.code === 60003 ? (s(Error(e.body.message)), !0) : (t(), !1),
        );
    });
}
