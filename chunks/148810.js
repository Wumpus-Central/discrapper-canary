"use strict";
let r;
n.d(t, { SB: () => _, Zk: () => u, iD: () => c, oA: () => d });
var i = n(562465),
    s = n(961350),
    a = n(353835),
    o = n(380610);
let l = "/__development/build_overrides";
async function u(e) {
    try {
        let t = await i.Bo.put({
            url: (0, o.i_)(l),
            body: { overrides: e, version: o.hl },
            headers: { Authorization: s.default.getToken() ?? "" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await r(t), t;
    } catch (e) {
        return e;
    }
}
async function d(e) {
    try {
        let t = await i.Bo.put({
            url: (0, o.i_)("/__development/link"),
            body: { payload: e, token: s.default.getToken(), version: o.hl },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await r(t), t;
    } catch (e) {
        return e;
    }
}
async function c() {
    let e = await i.Bo.del({ url: (0, o.i_)(l), oldFormErrors: !0, rejectWithError: !1 });
    return await r(e), e;
}
function _(e) {
    return i.Bo.post({
        url: (0, o.i_)("/__development/create_build_override_link"),
        body: e,
        headers: { Authorization: s.default.getToken() ?? "" },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => ({ url: e.body.url, error: !1 }),
        (e) =>
            400 === e.status
                ? { url: !1, error: e.body }
                : { url: !1, error: `Error making API request (${e.status})` },
    );
}
r = async (e) => {
    try {
        await a.A.flushCookies();
    } catch (e) {}
};
