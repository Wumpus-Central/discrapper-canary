"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(52133),
    s = n(73153);
let a = {},
    o = {},
    l = { scrollTop: 0 };
function u(e) {
    return { guildId: e, scrollTop: null, scrollTo: null };
}
function c(e) {
    if (null == a[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: r } = a[e];
    return t === n - r;
}
class d extends r.Ay.Store {
    static displayName = "DimensionStore";
    percentageScrolled(e) {
        if (null != a[e]) {
            let { scrollTop: t, scrollHeight: n } = a[e];
            return t / n;
        }
        return 1;
    }
    getChannelDimensions(e) {
        return a[e];
    }
    getGuildDimensions(e) {
        return o[e] ?? u(e);
    }
    getGuildListDimensions() {
        return l;
    }
    isAtBottom(e) {
        return c(e);
    }
}
let _ = new d(s.h, {
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: s } = e,
            o = a[t];
        if (null == n || null == r || null == s) {
            if (null == o) return !1;
            delete a[t];
        } else {
            let e = { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: s };
            if (null != o && (0, i.A)(o, e)) return !1;
            a[t] = e;
        }
    },
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, scrollTop: n, scrollTo: r } = e;
        null == o[t] && (o[t] = u(t)), void 0 !== n && (o[t].scrollTop = n);
        let i = !1;
        return void 0 !== r && ((i = o[t].scrollTo !== r), (o[t].scrollTo = r)), null != r || i;
    },
    UPDATE_GUILD_LIST_DIMENSIONS: function (e) {
        let { scrollTop: t } = e;
        l.scrollTop = t;
    },
    CALL_CREATE: function (e) {
        let { channelId: t } = e;
        c(t) && delete a[t];
    },
});
