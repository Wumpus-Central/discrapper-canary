n.d(t, { Z: () => _ }), n(415506);
var r = n(558706),
    i = n(170216),
    a = n(723642),
    o = n(981631);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class p extends i.L {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: i, trackExactTotalHits: o } = e,
            { include_nsfw: s, channel_id: c } = t,
            f = d(t, ["include_nsfw", "channel_id"]),
            p = {
                include_nsfw: s,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: o,
            };
        return (
            n.forEach((e) => {
                let t = r(e),
                    n = a.yY[e],
                    o = null != n ? a.SO[n] : {};
                p.tabs[e] = u(l({}, a.E2, o, f, i), { limit: t });
            }),
            p
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: i, getLimit: a, pagination: s, trackExactTotalHits: l } = e,
            c = this.createRequestPayload({
                searchQuery: n,
                searchTabs: i,
                getLimit: a,
                pagination: s,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case o.aib.GUILD:
            case o.aib.GUILD_CHANNEL:
            case o.aib.THREAD:
                return new r.tJ(t.guildId, t.type, n, c);
            case o.aib.CHANNEL:
                return new r.tJ(t.channelId, t.type, n, c);
            case o.aib.DMS:
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
            getLimit: a,
            pagination: o,
            trackExactTotalHits: s,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: a,
            pagination: o,
            trackExactTotalHits: s,
        });
        return this.set(t, l), l;
    }
}
let _ = new p();
