n.d(t, { Z: () => h }), n(47120);
var i = n(664751),
    r = n(975641),
    a = n(544891),
    s = n(570140),
    o = n(147913),
    l = n(900849),
    u = n(356164),
    c = n(726115),
    d = n(128449),
    f = n(981631);
function _(e, t, n) {
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
class p extends o.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            _(this, 'queue', new Set()),
            _(this, 'isFetchEnabled', !1),
            _(this, 'handleConnectionOpen', () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === d.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
                    });
            }),
            _(this, 'fetchFeaturedGuilds', async (e) => {
                var t;
                if (!this.isFetchEnabled) {
                    this.queue.add(d.Hk);
                    return;
                }
                let n = null !== (t = null == e ? void 0 : e.forceRefresh) && void 0 !== t && t,
                    o = u.Z.getLastFetchTimestamp({ categoryId: d.Hk });
                if (n || (0, c.Ew)(o)) {
                    s.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: d.Hk,
                        reset: !0
                    });
                    try {
                        let e = await a.tn.get({
                                url: f.ANM.GUILD_DISCOVERY,
                                query: i.stringify({
                                    offset: 0,
                                    limit: r.g.FEATURED_DEFAULT_LIMIT
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            t = e.body.total,
                            n = e.body.guilds.map(c.Uv);
                        s.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: d.Hk,
                            guilds: n,
                            total: t
                        });
                    } catch (e) {
                        s.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: d.Hk,
                            error: e
                        }),
                            l.rC({ categoryId: d.Hk });
                    }
                }
            }),
            _(this, 'fetchCategoryFeaturedGuilds', async (e) => {
                let { categoryId: t, forceRefresh: n = !1 } = e;
                if (!this.isFetchEnabled) {
                    this.queue.add(t);
                    return;
                }
                let r = u.Z.getLastFetchTimestamp({ categoryId: t });
                if (n || (0, c.Ew)(r)) {
                    s.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: t,
                        reset: !0
                    });
                    try {
                        let e = await a.tn.get({
                                url: f.ANM.GUILD_DISCOVERY,
                                query: i.stringify({ categories: [t] }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            n = e.body.total,
                            r = e.body.guilds.map(c.Uv);
                        s.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: t,
                            guilds: r,
                            total: n
                        });
                    } catch (e) {
                        s.Z.dispatch({
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
let h = new p();
