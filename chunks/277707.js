n.d(t, { e: () => i });
var r = n(388032);
function i(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: a, isStage: o, isStream: l } = e;
    if (t) {
        if (i) return l ? r.NW.string(r.t.N85DCg) : o ? r.NW.string(r.t.TJQcNj) : a ? r.NW.string(r.t.mJyBio) : r.NW.string(r.t.lxTgPz);
        return l ? r.NW.string(r.t.Mnvc3N) : o ? r.NW.string(r.t.FdPNr6) : a ? r.NW.string(r.t.f4gmra) : r.NW.string(r.t.H39rER);
    }
    return n ? (i ? r.NW.string(r.t.UxmnHx) : r.NW.string(r.t.sigPER)) : i ? r.NW.string(r.t['oU/lsr']) : r.NW.string(r.t.BoQUFR);
}
