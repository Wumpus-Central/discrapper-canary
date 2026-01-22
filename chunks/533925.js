n.d(t, {
    $A: () => a,
    XZ: () => s,
    Zp: () => l,
    pu: () => i,
    s0: () => d,
}),
    n(65821);
var r = n(562465);
let l = 8,
    i = 11,
    s = 6,
    a = 6;
async function o(e) {
    let { ticket: t, mfaType: n, data: l } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await r.Bo.post({
                url: "/mfa/finish",
                body: {
                    ticket: t,
                    mfa_type: n,
                    data: l,
                },
                retries: i,
                rejectWithError: !1,
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
    return new Promise((e, r) => {
        t(
            {
                "X-Discord-MFA-Authorization": n,
            },
            (t) => {
                var n, l;
                return (null == (n = t.body) ? void 0 : n.code) === 60008 ||
                    (null == (l = t.body) ? void 0 : l.code) === 60003
                    ? (r(Error(t.body.message)), !0)
                    : (e(), !1);
            },
        );
    });
}
