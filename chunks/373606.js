"use strict";
n.d(t, { B9: () => o, kg: () => u, Bp: () => _, $A: () => d });
var i = n(945810),
    r = n(652215);
let a = (0, i.mj)({
        name: "2026-07-vibegrations-guild",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = "vibegrations_application_id=",
    l = /^\d{17,20}$/;
function o(e) {
    if (null == e || !e.startsWith(s)) return null;
    let t = e.slice(s.length);
    return l.test(t) ? t : null;
}
function d(e) {
    return `${s}${e}`;
}
function c(e) {
    return null != e && e.type === r.rbe.GUILD_TEXT && null != o(e.topic);
}
function u(e, t) {
    return (
        c(e) &&
        (function (e) {
            let { guildId: t, location: n } = e;
            return null != t && a.getConfig({ guildId: t, location: n }).enabled;
        })({ guildId: e?.guild_id, location: t })
    );
}
function _(e, t) {
    let n = (function (e) {
        let { guildId: t, location: n } = e;
        return a.useConfig({ guildId: t ?? r.dJq, location: n }).enabled;
    })({ guildId: e?.guild_id, location: t });
    return c(e) && n;
}
