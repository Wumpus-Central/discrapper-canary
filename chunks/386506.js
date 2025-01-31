let i;
n.d(t, {
    M3: () => p,
    aD: () => d,
    bF: () => _,
    f0: () => f
});
var r = n(544891),
    a = n(314897),
    s = n(12647),
    o = n(865427);
let l = '/__development/build_overrides',
    u = '/__development/create_build_override_link',
    c = '/__development/link';
async function d(e) {
    try {
        var t;
        let n = await r.tn.put({
            url: (0, o.pU)(l),
            body: {
                overrides: e,
                version: o.Ji
            },
            headers: { Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : '' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await i(n), n;
    } catch (e) {
        return e;
    }
}
async function f(e) {
    try {
        let t = await r.tn.put({
            url: (0, o.pU)(c),
            body: {
                payload: e,
                token: a.default.getToken(),
                version: o.Ji
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await i(t), t;
    } catch (e) {
        return e;
    }
}
async function _() {
    let e = await r.tn.del({
        url: (0, o.pU)(l),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return await i(e), e;
}
function p(e) {
    var t;
    return r.tn
        .post({
            url: (0, o.pU)(u),
            body: e,
            headers: { Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : '' },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => ({
                url: e.body.url,
                error: !1
            }),
            (e) =>
                400 === e.status
                    ? {
                          url: !1,
                          error: e.body
                      }
                    : {
                          url: !1,
                          error: 'Error making API request ('.concat(e.status, ')')
                      }
        );
}
i = async (e) => {
    try {
        await s.Z.flushCookies();
    } catch (e) {}
};
