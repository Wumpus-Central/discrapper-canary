n.d(t, { a: () => u });
var r = n(544891),
    i = n(570140),
    a = n(706454),
    o = n(70956),
    s = n(844439),
    l = n(981631);
let c = 10 * o.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: t, location: n, withCommands: o } = e;
    if (null == t) return;
    let u = Date.now(),
        d = s.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: o
        }),
        f = s.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: o
        });
    if (d !== s.M.FETCHING && (null == f || !(f + c > u))) {
        i.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: o
        });
        try {
            var _;
            let e = await r.tn.get({
                url: l.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: a.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: o
                },
                rejectWithError: !1
            });
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: null != (_ = e.body) ? _ : [],
                withCommands: o
            });
        } catch (e) {
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: o
            });
        }
    }
}
