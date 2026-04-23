n.d(t, { A: () => c });
var i = n(17928),
    r = n(52133),
    a = n(228366);
let s = {},
    _ = {},
    l = { scrollTop: 0 };
function o(e) {
    return { guildId: e, scrollTop: null, scrollTo: null };
}
function E(e) {
    if (null == s[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: i } = s[e];
    return t === n - i;
}
class d extends i.Ay.Store {
    static displayName = "DimensionStore";
    percentageScrolled(e) {
        if (null != s[e]) {
            let { scrollTop: t, scrollHeight: n } = s[e];
            return t / n;
        }
        return 1;
    }
    getChannelDimensions(e) {
        return s[e];
    }
    getGuildDimensions(e) {
        return _[e] ?? o(e);
    }
    getGuildListDimensions() {
        return l;
    }
    isAtBottom(e) {
        return E(e);
    }
}
let c = new d(a.h, {
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: a } = e,
            _ = s[t];
        if (null == n || null == i || null == a) {
            if (null == _) return !1;
            delete s[t];
        } else {
            let e = { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: a };
            if (null != _ && (0, r.A)(_, e)) return !1;
            s[t] = e;
        }
    },
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, scrollTop: n, scrollTo: i } = e;
        null == _[t] && (_[t] = o(t)), void 0 !== n && (_[t].scrollTop = n);
        let r = !1;
        return void 0 !== i && ((r = _[t].scrollTo !== i), (_[t].scrollTo = i)), null != i || r;
    },
    UPDATE_GUILD_LIST_DIMENSIONS: function (e) {
        let { scrollTop: t } = e;
        l.scrollTop = t;
    },
    CALL_CREATE: function (e) {
        let { channelId: t } = e;
        E(t) && delete s[t];
    },
});
