let l;
r.d(t, { SB: () => h, Zk: () => s, iD: () => c, oA: () => d });
var n = r(636537),
    o = r(280450),
    i = r(353835),
    u = r(380610);
let a = "/__development/build_overrides";
async function s(e) {
    try {
        let t = await n.Bo.put({
            url: (0, u.i_)(a),
            body: { overrides: e, version: u.hl },
            headers: { Authorization: o.default.getToken() ?? "" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (await l(t), t);
    } catch (e) {
        return e;
    }
}
async function d(e) {
    try {
        let t = await n.Bo.put({
            url: (0, u.i_)("/__development/link"),
            body: { payload: e, token: o.default.getToken(), version: u.hl },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (await l(t), t);
    } catch (e) {
        return e;
    }
}
async function c() {
    let e = await n.Bo.del({ url: (0, u.i_)(a), oldFormErrors: !0, rejectWithError: !1 });
    return (await l(e), e);
}
function h(e) {
    return n.Bo.post({
        url: (0, u.i_)("/__development/create_build_override_link"),
        body: e,
        headers: { Authorization: o.default.getToken() ?? "" },
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
        await i.A.flushCookies();
    } catch (e) {}
};
