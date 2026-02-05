"use strict";
a.d(t, { n: () => p });
var s = a(64700),
    r = a(284009),
    n = a.n(r),
    i = a(13202),
    l = a(77468),
    o = a(370480),
    c = a(716965),
    d = a(21251);
async function u(e, t, a) {
    let s = (0, d.i)(e);
    if (null == s) throw (await h(a, 1, "authorize"), Error("Unsupported client_id for two way link"));
    let r = null;
    try {
        let { body: e } = await l.A.authorize(s, { twoWayLinkType: i.I.DEVICE_CODE, userCode: a });
        r = e.url;
    } catch (e) {
        throw (await h(a, e?.body?.code ?? 0, "authorize"), Error("error during two way authorize"));
    }
    let c = null;
    try {
        n()(null != r, "No URL in authorize response");
        let { state: e } = (0, o.vA)(r);
        n()(null != e, "Authorize URL state query parameter must be present"), (c = e);
    } catch (e) {
        throw (await h(a, 2, "authorize"), Error("error parsing callback params"));
    }
    try {
        await l.A.callback(s, { code: t, state: c });
    } catch (e) {
        throw (await h(a, e?.body?.code ?? 0, "callback"), Error("error during two way callback"));
    }
}
async function h(e, t, a) {
    try {
        await (0, c.zf)(e, t, a);
    } catch (e) {}
}
function p(e, t, a) {
    return s.useCallback(
        async (s, r) => {
            if (!r) {
                try {
                    await (0, c.IN)(s.userCode, "denied");
                } catch (e) {}
                e();
                return;
            }
            if (null == s.twoWayLinkCode)
                try {
                    await (0, c.IN)(s.userCode, "granted"), a(s);
                } catch (e) {
                    t(s);
                }
            else
                try {
                    await u(s.clientId, s.twoWayLinkCode, s.userCode), a(s);
                } catch (e) {
                    t(s);
                }
        },
        [e, t, a],
    );
}
