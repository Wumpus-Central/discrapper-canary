"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(988794);
let s = {},
    l = {};
function o(e, t) {
    let n = { ...(s[e] ?? {}) };
    t?.forEach((e) => {
        (l[e.channel_id] = e), (n[e.channel_id] = e);
    }),
        (s[e] = n);
}
function d(e) {
    let { instance: t } = e;
    o(t.guild_id, [t]);
}
function c(e, t) {
    if ((delete l[t], null == e)) return;
    let n = { ...(s[e] ?? {}) };
    delete n[t], (s[e] = n);
}
class u extends i.Ay.Store {
    static displayName = "StageInstanceStore";
    getStageInstanceByChannel(e) {
        if (null != e) return l[e];
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
        return Object.values(l);
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        (s = {}), (l = {}), t.forEach((e) => o(e.id, e.stage_instances));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        o(t.id, t.stage_instances);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = s[t.id] ?? {};
        delete s[t.id],
            Object.keys(n).forEach((e) => {
                delete l[e];
            });
    },
    STAGE_INSTANCE_CREATE: d,
    STAGE_INSTANCE_UPDATE: d,
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e;
        c(t.guild_id, t.channel_id);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        c(t.guild_id, t.id);
    },
    LOGOUT: function () {
        (l = {}), (s = {});
    },
});
