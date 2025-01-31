n.d(t, {
    GF: () => l,
    UM: () => c,
    a_: () => u,
    jz: () => o,
    tn: () => d
});
var i = n(544891),
    r = n(570140),
    a = n(479531),
    s = n(981631);
let o = async (e, t) =>
        (
            await i.tn.get({
                url: s.ANM.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
                rejectWithError: !1
            })
        ).body,
    l = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
            await i.tn.get({
                url: s.ANM.GUILD_ENTITLEMENTS(e),
                query: {
                    with_sku: !0,
                    with_application: !0,
                    exclude_deleted: t
                },
                rejectWithError: !1
            })
        ).body;
    },
    u = async (e) =>
        (
            await i.tn.get({
                url: s.ANM.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
                rejectWithError: !1
            })
        ).body;
function c(e, t) {
    return (
        r.Z.dispatch({
            type: 'APPLICATION_FETCH',
            applicationId: e
        }),
        i.tn
            .get({
                url: s.ANM.APPLICATION_PUBLIC(e),
                signal: t,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    r.Z.dispatch({
                        type: 'APPLICATION_FETCH_SUCCESS',
                        application: e.body
                    }),
                    e.body
                )
            )
            .catch(
                (t) => (
                    r.Z.dispatch({
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
        await i.tn.get({
            url: s.ANM.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: e,
                sku_id: t
            },
            rejectWithError: !1
        })
    ).body;
}
