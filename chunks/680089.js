n.d(t, { Z: () => I }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(823379),
    s = n(592125),
    l = n(486472),
    c = n(984933),
    u = n(981631);
function d(e, t, n) {
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
let f = {},
    p = 0;
function _() {
    p += 1;
}
function h(e) {
    if (null == f[e]) return !1;
    delete f[e];
}
function m(e) {
    let { id: t } = e;
    if (f[t]) return !1;
    f[t] = !0;
}
function g(e) {
    let { id: t } = e;
    return h(t);
}
function E(e) {
    for (let t of (e.userGuildSettings.partial || (f = {}), e.userGuildSettings.entries)) if (null != t.channel_overrides) for (let e of t.channel_overrides) e.collapsed ? (f[e.channel_id] = !0) : delete f[e.channel_id];
}
function v(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id).filter(a.lm));
    for (let e in f) {
        let t = s.Z.getChannel(e);
        null != t && null != t.guild_id && n.has(t.guild_id) && delete f[t.id];
    }
    for (let e of t) for (let t of e.channel_overrides) t.collapsed && (f[t.channel_id] = !0);
}
function b(e) {
    let {
        channel: { id: t }
    } = e;
    return h(t);
}
function y(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        'null' !== t.id && (f[t.id] = !0);
    });
}
function O(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        delete f[t.id];
    });
}
class S extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z, l.Z), this.removeChangeListener(_), this.addChangeListener(_), (f = null != e ? e : {});
    }
    getState() {
        return f;
    }
    isCollapsed(e) {
        return null != e && 'null' !== e && !!f[e] && f[e];
    }
    getCollapsedCategories() {
        return f;
    }
    get version() {
        return p;
    }
}
d(S, 'displayName', 'CategoryCollapseStore'), d(S, 'persistKey', 'collapsedCategories');
let I = new S(o.Z, {
    CONNECTION_OPEN: E,
    USER_GUILD_SETTINGS_FULL_UPDATE: v,
    CATEGORY_COLLAPSE: m,
    CATEGORY_EXPAND: g,
    CATEGORY_COLLAPSE_ALL: y,
    CATEGORY_EXPAND_ALL: O,
    CHANNEL_DELETE: b
});
