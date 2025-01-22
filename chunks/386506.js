let i;
r.d(n, {
    M3: function () {
        return _;
    },
    aD: function () {
        return f;
    },
    bF: function () {
        return h;
    },
    f0: function () {
        return p;
    }
});
var a = r(544891),
    o = r(314897),
    s = r(12647),
    l = r(865427);
let u = '/__development/build_overrides',
    c = '/__development/create_build_override_link',
    d = '/__development/link';
async function f(e) {
    try {
        var n;
        let r = await a.tn.put({
            url: (0, l.pU)(u),
            body: {
                overrides: e,
                version: l.Ji
            },
            headers: { Authorization: null !== (n = o.default.getToken()) && void 0 !== n ? n : '' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await i(r), r;
    } catch (e) {
        return e;
    }
}
async function p(e) {
    try {
        let n = await a.tn.put({
            url: (0, l.pU)(d),
            body: {
                payload: e,
                token: o.default.getToken(),
                version: l.Ji
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await i(n), n;
    } catch (e) {
        return e;
    }
}
async function h() {
    let e = await a.tn.del({
        url: (0, l.pU)(u),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return await i(e), e;
}
function _(e) {
    var n;
    return a.tn
        .post({
            url: (0, l.pU)(c),
            body: e,
            headers: { Authorization: null !== (n = o.default.getToken()) && void 0 !== n ? n : '' },
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
