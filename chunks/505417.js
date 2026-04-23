n.d(t, { l: () => l });
var i = n(985018);
function l(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: l, isGuest: a, isStage: s, isStream: r } = e;
    if (t)
        if (l)
            if (r) return i.intl.string(i.t.N85DCl);
            else if (s) return i.intl.string(i.t.TJQcNv);
            else if (a) return i.intl.string(i.t.mJyBir);
            else return i.intl.string(i.t.lxTgP9);
        else if (r) return i.intl.string(i.t.Mnvc3C);
        else if (s) return i.intl.string(i.t.FdPNr5);
        else if (a) return i.intl.string(i.t.f4gmrf);
        else return i.intl.string(i.t.H39rEY);
    return n
        ? l
            ? i.intl.string(i.t.UxmnHx)
            : i.intl.string(i.t.sigPEf)
        : l
          ? i.intl.string(i.t["oU/lsl"])
          : i.intl.string(i.t.BoQUFf);
}
