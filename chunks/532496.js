(n.d(t, { Z: () => s }), n(415506));
var r = n(558706),
    i = n(170216),
    l = n(723642),
    a = n(981631);
class o extends i.L {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: i, trackExactTotalHits: a } = e,
            { include_nsfw: o, channel_id: s } = t,
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(t, ['include_nsfw', 'channel_id']),
            u = {
                include_nsfw: o,
                channel_ids: s,
                tabs: {},
                track_exact_total_hits: a
            };
        return (
            n.forEach((e) => {
                var t, n;
                let a = r(e),
                    o = l.yY[e],
                    s = null != o ? l.SO[o] : {};
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
                    })({}, l.E2, s, c, i)),
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
        let { searchContext: t, searchQuery: n, searchTabs: i, getLimit: l, pagination: o, trackExactTotalHits: s } = e,
            c = this.createRequestPayload({
                searchQuery: n,
                searchTabs: i,
                getLimit: l,
                pagination: o,
                trackExactTotalHits: s
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
        let { id: t, searchContext: n, searchQuery: r, searchTabs: i, getLimit: l, pagination: a, trackExactTotalHits: o } = e;
        this.cancel(t);
        let s = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: l,
            pagination: a,
            trackExactTotalHits: o
        });
        return (this.set(t, s), s);
    }
}
let s = new o();
