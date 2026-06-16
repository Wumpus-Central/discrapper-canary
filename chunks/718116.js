let l;
r.d(t, { A: () => p });
var o = r(735438),
    h = r.n(o),
    n = r(17928),
    E = r(228366),
    u = r(824953);
let s = {},
    c = {};
function i(e, t) {
    return null == t && (t = "guild"), `${e}:${t}`;
}
function a(e) {
    return null != s[e] || (s[e] = {}), s[e];
}
function d(e) {
    let { guildId: t, webhook: r } = e;
    a(t)[r.id] = r;
}
class O extends n.Ay.Store {
    static displayName = "WebhooksStore";
    isFetching(e, t) {
        return null != c[i(e, t)];
    }
    getWebhooksForGuild(e) {
        return h().values(a(e));
    }
    getWebhooksForChannel(e, t) {
        return h()(a(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return l;
    }
}
let p = new O(E.h, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: r, webhooks: o, error: n } = e;
        if (null == o)
            return void (null != n
                ? ((l = n), delete c[i(t, r)])
                : null != r && null != s[t] && ((l = null), u.A.fetchForChannel(t, r)));
        l = null;
        let E = [];
        null != r &&
            (E = h()(a(t))
                .values()
                .filter((e) => e.channel_id !== r)
                .value());
        let d = (s[t] = {});
        E.concat(o).forEach((e) => (d[e.id] = e)), delete c[i(t, r)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: r } = e;
        c[i(t, r)] = !0;
    },
    WEBHOOK_CREATE: d,
    WEBHOOK_UPDATE: d,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: r } = e;
        delete a(t)[r];
    },
});
