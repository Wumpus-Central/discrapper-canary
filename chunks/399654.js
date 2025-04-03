n.d(t, { a: () => s });
var r = n(544891),
    l = n(570140),
    o = n(706454),
    i = n(70956),
    a = n(844439),
    c = n(981631);
let u = 10 * i.Z.Millis.MINUTE;
async function s(e) {
    let { channelId: t, location: n, withCommands: i } = e;
    if (null == t) return;
    let s = Date.now(),
        d = a.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: i
        }),
        m = a.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: i
        });
    if (d !== a.M.FETCHING && (null == m || !(m + u > s))) {
        l.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: i
        });
        try {
            var p;
            let e = await r.tn.get({
                url: c.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: o.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: i
                },
                rejectWithError: !1
            });
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: null != (p = e.body) ? p : [],
                withCommands: i
            });
        } catch (e) {
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: i
            });
        }
    }
}
