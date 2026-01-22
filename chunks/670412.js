n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(488428),
    i = n(269438),
    a = n(562465),
    s = n(73153),
    o = n(439372),
    l = n(449054),
    c = n(351022),
    u = n(965660),
    d = n(324580),
    f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class _ extends o.A {
    constructor(...e) {
        super(...e),
            p(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
            }),
            p(this, "queue", new Set()),
            p(this, "isFetchEnabled", !1),
            p(this, "handleConnectionOpen", () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === d.Iq
                            ? this.fetchFeaturedGuilds()
                            : this.fetchCategoryFeaturedGuilds({
                                  categoryId: e,
                              });
                    });
            }),
            p(this, "fetchFeaturedGuilds", async (e) => {
                var t;
                if (!this.isFetchEnabled) return void this.queue.add(d.Iq);
                let n = null != (t = null == e ? void 0 : e.forceRefresh) && t,
                    o = c.A.getLastFetchTimestamp({
                        categoryId: d.Iq,
                    });
                if (n || (0, u.M9)(o)) {
                    s.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
                        categoryId: d.Iq,
                        reset: !0,
                    });
                    try {
                        let e = await a.Bo.get({
                                url: f.Rsh.GUILD_DISCOVERY,
                                query: r.stringify({
                                    offset: 0,
                                    limit: i.w.FEATURED_DEFAULT_LIMIT,
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1,
                            }),
                            t = e.body.total,
                            n = e.body.guilds.map(u.MC);
                        s.h.dispatch({
                            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                            categoryId: d.Iq,
                            guilds: n,
                            total: t,
                        });
                    } catch (e) {
                        s.h.dispatch({
                            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                            categoryId: d.Iq,
                            error: e,
                        }),
                            l.uf({
                                categoryId: d.Iq,
                            });
                    }
                }
            }),
            p(this, "fetchCategoryFeaturedGuilds", async (e) => {
                let { categoryId: t, forceRefresh: n = !1 } = e;
                if (!this.isFetchEnabled) return void this.queue.add(t);
                let i = c.A.getLastFetchTimestamp({
                    categoryId: t,
                });
                if (n || (0, u.M9)(i)) {
                    s.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
                        categoryId: t,
                        reset: !0,
                    });
                    try {
                        let e = await a.Bo.get({
                                url: f.Rsh.GUILD_DISCOVERY,
                                query: r.stringify({
                                    categories: [t],
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1,
                            }),
                            n = e.body.total,
                            i = e.body.guilds.map(u.MC);
                        s.h.dispatch({
                            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                            categoryId: t,
                            guilds: i,
                            total: n,
                        });
                    } catch (e) {
                        s.h.dispatch({
                            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                            categoryId: t,
                            error: e,
                        }),
                            l.uf({
                                categoryId: t,
                            });
                    }
                }
            });
    }
}
let h = new _();
