n.d(t, { Z: () => h }), n(47120);
var r = n(664751),
    i = n(975641),
    o = n(544891),
    a = n(570140),
    s = n(147913),
    l = n(900849),
    c = n(356164),
    u = n(726115),
    d = n(128449),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ extends s.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            p(this, 'queue', new Set()),
            p(this, 'isFetchEnabled', !1),
            p(this, 'handleConnectionOpen', () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === d.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
                    });
            }),
            p(this, 'fetchFeaturedGuilds', async (e) => {
                var t;
                if (!this.isFetchEnabled) {
                    this.queue.add(d.Hk);
                    return;
                }
                let n = null !== (t = null == e ? void 0 : e.forceRefresh) && void 0 !== t && t,
                    s = c.Z.getLastFetchTimestamp({ categoryId: d.Hk });
                if (n || (0, u.Ew)(s)) {
                    a.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: d.Hk,
                        reset: !0
                    });
                    try {
                        let e = await o.tn.get({
                                url: f.ANM.GUILD_DISCOVERY,
                                query: r.stringify({
                                    offset: 0,
                                    limit: i.g.FEATURED_DEFAULT_LIMIT
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            t = e.body.total,
                            n = e.body.guilds.map(u.Uv);
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: d.Hk,
                            guilds: n,
                            total: t
                        });
                    } catch (e) {
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: d.Hk,
                            error: e
                        }),
                            l.rC({ categoryId: d.Hk });
                    }
                }
            }),
            p(this, 'fetchCategoryFeaturedGuilds', async (e) => {
                let { categoryId: t, forceRefresh: n = !1 } = e;
                if (!this.isFetchEnabled) {
                    this.queue.add(t);
                    return;
                }
                let i = c.Z.getLastFetchTimestamp({ categoryId: t });
                if (n || (0, u.Ew)(i)) {
                    a.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: t,
                        reset: !0
                    });
                    try {
                        let e = await o.tn.get({
                                url: f.ANM.GUILD_DISCOVERY,
                                query: r.stringify({ categories: [t] }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            n = e.body.total,
                            i = e.body.guilds.map(u.Uv);
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: t,
                            guilds: i,
                            total: n
                        });
                    } catch (e) {
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: t,
                            error: e
                        }),
                            l.rC({ categoryId: t });
                    }
                }
            });
    }
}
let h = new _();
