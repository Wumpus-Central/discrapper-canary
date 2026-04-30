n.d(t, { A: () => a });
var l = n(17928),
    i = n(495544),
    s = n(51760),
    r = n(977997);
function a(e) {
    return (0, l.cf)(
        [r.A, s.Ay, i.default],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    a = null != e ? t.getVoiceState(e.getGuildId(), l.getId()) : null;
                return { selfDeaf: n.isSelfDeaf(), deaf: a?.deaf ?? !1 };
            })(e, r.A, s.Ay, i.default),
        [e],
    );
}
