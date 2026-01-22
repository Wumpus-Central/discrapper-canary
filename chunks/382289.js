n(321073), n(896048);
var r,
    i,
    l,
    a,
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(73153),
    d = n(734057),
    p = n(967198),
    f = n(661191),
    h = n(746080);
let A = {},
    g = {},
    m = {},
    b = {};

function _(e) {
    let t = g[e];
    if (null == t) return;
    let n = f.default.fromTimestamp(Date.now() - 9e5),
        r = o().findIndex(t, (e) => f.default.compare(e.id, n) > 0);
    if (-1 === r) g[e] = [];
    else {
        let n = Math.max(r, t.length - 26);
        g[e] = o().slice(t, n);
    }
    m[e] = Date.now();
}

function E(e, t, n, r) {
    A[e].add(t);
    let i = m[t];
    (null == i || i + 3e5 > Date.now()) && _(t),
        null == g[t] && (g[t] = []),
        g[t].push({
            id: n,
            userId: r,
        });
}

function O(e) {
    let { channel: t } = e;
    delete g[t.id], delete m[t.id];
}
class y extends (a = c.Ay.Store) {
    initialize() {
        this.waitFor(d.A, p.A);
    }
    getActiveChannelsFetchStatus(e) {
        return b[e];
    }
    getActiveChannelIds(e) {
        return A[e];
    }
    getChannelMessageData(e) {
        return g[e];
    }
    shouldFetch(e) {
        var t;
        return null == A[e] && !(null == (t = b[e]) ? void 0 : t.loading);
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
    new y(u.h, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (!(0, h.mP)(t) || null == n) return !1;
            let r = A[n];
            if (null == r) return !1;
            r.forEach((e) => {
                var t;
                _(e), (null == (t = g[e]) ? void 0 : t.length) === 0 && delete g[e];
            });
            let i = o()
                .chain(Array.from(r))
                .filter((e) => e in g)
                .sortBy((e) => {
                    var t, n;
                    return -(null != (t = null == (n = g[e]) ? void 0 : n.length) ? t : 0);
                })
                .value();
            A[n] = new Set(i);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: r, optimistic: i, isPushNotification: l } = e;
            if (i || l) return !1;
            let a = d.A.getChannel(n);
            if (null == a) return !1;
            let s = a.guild_id;
            if (null == s || null == A[s]) return !1;
            E(s, n, r.id, null == (t = r.author) ? void 0 : t.id);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete A[t.id];
        },
        CHANNEL_DELETE: O,
        THREAD_DELETE: O,
        ACTIVE_CHANNELS_FETCH_START: function (e) {
            let { guildId: t } = e;
            b[t] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now(),
            };
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
            let { guildId: t, channels: n } = e;
            (b[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now(),
            }),
                (A[t] = new Set()),
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
                fetchedAt: null,
            };
        },
        CONNECTION_OPEN: function () {},
    });
