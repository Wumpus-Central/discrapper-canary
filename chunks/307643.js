n.d(t, {
    GF: () => l,
    UM: () => u,
    a_: () => c,
    jz: () => s,
    tn: () => d
});
var r = n(544891),
    i = n(570140),
    a = n(479531),
    o = n(981631);
let s = async (e, t) =>
        (
            await r.tn.get({
                url: o.ANM.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
                rejectWithError: !1
            })
        ).body,
    l = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
            await r.tn.get({
                url: o.ANM.GUILD_ENTITLEMENTS(e),
                query: {
                    with_sku: !0,
                    with_application: !0,
                    exclude_deleted: t
                },
                rejectWithError: !1
            })
        ).body;
    },
    c = async (e) =>
        (
            await r.tn.get({
                url: o.ANM.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
                rejectWithError: !1
            })
        ).body;
function u(e, t) {
    return (
        i.Z.dispatch({
            type: 'APPLICATION_FETCH',
            applicationId: e
        }),
        r.tn
            .get({
                url: o.ANM.APPLICATION_PUBLIC(e),
                signal: t,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    i.Z.dispatch({
                        type: 'APPLICATION_FETCH_SUCCESS',
                        application: e.body
                    }),
                    e.body
                )
            )
            .catch(
                (t) => (
                    i.Z.dispatch({
                        type: 'APPLICATION_FETCH_FAIL',
                        applicationId: e
                    }),
                    Promise.reject(new a.Z(t))
                )
            )
    );
}
async function d(e, t) {
    return (
        await r.tn.get({
            url: o.ANM.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: e,
                sku_id: t
            },
            rejectWithError: !1
        })
    ).body;
}
