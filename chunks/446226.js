n.d(t, { Z: () => s });
var r = n(442837),
    i = n(314897),
    a = n(979651),
    o = n(258609);
function s() {
    return (0, r.e7)(
        [i.default, a.Z, o.Z],
        () => {
            var e;
            let t = i.default.getId(),
                n = o.Z.getRemoteSessionId();
            return null != (e = a.Z.getVoiceStateForSession(t, n)) ? e : void 0;
        },
        []
    );
}
