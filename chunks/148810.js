let i;
var r = n(620632),
    a = n(46653),
    s = n(353835),
    l = n(380610);
let o = "/__development/build_overrides";
((i = async (e) => {
    try {
        await s.A.flushCookies();
    } catch (e) {}
}),
    n.d(
        t,
        {},
        {
            SB: function (e) {
                return r.Bo.post({
                    url: (0, l.i_)("/__development/create_build_override_link"),
                    body: e,
                    headers: { Authorization: a.default.getToken() ?? "" },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => ({ url: e.body.url, error: !1 }),
                    (e) =>
                        400 === e.status
                            ? { url: !1, error: e.body }
                            : { url: !1, error: `Error making API request (${e.status})` },
                );
            },
            Zk: async function (e) {
                try {
                    let t = await r.Bo.put({
                        url: (0, l.i_)(o),
                        body: { overrides: e, version: l.hl },
                        headers: { Authorization: a.default.getToken() ?? "" },
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    });
                    return (await i(t), t);
                } catch (e) {
                    return e;
                }
            },
            iD: async function () {
                let e = await r.Bo.del({ url: (0, l.i_)(o), oldFormErrors: !0, rejectWithError: !1 });
                return (await i(e), e);
            },
            oA: async function (e) {
                try {
                    let t = await r.Bo.put({
                        url: (0, l.i_)("/__development/link"),
                        body: { payload: e, token: a.default.getToken(), version: l.hl },
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    });
                    return (await i(t), t);
                } catch (e) {
                    return e;
                }
            },
        },
    ));
