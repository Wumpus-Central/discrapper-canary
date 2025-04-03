n.d(t, {
    SR: () => o,
    Vk: () => l,
    xl: () => c
});
var r = n(544891),
    i = n(570140),
    s = n(981631);
function a(e, t) {
    let n = new Date(),
        i = new Date(n.getTime() - (n.getDay() + 1) * 86400000 - 3628800000);
    return r.tn.get({
        url: t(e),
        query: {
            start: i.toISOString(),
            end: n.toISOString(),
            interval: 2
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function l(e) {
    return a(e, s.ANM.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS',
                guildId: e,
                stats: n.slice(0, 2)
            });
        },
        (e) => {
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
function o(e) {
    return a(e, s.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS',
                guildId: e,
                stats: n.slice(0, 2)
            });
        },
        (e) => {
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
function c(e) {
    return a(e, s.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(
        (t) => {
            let { body: n } = t,
                r = n
                    .filter((e) => e.hasOwnProperty('pct_retained'))
                    .map((e) => {
                        let { interval_start_timestamp: t, pct_retained: n } = e;
                        return (
                            (function (e, t) {
                                if (null != e) {
                                    var n,
                                        r,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = {},
                                                s = Object.keys(e);
                                            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var s = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                    }
                                }
                            })(e, ['interval_start_timestamp', 'pct_retained']),
                            {
                                interval_start_timestamp: t,
                                pct_retained: n
                            }
                        );
                    });
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS',
                guildId: e,
                stats: r.slice(0, 2)
            });
        },
        (e) => {
            i.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
