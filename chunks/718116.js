"use strict";
let r;
n.d(t, { A: () => E });
var i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
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
    let { guildId: t, channelId: n, webhooks: i, error: s } = e;
    if (null == i)
        return void (null != s
            ? ((r = s), delete c[d(t, n)])
            : null != n && null != u[t] && ((r = null), l.A.fetchForChannel(t, n)));
    r = null;
    let o = [];
    null != n &&
        (o = a()(_(t))
            .values()
            .filter((e) => e.channel_id !== n)
            .value());
    let f = (u[t] = {});
    o.concat(i).forEach((e) => (f[e.id] = e)), delete c[d(t, n)];
}
function p(e) {
    let { guildId: t, channelId: n } = e;
    c[d(t, n)] = !0;
}
function h(e) {
    let { guildId: t, webhook: n } = e;
    _(t)[n.id] = n;
}
function m(e) {
    let { guildId: t, webhookId: n } = e;
    delete _(t)[n];
}
class g extends s.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != c[d(e, t)];
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
let E = new g(o.h, {
    WEBHOOKS_UPDATE: f,
    WEBHOOKS_FETCHING: p,
    WEBHOOK_CREATE: h,
    WEBHOOK_UPDATE: h,
    WEBHOOK_DELETE: m,
});
