n(653041), n(47120);
var r,
    i,
    l,
    o,
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(592125);
n(914010);
var p = n(709054),
    h = n(176505);
let f = {},
    g = {},
    m = {},
    b = {};
function _(e) {
    let t = g[e];
    if (null == t) return;
    let n = p.default.fromTimestamp(Date.now() - 900000),
        r = s().findIndex(t, (e) => p.default.compare(e.id, n) > 0);
    if (-1 === r) g[e] = [];
    else {
        let n = Math.max(r, t.length - 26);
        g[e] = s().slice(t, n);
    }
    m[e] = Date.now();
}
function E(e, t, n, r) {
    f[e].add(t);
    let i = m[t];
    (null == i || i + 300000 > Date.now()) && _(t),
        null == g[t] && (g[t] = []),
        g[t].push({
            id: n,
            userId: r
        });
}
function O(e) {
    let { channel: t } = e;
    delete g[t.id], delete m[t.id];
}
class N extends (o = c.ZP.Store) {
    getActiveChannelsFetchStatus(e) {
        return b[e];
    }
    getActiveChannelIds(e) {
        return f[e];
    }
    getChannelMessageData(e) {
        return g[e];
    }
    shouldFetch(e) {
        var t;
        return null == f[e] && !(null === (t = b[e]) || void 0 === t ? void 0 : t.loading);
    }
}
(l = 'ActiveChannelsStore'),
    (i = 'displayName') in (r = N)
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = l),
    new N(u.Z, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (!(0, h.ME)(t) || null == n) return !1;
            let r = f[n];
            if (null == r) return !1;
            r.forEach((e) => {
                var t;
                _(e), (null === (t = g[e]) || void 0 === t ? void 0 : t.length) === 0 && delete g[e];
            });
            let i = s()
                .chain(Array.from(r))
                .filter((e) => e in g)
                .sortBy((e) => {
                    var t, n;
                    return -(null !== (n = null === (t = g[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0);
                })
                .value();
            f[n] = new Set(i);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: r, optimistic: i, isPushNotification: l } = e;
            if (i || l) return !1;
            let o = d.Z.getChannel(n);
            if (null == o) return !1;
            let a = o.guild_id;
            if (null == a || null == f[a]) return !1;
            E(a, n, r.id, null === (t = r.author) || void 0 === t ? void 0 : t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete f[t.id];
        },
        CHANNEL_DELETE: O,
        THREAD_DELETE: O,
        ACTIVE_CHANNELS_FETCH_START: function (e) {
            let { guildId: t } = e;
            b[t] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now()
            };
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
            let { guildId: t, channels: n } = e;
            (b[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now()
            }),
                (f[t] = new Set()),
                n.forEach((e) => {
                    let { channel_id: n, messages: r } = e;
                    r.forEach((e) => {
                        E(t, n, e.message_id, e.user_id);
                    });
                });
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
            let { guildId: t, error: n } = e;
            b[t] = {
                loading: !1,
                error: n,
                fetchedAt: null
            };
        },
        CONNECTION_OPEN: function () {}
    });
