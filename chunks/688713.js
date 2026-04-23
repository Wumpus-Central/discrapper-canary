"use strict";
n.d(t, { A: () => m });
var i,
    r = n(488428),
    s =
        (((i = {})[(i.FEATURED_DEFAULT_LIMIT = 30)] = "FEATURED_DEFAULT_LIMIT"),
        (i[(i.SEARCH_RESULTS_DEFAULT_LIMIT = 24)] = "SEARCH_RESULTS_DEFAULT_LIMIT"),
        i),
    a = n(636537),
    o = n(228366),
    l = n(439372),
    d = n(449054),
    _ = n(351022),
    u = n(965660),
    c = n(324580),
    E = n(652215);
class h extends l.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    queue = new Set();
    isFetchEnabled = !1;
    handleConnectionOpen = () => {
        (this.isFetchEnabled = !0),
            this.queue.forEach((e) => {
                e === c.Iq ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
            });
    };
    fetchFeaturedGuilds = async (e) => {
        if (!this.isFetchEnabled) return void this.queue.add(c.Iq);
        let t = e?.forceRefresh ?? !1,
            n = _.A.getLastFetchTimestamp({ categoryId: c.Iq });
        if (t || (0, u.M9)(n)) {
            o.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: c.Iq, reset: !0 });
            try {
                let e = await a.Bo.get({
                        url: E.Rsh.GUILD_DISCOVERY,
                        query: r.stringify({ offset: 0, limit: s.FEATURED_DEFAULT_LIMIT }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    t = e.body.total,
                    n = e.body.guilds.map(u.MC);
                o.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                    categoryId: c.Iq,
                    guilds: n,
                    total: t,
                });
            } catch (e) {
                o.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: c.Iq, error: e }),
                    d.uf({ categoryId: c.Iq });
            }
        }
    };
    fetchCategoryFeaturedGuilds = async (e) => {
        let { categoryId: t, forceRefresh: n = !1 } = e;
        if (!this.isFetchEnabled) return void this.queue.add(t);
        let i = _.A.getLastFetchTimestamp({ categoryId: t });
        if (n || (0, u.M9)(i)) {
            o.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: t, reset: !0 });
            try {
                let e = await a.Bo.get({
                        url: E.Rsh.GUILD_DISCOVERY,
                        query: r.stringify({ categories: [t] }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    n = e.body.total,
                    i = e.body.guilds.map(u.MC);
                o.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: t, guilds: i, total: n });
            } catch (e) {
                o.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: t, error: e }),
                    d.uf({ categoryId: t });
            }
        }
    };
}
let m = new h();
