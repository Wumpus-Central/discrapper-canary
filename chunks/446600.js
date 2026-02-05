"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(988794);
let s = {},
    o = {};
function l(e, t) {
    let n = { ...(s[e] ?? {}) };
    t?.forEach((e) => {
        (o[e.channel_id] = e), (n[e.channel_id] = e);
    }),
        (s[e] = n);
}
function u(e) {
    let { guilds: t } = e;
    (s = {}), (o = {}), t.forEach((e) => l(e.id, e.stage_instances));
}
function c(e) {
    let { guild: t } = e;
    l(t.id, t.stage_instances);
}
function d(e) {
    let { guild: t } = e,
        n = s[t.id] ?? {};
    delete s[t.id],
        Object.keys(n).forEach((e) => {
            delete o[e];
        });
}
function _(e) {
    let { instance: t } = e;
    l(t.guild_id, [t]);
}
function f(e, t) {
    if ((delete o[t], null == e)) return;
    let n = { ...(s[e] ?? {}) };
    delete n[t], (s[e] = n);
}
function p(e) {
    let { instance: t } = e;
    f(t.guild_id, t.channel_id);
}
function h(e) {
    let { channel: t } = e;
    f(t.guild_id, t.id);
}
function m() {
    (o = {}), (s = {});
}
class g extends r.Ay.Store {
    static displayName = "StageInstanceStore";
    getStageInstanceByChannel(e) {
        if (null != e) return o[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        return this.getStageInstanceByChannel(e)?.privacy_level === a.dD.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        return null == e ? {} : (s[e] ?? {});
    }
    getAllStageInstances() {
        return Object.values(o);
    }
}
let E = new g(i.h, {
    CONNECTION_OPEN: u,
    GUILD_CREATE: c,
    GUILD_DELETE: d,
    STAGE_INSTANCE_CREATE: _,
    STAGE_INSTANCE_UPDATE: _,
    STAGE_INSTANCE_DELETE: p,
    CHANNEL_DELETE: h,
    LOGOUT: m,
});
