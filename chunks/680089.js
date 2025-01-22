var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(823379),
    u = r(592125),
    c = r(486472),
    d = r(984933),
    f = r(981631);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = {},
    _ = 0;
function m() {
    _ += 1;
}
function g(e) {
    if (null == h[e]) return !1;
    delete h[e];
}
function E(e) {
    let { id: n } = e;
    if (h[n]) return !1;
    h[n] = !0;
}
function v(e) {
    let { id: n } = e;
    return g(n);
}
function y(e) {
    for (let n of (!e.userGuildSettings.partial && (h = {}), e.userGuildSettings.entries)) if (null != n.channel_overrides) for (let e of n.channel_overrides) e.collapsed ? (h[e.channel_id] = !0) : delete h[e.channel_id];
}
function b(e) {
    let { userGuildSettings: n } = e,
        r = new Set(n.map((e) => e.guild_id).filter(l.lm));
    for (let e in h) {
        let n = u.Z.getChannel(e);
        null != n && null != n.guild_id && r.has(n.guild_id) && delete h[n.id];
    }
    for (let e of n) for (let n of e.channel_overrides) n.collapsed && (h[n.channel_id] = !0);
}
function I(e) {
    let {
        channel: { id: n }
    } = e;
    return g(n);
}
function T(e) {
    let { guildId: n } = e;
    d.ZP.getChannels(n)[f.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: n } = e;
        'null' !== n.id && (h[n.id] = !0);
    });
}
function S(e) {
    let { guildId: n } = e;
    d.ZP.getChannels(n)[f.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: n } = e;
        delete h[n.id];
    });
}
class A extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z, c.Z), this.removeChangeListener(m), this.addChangeListener(m), (h = null != e ? e : {});
    }
    getState() {
        return h;
    }
    isCollapsed(e) {
        return null != e && 'null' !== e && !!h[e] && h[e];
    }
    getCollapsedCategories() {
        return h;
    }
    get version() {
        return _;
    }
}
p(A, 'displayName', 'CategoryCollapseStore'),
    p(A, 'persistKey', 'collapsedCategories'),
    (n.Z = new A(s.Z, {
        CONNECTION_OPEN: y,
        USER_GUILD_SETTINGS_FULL_UPDATE: b,
        CATEGORY_COLLAPSE: E,
        CATEGORY_EXPAND: v,
        CATEGORY_COLLAPSE_ALL: T,
        CATEGORY_EXPAND_ALL: S,
        CHANNEL_DELETE: I
    }));
