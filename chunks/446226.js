e.d(n, { Z: () => a });
var i = e(442837),
    l = e(314897),
    d = e(979651),
    r = e(258609);
function a() {
    return (0, i.e7)(
        [l.default, d.Z, r.Z],
        () => {
            var t;
            let n = l.default.getId(),
                e = r.Z.getRemoteSessionId();
            return null != (t = d.Z.getVoiceStateForSession(n, e)) ? t : void 0;
        },
        []
    );
}
