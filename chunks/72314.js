"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(52133),
    s = n(228366);
let a = {},
    o = {},
    l = { scrollTop: 0 };
function u(e) {
    return { guildId: e, scrollTop: null, scrollTo: null };
}
function c(e) {
    if (null == a[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: i } = a[e];
    return t === n - i;
}
class d extends i.Ay.Store {
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
        let { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: s } = e,
            o = a[t];
        if (null == n || null == i || null == s) {
            if (null == o) return !1;
            delete a[t];
        } else {
            let e = { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: s };
            if (null != o && (0, r.A)(o, e)) return !1;
            a[t] = e;
        }
    },
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, scrollTop: n, scrollTo: i } = e;
        null == o[t] && (o[t] = u(t)), void 0 !== n && (o[t].scrollTop = n);
        let r = !1;
        return void 0 !== i && ((r = o[t].scrollTo !== i), (o[t].scrollTo = i)), null != i || r;
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
