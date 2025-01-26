n(653041), n(47120), n(724458);
var i,
    r,
    l,
    a,
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(592125);
n(914010);
var h = n(709054),
    m = n(176505);
let p = {},
    g = {},
    f = {},
    _ = {};
function E(e) {
    let t = g[e];
    if (null == t) return;
    let n = h.default.fromTimestamp(Date.now() - 900000),
        i = o().findIndex(t, (e) => h.default.compare(e.id, n) > 0);
    if (-1 === i) g[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        g[e] = o().slice(t, n);
    }
    f[e] = Date.now();
}
function I(e, t, n, i) {
    p[e].add(t);
    let r = f[t];
    (null == r || r + 300000 > Date.now()) && E(t),
        null == g[t] && (g[t] = []),
        g[t].push({
            id: n,
            userId: i
        });
}
function C(e) {
    let { channel: t } = e;
    delete g[t.id], delete f[t.id];
}
class v extends (i = c.ZP.Store) {
    getActiveChannelsFetchStatus(e) {
        return _[e];
    }
    getActiveChannelIds(e) {
        return p[e];
    }
    getChannelMessageData(e) {
        return g[e];
    }
    shouldFetch(e) {
        var t;
        return null == p[e] && !(null === (t = _[e]) || void 0 === t ? void 0 : t.loading);
    }
}
(a = 'ActiveChannelsStore'),
    (l = 'displayName') in (r = v)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    new v(d.Z, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (!(0, m.ME)(t) || null == n) return !1;
            let i = p[n];
            if (null == i) return !1;
            i.forEach((e) => {
                var t;
                E(e), (null === (t = g[e]) || void 0 === t ? void 0 : t.length) === 0 && delete g[e];
            });
            let r = o()
                .chain(Array.from(i))
                .filter((e) => e in g)
                .sortBy((e) => {
                    var t, n;
                    return -(null !== (n = null === (t = g[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0);
                })
                .value();
            p[n] = new Set(r);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: r, isPushNotification: l } = e;
            if (r || l) return !1;
            let a = u.Z.getChannel(n);
            if (null == a) return !1;
            let s = a.guild_id;
            if (null == s || null == p[s]) return !1;
            I(s, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete p[t.id];
        },
        CHANNEL_DELETE: C,
        THREAD_DELETE: C,
        ACTIVE_CHANNELS_FETCH_START: function (e) {
            let { guildId: t } = e;
            _[t] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now()
            };
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
            let { guildId: t, channels: n } = e;
            (_[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now()
            }),
                (p[t] = new Set()),
                n.forEach((e) => {
                    let { channel_id: n, messages: i } = e;
                    i.forEach((e) => {
                        I(t, n, e.message_id, e.user_id);
                    });
                });
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
            let { guildId: t, error: n } = e;
            _[t] = {
                loading: !1,
                error: n,
                fetchedAt: null
            };
        },
        CONNECTION_OPEN: function () {}
    });
