let i;
n.d(t, { A: () => S });
var r = n(735438),
    l = n.n(r),
    T = n(311907),
    I = n(73153),
    E = n(824953);
let o = {},
    a = {};
function s(e, t) {
    return null == t && (t = "guild"), `${e}:${t}`;
}
function N(e) {
    return null != o[e] || (o[e] = {}), o[e];
}
function u(e) {
    let { guildId: t, webhook: n } = e;
    N(t)[n.id] = n;
}
class c extends T.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != a[s(e, t)];
    }
    getWebhooksForGuild(e) {
        return l().values(N(e));
    }
    getWebhooksForChannel(e, t) {
        return l()(N(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return i;
    }
}
let S = new c(I.h, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: n, webhooks: r, error: T } = e;
        if (null == r)
            return void (null != T
                ? ((i = T), delete a[s(t, n)])
                : null != n && null != o[t] && ((i = null), E.A.fetchForChannel(t, n)));
        i = null;
        let I = [];
        null != n &&
            (I = l()(N(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
        let u = (o[t] = {});
        I.concat(r).forEach((e) => (u[e.id] = e)), delete a[s(t, n)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: n } = e;
        a[s(t, n)] = !0;
    },
    WEBHOOK_CREATE: u,
    WEBHOOK_UPDATE: u,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: n } = e;
        delete N(t)[n];
    },
});
