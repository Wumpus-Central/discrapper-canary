n.d(t, { e: () => i });
var r = n(388032);
function i(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: a, isStage: l, isStream: o } = e;
    if (t)
        if (i)
            if (o) return r.NW.string(r.t.N85DCg);
            else if (l) return r.NW.string(r.t.TJQcNj);
            else if (a) return r.NW.string(r.t.mJyBio);
            else return r.NW.string(r.t.lxTgPz);
        else if (o) return r.NW.string(r.t.Mnvc3N);
        else if (l) return r.NW.string(r.t.FdPNr6);
        else if (a) return r.NW.string(r.t.f4gmra);
        else return r.NW.string(r.t.H39rER);
    return n ? (i ? r.NW.string(r.t.UxmnHx) : r.NW.string(r.t.sigPER)) : i ? r.NW.string(r.t['oU/lsr']) : r.NW.string(r.t.BoQUFR);
}
