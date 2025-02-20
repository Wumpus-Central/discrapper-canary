n.d(t, { a: () => u });
var o = n(544891),
    i = n(570140),
    r = n(706454),
    l = n(70956),
    a = n(844439),
    c = n(981631);
let d = 10 * l.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: t, location: n, withCommands: l } = e;
    if (null == t) return;
    let u = Date.now(),
        s = a.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l
        }),
        m = a.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l
        });
    if (s !== a.M.FETCHING && (null == m || !(m + d > u))) {
        i.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: l
        });
        try {
            var p;
            let e = await o.tn.get({
                url: c.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: r.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: l
                },
                rejectWithError: !1
            });
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: null !== (p = e.body) && void 0 !== p ? p : [],
                withCommands: l
            });
        } catch (e) {
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: l
            });
        }
    }
}
