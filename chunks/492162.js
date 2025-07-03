n.d(t, { Z: () => s });
var r = n(442837),
    i = n(592125),
    l = n(938475),
    o = n(853856),
    a = n(981631);
function s(e) {
    return (0, r.cj)(
        [l.ZP, i.Z, o.Z],
        () => {
            if (e !== a.I_8) return l.ZP.getVoiceStates(e);
            let t = o.Z.getFavoriteChannels(),
                n = {};
            for (let e in t) {
                let t = i.Z.getChannel(e);
                null != t && (n[e] = l.ZP.getVoiceStatesForChannel(t));
            }
            return n;
        },
        [e]
    );
}
