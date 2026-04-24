"use strict";
let r;
n.d(t, { A: () => h });
var i = n(735438),
    a = n.n(i),
    s = n(17928),
    l = n(228366),
    o = n(824953);
let c = {},
    d = {};
function u(e, t) {
    return null == t && (t = "guild"), `${e}:${t}`;
}
function _(e) {
    return null != c[e] || (c[e] = {}), c[e];
}
function p(e) {
    let { guildId: t, webhook: n } = e;
    _(t)[n.id] = n;
}
class f extends s.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != d[u(e, t)];
    }
    getWebhooksForGuild(e) {
        return a().values(_(e));
    }
    getWebhooksForChannel(e, t) {
        return a()(_(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return r;
    }
}
let h = new f(l.h, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: n, webhooks: i, error: s } = e;
        if (null == i)
            return void (null != s
                ? ((r = s), delete d[u(t, n)])
                : null != n && null != c[t] && ((r = null), o.A.fetchForChannel(t, n)));
        r = null;
        let l = [];
        null != n &&
            (l = a()(_(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
        let p = (c[t] = {});
        l.concat(i).forEach((e) => (p[e.id] = e)), delete d[u(t, n)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: n } = e;
        d[u(t, n)] = !0;
    },
    WEBHOOK_CREATE: p,
    WEBHOOK_UPDATE: p,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: n } = e;
        delete _(t)[n];
    },
});
