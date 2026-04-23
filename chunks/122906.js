"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(177773),
    a = n(401755);
let o = new Map(),
    l = null;
function d(e, t) {
    if (null == e) return;
    let n = o.get(e),
        i = null != n ? { ...n } : { code: e, state: a.QB.RESOLVING };
    t(i), (o = new Map(o)).set(e, i);
}
function _(e) {
    u(e.guildTemplate);
}
function u(e) {
    return d(e.code, (t) => {
        let n = (0, s.A)(e);
        for (let e in n) t[e] = n[e];
    });
}
function c(e) {
    return d(e.code, (e) => {
        e.state = a.QB.EXPIRED;
    });
}
class E extends i.Ay.Store {
    static displayName = "GuildTemplateStore";
    getGuildTemplate(e) {
        if (null != e) return o.get(e);
    }
    getGuildTemplates() {
        return o;
    }
    getForGuild(e) {
        for (let t of o.keys()) {
            let n = o.get(t);
            if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== a.QB.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return l;
    }
}
let h = new E(r.h, {
    GUILD_TEMPLATE_RESOLVE: function (e) {
        let { code: t } = e;
        (o = new Map(o)).set(t, { code: t, state: a.QB.RESOLVING });
    },
    GUILD_TEMPLATE_CREATE_SUCCESS: _,
    GUILD_TEMPLATE_SYNC_SUCCESS: _,
    GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
    GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function (e) {
        let { guildTemplates: t } = e;
        t.forEach((e) => u(e));
    },
    GUILD_TEMPLATE_RESOLVE_FAILURE: c,
    GUILD_TEMPLATE_DELETE_SUCCESS: c,
    GUILD_TEMPLATE_ACCEPT: function (e) {
        return d(e.code, (e) => {
            e.state = a.QB.ACCEPTING;
        });
    },
    GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
        return d(e.code, (e) => {
            (e.state = a.QB.ACCEPTED), (e.usageCount = (e.usageCount ?? 0) + 1);
        });
    },
    GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
        return d(e.code, (e) => {
            e.state = a.QB.RESOLVED;
        });
    },
    GUILD_TEMPLATE_MODAL_SHOW: function (e) {
        l = e.code;
    },
    GUILD_TEMPLATE_MODAL_HIDE: function (e) {
        l = null;
    },
});
