"use strict";
n.d(t, { A: () => u, k: () => c });
var i = n(17928),
    r = n(164956),
    a = n(280450),
    s = n(453028),
    l = n(576705),
    o = n(977997),
    d = n(652215);
function c(e) {
    let {
            channel: t,
            authenticationStore: n = a.default,
            voiceStateStore: i = o.A,
            mediaEngineStore: c = s.Ay,
            permissionStore: u = l.A,
            impersonateStore: _ = r.A,
        } = e,
        E = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        A = c.isSelfMute() || c.isSelfMutedTemporarily(),
        h = t?.getGuildId(),
        I = _.isViewingRoles(h) && !u.can(d.xBc.SPEAK, t);
    return { selfMute: A, suppress: E?.suppress || I, mute: E?.mute ?? !1 };
}
function u(e) {
    return (0, i.cf)([a.default, o.A, s.Ay, l.A, r.A], () =>
        c({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: o.A,
            mediaEngineStore: s.Ay,
            permissionStore: l.A,
            impersonateStore: r.A,
        }),
    );
}
