var i = r(47120);
var a = r(664751),
    s = r(975641),
    o = r(544891),
    l = r(570140),
    u = r(147913),
    c = r(900849),
    d = r(356164),
    f = r(726115),
    _ = r(128449),
    h = r(981631);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class m extends u.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            p(this, 'queue', new Set()),
            p(this, 'isFetchEnabled', !1),
            p(this, 'handleConnectionOpen', () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === _.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
                    });
            }),
            p(this, 'fetchFeaturedGuilds', async (e) => {
                var n;
                if (!this.isFetchEnabled) {
                    this.queue.add(_.Hk);
                    return;
                }
                let r = null !== (n = null == e ? void 0 : e.forceRefresh) && void 0 !== n && n,
                    i = d.Z.getLastFetchTimestamp({ categoryId: _.Hk });
                if (r || (0, f.Ew)(i)) {
                    l.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: _.Hk,
                        reset: !0
                    });
                    try {
                        let e = await o.tn.get({
                                url: h.ANM.GUILD_DISCOVERY,
                                query: a.stringify({
                                    offset: 0,
                                    limit: s.g.FEATURED_DEFAULT_LIMIT
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            n = e.body.total,
                            r = e.body.guilds.map(f.Uv);
                        l.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: _.Hk,
                            guilds: r,
                            total: n
                        });
                    } catch (e) {
                        l.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: _.Hk,
                            error: e
                        }),
                            c.rC({ categoryId: _.Hk });
                    }
                }
            }),
            p(this, 'fetchCategoryFeaturedGuilds', async (e) => {
                let { categoryId: n, forceRefresh: r = !1 } = e;
                if (!this.isFetchEnabled) {
                    this.queue.add(n);
                    return;
                }
                let i = d.Z.getLastFetchTimestamp({ categoryId: n });
                if (r || (0, f.Ew)(i)) {
                    l.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: n,
                        reset: !0
                    });
                    try {
                        let e = await o.tn.get({
                                url: h.ANM.GUILD_DISCOVERY,
                                query: a.stringify({ categories: [n] }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            r = e.body.total,
                            i = e.body.guilds.map(f.Uv);
                        l.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: n,
                            guilds: i,
                            total: r
                        });
                    } catch (e) {
                        l.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: n,
                            error: e
                        }),
                            c.rC({ categoryId: n });
                    }
                }
            });
    }
}
n.Z = new m();
