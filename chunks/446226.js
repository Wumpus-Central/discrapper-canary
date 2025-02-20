n.d(t, { Z: () => l });
var i = n(442837),
    r = n(314897),
    a = n(979651),
    d = n(258609);
function l() {
    return (0, i.e7)(
        [r.default, a.Z, d.Z],
        () => {
            var e;
            let t = r.default.getId(),
                n = d.Z.getRemoteSessionId();
            return null !== (e = a.Z.getVoiceStateForSession(t, n)) && void 0 !== e ? e : void 0;
        },
        []
    );
}
