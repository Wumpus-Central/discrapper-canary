"use strict";
let i;
n.d(t, { A: () => p });
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(824953);
let u = {},
    c = {};
function d(e, t) {
    return null == t && (t = "guild"), `${e}:${t}`;
}
function _(e) {
    return null != u[e] || (u[e] = {}), u[e];
}
function f(e) {
    let { guildId: t, webhook: n } = e;
    _(t)[n.id] = n;
}
class h extends a.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != c[d(e, t)];
    }
    getWebhooksForGuild(e) {
        return s().values(_(e));
    }
    getWebhooksForChannel(e, t) {
        return s()(_(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return i;
    }
}
let p = new h(o.h, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: n, webhooks: r, error: a } = e;
        if (null == r)
            return void (null != a
                ? ((i = a), delete c[d(t, n)])
                : null != n && null != u[t] && ((i = null), l.A.fetchForChannel(t, n)));
        i = null;
        let o = [];
        null != n &&
            (o = s()(_(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
        let f = (u[t] = {});
        o.concat(r).forEach((e) => (f[e.id] = e)), delete c[d(t, n)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: n } = e;
        c[d(t, n)] = !0;
    },
    WEBHOOK_CREATE: f,
    WEBHOOK_UPDATE: f,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: n } = e;
        delete _(t)[n];
    },
});
