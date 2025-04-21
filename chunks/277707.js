n.d(t, { e: () => i });
var r = n(388032);
function i(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: a, isStream: o } = e;
    if (t)
        if (i)
            if (o) return r.intl.string(r.t.N85DCg);
            else if (a) return r.intl.string(r.t.TJQcNj);
            else if (l) return r.intl.string(r.t.mJyBio);
            else return r.intl.string(r.t.lxTgPz);
        else if (o) return r.intl.string(r.t.Mnvc3N);
        else if (a) return r.intl.string(r.t.FdPNr6);
        else if (l) return r.intl.string(r.t.f4gmra);
        else return r.intl.string(r.t.H39rER);
    return n ? (i ? r.intl.string(r.t.UxmnHx) : r.intl.string(r.t.sigPER)) : i ? r.intl.string(r.t['oU/lsr']) : r.intl.string(r.t.BoQUFR);
}
