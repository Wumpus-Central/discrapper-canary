"use strict";
s.d(t, { n: () => p });
var a = s(64700),
    r = s(284009),
    n = s.n(r),
    i = s(13202),
    l = s(77468),
    o = s(370480),
    c = s(716965),
    d = s(21251);
async function u(e, t, s) {
    let a = (0, d.i)(e);
    if (null == a) throw (await h(s, 1, "authorize"), Error("Unsupported client_id for two way link"));
    let r = null;
    try {
        let { body: e } = await l.A.authorize(a, { twoWayLinkType: i.I.DEVICE_CODE, userCode: s });
        r = e.url;
    } catch (e) {
        throw (await h(s, e?.body?.code ?? 0, "authorize"), Error("error during two way authorize"));
    }
    let c = null;
    try {
        n()(null != r, "No URL in authorize response");
        let { state: e } = (0, o.vA)(r);
        n()(null != e, "Authorize URL state query parameter must be present"), (c = e);
    } catch (e) {
        throw (await h(s, 2, "authorize"), Error("error parsing callback params"));
    }
    try {
        await l.A.callback(a, { code: t, state: c });
    } catch (e) {
        throw (await h(s, e?.body?.code ?? 0, "callback"), Error("error during two way callback"));
    }
}
async function h(e, t, s) {
    try {
        await (0, c.zf)(e, t, s);
    } catch (e) {}
}
function p(e, t, s) {
    return a.useCallback(
        async (a, r) => {
            if (!r) {
                try {
                    await (0, c.IN)(a.userCode, "denied");
                } catch (e) {}
                e();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, c.IN)(a.userCode, "granted"), s(a);
                } catch (e) {
                    t(a);
                }
            else
                try {
                    await u(a.clientId, a.twoWayLinkCode, a.userCode), s(a);
                } catch (e) {
                    t(a);
                }
        },
        [e, t, s],
    );
}
