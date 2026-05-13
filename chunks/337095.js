"use strict";
n.d(t, { L5: () => d, TA: () => c, dU: () => l, fY: () => o, q$: () => u });
var i = n(636537),
    r = n(228366),
    s = n(181658),
    a = n(652215);
let o = async (e, t) =>
        (await i.Bo.get({ url: a.Rsh.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t), rejectWithError: !1 })).body,
    l = async (e) =>
        (
            await i.Bo.get({
                url: a.Rsh.GUILD_ENTITLEMENTS(e),
                query: { with_sku: !0, with_application: !0 },
                rejectWithError: !1,
            })
        ).body,
    u = async (e) => (await i.Bo.get({ url: a.Rsh.SUBSCRIPTION_PLAN_GROUP_LISTING(e), rejectWithError: !1 })).body;
function c(e, t) {
    return (
        r.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e }),
        i.Bo.get({ url: a.Rsh.APPLICATION_PUBLIC(e), signal: t, rejectWithError: !1 })
            .then(
                (e) => (
                    r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e.body, isHydrated: !0 }), e.body
                ),
            )
            .catch(
                (t) => (r.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }), Promise.reject(new s.A(t))),
            )
    );
}
async function d(e, t) {
    return (
        await i.Bo.get({
            url: a.Rsh.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: { application_id: e, sku_id: t },
            rejectWithError: !1,
        })
    ).body;
}
