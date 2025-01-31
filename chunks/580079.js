n(653041), n(47120), n(724458);
var i,
    l,
    r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    c = n(570140),
    d = n(592125);
n(914010);
var u = n(709054),
    h = n(176505);
let m = {},
    p = {},
    g = {},
    _ = {};
function f(e) {
    let t = p[e];
    if (null == t) return;
    let n = u.default.fromTimestamp(Date.now() - 900000),
        i = s().findIndex(t, (e) => u.default.compare(e.id, n) > 0);
    if (-1 === i) p[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        p[e] = s().slice(t, n);
    }
    g[e] = Date.now();
}
function E(e, t, n, i) {
    m[e].add(t);
    let l = g[t];
    (null == l || l + 300000 > Date.now()) && f(t),
        null == p[t] && (p[t] = []),
        p[t].push({
            id: n,
            userId: i
        });
}
function I(e) {
    let { channel: t } = e;
    delete p[t.id], delete g[t.id];
}
class C extends (i = o.ZP.Store) {
    getActiveChannelsFetchStatus(e) {
        return _[e];
    }
    getActiveChannelIds(e) {
        return m[e];
    }
    getChannelMessageData(e) {
        return p[e];
    }
    shouldFetch(e) {
        var t;
        return null == m[e] && !(null === (t = _[e]) || void 0 === t ? void 0 : t.loading);
    }
}
(r = 'ActiveChannelsStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = r),
    new C(c.Z, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (!(0, h.ME)(t) || null == n) return !1;
            let i = m[n];
            if (null == i) return !1;
            i.forEach((e) => {
                var t;
                f(e), (null === (t = p[e]) || void 0 === t ? void 0 : t.length) === 0 && delete p[e];
            });
            let l = s()
                .chain(Array.from(i))
                .filter((e) => e in p)
                .sortBy((e) => {
                    var t, n;
                    return -(null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0);
                })
                .value();
            m[n] = new Set(l);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: l, isPushNotification: r } = e;
            if (l || r) return !1;
            let a = d.Z.getChannel(n);
            if (null == a) return !1;
            let s = a.guild_id;
            if (null == s || null == m[s]) return !1;
            E(s, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete m[t.id];
        },
        CHANNEL_DELETE: I,
        THREAD_DELETE: I,
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
                (m[t] = new Set()),
                n.forEach((e) => {
                    let { channel_id: n, messages: i } = e;
                    i.forEach((e) => {
                        E(t, n, e.message_id, e.user_id);
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
