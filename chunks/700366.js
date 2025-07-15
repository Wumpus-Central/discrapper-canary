(r.d(t, { Z: () => u }), r(415506), r(388685));
var n = r(147913),
    s = r(840877),
    l = r(416638),
    a = r(862825),
    o = r(981631);
function i(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class c extends n.Z {
    createSearchTabsPayload(e) {
        let { searchQuery: t, searchTabs: r, getLimit: n, pagination: s, trackExactTotalHits: l } = e,
            { include_nsfw: o, channel_id: c } = t,
            u = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
                }
                return s;
            })(t, ['include_nsfw', 'channel_id']),
            d = {
                include_nsfw: o,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: l
            };
        return (
            r.forEach((e) => {
                var t, r;
                let l = n(e),
                    o = a.yY[e],
                    c = null != o ? a.SO[o] : {};
                d.tabs[e] =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    i(e, t, r[t]);
                                }));
                        }
                        return e;
                    })({}, a.E2, c, u, s)),
                    (r = r = { limit: l }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t);
            }),
            d
        );
    }
    createSearchTabFetcher(e) {
        let { searchContext: t, searchQuery: r, searchTabs: n, getLimit: l, pagination: a, trackExactTotalHits: i } = e,
            c = this.createSearchTabsPayload({
                searchQuery: r,
                searchTabs: n,
                getLimit: l,
                pagination: a,
                trackExactTotalHits: i
            });
        switch (t.type) {
            case o.aib.GUILD:
            case o.aib.GUILD_CHANNEL:
                return new s.tJ(t.guildId, t.type, r, c);
            case o.aib.CHANNEL:
                return new s.tJ(t.channelId, t.type, r, c);
            case o.aib.DMS:
                return new s.tJ(t.type, t.type, r, c);
            default:
                throw Error('[SearchFetchManager] Unsupported search context type: '.concat(t.type));
        }
    }
    _terminate() {
        (this.searchTabFetchers.forEach((e) => (null == e ? void 0 : e.cancel())), this.searchTabFetchers.clear());
    }
    cancelInFlightRequests(e) {
        var t;
        let r = (0, l.Tm)(e);
        null == (t = this.searchTabFetchers.get(r)) || t.cancel();
    }
    getSearchTabFetcher(e) {
        let { searchContext: t, searchQuery: r, searchTabs: n, getLimit: s, pagination: a, trackExactTotalHits: o } = e;
        this.cancelInFlightRequests(t);
        let i = this.createSearchTabFetcher({
                searchContext: t,
                searchQuery: r,
                searchTabs: n,
                getLimit: s,
                pagination: a,
                trackExactTotalHits: o
            }),
            c = (0, l.Tm)(t);
        return (this.searchTabFetchers.set(c, i), i);
    }
    constructor(...e) {
        (super(...e), i(this, 'searchTabFetchers', new Map()));
    }
}
let u = new c();
