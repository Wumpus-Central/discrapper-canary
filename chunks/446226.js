n.d(e, { Z: () => d });
var i = n(442837),
    l = n(314897),
    r = n(979651),
    a = n(258609);
function d() {
    return (0, i.e7)(
        [l.default, r.Z, a.Z],
        () => {
            var t;
            let e = l.default.getId(),
                n = a.Z.getRemoteSessionId();
            return null !== (t = r.Z.getVoiceStateForSession(e, n)) && void 0 !== t ? t : void 0;
        },
        []
    );
}
