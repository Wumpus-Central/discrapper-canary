n.d(t, { Z: () => T }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(741847),
    o = n(58346);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new Map(),
    c = null;
function d(e, t) {
    if (null == e) return;
    let n = u.get(e),
        i =
            null != n
                ? { ...n }
                : {
                      code: e,
                      state: o.Rj.RESOLVING
                  };
    t(i), (u = new Map(u)).set(e, i);
}
function f(e) {
    let { code: t } = e;
    (u = new Map(u)).set(t, {
        code: t,
        state: o.Rj.RESOLVING
    });
}
function _(e) {
    p(e.guildTemplate);
}
function p(e) {
    return d(e.code, (t) => {
        let n = (0, s.Z)(e);
        for (let e in n) t[e] = n[e];
    });
}
function h(e) {
    let { guildTemplates: t } = e;
    t.forEach((e) => p(e));
}
function m(e) {
    return d(e.code, (e) => {
        e.state = o.Rj.EXPIRED;
    });
}
function g(e) {
    return d(e.code, (e) => {
        e.state = o.Rj.ACCEPTING;
    });
}
function E(e) {
    return d(e.code, (e) => {
        var t;
        (e.state = o.Rj.ACCEPTED), (e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
    });
}
function v(e) {
    return d(e.code, (e) => {
        e.state = o.Rj.RESOLVED;
    });
}
function y(e) {
    c = e.code;
}
function I(e) {
    c = null;
}
class b extends (i = r.ZP.Store) {
    getGuildTemplate(e) {
        if (null != e) return u.get(e);
    }
    getGuildTemplates() {
        return u;
    }
    getForGuild(e) {
        for (let t of u.keys()) {
            let n = u.get(t);
            if (null != n && 'sourceGuildId' in n && n.sourceGuildId === e && n.state !== o.Rj.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return c;
    }
}
l(b, 'displayName', 'GuildTemplateStore');
let T = new b(a.Z, {
    GUILD_TEMPLATE_RESOLVE: f,
    GUILD_TEMPLATE_CREATE_SUCCESS: _,
    GUILD_TEMPLATE_SYNC_SUCCESS: _,
    GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
    GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: h,
    GUILD_TEMPLATE_RESOLVE_FAILURE: m,
    GUILD_TEMPLATE_DELETE_SUCCESS: m,
    GUILD_TEMPLATE_ACCEPT: g,
    GUILD_TEMPLATE_ACCEPT_SUCCESS: E,
    GUILD_TEMPLATE_ACCEPT_FAILURE: v,
    GUILD_TEMPLATE_MODAL_SHOW: y,
    GUILD_TEMPLATE_MODAL_HIDE: I
});
