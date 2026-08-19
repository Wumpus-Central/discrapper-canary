let l;
r.d(t, { SB: () => v, Zk: () => o, iD: () => c, oA: () => u });
var n = r(636537),
    i = r(280450),
    a = r(353835),
    s = r(380610);
let d = "/__development/build_overrides";
async function o(e) {
    try {
        let t = await n.Bo.put({
            url: (0, s.i_)(d),
            body: { overrides: e, version: s.hl },
            headers: { Authorization: i.default.getToken() ?? "" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await l(t), t;
    } catch (e) {
        return e;
    }
}
async function u(e) {
    try {
        let t = await n.Bo.put({
            url: (0, s.i_)("/__development/link"),
            body: { payload: e, token: i.default.getToken(), version: s.hl },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return await l(t), t;
    } catch (e) {
        return e;
    }
}
async function c() {
    let e = await n.Bo.del({ url: (0, s.i_)(d), oldFormErrors: !0, rejectWithError: !1 });
    return await l(e), e;
}
function v(e) {
    return n.Bo.post({
        url: (0, s.i_)("/__development/create_build_override_link"),
        body: e,
        headers: { Authorization: i.default.getToken() ?? "" },
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
l = async (e) => {
    try {
        await a.A.flushCookies();
    } catch (e) {}
};
