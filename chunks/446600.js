"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(988794);
let a = {},
    o = {};
function l(e, t) {
    let n = { ...(a[e] ?? {}) };
    t?.forEach((e) => {
        (o[e.channel_id] = e), (n[e.channel_id] = e);
    }),
        (a[e] = n);
}
function u(e) {
    let { instance: t } = e;
    l(t.guild_id, [t]);
}
function c(e, t) {
    if ((delete o[t], null == e)) return;
    let n = { ...(a[e] ?? {}) };
    delete n[t], (a[e] = n);
}
class d extends r.Ay.Store {
    static displayName = "StageInstanceStore";
    getStageInstanceByChannel(e) {
        if (null != e) return o[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        return this.getStageInstanceByChannel(e)?.privacy_level === s.dD.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        return null == e ? {} : (a[e] ?? {});
    }
    getAllStageInstances() {
        return Object.values(o);
    }
}
let _ = new d(i.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        (a = {}), (o = {}), t.forEach((e) => l(e.id, e.stage_instances));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        l(t.id, t.stage_instances);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = a[t.id] ?? {};
        delete a[t.id],
            Object.keys(n).forEach((e) => {
                delete o[e];
            });
    },
    STAGE_INSTANCE_CREATE: u,
    STAGE_INSTANCE_UPDATE: u,
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e;
        c(t.guild_id, t.channel_id);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        c(t.guild_id, t.id);
    },
    LOGOUT: function () {
        (o = {}), (a = {});
    },
});
