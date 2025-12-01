n.d(t, { Z: () => I }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(741847),
    s = n(260539);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = new Map(),
    d = null;
function f(e, t) {
    if (null == e) return;
    let n = u.get(e),
        r =
            null != n
                ? c({}, n)
                : {
                      code: e,
                      state: s.Rj.RESOLVING,
                  };
    t(r), (u = new Map(u)).set(e, r);
}
function p(e) {
    let { code: t } = e;
    (u = new Map(u)).set(t, {
        code: t,
        state: s.Rj.RESOLVING,
    });
}
function _(e) {
    m(e.guildTemplate);
}
function m(e) {
    return f(e.code, (t) => {
        let n = (0, o.Z)(e);
        for (let e in n) t[e] = n[e];
    });
}
function h(e) {
    let { guildTemplates: t } = e;
    t.forEach((e) => m(e));
}
function g(e) {
    return f(e.code, (e) => {
        e.state = s.Rj.EXPIRED;
    });
}
function E(e) {
    return f(e.code, (e) => {
        e.state = s.Rj.ACCEPTING;
    });
}
function b(e) {
    return f(e.code, (e) => {
        var t;
        (e.state = s.Rj.ACCEPTED), (e.usageCount = (null != (t = e.usageCount) ? t : 0) + 1);
    });
}
function y(e) {
    return f(e.code, (e) => {
        e.state = s.Rj.RESOLVED;
    });
}
function O(e) {
    d = e.code;
}
function v(e) {
    d = null;
}
class S extends (r = i.ZP.Store) {
    getGuildTemplate(e) {
        if (null != e) return u.get(e);
    }
    getGuildTemplates() {
        return u;
    }
    getForGuild(e) {
        for (let t of u.keys()) {
            let n = u.get(t);
            if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== s.Rj.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return d;
    }
}
l(S, "displayName", "GuildTemplateStore");
let I = new S(a.Z, {
    GUILD_TEMPLATE_RESOLVE: p,
    GUILD_TEMPLATE_CREATE_SUCCESS: _,
    GUILD_TEMPLATE_SYNC_SUCCESS: _,
    GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
    GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: h,
    GUILD_TEMPLATE_RESOLVE_FAILURE: g,
    GUILD_TEMPLATE_DELETE_SUCCESS: g,
    GUILD_TEMPLATE_ACCEPT: E,
    GUILD_TEMPLATE_ACCEPT_SUCCESS: b,
    GUILD_TEMPLATE_ACCEPT_FAILURE: y,
    GUILD_TEMPLATE_MODAL_SHOW: O,
    GUILD_TEMPLATE_MODAL_HIDE: v,
});
