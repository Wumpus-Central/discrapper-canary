r.d(n, {
    GF: function () {
        return u;
    },
    UM: function () {
        return d;
    },
    a_: function () {
        return c;
    },
    jz: function () {
        return l;
    },
    tn: function () {
        return f;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(479531),
    s = r(981631);
let l = async (e, n) =>
        (
            await i.tn.get({
                url: s.ANM.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, n),
                rejectWithError: !1
            })
        ).body,
    u = async function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
            await i.tn.get({
                url: s.ANM.GUILD_ENTITLEMENTS(e),
                query: {
                    with_sku: !0,
                    with_application: !0,
                    exclude_deleted: n
                },
                rejectWithError: !1
            })
        ).body;
    },
    c = async (e) =>
        (
            await i.tn.get({
                url: s.ANM.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
                rejectWithError: !1
            })
        ).body;
function d(e, n) {
    return (
        a.Z.dispatch({
            type: 'APPLICATION_FETCH',
            applicationId: e
        }),
        i.tn
            .get({
                url: s.ANM.APPLICATION_PUBLIC(e),
                signal: n,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    a.Z.dispatch({
                        type: 'APPLICATION_FETCH_SUCCESS',
                        application: e.body
                    }),
                    e.body
                )
            )
            .catch(
                (n) => (
                    a.Z.dispatch({
                        type: 'APPLICATION_FETCH_FAIL',
                        applicationId: e
                    }),
                    Promise.reject(new o.Z(n))
                )
            )
    );
}
async function f(e, n) {
    return (
        await i.tn.get({
            url: s.ANM.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: e,
                sku_id: n
            },
            rejectWithError: !1
        })
    ).body;
}
