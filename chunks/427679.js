n.d(t, { Z: () => y });
var i,
    r = n(442837),
    a = n(570140),
    s = n(765305);
function o(e, t, n) {
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
let l = {},
    u = {};
function c(e, t) {
    var n;
    let i = { ...(null !== (n = l[e]) && void 0 !== n ? n : {}) };
    null == t ||
        t.forEach((e) => {
            (u[e.channel_id] = e), (i[e.channel_id] = e);
        }),
        (l[e] = i);
}
function d(e) {
    let { guilds: t } = e;
    (l = {}), (u = {}), t.forEach((e) => c(e.id, e.stage_instances));
}
function f(e) {
    let { guild: t } = e;
    c(t.id, t.stage_instances);
}
function _(e) {
    var t;
    let { guild: n } = e,
        i = null !== (t = l[n.id]) && void 0 !== t ? t : {};
    delete l[n.id],
        Object.keys(i).forEach((e) => {
            delete u[e];
        });
}
function p(e) {
    let { instance: t } = e;
    c(t.guild_id, [t]);
}
function h(e, t) {
    var n;
    if ((delete u[t], null == e)) return;
    let i = { ...(null !== (n = l[e]) && void 0 !== n ? n : {}) };
    delete i[t], (l[e] = i);
}
function m(e) {
    let { instance: t } = e;
    h(t.guild_id, t.channel_id);
}
function g(e) {
    let { channel: t } = e;
    h(t.guild_id, t.id);
}
function E() {
    (u = {}), (l = {});
}
class v extends (i = r.ZP.Store) {
    getStageInstanceByChannel(e) {
        if (null != e) return u[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        var t;
        return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === s.j8.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        var t;
        return null == e ? {} : null !== (t = l[e]) && void 0 !== t ? t : {};
    }
    getAllStageInstances() {
        return Object.values(u);
    }
}
o(v, 'displayName', 'StageInstanceStore');
let y = new v(a.Z, {
    CONNECTION_OPEN: d,
    GUILD_CREATE: f,
    GUILD_DELETE: _,
    STAGE_INSTANCE_CREATE: p,
    STAGE_INSTANCE_UPDATE: p,
    STAGE_INSTANCE_DELETE: m,
    CHANNEL_DELETE: g,
    LOGOUT: E
});
