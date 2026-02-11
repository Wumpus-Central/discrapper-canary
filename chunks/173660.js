"use strict";
n.d(t, { A: () => d, k: () => c });
var r = n(311907),
    i = n(164956),
    a = n(961350),
    s = n(430452),
    o = n(576705),
    l = n(977997),
    u = n(652215);
function c(e) {
    let {
            channel: t,
            authenticationStore: n = a.default,
            voiceStateStore: r = l.A,
            mediaEngineStore: c = s.Ay,
            permissionStore: d = o.A,
            impersonateStore: _ = i.A,
        } = e,
        f = null != t ? r.getVoiceState(t.getGuildId(), n.getId()) : null,
        h = c.isSelfMute() || c.isSelfMutedTemporarily(),
        p = t?.getGuildId(),
        g = _.isViewingRoles(p) && !d.can(u.xBc.SPEAK, t);
    return { selfMute: h, suppress: f?.suppress || g, mute: f?.mute ?? !1 };
}
function d(e) {
    return (0, r.cf)([a.default, l.A, s.Ay, o.A, i.A], () =>
        c({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: l.A,
            mediaEngineStore: s.Ay,
            permissionStore: o.A,
            impersonateStore: i.A,
        }),
    );
}
