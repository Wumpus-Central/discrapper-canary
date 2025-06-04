let r;
n.d(t, {
    M3: () => p,
    aD: () => d,
    bF: () => _,
    f0: () => f
});
var i = n(544891),
    o = n(314897),
    a = n(12647),
    s = n(865427);
let l = '/__development/build_overrides',
    c = '/__development/create_build_override_link',
    u = '/__development/link';
async function d(e) {
    try {
        var t;
        let n = await i.tn.put({
            url: (0, s.pU)(l),
            body: {
                overrides: e,
                version: s.Ji
            },
            headers: { Authorization: null != (t = o.default.getToken()) ? t : '' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await r(n), n;
    } catch (e) {
        return e;
    }
}
async function f(e) {
    try {
        let t = await i.tn.put({
            url: (0, s.pU)(u),
            body: {
                payload: e,
                token: o.default.getToken(),
                version: s.Ji
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await r(t), t;
    } catch (e) {
        return e;
    }
}
async function _() {
    let e = await i.tn.del({
        url: (0, s.pU)(l),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return await r(e), e;
}
function p(e) {
    var t;
    return i.tn
        .post({
            url: (0, s.pU)(c),
            body: e,
            headers: { Authorization: null != (t = o.default.getToken()) ? t : '' },
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
r = async (e) => {
    try {
        await a.Z.flushCookies();
    } catch (e) {}
};
