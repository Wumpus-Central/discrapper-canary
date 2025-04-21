e.d(n, { Z: () => a });
var i = e(442837),
    l = e(314897),
    r = e(979651),
    d = e(258609);
function a() {
    return (0, i.e7)(
        [l.default, r.Z, d.Z],
        () => {
            var t;
            let n = l.default.getId(),
                e = d.Z.getRemoteSessionId();
            return null != (t = r.Z.getVoiceStateForSession(n, e)) ? t : void 0;
        },
        []
    );
}
