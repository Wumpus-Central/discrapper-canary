"use strict";
n.d(t, { A: () => p });
var r = n(488428),
    i = n(269438),
    s = n(562465),
    a = n(73153),
    o = n(439372),
    l = n(449054),
    u = n(351022),
    c = n(965660),
    d = n(324580),
    _ = n(652215);
class f extends o.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    queue = new Set();
    isFetchEnabled = !1;
    handleConnectionOpen = () => {
        (this.isFetchEnabled = !0),
            this.queue.forEach((e) => {
                e === d.Iq ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
            });
    };
    fetchFeaturedGuilds = async (e) => {
        if (!this.isFetchEnabled) return void this.queue.add(d.Iq);
        let t = e?.forceRefresh ?? !1,
            n = u.A.getLastFetchTimestamp({ categoryId: d.Iq });
        if (t || (0, c.M9)(n)) {
            a.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: d.Iq, reset: !0 });
            try {
                let e = await s.Bo.get({
                        url: _.Rsh.GUILD_DISCOVERY,
                        query: r.stringify({ offset: 0, limit: i.w.FEATURED_DEFAULT_LIMIT }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    t = e.body.total,
                    n = e.body.guilds.map(c.MC);
                a.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                    categoryId: d.Iq,
                    guilds: n,
                    total: t,
                });
            } catch (e) {
                a.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: d.Iq, error: e }),
                    l.uf({ categoryId: d.Iq });
            }
        }
    };
    fetchCategoryFeaturedGuilds = async (e) => {
        let { categoryId: t, forceRefresh: n = !1 } = e;
        if (!this.isFetchEnabled) return void this.queue.add(t);
        let i = u.A.getLastFetchTimestamp({ categoryId: t });
        if (n || (0, c.M9)(i)) {
            a.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: t, reset: !0 });
            try {
                let e = await s.Bo.get({
                        url: _.Rsh.GUILD_DISCOVERY,
                        query: r.stringify({ categories: [t] }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    n = e.body.total,
                    i = e.body.guilds.map(c.MC);
                a.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: t, guilds: i, total: n });
            } catch (e) {
                a.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: t, error: e }),
                    l.uf({ categoryId: t });
            }
        }
    };
}
let p = new f();
