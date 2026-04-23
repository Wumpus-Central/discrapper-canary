"use strict";
n.d(t, { L5: () => d, TA: () => c, dU: () => l, fY: () => o, q$: () => u });
var r = n(562465),
    i = n(73153),
    s = n(181658),
    a = n(652215);
let o = async (e, t) =>
        (await r.Bo.get({ url: a.Rsh.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t), rejectWithError: !1 })).body,
    l = async (e) =>
        (
            await r.Bo.get({
                url: a.Rsh.GUILD_ENTITLEMENTS(e),
                query: { with_sku: !0, with_application: !0 },
                rejectWithError: !1,
            })
        ).body,
    u = async (e) => (await r.Bo.get({ url: a.Rsh.SUBSCRIPTION_PLAN_GROUP_LISTING(e), rejectWithError: !1 })).body;
function c(e, t) {
    return (
        i.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e }),
        r.Bo.get({ url: a.Rsh.APPLICATION_PUBLIC(e), signal: t, rejectWithError: !1 })
            .then((e) => (i.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e.body }), e.body))
            .catch(
                (t) => (i.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }), Promise.reject(new s.A(t))),
            )
    );
}
async function d(e, t) {
    return (
        await r.Bo.get({
            url: a.Rsh.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: { application_id: e, sku_id: t },
            rejectWithError: !1,
        })
    ).body;
}
