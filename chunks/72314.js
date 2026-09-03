n.d(t, { A: () => _ });
var i = n(17928),
    r = n(52133),
    a = n(228366);
let s = {},
    l = {},
    o = { scrollTop: 0 };
function d(e) {
    return { guildId: e, scrollTop: null, scrollTo: null };
}
function c(e) {
    if (null == s[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: i } = s[e];
    return t === n - i;
}
class u extends i.Ay.Store {
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
        return l[e] ?? d(e);
    }
    getGuildListDimensions() {
        return o;
    }
    isAtBottom(e) {
        return c(e);
    }
}
let _ = new u(a.h, {
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: a } = e,
            l = s[t];
        if (null == n || null == i || null == a) {
            if (null == l) return !1;
            delete s[t];
        } else {
            let e = { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: a };
            if (null != l && (0, r.A)(l, e)) return !1;
            s[t] = e;
        }
    },
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, scrollTop: n, scrollTo: i } = e;
        null == l[t] && (l[t] = d(t)), void 0 !== n && (l[t].scrollTop = n);
        let r = !1;
        return void 0 !== i && ((r = l[t].scrollTo !== i), (l[t].scrollTo = i)), null != i || r;
    },
    UPDATE_GUILD_LIST_DIMENSIONS: function (e) {
        let { scrollTop: t } = e;
        o.scrollTop = t;
    },
    CALL_CREATE: function (e) {
        let { channelId: t } = e;
        c(t) && delete s[t];
    },
});
