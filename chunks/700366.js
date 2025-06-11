n.d(t, { Z: () => p }), n(415506), n(388685);
var r = n(147913),
    i = n(840877),
    l = n(695346),
    a = n(903488),
    o = n(416638),
    s = n(862825),
    c = n(981631);
function u(e, t, n) {
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
class d extends r.Z {
    createSearchTabsPayload(e, t, n, r, i) {
        let { include_nsfw: c, channel_id: d } = t,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(t, ['include_nsfw', 'channel_id']),
            m = {
                include_nsfw: c,
                channel_ids: d,
                tabs: {},
                track_exact_total_hits: l.In.getSetting()
            };
        return (
            r.forEach((t) => {
                var r, l;
                let c = (0, o.jj)(e, t, n),
                    d = a.Z.getCursor(c),
                    f = i(t),
                    h = s.yY[t],
                    g = null != h ? s.SO[h] : {};
                m.tabs[t] =
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    u(e, t, n[t]);
                                });
                        }
                        return e;
                    })({}, s.E2, g, p)),
                    (l = l =
                        {
                            cursor: d,
                            limit: f
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r);
            }),
            m
        );
    }
    createSearchTabFetcher(e, t, n, r, l) {
        let a = this.createSearchTabsPayload(e, t, n, r, l);
        switch (e.type) {
            case c.aib.GUILD:
            case c.aib.GUILD_CHANNEL:
                return new i.tJ(e.guildId, e.type, t, a);
            case c.aib.CHANNEL:
                return new i.tJ(e.channelId, e.type, t, a);
            case c.aib.DMS:
                return new i.tJ(e.type, e.type, t, a);
            default:
                throw Error('[SearchFetchManager] Unsupported search context type: '.concat(e.type));
        }
    }
    _terminate() {
        Object.values(this.searchTabFetchers).forEach((e) => (null == e ? void 0 : e.cancel())), (this.searchTabFetchers = {});
    }
    cancelInFlightRequests(e) {
        var t;
        let n = (0, o.Tm)(e);
        null == (t = this.searchTabFetchers[n]) || t.cancel();
    }
    getSearchTabFetcher(e, t, n, r, i) {
        this.cancelInFlightRequests(e);
        let l = this.createSearchTabFetcher(e, t, n, r, i),
            a = (0, o.Tm)(e);
        return (this.searchTabFetchers[a] = l), l;
    }
    constructor(...e) {
        super(...e), u(this, 'searchTabFetchers', {});
    }
}
let p = new d();
