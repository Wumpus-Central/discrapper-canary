n.d(t, { Z: () => T }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(823379),
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
let _ = {},
    f = 0;
function p() {
    f += 1;
}
function h(e) {
    if (null == _[e]) return !1;
    delete _[e];
}
function m(e) {
    let { id: t } = e;
    if (_[t]) return !1;
    _[t] = !0;
}
function g(e) {
    let { id: t } = e;
    return h(t);
}
function E(e) {
    for (let t of (e.userGuildSettings.partial || (_ = {}), e.userGuildSettings.entries)) if (null != t.channel_overrides) for (let e of t.channel_overrides) e.collapsed ? (_[e.channel_id] = !0) : delete _[e.channel_id];
}
function b(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id).filter(o.lm));
    for (let e in _) {
        let t = s.Z.getChannel(e);
        null != t && null != t.guild_id && n.has(t.guild_id) && delete _[t.id];
    }
    for (let e of t) for (let t of e.channel_overrides) t.collapsed && (_[t.channel_id] = !0);
}
function y(e) {
    let {
        channel: { id: t }
    } = e;
    return h(t);
}
function O(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        'null' !== t.id && (_[t.id] = !0);
    });
}
function v(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        delete _[t.id];
    });
}
class I extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z, l.Z), this.removeChangeListener(p), this.addChangeListener(p), (_ = null != e ? e : {});
    }
    getState() {
        return _;
    }
    isCollapsed(e) {
        return null != e && 'null' !== e && !!_[e] && _[e];
    }
    getCollapsedCategories() {
        return _;
    }
    get version() {
        return f;
    }
}
d(I, 'displayName', 'CategoryCollapseStore'), d(I, 'persistKey', 'collapsedCategories');
let T = new I(a.Z, {
    CONNECTION_OPEN: E,
    USER_GUILD_SETTINGS_FULL_UPDATE: b,
    CATEGORY_COLLAPSE: m,
    CATEGORY_EXPAND: g,
    CATEGORY_COLLAPSE_ALL: O,
    CATEGORY_EXPAND_ALL: v,
    CHANNEL_DELETE: y
});
