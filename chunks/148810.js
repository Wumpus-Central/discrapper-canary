let o;
t.d(r, { SB: () => h, Zk: () => d, iD: () => c, oA: () => s });
var i = t(636537),
    l = t(280450),
    n = t(353835),
    a = t(380610);
let u = "/__development/build_overrides";
async function d(e) {
    try {
        let r = await i.Bo.put({
            url: (0, a.i_)(u),
            body: { overrides: e, version: a.hl },
            headers: { Authorization: l.default.getToken() ?? "" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await o(r), r;
    } catch (e) {
        return e;
    }
}
async function s(e) {
    try {
        let r = await i.Bo.put({
            url: (0, a.i_)("/__development/link"),
            body: { payload: e, token: l.default.getToken(), version: a.hl },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await o(r), r;
    } catch (e) {
        return e;
    }
}
async function c() {
    let e = await i.Bo.del({ url: (0, a.i_)(u), oldFormErrors: !0, rejectWithError: !1 });
    return await o(e), e;
}
function h(e) {
    return i.Bo.post({
        url: (0, a.i_)("/__development/create_build_override_link"),
        body: e,
        headers: { Authorization: l.default.getToken() ?? "" },
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
o = async (e) => {
    try {
        await n.A.flushCookies();
    } catch (e) {}
};
