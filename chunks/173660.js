"use strict";
n.d(t, { A: () => u, k: () => _ });
var i = n(17928),
    r = n(164956),
    s = n(495544),
    a = n(969341),
    o = n(576705),
    l = n(977997),
    d = n(652215);
function _(e) {
    let {
            channel: t,
            authenticationStore: n = s.default,
            voiceStateStore: i = l.A,
            mediaEngineStore: _ = a.Ay,
            permissionStore: u = o.A,
            impersonateStore: c = r.A,
        } = e,
        E = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        h = _.isSelfMute() || _.isSelfMutedTemporarily(),
        m = t?.getGuildId(),
        f = c.isViewingRoles(m) && !u.can(d.xBc.SPEAK, t);
    return { selfMute: h, suppress: E?.suppress || f, mute: E?.mute ?? !1 };
}
function u(e) {
    return (0, i.cf)([s.default, l.A, a.Ay, o.A, r.A], () =>
        _({
            channel: e,
            authenticationStore: s.default,
            voiceStateStore: l.A,
            mediaEngineStore: a.Ay,
            permissionStore: o.A,
            impersonateStore: r.A,
        }),
    );
}
