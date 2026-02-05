"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    a = n(177773),
    s = n(401755);
let o = new Map(),
    l = null;
function u(e, t) {
    if (null == e) return;
    let n = o.get(e),
        r = null != n ? { ...n } : { code: e, state: s.QB.RESOLVING };
    t(r), (o = new Map(o)).set(e, r);
}
function c(e) {
    let { code: t } = e;
    (o = new Map(o)).set(t, { code: t, state: s.QB.RESOLVING });
}
function d(e) {
    _(e.guildTemplate);
}
function _(e) {
    return u(e.code, (t) => {
        let n = (0, a.A)(e);
        for (let e in n) t[e] = n[e];
    });
}
function f(e) {
    let { guildTemplates: t } = e;
    t.forEach((e) => _(e));
}
function p(e) {
    return u(e.code, (e) => {
        e.state = s.QB.EXPIRED;
    });
}
function h(e) {
    return u(e.code, (e) => {
        e.state = s.QB.ACCEPTING;
    });
}
function m(e) {
    return u(e.code, (e) => {
        (e.state = s.QB.ACCEPTED), (e.usageCount = (e.usageCount ?? 0) + 1);
    });
}
function g(e) {
    return u(e.code, (e) => {
        e.state = s.QB.RESOLVED;
    });
}
function E(e) {
    l = e.code;
}
function A(e) {
    l = null;
}
class I extends r.Ay.Store {
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
            if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== s.QB.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return l;
    }
}
let T = new I(i.h, {
    GUILD_TEMPLATE_RESOLVE: c,
    GUILD_TEMPLATE_CREATE_SUCCESS: d,
    GUILD_TEMPLATE_SYNC_SUCCESS: d,
    GUILD_TEMPLATE_RESOLVE_SUCCESS: d,
    GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: f,
    GUILD_TEMPLATE_RESOLVE_FAILURE: p,
    GUILD_TEMPLATE_DELETE_SUCCESS: p,
    GUILD_TEMPLATE_ACCEPT: h,
    GUILD_TEMPLATE_ACCEPT_SUCCESS: m,
    GUILD_TEMPLATE_ACCEPT_FAILURE: g,
    GUILD_TEMPLATE_MODAL_SHOW: E,
    GUILD_TEMPLATE_MODAL_HIDE: A,
});
