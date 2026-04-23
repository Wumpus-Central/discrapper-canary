n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    l = n(73153),
    s = n(734057),
    o = n(967198),
    d = n(661191),
    u = n(746080);
let c = {},
    A = {},
    h = {},
    _ = {};
function E(e) {
    let t = A[e];
    if (null == t) return;
    let n = d.default.fromTimestamp(Date.now() - 9e5),
        i = r().findIndex(t, (e) => d.default.compare(e.id, n) > 0);
    if (-1 === i) A[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        A[e] = r().slice(t, n);
    }
    h[e] = Date.now();
}
function p(e, t, n, i) {
    c[e].add(t);
    let r = h[t];
    (null == r || r + 3e5 > Date.now()) && E(t), null == A[t] && (A[t] = []), A[t].push({ id: n, userId: i });
}
function m(e) {
    let { channel: t } = e;
    delete A[t.id], delete h[t.id];
}
class g extends a.Ay.Store {
    initialize() {
        this.waitFor(s.A, o.A);
    }
    static displayName = "ActiveChannelsStore";
    getActiveChannelsFetchStatus(e) {
        return _[e];
    }
    getActiveChannelIds(e) {
        return c[e];
    }
    getChannelMessageData(e) {
        return A[e];
    }
    shouldFetch(e) {
        return null == c[e] && !_[e]?.loading;
    }
}
new g(l.h, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (!(0, u.mP)(t) || null == n) return !1;
        let i = c[n];
        if (null == i) return !1;
        i.forEach((e) => {
            E(e), A[e]?.length === 0 && delete A[e];
        });
        let a = r()
            .chain(Array.from(i))
            .filter((e) => e in A)
            .sortBy((e) => -(A[e]?.length ?? 0))
            .value();
        c[n] = new Set(a);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i, isPushNotification: r } = e;
        if (i || r) return !1;
        let a = s.A.getChannel(t);
        if (null == a) return !1;
        let l = a.guild_id;
        if (null == l || null == c[l]) return !1;
        p(l, t, n.id, n.author?.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete c[t.id];
    },
    CHANNEL_DELETE: m,
    THREAD_DELETE: m,
    ACTIVE_CHANNELS_FETCH_START: function (e) {
        let { guildId: t } = e;
        _[t] = { loading: !0, error: null, fetchedAt: Date.now() };
    },
    ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, channels: n } = e;
        (_[t] = { loading: !1, error: null, fetchedAt: Date.now() }),
            (c[t] = new Set()),
            n.forEach((e) => {
                let { channel_id: n, messages: i } = e;
                i.forEach((e) => {
                    p(t, n, e.message_id, e.user_id);
                });
            });
    },
    ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        _[t] = { loading: !1, error: n, fetchedAt: null };
    },
    CONNECTION_OPEN: function () {},
});
