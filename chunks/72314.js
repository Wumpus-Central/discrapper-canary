"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(52133),
    a = n(73153);
let s = {},
    o = {},
    l = { scrollTop: 0 };
function u(e) {
    return { guildId: e, scrollTop: null, scrollTo: null };
}
function c(e) {
    let { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: a } = e,
        o = s[t];
    if (null == n || null == r || null == a) {
        if (null == o) return !1;
        delete s[t];
    } else {
        let e = { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: a };
        if (null != o && (0, i.A)(o, e)) return !1;
        s[t] = e;
    }
}
function d(e) {
    let { scrollTop: t } = e;
    l.scrollTop = t;
}
function _(e) {
    let { channelId: t } = e;
    f(t) && delete s[t];
}
function f(e) {
    if (null == s[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: r } = s[e];
    return t === n - r;
}
function p(e) {
    let { guildId: t, scrollTop: n, scrollTo: r } = e;
    null == o[t] && (o[t] = u(t)), void 0 !== n && (o[t].scrollTop = n);
    let i = !1;
    return void 0 !== r && ((i = o[t].scrollTo !== r), (o[t].scrollTo = r)), null != r || i;
}
class h extends r.Ay.Store {
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
        return o[e] ?? u(e);
    }
    getGuildListDimensions() {
        return l;
    }
    isAtBottom(e) {
        return f(e);
    }
}
let m = new h(a.h, {
    UPDATE_CHANNEL_DIMENSIONS: c,
    UPDATE_CHANNEL_LIST_DIMENSIONS: p,
    UPDATE_GUILD_LIST_DIMENSIONS: d,
    CALL_CREATE: _,
});
