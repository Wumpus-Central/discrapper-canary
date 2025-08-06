n.d(t, { Z: () => p }), n(415506);
var r = n(558706),
    i = n(170216),
    o = n(723642),
    a = n(981631);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class _ extends i.L {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: i, trackExactTotalHits: a } = e,
            { include_nsfw: s, channel_id: c } = t,
            f = d(t, ["include_nsfw", "channel_id"]),
            _ = {
                include_nsfw: s,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: a,
            };
        return (
            n.forEach((e) => {
                let t = r(e),
                    n = o.yY[e],
                    a = null != n ? o.SO[n] : {};
                _.tabs[e] = u(l({}, o.E2, a, f, i), { limit: t });
            }),
            _
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: i, getLimit: o, pagination: s, trackExactTotalHits: l } = e,
            c = this.createRequestPayload({
                searchQuery: n,
                searchTabs: i,
                getLimit: o,
                pagination: s,
                trackExactTotalHits: l,
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
                throw Error("[SearchFetchManager] Unsupported search context type: ".concat(t.type));
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: o,
            pagination: a,
            trackExactTotalHits: s,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: o,
            pagination: a,
            trackExactTotalHits: s,
        });
        return this.set(t, l), l;
    }
}
let p = new _();
