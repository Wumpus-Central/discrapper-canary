n.d(t, { Z: () => s });
var i = n(442837),
    l = n(592125),
    r = n(938475),
    o = n(853856),
    a = n(981631);
function s(e) {
    return (0, i.cj)(
        [r.ZP, l.Z, o.Z],
        () => {
            if (e !== a.I_8) return r.ZP.getVoiceStates(e);
            let t = o.Z.getFavoriteChannels(),
                n = {};
            for (let e in t) {
                let t = l.Z.getChannel(e);
                null != t && (n[e] = r.ZP.getVoiceStatesForChannel(t));
            }
            return n;
        },
        [e]
    );
}
