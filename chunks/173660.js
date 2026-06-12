"use strict";
n.d(t, { A: () => d, k: () => c });
var i = n(17928),
    r = n(164956),
    s = n(495544),
    a = n(890063),
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
        h = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        f = c.isSelfMute() || c.isSelfMutedTemporarily(),
        p = t?.getGuildId(),
        E = _.isViewingRoles(p) && !d.can(u.xBc.SPEAK, t);
    return { selfMute: f, suppress: h?.suppress || E, mute: h?.mute ?? !1 };
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
