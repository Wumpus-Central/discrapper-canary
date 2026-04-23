"use strict";
n.d(t, { A: () => d, k: () => c });
var r = n(311907),
    i = n(164956),
    s = n(961350),
    a = n(430452),
    o = n(576705),
    l = n(977997),
    u = n(652215);
function c(e) {
    let {
            channel: t,
            authenticationStore: n = s.default,
            voiceStateStore: r = l.A,
            mediaEngineStore: c = a.Ay,
            permissionStore: d = o.A,
            impersonateStore: _ = i.A,
        } = e,
        f = null != t ? r.getVoiceState(t.getGuildId(), n.getId()) : null,
        p = c.isSelfMute() || c.isSelfMutedTemporarily(),
        h = t?.getGuildId(),
        E = _.isViewingRoles(h) && !d.can(u.xBc.SPEAK, t);
    return { selfMute: p, suppress: f?.suppress || E, mute: f?.mute ?? !1 };
}
function d(e) {
    return (0, r.cf)([s.default, l.A, a.Ay, o.A, i.A], () =>
        c({
            channel: e,
            authenticationStore: s.default,
            voiceStateStore: l.A,
            mediaEngineStore: a.Ay,
            permissionStore: o.A,
            impersonateStore: i.A,
        }),
    );
}
