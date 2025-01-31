n.d(t, { e: () => l });
var i = n(388032);
function l(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: l, isGuest: a, isStage: r, isStream: s } = e;
    if (t) {
        if (l) return s ? i.intl.string(i.t.N85DCg) : r ? i.intl.string(i.t.TJQcNj) : a ? i.intl.string(i.t.mJyBio) : i.intl.string(i.t.lxTgPz);
        return s ? i.intl.string(i.t.Mnvc3N) : r ? i.intl.string(i.t.FdPNr6) : a ? i.intl.string(i.t.f4gmra) : i.intl.string(i.t.H39rER);
    }
    return n ? (l ? i.intl.string(i.t.UxmnHx) : i.intl.string(i.t.sigPER)) : l ? i.intl.string(i.t['oU/lsr']) : i.intl.string(i.t.BoQUFR);
}
