n.d(t, {
    SR: function () {
        return c;
    },
    Vk: function () {
        return o;
    },
    r2: function () {
        return u;
    },
    xl: function () {
        return d;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(981631);
let a = 3628800000;
function s(e, t) {
    let n = new Date(),
        r = new Date(n.getTime() - (n.getDay() + 1) * 86400000 - a);
    return i.tn.get({
        url: t(e),
        query: {
            start: r.toISOString(),
            end: n.toISOString(),
            interval: 2
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function o(e) {
    return s(e, l.ANM.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS',
                guildId: e,
                stats: n.slice(0, 2)
            });
        },
        (e) => {
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
function c(e) {
    return s(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS',
                guildId: e,
                stats: n.slice(0, 2)
            });
        },
        (e) => {
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
function d(e) {
    return s(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(
        (t) => {
            let { body: n } = t,
                i = n
                    .filter((e) => e.hasOwnProperty('pct_retained'))
                    .map((e) => {
                        let { interval_start_timestamp: t, pct_retained: n, ...i } = e;
                        return {
                            interval_start_timestamp: t,
                            pct_retained: n
                        };
                    });
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS',
                guildId: e,
                stats: i.slice(0, 2)
            });
        },
        (e) => {
            r.Z.dispatch({
                type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE',
                error: e.body
            });
        }
    );
}
function u(e) {
    return i.tn
        .get({
            url: l.ANM.GUILD_ANALYTICS_MEMBER_INSIGHTS(e),
            rejectWithError: !1
        })
        .then(
            (t) => {
                r.Z.dispatch({
                    type: 'GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS',
                    guildId: e,
                    hasAccessRate: t.body.has_access_rate,
                    accessRate: t.body.access_rate
                });
            },
            () => {}
        );
}
