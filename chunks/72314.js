n.d(t, { A: () => E });
var i = n(17928),
    a = n(52133),
    r = n(228366);
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
class _ extends i.Ay.Store {
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
let E = new _(r.h, {
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: r } = e,
            l = s[t];
        if (null == n || null == i || null == r) {
            if (null == l) return !1;
            delete s[t];
        } else {
            let e = { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: r };
            if (null != l && (0, a.A)(l, e)) return !1;
            s[t] = e;
        }
    },
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, scrollTop: n, scrollTo: i } = e;
        null == l[t] && (l[t] = d(t)), void 0 !== n && (l[t].scrollTop = n);
        let a = !1;
        return void 0 !== i && ((a = l[t].scrollTo !== i), (l[t].scrollTo = i)), null != i || a;
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
