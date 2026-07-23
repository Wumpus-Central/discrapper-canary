let l;
r.d(e, { A: () => p });
var n = r(435558),
    o = r.n(n),
    h = r(17928),
    i = r(228366),
    s = r(824953);
let E = {},
    c = {};
function u(t, e) {
    return null == e && (e = "guild"), `${t}:${e}`;
}
function a(t) {
    return null != E[t] || (E[t] = {}), E[t];
}
function d(t) {
    let { guildId: e, webhook: r } = t;
    a(e)[r.id] = r;
}
class O extends h.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(t, e) {
        return null != c[u(t, e)];
    }
    getWebhooksForGuild(t) {
        return o().values(a(t));
    }
    getWebhooksForChannel(t, e) {
        return o()(a(t))
            .values()
            .filter((t) => t.channel_id === e)
            .value();
    }
    get error() {
        return l;
    }
}
let p = new O(i.h, {
    WEBHOOKS_UPDATE: function (t) {
        let { guildId: e, channelId: r, webhooks: n, error: h } = t;
        if (null == n)
            return void (null != h
                ? ((l = h), delete c[u(e, r)])
                : null != r && null != E[e] && ((l = null), s.A.fetchForChannel(e, r)));
        l = null;
        let i = [];
        null != r &&
            (i = o()(a(e))
                .values()
                .filter((t) => t.channel_id !== r)
                .value());
        let d = (E[e] = {});
        i.concat(n).forEach((t) => (d[t.id] = t)), delete c[u(e, r)];
    },
    WEBHOOKS_FETCHING: function (t) {
        let { guildId: e, channelId: r } = t;
        c[u(e, r)] = !0;
    },
    WEBHOOK_CREATE: d,
    WEBHOOK_UPDATE: d,
    WEBHOOK_DELETE: function (t) {
        let { guildId: e, webhookId: r } = t;
        delete a(e)[r];
    },
});
