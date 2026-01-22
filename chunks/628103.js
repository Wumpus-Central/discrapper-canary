r.d(t, {
    n: () => p,
}),
    r(65821);
var a = r(64700),
    n = r(284009),
    s = r.n(n),
    i = r(13202),
    l = r(77468),
    c = r(370480),
    o = r(716965),
    d = r(21251);
async function u(e, t, r) {
    var a, n, o, u;
    let p = (0, d.i)(e);
    if (null == p) throw (await f(r, 1, "authorize"), Error("Unsupported client_id for two way link"));
    let h = null;
    try {
        let { body: e } = await l.A.authorize(p, {
            twoWayLinkType: i.I.DEVICE_CODE,
            userCode: r,
        });
        h = e.url;
    } catch (e) {
        throw (
            (await f(r, null != (a = null == e || null == (n = e.body) ? void 0 : n.code) ? a : 0, "authorize"),
            Error("error during two way authorize"))
        );
    }
    let x = null;
    try {
        s()(null != h, "No URL in authorize response");
        let { state: e } = (0, c.vA)(h);
        s()(null != e, "Authorize URL state query parameter must be present"), (x = e);
    } catch (e) {
        throw (await f(r, 2, "authorize"), Error("error parsing callback params"));
    }
    try {
        await l.A.callback(p, {
            code: t,
            state: x,
        });
    } catch (e) {
        throw (
            (await f(r, null != (o = null == e || null == (u = e.body) ? void 0 : u.code) ? o : 0, "callback"),
            Error("error during two way callback"))
        );
    }
}
async function f(e, t, r) {
    try {
        await (0, o.zf)(e, t, r);
    } catch (e) {}
}

function p(e, t, r) {
    return a.useCallback(
        async (a, n) => {
            if (!n) {
                try {
                    await (0, o.IN)(a.userCode, "denied");
                } catch (e) {}
                e();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, o.IN)(a.userCode, "granted"), r(a);
                } catch (e) {
                    t(a);
                }
            else
                try {
                    await u(a.clientId, a.twoWayLinkCode, a.userCode), r(a);
                } catch (e) {
                    t(a);
                }
        },
        [e, t, r],
    );
}
