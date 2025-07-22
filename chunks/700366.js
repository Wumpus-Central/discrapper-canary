(n.d(t, { Z: () => u }), n(415506), n(388685));
var r = n(147913),
    s = n(840877),
    l = n(416638),
    a = n(862825),
    i = n(981631);
function o(e, t, n) {
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
class c extends r.Z {
    createSearchTabsPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: s, trackExactTotalHits: l } = e,
            { include_nsfw: i, channel_id: c } = t,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(t, ['include_nsfw', 'channel_id']),
            d = {
                include_nsfw: i,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: l
            };
        return (
            n.forEach((e) => {
                var t, n;
                let l = r(e),
                    i = a.yY[e],
                    c = null != i ? a.SO[i] : {};
                d.tabs[e] =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    o(e, t, n[t]);
                                }));
                        }
                        return e;
                    })({}, a.E2, c, u, s)),
                    (n = n = { limit: l }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t);
            }),
            d
        );
    }
    createSearchTabFetcher(e) {
        let { searchContext: t, searchQuery: n, searchTabs: r, getLimit: l, pagination: a, trackExactTotalHits: o } = e,
            c = this.createSearchTabsPayload({
                searchQuery: n,
                searchTabs: r,
                getLimit: l,
                pagination: a,
                trackExactTotalHits: o
            });
        switch (t.type) {
            case i.aib.GUILD:
            case i.aib.GUILD_CHANNEL:
                return new s.tJ(t.guildId, t.type, n, c);
            case i.aib.CHANNEL:
                return new s.tJ(t.channelId, t.type, n, c);
            case i.aib.DMS:
                return new s.tJ(t.type, t.type, n, c);
            default:
                throw Error('[SearchFetchManager] Unsupported search context type: '.concat(t.type));
        }
    }
    _terminate() {
        (this.searchTabFetchers.forEach((e) => (null == e ? void 0 : e.cancel())), this.searchTabFetchers.clear());
    }
    cancelInFlightRequests(e) {
        var t;
        let n = (0, l.Tm)(e);
        null == (t = this.searchTabFetchers.get(n)) || t.cancel();
    }
    getSearchTabFetcher(e) {
        let { searchContext: t, searchQuery: n, searchTabs: r, getLimit: s, pagination: a, trackExactTotalHits: i } = e;
        this.cancelInFlightRequests(t);
        let o = this.createSearchTabFetcher({
                searchContext: t,
                searchQuery: n,
                searchTabs: r,
                getLimit: s,
                pagination: a,
                trackExactTotalHits: i
            }),
            c = (0, l.Tm)(t);
        return (this.searchTabFetchers.set(c, o), o);
    }
    constructor(...e) {
        (super(...e), o(this, 'searchTabFetchers', new Map()));
    }
}
let u = new c();
