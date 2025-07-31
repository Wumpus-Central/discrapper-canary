(n.d(t, { Z: () => i }), n(415506));
var r = n(558706),
    s = n(170216),
    l = n(723642),
    a = n(981631);
class o extends s.L {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: s, trackExactTotalHits: a } = e,
            { include_nsfw: o, channel_id: i } = t,
            c = (function (e, t) {
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
            u = {
                include_nsfw: o,
                channel_ids: i,
                tabs: {},
                track_exact_total_hits: a
            };
        return (
            n.forEach((e) => {
                var t, n;
                let a = r(e),
                    o = l.yY[e],
                    i = null != o ? l.SO[o] : {};
                u.tabs[e] =
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
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, l.E2, i, c, s)),
                    (n = n = { limit: a }),
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
            u
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: s, getLimit: l, pagination: o, trackExactTotalHits: i } = e,
            c = this.createRequestPayload({
                searchQuery: n,
                searchTabs: s,
                getLimit: l,
                pagination: o,
                trackExactTotalHits: i
            });
        switch (t.type) {
            case a.aib.GUILD:
            case a.aib.GUILD_CHANNEL:
            case a.aib.THREAD:
                return new r.tJ(t.guildId, t.type, n, c);
            case a.aib.CHANNEL:
                return new r.tJ(t.channelId, t.type, n, c);
            case a.aib.DMS:
                return new r.tJ(t.type, t.type, n, c);
            default:
                throw Error('[SearchFetchManager] Unsupported search context type: '.concat(t.type));
        }
    }
    create(e) {
        let { id: t, searchContext: n, searchQuery: r, searchTabs: s, getLimit: l, pagination: a, trackExactTotalHits: o } = e;
        this.cancel(t);
        let i = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: s,
            getLimit: l,
            pagination: a,
            trackExactTotalHits: o
        });
        return (this.set(t, i), i);
    }
}
let i = new o();
