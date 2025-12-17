n(539854), n(388685);
var r,
    i,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(592125),
    p = n(914010),
    f = n(709054),
    g = n(176505);
let h = {},
    m = {},
    b = {},
    _ = {};
function E(e) {
    let t = m[e];
    if (null == t) return;
    let n = f.default.fromTimestamp(Date.now() - 900000),
        r = s().findIndex(t, (e) => f.default.compare(e.id, n) > 0);
    if (-1 === r) m[e] = [];
    else {
        let n = Math.max(r, t.length - 26);
        m[e] = s().slice(t, n);
    }
    b[e] = Date.now();
}
function O(e, t, n, r) {
    h[e].add(t);
    let i = b[t];
    (null == i || i + 300000 > Date.now()) && E(t),
        null == m[t] && (m[t] = []),
        m[t].push({
            id: n,
            userId: r,
        });
}
function v(e) {
    let { channel: t } = e;
    delete m[t.id], delete b[t.id];
}
class y extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, p.Z);
    }
    getActiveChannelsFetchStatus(e) {
        return _[e];
    }
    getActiveChannelIds(e) {
        return h[e];
    }
    getChannelMessageData(e) {
        return m[e];
    }
    shouldFetch(e) {
        var t;
        return null == h[e] && !(null == (t = _[e]) ? void 0 : t.loading);
    }
}
(l = "ActiveChannelsStore"),
    (i = "displayName") in (r = y)
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (r[i] = l),
    new y(u.Z, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (!(0, g.ME)(t) || null == n) return !1;
            let r = h[n];
            if (null == r) return !1;
            r.forEach((e) => {
                var t;
                E(e), (null == (t = m[e]) ? void 0 : t.length) === 0 && delete m[e];
            });
            let i = s()
                .chain(Array.from(r))
                .filter((e) => e in m)
                .sortBy((e) => {
                    var t, n;
                    return -(null != (n = null == (t = m[e]) ? void 0 : t.length) ? n : 0);
                })
                .value();
            h[n] = new Set(i);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: r, optimistic: i, isPushNotification: l } = e;
            if (i || l) return !1;
            let a = d.Z.getChannel(n);
            if (null == a) return !1;
            let o = a.guild_id;
            if (null == o || null == h[o]) return !1;
            O(o, n, r.id, null == (t = r.author) ? void 0 : t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete h[t.id];
        },
        CHANNEL_DELETE: v,
        THREAD_DELETE: v,
        ACTIVE_CHANNELS_FETCH_START: function (e) {
            let { guildId: t } = e;
            _[t] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now(),
            };
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
            let { guildId: t, channels: n } = e;
            (_[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now(),
            }),
                (h[t] = new Set()),
                n.forEach((e) => {
                    let { channel_id: n, messages: r } = e;
                    r.forEach((e) => {
                        O(t, n, e.message_id, e.user_id);
                    });
                });
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
            let { guildId: t, error: n } = e;
            _[t] = {
                loading: !1,
                error: n,
                fetchedAt: null,
            };
        },
        CONNECTION_OPEN: function () {},
    });
