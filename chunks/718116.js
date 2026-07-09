"use strict";
let i;
n.d(t, { A: () => h });
var r = n(735438),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(824953);
let d = {},
    c = {};
function u(e, t) {
    return null == t && (t = "guild"), `${e}:${t}`;
}
function _(e) {
    return null != d[e] || (d[e] = {}), d[e];
}
function E(e) {
    let { guildId: t, webhook: n } = e;
    _(t)[n.id] = n;
}
class A extends s.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != c[u(e, t)];
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
        return i;
    }
}
let h = new A(l.h, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: n, webhooks: r, error: s } = e;
        if (null == r)
            return void (null != s
                ? ((i = s), delete c[u(t, n)])
                : null != n && null != d[t] && ((i = null), o.A.fetchForChannel(t, n)));
        i = null;
        let l = [];
        null != n &&
            (l = a()(_(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
        let E = (d[t] = {});
        l.concat(r).forEach((e) => (E[e.id] = e)), delete c[u(t, n)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: n } = e;
        c[u(t, n)] = !0;
    },
    WEBHOOK_CREATE: E,
    WEBHOOK_UPDATE: E,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: n } = e;
        delete _(t)[n];
    },
});
