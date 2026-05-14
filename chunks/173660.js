"use strict";
n.d(t, { A: () => d, k: () => c });
var i = n(17928),
    r = n(164956),
    s = n(495544),
    a = n(235058),
    o = n(576705),
    l = n(977997),
    u = n(652215);
function c(e) {
    let {
            channel: t,
            authenticationStore: n = s.default,
            voiceStateStore: i = l.A,
            mediaEngineStore: c = a.Ay,
            permissionStore: d = o.A,
            impersonateStore: _ = r.A,
        } = e,
        f = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        h = c.isSelfMute() || c.isSelfMutedTemporarily(),
        p = t?.getGuildId(),
        E = _.isViewingRoles(p) && !d.can(u.xBc.SPEAK, t);
    return { selfMute: h, suppress: f?.suppress || E, mute: f?.mute ?? !1 };
}
function d(e) {
    return (0, i.cf)([s.default, l.A, a.Ay, o.A, r.A], () =>
        c({
            channel: e,
            authenticationStore: s.default,
            voiceStateStore: l.A,
            mediaEngineStore: a.Ay,
            permissionStore: o.A,
            impersonateStore: r.A,
        }),
    );
}
